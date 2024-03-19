import { getProducts } from "./productModel.js";
import { buildProduct, buildMessage } from "./productView.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";


export const productController = async (productsListWrapper) => {
    try {
        const productContent = renderProductContent(productsListWrapper);
        dispatchEvent('loader', {isLoading: true}, productsListWrapper)
        const products = await getProducts();
        if (products.length > 0) {
            renderProduct(productContent, products);
            productsListWrapper.appendChild(productContent);
        } else {
            renderMessage(productsListWrapper);        
        } 
    } catch (error) {
        dispatchEvent('error-loading-products',{
            message: error,
            type: 'error'
        }, productsListWrapper)
        console.log(error);
    } finally{
        dispatchEvent('loader', { isloading: false }, productsListWrapper)
    }

    function renderProductContent(productsListWrapper) {
        const productContent = document.createElement('div');
        productContent.classList.add('list-content');
        const renderContent = productsListWrapper.appendChild(productContent)
        return renderContent
    }
    
    function renderProduct(productContent, products) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('item')
            productItem.innerHTML = buildProduct(product);
            productContent.appendChild(productItem)
        });
    }
    
    function renderMessage (productsListWrapper) {
        const message = `No hay productos disponibles en esta tienda.`;
        const messageDiv = document.createElement('div');
        messageDiv.classList = 'message message-info';
        messageDiv.textContent = message;
        productsListWrapper.innerHTML = buildMessage(message);
    }
}

