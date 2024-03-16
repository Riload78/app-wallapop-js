import { loaderController } from "./loader/loader-controller.js";
import { notificationControler } from "./notification/notification-controller.js";
import { createController } from "./product/create/createController.js";


document.addEventListener( 'DOMContentLoaded', () => {
    const createFrom = document.querySelector('#create-form')
    const notificationWrapper = createFrom.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper')
    console.log('lodaderWrapper', loaderWrapper);
    const { loaderStatus } = loaderController(loaderWrapper)
    const { showNotification } = notificationControler(notificationWrapper)
    
    createFrom.addEventListener('create-product-notification', (event) => {
        console.log('create-product-notification', event);
        showNotification(event.detail.message, event.detail.type)
    })
    
    createFrom.addEventListener('loader', (event) => {
        console.log('loader-event' ,event)
        loaderStatus(event.detail.isLoading)
    })
    
    createController(createFrom)

})