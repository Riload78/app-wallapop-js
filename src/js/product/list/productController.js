import { getProducts } from "./productModel.js";
import { buildProduct, buildMessage } from "./productView.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";


export const productController =  (productsListWrapper) => {
    const url = window.location.href;
    const queryParams = new URLSearchParams(url);
    const start = queryParams.has("start") ? parseInt(queryParams.get('start')) : 0
    const limit = queryParams.has("limit") ? parseInt(queryParams.get('limit')) : 8
    const search = queryParams.has("name_like") ? queryParams.get("name_like") : ""
    const category = queryParams.has("category") ? queryParams.get("category") : ''
    
    // Agregar un event listener para el evento popstate
    // productsListWrapper.addEventListener('search-params', handleUrlChange);
    
    // Llama a handleUrlChange al cargar la página para manejar la URL inicial
    
    
    
    // const url = window.location.search
    

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

    const handlerProduct = async (start, limit, search, category) => {

        try {
            const productContent = renderProductContent(productsListWrapper)
            dispatchEvent('loader', {isLoading: true}, productsListWrapper)
            const products = await getProducts(start, limit , search, category)
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



    const handleUrlChange = (url) => {
    
        const queryParams = new URLSearchParams(url);

        const start = queryParams.has("start") ? parseInt(queryParams.get('start')) : 0
        const limit = queryParams.has("limit") ? parseInt(queryParams.get('limit')) : 8
        const search = queryParams.has("name_like") ? queryParams.get("name_like") : ''
        const category =  queryParams.has("category_like") ? queryParams.get("category_like") : ''
        productsListWrapper.innerHTML = ''
        handlerProduct(start, limit, search, category)
    }

    handlerProduct(start, limit, search, category)
    

    return { handleUrlChange }

    

   
}

