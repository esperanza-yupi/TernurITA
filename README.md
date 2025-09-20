# ConectaAguas - El Ecosistema de Pagos Inclusivo para Aguascalientes

<p align="center">
 
</p>``

## ¿Cuál es el problema?

En Aguascalientes, el ecosistema de pagos digitales es fragmentado e ineficiente. Los ciudadanos se ven forzados a usar múltiples aplicaciones y métodos de pago para sus actividades diarias: efectivo para el transporte público, tarjetas de crédito o débito para supermercados, y transferencias bancarias para apoyar a emprendedores locales. Esta fragmentación genera fricción, impone altas comisiones a los pequeños comercios y excluye a una parte importante de la población que no está bancarizada. Como resultado, se frena el potencial de la economía digital local y se complica innecesariamente la vida de las personas.

## ¿Cuál es la solución?

Proponemos "ConectaAguas", una súper-app y ecosistema de pagos unificado, construido sobre el innovador Protocolo Interledger (ILP). ConectaAguas integra, en una sola billetera digital, todas las transacciones esenciales de la vida urbana: el pago del transporte público, las compras en comercios locales y tiendas departamentales, el pago de servicios recurrentes y una plataforma de marketplace para que los emprendedores de Aguascalientes ofrezcan sus productos. Gracias a Interledger, todas las transacciones son instantáneas, seguras y tienen un costo casi nulo.

## ¿Cuáles son los beneficios?

Los beneficios son transformadores y abarcan a toda la comunidad:

*   **Para el Usuario:** Máxima conveniencia al gestionar todo desde una sola aplicación, disfrutando de pagos rápidos mediante códigos QR y un programa de lealtad que recompensa su consumo local. Simplifica su vida financiera.
*   **Para el Comerciante y Emprendedor:** Liberación de las altas comisiones bancarias, permitiéndoles recibir su dinero al instante y acceder a una nueva vitrina digital para sus productos y servicios a miles de usuarios locales.
*   **Para el Ecosistema Urbano (Transporte, Gobierno):** Moderniza servicios críticos como el transporte público, reduciendo drásticamente los costos operativos del manejo de efectivo y generando datos valiosos para la planificación urbana, todo mientras se promueve la inclusión financiera.

## ¿Cuál es su arquitectura/stack simple?

Nuestra solución se basa en una arquitectura moderna de microservicios desplegada en la nube, diseñada para ser segura, escalable y robusta.

*   **Aplicación Móvil (Frontend):** Desarrollada con React Native para una experiencia de usuario fluida y consistente en Android y iOS.
*   **Plataforma Central (Backend):** Construida sobre Node.js, con una arquitectura de microservicios para eficiencia y resiliencia.
*   **Base de Datos:** Combinación de PostgreSQL para datos críticos y Redis como sistema de caché para operaciones instantáneas.
*   **Protocolo de Pagos:** El corazón es el Protocolo Interledger (ILP), actuando como motor universal de pagos para transacciones instantáneas y de costo extremadamente bajo.
*   **Infraestructura:** Desplegada en la nube utilizando tecnologías de contenedores como Docker para escalabilidad automática.

## ¿Qué funciones son indispensables?

Las funciones clave de ConectaAguas incluyen:

*   Billetera digital unificada.
*   Pagos mediante código QR.
*   Recarga de saldo.
*   Marketplace de productos y servicios locales.
*   Sistema de puntos de lealtad ("Puntos Aguas").
*   Pago de transporte público.
*   Pago de servicios recurrentes.

## ¿Quién será responsable de construir qué parte?

*   **Esperanza Herrera Marín** – Líder de Equipo y Desarrollador Full-Stack: Responsable de la visión del producto, la arquitectura general y el desarrollo de la plataforma.
*   **María Camila Silva Núñez** – Especialista en Backend e Interledger: Enfocada en la implementación de los microservicios, la lógica de negocio y la integración con el conector de Interledger.
*   **Luis Roberto Cervantes Guevara** – Diseñador de Experiencia de Usuario y Desarrollador Frontend: Encargado de diseñar una experiencia de usuario intuitiva y atractiva para la aplicación móvil, y su implementación.

## Open Payments

<p align="center">
  <img src="https://raw.githubusercontent.com/interledger/open-payments/main/docs/public/img/logo.svg" width="700" alt="Open Payments">
</p>

## What is Open Payments?

Open Payments is an open API standard that can be implemented by account servicing entities (e.g. banks, digital wallet providers, and mobile money providers) to facilitate interoperability in the setup and completion of payments for different use cases including:

- [Web Monetization](https://webmonetization.org)
- Tipping/Donations (low value/low friction)
- eCommerce checkout
- P2P transfers
- Subscriptions
- Invoice Payments

The Open Payments APIs are a collection of three sub-systems:

- A **wallet address server** which exposes public information about Open Payments-enabled accounts called "wallet addresses"
- A **resource server** which exposes APIs for performing functions against the underlying accounts
- A **authorisation server** which exposes APIs compliant with the [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) standard for getting grants to access the resource server APIs

The three Open Payments OpenAPI specifications are found in the [open-payments-specifications](https://github.com/interledger/open-payments-specifications) repository, while this repository hosts the documentation for the APIs, published on [openpayments.dev](https://openpayments.dev).

### Open Payments SDKs

The Open Payments SDKs provide developers with pre-built functions that simplify interactions with the Open Payments API.

Currently, we offer:
- [TypeScript/NodeJS SDK](https://github.com/interledger/open-payments-node/tree/main/packages/open-payments)
- [PHP SDK](https://github.com/interledger/open-payments-php)
- [Rust SDK](https://github.com/interledger/open-payments-rust)

with plans to expand to additional languages and frameworks in the future.

### New to Interledger?

Never heard of Interledger before? Or would you like to learn more? Here are some excellent places to start:

- [Interledger Website](https://interledger.org/)
- [Interledger Specification](https://interledger.org/developers/rfcs/interledger-protocol/)
- [Interledger Explainer Video](https://twitter.com/Interledger/status/1567916000074678272)
- [Open Payments](https://openpayments.dev/)
- [Web monetization](https://webmonetization.org/)

## Contributing

Please read the [contribution guidelines](.github/contributing.md) before submitting contributions. All contributions must adhere to our [code of conduct](.github/code_of_conduct.md).

## Local Development Environment

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm)

### Environment Setup

```sh
# install node from `./.nvmrc`
nvm install

# install pnpm
corepack enable

# if moving from yarn run
pnpm clean

# install dependencies
pnpm i



# ConectaAguas - El Ecosistema de Pagos Inclusivo para Aguascalientes

<p align="center">
 
</p>

## ¿Cuál es el problema?

En Aguascalientes, el ecosistema de pagos digitales es fragmentado e ineficiente. Los ciudadanos se ven forzados a usar múltiples aplicaciones y métodos de pago para sus actividades diarias: efectivo para el transporte público, tarjetas de crédito o débito para supermercados, y transferencias bancarias para apoyar a emprendedores locales. Esta fragmentación genera fricción, impone altas comisiones a los pequeños comercios y excluye a una parte importante de la población que no está bancarizada. Como resultado, se frena el potencial de la economía digital local y se complica innecesariamente la vida de las personas.

## ¿Cuál es la solución?

Proponemos "ConectaAguas", una súper-app y ecosistema de pagos unificado, construido sobre el innovador Protocolo Interledger (ILP). ConectaAguas integra, en una sola billetera digital, todas las transacciones esenciales de la vida urbana: el pago del transporte público, las compras en comercios locales y tiendas departamentales, el pago de servicios recurrentes y una plataforma de marketplace para que los emprendedores de Aguascalientes ofrezcan sus productos. Gracias a Interledger, todas las transacciones son instantáneas, seguras y tienen un costo casi nulo.

## ¿Cuáles son los beneficios?

Los beneficios son transformadores y abarcan a toda la comunidad:

*   **Para el Usuario:** Máxima conveniencia al gestionar todo desde una sola aplicación, disfrutando de pagos rápidos mediante códigos QR y un programa de lealtad que recompensa su consumo local. Simplifica su vida financiera.
*   **Para el Comerciante y Emprendedor:** Liberación de las altas comisiones bancarias, permitiéndoles recibir su dinero al instante y acceder a una nueva vitrina digital para sus productos y servicios a miles de usuarios locales.
*   **Para el Ecosistema Urbano (Transporte, Gobierno):** Moderniza servicios críticos como el transporte público, reduciendo drásticamente los costos operativos del manejo de efectivo y generando datos valiosos para la planificación urbana, todo mientras se promueve la inclusión financiera.

## ¿Cuál es su arquitectura/stack simple?

Nuestra solución se basa en una arquitectura moderna de microservicios desplegada en la nube, diseñada para ser segura, escalable y robusta.

*   **Aplicación Móvil (Frontend):** Desarrollada con React Native para una experiencia de usuario fluida y consistente en Android y iOS.
*   **Plataforma Central (Backend):** Construida sobre Node.js, con una arquitectura de microservicios para eficiencia y resiliencia.
*   **Base de Datos:** Combinación de PostgreSQL para datos críticos y Redis como sistema de caché para operaciones instantáneas.
*   **Protocolo de Pagos:** El corazón es el Protocolo Interledger (ILP), actuando como motor universal de pagos para transacciones instantáneas y de costo extremadamente bajo.
*   **Infraestructura:** Desplegada en la nube utilizando tecnologías de contenedores como Docker para escalabilidad automática.

## ¿Qué funciones son indispensables?

Las funciones clave de ConectaAguas incluyen:

*   Billetera digital unificada.
*   Pagos mediante código QR.
*   Recarga de saldo.
*   Marketplace de productos y servicios locales.
*   Sistema de puntos de lealtad ("Puntos Aguas").
*   Pago de transporte público.
*   Pago de servicios recurrentes.

## ¿Quién será responsable de construir qué parte?

*   **Esperanza Herrera Marín** – Líder de Equipo y Desarrollador Full-Stack: Responsable de la visión del producto, la arquitectura general y el desarrollo de la plataforma.
*   **María Camila Silva Núñez** – Especialista en Backend e Interledger: Enfocada en la implementación de los microservicios, la lógica de negocio y la integración con el conector de Interledger.
*   **Luis Roberto Cervantes Guevara** – Diseñador de Experiencia de Usuario y Desarrollador Frontend: Encargado de diseñar una experiencia de usuario intuitiva y atractiva para la aplicación móvil, y su implementación.

## Open Payments

<p align="center">
  <img src="https://raw.githubusercontent.com/interledger/open-payments/main/docs/public/img/logo.svg" width="700" alt="Open Payments">
</p>

## What is Open Payments?

Open Payments is an open API standard that can be implemented by account servicing entities (e.g. banks, digital wallet providers, and mobile money providers) to facilitate interoperability in the setup and completion of payments for different use cases including:

- [Web Monetization](https://webmonetization.org)
- Tipping/Donations (low value/low friction)
- eCommerce checkout
- P2P transfers
- Subscriptions
- Invoice Payments

The Open Payments APIs are a collection of three sub-systems:

- A **wallet address server** which exposes public information about Open Payments-enabled accounts called "wallet addresses"
- A **resource server** which exposes APIs for performing functions against the underlying accounts
- A **authorisation server** which exposes APIs compliant with the [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) standard for getting grants to access the resource server APIs

The three Open Payments OpenAPI specifications are found in the [open-payments-specifications](https://github.com/interledger/open-payments-specifications) repository, while this repository hosts the documentation for the APIs, published on [openpayments.dev](https://openpayments.dev).

### Open Payments SDKs

The Open Payments SDKs provide developers with pre-built functions that simplify interactions with the Open Payments API.

Currently, we offer:
- [TypeScript/NodeJS SDK](https://github.com/interledger/open-payments-node/tree/main/packages/open-payments)
- [PHP SDK](https://github.com/interledger/open-payments-php)
- [Rust SDK](https://github.com/interledger/open-payments-rust)

with plans to expand to additional languages and frameworks in the future.

### New to Interledger?

Never heard of Interledger before? Or would you like to learn more? Here are some excellent places to start:

- [Interledger Website](https://interledger.org/)
- [Interledger Specification](https://interledger.org/developers/rfcs/interledger-protocol/)
- [Interledger Explainer Video](https://twitter.com/Interledger/status/1567916000074678272)
- [Open Payments](https://openpayments.dev/)
- [Web monetization](https://webmonetization.org/)

## Contributing

Please read the [contribution guidelines](.github/contributing.md) before submitting contributions. All contributions must adhere to our [code of conduct](.github/code_of_conduct.md).

## Local Development Environment

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm)

### Environment Setup

```sh
# install node from `./.nvmrc`
nvm install

# install pnpm
corepack enable

# if moving from yarn run
pnpm clean

# install dependencies
pnpm i
