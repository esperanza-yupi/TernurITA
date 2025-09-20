ConectaAguas - The Inclusive Payment Ecosystem for Aguascalientes
<p align="center">

</p>
<p align="center">

</p>

What is the problem?

In Aguascalientes, the digital payment ecosystem is fragmented and inefficient. Citizens are forced to use multiple applications and payment methods for their daily activities: cash for public transportation, credit or debit cards for supermarkets, and bank transfers to support local entrepreneurs. This fragmentation creates friction, imposes high commissions on small businesses, and excludes a significant portion of the unbanked population. As a result, the potential of the local digital economy is stifled, and people's lives are unnecessarily complicated.

What is the solution?

We propose "ConectaAguas," a unified super-app and payment ecosystem built on the innovative Interledger Protocol (ILP). ConectaAguas integrates, into a single digital wallet, all essential urban life transactions: public transport payments, purchases in local businesses and department stores, recurring service payments, and a marketplace platform for Aguascalientes entrepreneurs to offer their products. Thanks to Interledger, all transactions are instant, secure, and have almost no cost.

What are the benefits?

The benefits are transformative and encompass the entire community:

For the User: Maximum convenience by managing everything from a single application, enjoying fast payments via QR codes, and a loyalty program that rewards local consumption. It simplifies their financial life.

For Merchants and Entrepreneurs: Freedom from high bank commissions, allowing them to receive their money instantly and access a new digital storefront for their products and services to thousands of local users.

For the Urban Ecosystem (Transport, Government): Modernizes critical services like public transportation, drastically reducing the operational costs of cash handling and generating valuable data for urban planning, all while promoting financial inclusion.

What is its simple architecture/stack?

Our solution is based on a modern, cloud-deployed microservices architecture, designed to be secure, scalable, and robust.

Mobile Application (Frontend): Developed with React Native for a fluid and consistent user experience on Android and iOS.

Central Platform (Backend): Built on Node.js, with a microservices architecture for efficiency and resilience.

Database: A combination of PostgreSQL for critical data and Redis as a caching system for instant operations.

Payment Protocol: At its heart is the Interledger Protocol (ILP), acting as a universal payment engine for instant, extremely low-cost transactions.

Infrastructure: Deployed in the cloud using container technologies like Docker for automatic scalability.

What are the essential functions?

ConectaAguas's key functions include:

Unified digital wallet.

QR code payments.

Balance top-up.

Marketplace for local products and services.

Loyalty points system ("Puntos Aguas").

Public transport payment.

Recurring service payments.

Who will be responsible for building which part?

Esperanza Herrera Marín – Team Leader and Full-Stack Developer: Responsible for product vision, overall architecture, and platform development.

María Camila Silva Núñez – Backend and Interledger Specialist: Focused on implementing microservices, business logic, and integration with the Interledger connector.

Luis Roberto Cervantes Guevara – User Experience Designer and Frontend Developer: Responsible for designing an intuitive and attractive user experience for the mobile application and its implementation.

Open Payments
<p align="center">
<img src="https://raw.githubusercontent.com/interledger/open-payments/main/docs/public/img/logo.svg" width="700" alt="Open Payments">
</p>

What is Open Payments?

Open Payments is an open API standard that can be implemented by account servicing entities (e.g. banks, digital wallet providers, and mobile money providers) to facilitate interoperability in the setup and completion of payments for different use cases including:

Web Monetization

Tipping/Donations (low value/low friction)

eCommerce checkout

P2P transfers

Subscriptions

Invoice Payments

The Open Payments APIs are a collection of three sub-systems:

A wallet address server which exposes public information about Open Payments-enabled accounts called "wallet addresses"

A resource server which exposes APIs for performing functions against the underlying accounts

A authorisation server which exposes APIs compliant with the GNAP standard for getting grants to access the resource server APIs

The three Open Payments OpenAPI specifications are found in the open-payments-specifications repository, while this repository hosts the documentation for the APIs, published on openpayments.dev.

Open Payments SDKs

The Open Payments SDKs provide developers with pre-built functions that simplify interactions with the Open Payments API.

Currently, we offer:

TypeScript/NodeJS SDK

PHP SDK

Rust SDK

with plans to expand to additional languages and frameworks in the future.

New to Interledger?

Never heard of Interledger before? Or would you like to learn more? Here are some excellent places to start:

Interledger Website

Interledger Specification

Interledger Explainer Video

Open Payments

Web monetization

Contributing

Please read the contribution guidelines before submitting contributions. All contributions must adhere to our code of conduct.

Local Development Environment
Prerequisites

NVM

Environment Setup
code
Sh
download
content_copy
expand_less

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
