import { getProducts } from "./productModel.js";
import { buildProduct, buildMessage, buildSkeleton } from "./productView.js";


export const productController = async (productsListWrapper) => {

    try {
        const productContent = renderProductContent(productsListWrapper);
        const products = await getProducts();
        if (products.length > 0) {
            renderSkeleton(productsListWrapper, products);
            renderProduct(productContent, products);
            // Asegúrate de agregar los elementos antes de despachar el evento
            productsListWrapper.appendChild(productContent);
            
        } else {
            renderMessage(productsListWrapper);        
} 
        
    } catch (error) {
        console.log(error);
    }

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

function renderSkeleton(productContent, products) {
    const skeletonContent = document.createElement('div');
    skeletonContent.classList.add('skeleton-content', 'hidden')
    productContent.appendChild(skeletonContent)
    let skeletons = ''
    products.forEach(product => {
        skeletons +=  buildSkeleton()
    });
    skeletonContent.innerHTML = skeletons
}