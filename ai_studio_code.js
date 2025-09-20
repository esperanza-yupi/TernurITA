// server.js (Este archivo actuará como tu backend)

import express from 'express';
import { createAuthenticatedClient, isFinalizedGrant } from "@interledger/open-payments";
import fs from "fs";
import cors from 'cors'; // Para permitir peticiones desde tu HTML

const app = express();
const port = 3001; // Puerto para tu backend (diferente del puerto de tu HTML si lo sirves con Live Server)

app.use(express.json());
app.use(cors()); // Permite que tu frontend acceda a esta API

let opClient = null; // Cliente de Open Payments para el backend

// Configura tus URLs y KeyId aquí
const CLIENT_WALLET_ADDRESS_URL = "https://cloud.rafiki.money/alice"; // URL de tu wallet cliente
const CLIENT_KEY_ID = "f5f2420f-d89f-43b0-bd50-ed60980ef550"; // KeyId de tu cliente
const PRIVATE_KEY_PATH = "private.key"; // Asegúrate de que este archivo exista

// Inicializa el cliente de Open Payments al iniciar el servidor
async function initializeOpenPaymentsClient() {
    try {
        const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, "utf8");
        opClient = await createAuthenticatedClient({
            walletAddressUrl: CLIENT_WALLET_ADDRESS_URL,
            privateKey: privateKey,
            keyId: CLIENT_KEY_ID,
        });
        console.log("Cliente Open Payments inicializado con éxito.");
    } catch (error) {
        console.error("Error al inicializar el cliente Open Payments:", error);
        opClient = null; // Asegura que el cliente sea nulo si falla la inicialización
    }
}

// Llama a la inicialización
initializeOpenPaymentsClient();

// Endpoint para crear un Incoming Payment
app.post('/create-incoming-payment', async (req, res) => {
    if (!opClient) {
        return res.status(500).json({ error: "Cliente Open Payments no inicializado." });
    }

    const { receivingWalletAddressUrl, amount, description } = req.body;

    try {
        const receivingWalletAddress = await opClient.walletAddress.get({
            url: receivingWalletAddressUrl
        });

        const incomingPaymentGrant = await opClient.grant.request(
            { url: receivingWalletAddress.authServer },
            {
                access_token: {
                    access: [{ type: "incoming-payment", actions: ["create", "read", "list"] }]
                }
            }
        );

        if (!isFinalizedGrant(incomingPaymentGrant)) {
            throw new Error("El pago entrante no se ha concedido correctamente");
        }

        const incomingPayment = await opClient.incomingPayment.create(
            {
                url: receivingWalletAddress.resourceServer,
                accessToken: incomingPaymentGrant.access_token.value,
            },
            {
                walletAddress: receivingWalletAddress.id,
                incomingAmount: {
                    assetCode: receivingWalletAddress.assetCode,
                    assetScale: receivingWalletAddress.assetScale,
                    value: String(amount * (10 ** receivingWalletAddress.assetScale)), // Ajustar el valor a la escala del activo
                },
                description: description
            }
        );
        res.json(incomingPayment);
    } catch (error) {
        console.error("Error al crear incoming payment:", error);
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para crear un Outgoing Payment
app.post('/create-outgoing-payment', async (req, res) => {
    if (!opClient) {
        return res.status(500).json({ error: "Cliente Open Payments no inicializado." });
    }

    const { sendingWalletAddressUrl, receivingPaymentId, amount, description } = req.body;

    try {
        const sendingWalletAddress = await opClient.walletAddress.get({
            url: sendingWalletAddressUrl
        });

        // 1. Obtener una concesión para una cotización
        const quoteGrant = await opClient.grant.request(
            { url: sendingWalletAddress.authServer },
            {
                access_token: {
                    access: [{ type: "quote", actions: ["create"] }]
                }
            }
        );

        if (!isFinalizedGrant(quoteGrant)) {
            throw new Error("La cotización no se ha realizado correctamente");
        }

        // 2. Obtener una cotización para el remitente
        const quote = await opClient.quote.create(
            {
                url: sendingWalletAddress.resourceServer, // El resourceServer del remitente para crear la cotización
                accessToken: quoteGrant.access_token.value,
            },
            {
                walletAddress: sendingWalletAddress.id,
                receiver: receivingPaymentId,
                method: "ilp"
            }
        );

        // 3. Obtener una concesión para un pago saliente
        const outgoingPaymentGrant = await opClient.grant.request(
            { url: sendingWalletAddress.authServer },
            {
                access_token: {
                    access: [
                        {
                            type: "outgoing-payment",
                            actions: ["create"],
                            limits: {
                                debitAmount: quote.debitAmount,
                            },
                            identifier: sendingWalletAddress.id,
                        }
                    ]
                },
                interact: {
                    start: ["redirect"],
                },
            }
        );

        // Aquí, en un entorno de producción, tendrías que redirigir al usuario al `outgoingPaymentGrant.interact.redirect`
        // para que autorice el pago. Para un prototipo simplificado, asumiremos la autorización.
        // Si no se usa 'redirect', se puede omitir esta parte, o simular la finalización.

        // Por simplicidad, en este prototipo asumimos que el grant se finaliza o no requiere interacción
        // Para una implementación real con redirect, necesitarías un callback que reciba el resultado.
        let finalizedOutgoingPaymentGrant = outgoingPaymentGrant;
        if (outgoingPaymentGrant.interact) {
             // En un entorno real, esto requeriría interacción del usuario.
             // Para la demo, lo simulamos o lo manejamos asumiendo que el grant directo es suficiente.
             // Si el grant *siempre* requiere redirect, esta API solo puede devolver la URL de redirect.
             // Aquí estamos asumiendo que `create` es directo o que ya se ha gestionado la interacción.
             // Para tu caso `index.js`, que usa Readline, la interacción es manual.
             // En una API, esto sería una respuesta al cliente con la URL de redirección.
             // Para esta demo, vamos a simplificar y suponer que se obtiene un token directamente o se puede "continuar" sin intervención inmediata.
             if (outgoingPaymentGrant.continue) {
                finalizedOutgoingPaymentGrant = await opClient.grant.continue({
                    url: outgoingPaymentGrant.continue.uri,
                    accessToken: outgoingPaymentGrant.continue.access_token.value,
                });
                if(!isFinalizedGrant(finalizedOutgoingPaymentGrant)) {
                    throw new Error("Se espera la Finalizacion del grant de pago saliente");
                }
             }
        }


        // 4. Crear el pago saliente
        const outgoingPayment = await opClient.outgoingPayment.create(
            {
                url: sendingWalletAddress.resourceServer,
                accessToken: finalizedOutgoingPaymentGrant.access_token.value,
            },
            {
                walletAddress: sendingWalletAddress.id,
                quoteId: quote.id,
            }
        );
        res.json(outgoingPayment);
    } catch (error) {
        console.error("Error al crear outgoing payment:", error);
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Backend de ConectaAguas escuchando en http://localhost:${port}`);
    console.log("Asegúrate de tener un archivo 'private.key' y de haber configurado CLIENT_WALLET_ADDRESS_URL y CLIENT_KEY_ID.");
});