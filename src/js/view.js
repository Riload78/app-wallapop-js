import { viewController } from "./product/detail/detailController.js"
import { sessionController } from "./session/session-controller.js"
import { notificationControler } from "./notification/notification-controller.js"
import { loaderController } from "./loader/loader-controller.js"


document.addEventListener('DOMContentLoaded', () => {
    const viewWrapper = document.querySelector('.view-wrapper')
    const sessionWrapper = document.querySelector('.nav-wrapper')
    const notificationWrapper = document.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper')

    const { showNotification } = notificationControler(notificationWrapper)
    const {loaderStatus} = loaderController(loaderWrapper)
    const { getSessionData } = sessionController(sessionWrapper)
    
    viewWrapper.addEventListener('loader-view', (event) => {
        loaderStatus(event.detail.isLoading)
    })
    
    viewWrapper.addEventListener('notification-view', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })
    
    viewController(viewWrapper, getSessionData)

})