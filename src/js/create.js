import { createController } from "./product/create/createController.js";

document.addEventListener( 'DOMContentLoaded', () => {
    const createWrapper = document.querySelector('#create-form')

    createController(createWrapper)

})