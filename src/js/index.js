import { notificationControler } from "./notification/notification-controller.js";
import { productController } from "./product/productController.js";

const productListWrapper = document.querySelector('.list-wrapper')
const notificationWrapper = document.querySelector('.notification-wrapper')


const { showNotification }= notificationControler(notificationWrapper)
productController(productListWrapper)


productListWrapper.addEventListener('error-loading-products', (event) => {
    console.log(event);
   showNotification(event.detail.message.message, event.detail.type) 
})
