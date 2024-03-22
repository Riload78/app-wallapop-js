import { loaderController } from "./loader/loader-controller.js";
import { notificationControler } from "./notification/notification-controller.js";
import { createController } from "./product/create/createController.js";
import { sessionController } from "./session/session-controller.js"


document.addEventListener( 'DOMContentLoaded', () => {

   

    const createFrom = document.querySelector('#create-form')
    const notificationWrapper = createFrom.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper')
    const sessionWrapper = document.querySelector('.nav-wrapper')
    console.log('lodaderWrapper', loaderWrapper);
    const { loaderStatus } = loaderController(loaderWrapper)
    const { getSessionData, getSession } = sessionController(sessionWrapper)
    
    if (!getSession()) {
        window.location.href = 'index.html'
    }
    
    
    
    createFrom.addEventListener('create-product-notification', (event) => {
        console.log('create-product-notification', event);
        showNotification(event.detail.message, event.detail.type)
    })
    
    createFrom.addEventListener('loader-create-product', (event) => {
        console.log('loader-event' ,event)
        loaderStatus(event.detail.isLoading)
    })
    
    const { showNotification } = notificationControler(notificationWrapper)
    createController(createFrom, getSessionData)

})