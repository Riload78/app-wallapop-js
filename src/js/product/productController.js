import { getProducts } from "./productModel.js";
import { buildProduct, buildMessage } from "./productView.js";


export const productController = async (productsListWrapper) => {
    try {
        const productContent = renderProductContent(productsListWrapper);
        const products = await getProducts();
        products.length > 0 ? renderProduct(productContent, products) : renderMessage(productsListWrapper);        
        
    } catch (error) {
        console.log(error);
    }

}


function renderProductContent(productsListWrapper) {
    const productContent = document.createElement('div');
    productContent.classList.add('list-content');
    productsListWrapper.appendChild(productContent)
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