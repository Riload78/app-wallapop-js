import { viewController } from "./product/detail/detailController.js"
document.addEventListener('DOMContentLoaded', () => {
    const viewWrapper = document.querySelector('.view-wrapper')
    viewController(viewWrapper)

})