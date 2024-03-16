import { notificationControler } from "./notification/notification-controller.js";
import { productController } from "./product/productController.js";
import { loaderController } from "./loader/loader-controller.js";
import { sessionController } from "./session/session-controller.js";

const productListWrapper = document.querySelector('.list-wrapper')
const notificationWrapper = document.querySelector('.notification-wrapper')
const loaderWrapper = document.querySelector('.loader-wrapper')
const sessionWapper = document.querySelector('.nav-wrapper')


const { showNotification } = notificationControler(notificationWrapper)
const { loaderStatus } = loaderController(loaderWrapper)


productListWrapper.addEventListener('error-loading-products', (event) => {
    console.log(event);
    showNotification(event.detail.message.message, event.detail.type) 
})

productListWrapper.addEventListener('loader', (event) => {
    console.log('event-loader:', event);
    loaderStatus(event.detail.isLoading)
    
})

productController(productListWrapper)
sessionController(sessionWapper)
