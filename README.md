
# CODEPOP

Desarrollo de una aplicación web similar a Wallapop realizado en vanilla javascript y Taildwind.
La aplicación puede registrar usuarios y crear, listar, editar y eliminar productos.

El proyecto sigue el patrón MVC y se hace uso de JWT que proporciona Sparrest para la autentificación de usuarios.

La aplicación gestiona todos los estados de interfaz: 
* error (cuando se produce un error al guardar la información del anuncio)
* carga (mientras se guarda la información del anuncio en el backend) 
* éxito (cuando se han guardado correctamente la información del anuncio)


## Deployment

Para desplegar este proyecto es necesario clonarse dos repositorio:
  * Frontend App - [CodePop](https://github.com/Riload78/nodepop)
  * Api - [Sparrest](https://github.com/kasappeal/sparrest.js/tree/main)

#### Api
# Sparrest.js

A [json-server](https://github.com/typicode/json-server) fork to enjoy developing frontend apps without a real backend, but with JWT auth.

## Setup

1. Create a `db.json` file with the entities of your DB
2. Run the server with `npm start` 
3. Register a user with `POST /auth/register { username: "luke", password: "skywalker" }`
4. Login to obtain your JWT token: `POST /auth/login { username: "luke", password: "skywalker" }`
5. Start using `json-server` routes in `/api/<json-server routes>`. You'll need to auth every request by adding an HTTP header: `Authorization: Bearer <JWT token>`

Instalación 

```bash
  npm run deploy
```


## API Reference

Para el desarrollo de la aplicación es necesario 

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

