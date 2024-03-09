import { getProducts } from "./productModel.js";
import { buildProduct, buildMessage } from "./productView.js";


export const productController = async (productsListWrapper) => {
    try {
        const products = await getProducts();
        products.length > 0 ? renderProduct(productsListWrapper, products) : renderMessage(productsListWrapper);        
        
        
    } catch (error) {
        console.log(error);
    }

}

function renderProduct (productsListWrapper, products) {
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('item')
        productItem.innerHTML = buildProduct(product);
        productsListWrapper.appendChild(productItem)
    });
}

function renderMessage (productsListWrapper) {
    const message = `No hay productos disponibles en esta tienda.`;
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message message-info';
    messageDiv.textContent = message;

    productsListWrapper.innerHTML = buildMessage(messageDiv);

}