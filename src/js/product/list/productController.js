import { getProducts } from "./productModel.js";
import { buildProduct, buildMessage } from "./productView.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";


export const productController = async (productsListWrapper) => {

    const renderProductContent = (productsListWrapper) => {
        const productContent = document.createElement('div')
        productContent.classList.add('list-content')
        const renderContent = productsListWrapper.appendChild(productContent)
        return renderContent
    }

    const renderProduct = (productContent, products) => {
        products.forEach(product => {
            const productItem = document.createElement('div')
            productItem.classList.add('item')
            productItem.innerHTML = buildProduct(product)
            productContent.appendChild(productItem)
        });
    }
    // Quiza haya quye normalizar esto forma de mostrar el mensaje
    const renderMessage = (productsListWrapper) => {
        const message = `No hay productos disponibles en esta tienda.`
        const messageDiv = document.createElement('div')
        messageDiv.classList = 'message message-info'
        messageDiv.textContent = message
        productsListWrapper.innerHTML = buildMessage(message)
    }

    try {
        
        const productContent = renderProductContent(productsListWrapper)
        dispatchEvent('loader', {isLoading: true}, productsListWrapper)
        const products = await getProducts(0, 8)
        if (products.length > 0) {
            renderProduct(productContent, products)
            productsListWrapper.appendChild(productContent)
        } else {
            renderMessage(productsListWrapper)      
        } 
    } catch (error) {
        dispatchEvent('error-loading-products',{
            message: error,
            type: 'error'
        }, productsListWrapper)
    } finally{
        dispatchEvent('loader', { isloading: false }, productsListWrapper)
    }

   
}

