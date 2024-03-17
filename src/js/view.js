import { viewController } from "./product/detail/detailController.js"
import { sessionController } from "./session/session-controller.js"
import { notificationControler } from "./notification/notification-controller.js"
import { loaderController } from "./loader/loader-controller.js"


document.addEventListener('DOMContentLoaded', () => {
    const viewWrapper = document.querySelector('.view-wrapper')
    const sessionWrapper = document.querySelector('.nav-wrapper')
    const notificationWrapper = document.querySelector('.notification-wrapper')
    const loaderWrapper = document.querySelector('.loader-wrapper')

    const {showNotification} = notificationControler(notificationWrapper)
    loaderController(loaderWrapper)
    sessionController(sessionWrapper)

    // addevenlistener


    viewController(viewWrapper)


})