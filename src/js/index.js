import { notificationControler } from "./notification/notification-controller.js";
import { productController } from "./product/list/productController.js";
import { loaderController } from "./loader/loader-controller.js";
import { sessionController } from "./session/session-controller.js";
import { paginationController } from "./pagination/paginationController.js";
import { searchController } from "./search/searchController.js";
document.addEventListener("DOMContentLoaded", () => {
    
    const productListWrapper = document.querySelector('.list-wrapper')
    const notificationWrapper = document.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper')
    const sessionWapper = document.querySelector('.nav-wrapper')
    // const paginationWrapper = document.querySelector('#bottom-pagination')
    const topPaginationWrapper = document.querySelector('#top-pagination')
    const searchWrapper = document.querySelector('.search-wrapper')

    
    
    const { showNotification } = notificationControler(notificationWrapper)
    const { loaderStatus } = loaderController(loaderWrapper)
    const { handleUrlChange } = productController(productListWrapper)
    const { handlerProductNumber } = paginationController(topPaginationWrapper)
    
    
    
    productListWrapper.addEventListener('error-loading-products', (event) => {
        // console.log(event);
        showNotification(event.detail.message.message, event.detail.type) 
    })
    
    productListWrapper.addEventListener('loader', (event) => {
        // console.log('event-loader:', event);
        loaderStatus(event.detail.isLoading)
        
    })

    productListWrapper.addEventListener('products-number', (event) => {
        console.log(event.detail.searchFilter, event.detail.categoryFilter);
       // handlerProductNumber(event.detail.searchFilter, event.detail.categoryFilter)
    })
    
    searchWrapper.addEventListener('search-params', (event) => {
        console.log('search', event);
        console.log(event.detail.url);
        handleUrlChange(event.detail.url)
        handlerProductNumber(event.detail.url)
    })




    
    //paginationController(topPaginationWrapper)
    
    searchController(searchWrapper)
    //productController(productListWrapper)
    //paginationController(paginationWrapper)
    sessionController(sessionWapper)
    
})
