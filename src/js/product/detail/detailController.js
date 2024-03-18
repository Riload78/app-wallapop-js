import { buildView, buildToolbar } from "./detailView.js";
import { getProduct, getUserData, deleteProduct } from "./detailModel.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";

export const viewController = async (viewWrapper) => {
    console.log(viewWrapper);
    // obtener los parametros de la url
    const url = window.location.search
    const queryParams = new URLSearchParams(url);
    const productId = queryParams.get('id')
    console.log(productId);

   
    // OBtener los datos del api del producto en cuestion
    // enviarlos a la vista
    try {
        dispatchEvent('loader-view', { isLoading: true }, viewWrapper)
        const product = await getProduct(productId)
        const viewContent = viewWrapper.querySelector('.view-content')
        viewContent.innerHTML = buildView(product)
        handlerToolbar(product, buildToolbar)       
    } catch (error) {
        console.log(error)
        dispatchEvent('notification-view',{
            type:'error',
            message:`No se pudo cargar eel producto: ${error}` 
        }, viewWrapper  )
    } finally{
        dispatchEvent('loader-view', { isLoading: false }, viewWrapper)
        
    }

    // chequear si e ususario esta loguado y es el propietario
    // del  producto mostrado, muestra botones de edicion o eliminacion

    
    async function handlerToolbar(product, buildToolbar) {
        const token = localStorage.getItem('token')
        const user = await getUserData(token)
        if (user.id === product.userId) {
            renderActionView(buildToolbar)
            const removeButton = viewWrapper.querySelector('#remove-button')
            removeButton.addEventListener("click", ()=> {
                console.log('btn-remove');
                removeProduct(product.id, token)
            })
        }
    }

    async function removeProduct (productId, token){
        const confirmation = window.confirm(`¿Estas seguro que deseas eliminar este producto?`)
        if (!confirmation) return;
        try {
           const data = await deleteProduct(productId, token)
            dispatchEvent('notification-view', {
                type: 'success',
                message: `${data.message}`
            }, viewWrapper)

            setTimeout( () => {
                document.location.href = "index.html"

            },3000)
           
       }catch (error) {
           dispatchEvent('notification-view',{
               type:'error',
               message:`Error al intentar eliminar el producto: ${error} `  
           }, viewWrapper  )
       }
    }
    
    
    function renderActionView(buildToolbar) {
        const toolbar = viewWrapper.querySelector('.toolbar')
        toolbar.innerHTML = buildToolbar()
        toolbar.classList.remove('hidden')
    }
} 
