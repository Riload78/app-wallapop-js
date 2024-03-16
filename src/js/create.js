import { createController } from "./product/create/createController.js";

document.addEventListener( 'DOMContentLoaded', () => {
    const createFrom = document.querySelector('#create-form')

    createController(createFrom)

})