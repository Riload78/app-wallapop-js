import { registerController } from './register/register-controller.js';
import { notificationControler } from './notification/notification-controller.js';
const registerForm = document.querySelector('#register-form')
const notificationWrapper = registerForm.querySelector('.notification-wrapper')

const { showNotification } = notificationControler(notificationWrapper)

registerForm.addEventListener('register-notifcation', (event) =>{
    console.log(event);
    showNotification(event.detail.message, event.detail.type)
})
registerController(registerForm)