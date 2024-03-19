import { notificationControler } from "./notification/notification-controller.js";
import { productController } from "./product/list/productController.js";
import { loaderController } from "./loader/loader-controller.js";
import { sessionController } from "./session/session-controller.js";
import { paginationController } from "./pagination/paginationController.js";
document.addEventListener("DOMContentLoaded", () => {
    
    const productListWrapper = document.querySelector('.list-wrapper')
    const notificationWrapper = document.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper')
    const sessionWapper = document.querySelector('.nav-wrapper')
    const paginationWrapper = document.querySelector('.pagination-wrapper')

    
    
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
    paginationController(paginationWrapper)
    sessionController(sessionWapper)
})
