import { registerController } from './register/register-controller.js';
import { notificationControler } from './notification/notification-controller.js';
const registerForm = document.querySelector('#register-form')

const { showNotification } = notificationControler(registerForm)

registerForm.addEventListener( 'error-loading-register', (event) =>{
    showNotification(event.detail.message, event.detail.type)
})
registerController(registerForm)