

# CODEPOP

## Description:

Development of a web application similar to Wallapop using plain JavaScript and Tailwind. The application allows users to register, create, list, edit and delete products.


![Static Badge](https://img.shields.io/badge/HTML-94E33B)
![Static Badge](https://img.shields.io/badge/TAILDWIND-EDCE72)
![Static Badge](https://img.shields.io/badge/JAVASCRIPT-F679FC)
![Static Badge](https://img.shields.io/badge/MVC-BD415B)
![Static Badge](https://img.shields.io/badge/JWT-BD415B)

## Features:

MVC pattern: The application follows the MVC pattern for better code organization.

JWT Authentication: The Sparrest library is used for user authentication using JWT tokens.

State management: The application manages different interface states: error, loading and success.

Features:

* Paginator: Allows efficient browsing of ads.
* Product search: Facilitates the search for specific products.
* Category filtering: Allows filtering of ads by predefined categories.
* Live update: Search and filter results are updated without the need to reload the page.
* Price formatting: Prices are displayed in the currency corresponding to the browser language.
* Image upload, base-64 encoding and database storage

Pending: Currency conversion using an external API.

### Ad detail
Product visualization. Editing and deletion options for the owner of the ad.

### Create an ad

Form for creating product ads. Product images can be uploaded as they are encoded in base64 and saved in the database

### Login

Login form for registered users.

### Registration

Form for creating new users in the application.

### Technologies

Front-end: Plain JavaScript, Tailwind CSS

Back-end: JWT, Sparrest


## Deployment

To deploy this project it is necessary to clone two repositories:
  * Frontend App - [CodePop](https://github.com/Riload78/nodepop)
  * Api - [Sparrest](https://github.com/kasappeal/sparrest.js/tree/main)

Steps to follow:
1. Copy the db.json file located in the root of the Wallapop project to the root of the Sparrest project
2. Initialize a development server for each of the projects (Wallapop and Sparrest).

    Wallapop app
    ```bash
    npx live-server
    ````
   Sparrest server
    ```bash
    npm install

    npm run start
    ```

Testing

Register two users. Each user created will have an associated series of Products established in the provided db.json. For example, user 1 will have the products associated with id 1, 2, 3. And user 2 will have the products associated with id 4, 5, 6.

### FRONTEND

To install Taildwind dependencies

```bash
npm install
```

To modify the CSS execute
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



