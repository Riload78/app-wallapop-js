import { notificationControler } from "./notification/notification-controller.js";
import { productController } from "./product/list/productController.js";
import { loaderController } from "./loader/loader-controller.js";
import { sessionController } from "./session/session-controller.js";
import { paginationController } from "./pagination/paginationController.js";
import { searchController } from "./search/searchController.js";
import { currencyController } from "./currency/currencyController.js";


document.addEventListener("DOMContentLoaded", () => {
    
    const productListWrapper = document.querySelector('.list-wrapper')
    const notificationWrapper = document.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper')
    const sessionWapper = document.querySelector('.nav-wrapper')
    // const paginationWrapper = document.querySelector('#bottom-pagination')
    const topPaginationWrapper = document.querySelector('#top-pagination')
    const searchWrapper = document.querySelector('.search-wrapper')
    const currencyWrapper = document.querySelector('.currency-wrapper')
    
    const { showNotification } = notificationControler(notificationWrapper)
    const { loaderStatus } = loaderController(loaderWrapper)
   
    const { handlerProductNumber } = paginationController(topPaginationWrapper)
    
    productListWrapper.addEventListener('error-loading-products', (event) => {
        showNotification(event.detail.message.message, event.detail.type) 
    })
    
    productListWrapper.addEventListener('loader', (event) => {
        loaderStatus(event.detail.isLoading)
    })

    topPaginationWrapper.addEventListener('search-params', (event) => {
        handleUrlChange(event.detail.search, event.detail.category, event.detail.url)
    })


    searchWrapper.addEventListener('search-params', (event) => {
        handleUrlChange(event.detail.search, event.detail.category, event.detail.url)
        handlerProductNumber(event.detail.url)
    })

    searchWrapper.addEventListener('clean-filters', (event)=> {
        handleUrlChange(event.detail.search, event.detail.category, event.detail.url)
        handlerProductNumber(event.detail.url)
    })
    
    
    const { handleUrlChange } = productController(productListWrapper)
    searchController(searchWrapper)
    sessionController(sessionWapper)

    /**
     * Penging to develop de module
     */
    // currencyController(currencyWrapper)
    
})
