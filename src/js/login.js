import { loginController } from './login/login-contoller.js';
import { notificationControler } from './notification/notification-controller.js';


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#form-login');
    const loginNotification = loginForm.querySelector('.notification-wrapper')
    const { showNotification } = notificationControler(loginNotification); 
    
    loginForm.addEventListener('login-validation', (event) => {
        console.log('event login', event);
        showNotification(event.detail.message, event.detail.type);
    })

    loginForm.addEventListener('login-notification', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })

    loginController(loginForm);

})