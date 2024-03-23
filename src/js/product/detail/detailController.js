import { buildView, buildToolbar } from "./detailView.js";
import { getProduct, deleteProduct} from "./detailModel.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";

export const viewController = async (viewWrapper, getSessionData) => {

    const url = window.location.search
    const queryParams = new URLSearchParams(url);
    const productId = queryParams.get('id')

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
            message:`No se pudo cargar el producto: ${error}` 
        }, viewWrapper  )
    } finally{
        dispatchEvent('loader-view', { isLoading: false }, viewWrapper)
    }

    
    async function handlerToolbar(product, buildToolbar) {
        // const token = localStorage.getItem('token')
        const user = await getSessionData()
        const token = user.token
        if (user.id === product.userId) {
            renderActionView(buildToolbar)
            const removeButton = viewWrapper.querySelector('#remove-button')
            const editButton = viewWrapper.querySelector('#edit-button')
            removeButton.addEventListener("click", ()=> {
                console.log('btn-remove');
                removeProduct(product.id, token)
            })

            editButton.addEventListener( "click" ,() =>{
                //redirect to create producto form   with the data of this one
                window.location.href= `/create.html?id=${product.id}`;
            })
        }
    }

    async function removeProduct (productId, token){
        const confirmation = window.confirm(`¿Estas seguro que deseas eliminar este producto?`)
        if (!confirmation) return;
        try {
            dispatchEvent('loader-view', { isLoading: true }, viewWrapper)
            const data = await deleteProduct(productId, token)
            viewWrapper.innerHTML = ''
            dispatchEvent('notification-view', {
                type: 'success',
                message: `${data.message}`
            }, viewWrapper)

            setTimeout( () => {
                document.location.href = "index.html"
            },1000)
           
       }catch (error) {
           dispatchEvent('notification-view',{
               type:'error',
               message:`Error al intentar eliminar el producto: ${error} `  
           }, viewWrapper  )
       } finally{
            dispatchEvent('loader-view', { isLoading: false }, viewWrapper)
       }
    }
    
    function renderActionView(buildToolbar) {
        const toolbar = viewWrapper.querySelector('.toolbar')
        toolbar.innerHTML = buildToolbar()
        toolbar.classList.remove('hidden')
    }
} 
