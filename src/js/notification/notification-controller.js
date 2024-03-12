import { builtNotification  } from '../notification/notification-view.js';
export function notificationControler(notificationWrapper) {

    function showNotification (message, type) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.innerHTML = builtNotification(message)
        notificationWrapper.appendChild(notification);
        
        // setTimeout(() => { 
        //     notification.remove()  
        // }, 3000);
    }

    return { showNotification }
}
