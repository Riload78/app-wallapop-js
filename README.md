

# CODEPOP

## Description:

Development of a web application similar to Wallapop using plain JavaScript and Tailwind. The application allows users to register, create, list, edit and delete products.


![Static Badge](https://img.shields.io/badge/HTML-94E33B)
![Static Badge](https://img.shields.io/badge/TAILDWIND-EDCE72)
![Static Badge](https://img.shields.io/badge/JAVASCRIPT-F679FC)
![Static Badge](https://img.shields.io/badge/MVC-BD415B)

## Features:

MVC pattern: The application follows the MVC pattern for better code organization.

JWT Authentication: The Sparrest library is used for user authentication using JWT tokens.

State management: The application manages different interface states: error, loading and success.

List of ads:

* Paginator: Allows efficient browsing of ads.
* Product search: Facilitates the search for specific products.
* Category filtering: Allows filtering of ads by predefined categories.
* Live update: Search and filter results are updated without the need to reload the page.
* Price formatting: Prices are displayed in the currency corresponding to the browser language.

Pending: Currency conversion using an external API.

### Ad detail
Product visualization. Editing and deletion options for the owner of the ad.

### Create an ad

Form for creating product ads.

### Login

Login form for registered users.

### Registration

Form for creating new users in the application.

### Technologies

Front-end: Plain JavaScript, Tailwind CSS

Back-end: JWT, Sparrest


## Deployment

Para desplegar este proyecto es necesario clonarse dos repositorio:
  * Frontend App - [CodePop](https://github.com/Riload78/nodepop)
  * Api - [Sparrest](https://github.com/kasappeal/sparrest.js/tree/main)

### FRONTEND

Para instalar las dependencias de Taildwind

```bash
npm install
```

Para modificar los css ejecutar
```bash
  npm run taildwind
```

## API Reference

### Sparrest.js

A [json-server](https://github.com/typicode/json-server) fork to enjoy developing frontend apps without a real backend, but with JWT auth.

## Setup

1. Create a `db.json` file with the entities of your DB
2. Run the server with `npm start` 
3. Register a user with `POST /auth/register { username: "luke", password: "skywalker" }`
4. Login to obtain your JWT token: `POST /auth/login { username: "luke", password: "skywalker" }`
5. Start using `json-server` routes in `/api/<json-server routes>`. You'll need to auth every request by adding an HTTP header: `Authorization: Bearer <JWT token>`


## Author

- [Ricardo Lopez - Riload78](https://github.com/Riload78)



