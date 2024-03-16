import { notificationControler } from "./notification/notification-controller.js";
import { createController } from "./product/create/createController.js";


document.addEventListener( 'DOMContentLoaded', () => {
    const createFrom = document.querySelector('#create-form')
    const notificationWrapper = createFrom.querySelector('.notification-wrapper')

    const { showNotification } = notificationControler(notificationWrapper)

    createFrom.addEventListener('create-product-validation', (event) => {
        console.log(event);
        showNotification(event.detail.message, event.detail.type)
    })



    createController(createFrom)

})