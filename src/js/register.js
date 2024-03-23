import { registerController } from './register/register-controller.js';
import { notificationControler } from './notification/notification-controller.js';
import { loaderController } from './loader/loader-controller.js';

// añadir documentloadede para asegurar la carga correcta del Dom
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register-form')
    const notificationWrapper = registerForm.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    const { showNotification } = notificationControler(notificationWrapper)
    const { loaderStatus } = loaderController(loaderWrapper)
    
    registerForm.addEventListener('register-notifcation', (event) =>{
        showNotification(event.detail.message, event.detail.type)
    })
    
    registerForm.addEventListener('loader', (event) => {
        loaderStatus(event.detail.isLoading)
    })
    registerController(registerForm)
});
