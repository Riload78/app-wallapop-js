import { loginController } from './login/login-contoller.js';
import { notificationControler } from './notification/notification-controller.js';
import { loaderController } from './loader/loader-controller.js';


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#form-login');
    const loginNotification = loginForm.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper');


    const { showNotification } = notificationControler(loginNotification); 
    const { loaderStatus } = loaderController(loaderWrapper)
    
    loginForm.addEventListener('login-validation', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
    
    loginForm.addEventListener('login-notification', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
    
    loginForm.addEventListener('loader', (event) => {
        loaderStatus(event.detail.isLoading)
    })
    
    loginController(loginForm);

})