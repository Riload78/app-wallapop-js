import { isSizeValidate, isPriceValidate } from "../../helper/validate.js";
import { createProduct, getProduct, updateProduct } from "./createModel.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";

export const createController = async (createForm, getSessionData) => {

    const url = window.location.search
    const queryParams = new URLSearchParams(url);
    const productId = queryParams.get('id')
    //const token =  localStorage.getItem('token');
    console.log(productId);
    console.log(createForm);
    console.log(productId);
    const user = await getSessionData()
    const token = user.token  

    //ad event
    createForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const dataForm = getCreateData(createForm)
        handlerCreateSubmit(dataForm)
    })

    if(productId){

        try {
            const productToUpdate = await getProduct(productId, token)
            // pintar los datos en los campos  del formulario
            // await setCreateData(createForm, productToUpdate)
            console.log('product to update', productToUpdate);
            console.log('DesdeCreatecontroller', user)
            if (!productToUpdate && user.id !== productToUpdate.userId) {
                // Si no hay un producto a actualizar se limpian los campos del formulario de creación
                createForm['name'].value = ''
                createForm['description'].value = ''
                createForm['price'].value = ''
                createForm.reset()
            } else {
                // Se rellenan los campos del formulario de creación con la información del producto que se va a editar
                // Se rellenan los campos del formulario de creación con la información del producto que se va a actualizar
                // En caso contrario se rellenan con la información del producto que se      va a editar         
                createForm['name'].value = productToUpdate.name
                createForm['description'].value = productToUpdate.description
                createForm['price'].value = productToUpdate.price
                createForm['state'].value = productToUpdate.state
                createForm['category'].value = productToUpdate.category
                
               
            }     
        } catch (error) {
            console.log(error)
            throw new Error(error)
            
        }
    }


    const handlerCreateSubmit = (dataForm) => {
        let errors = []
        if (!isSizeValidate(dataForm.name, 20)) errors.push("Error en el nombre del producto. Demasiasdo largo")
        if (!isPriceValidate(dataForm.price)) errors.push("Ingrese un precio valido");
        if (!isSizeValidate(dataForm.description, 300)) errors.push("Error en el descripción del producto. Demasiasdo largo");
        
        if (errors.length > 0) {
            showErrors(errors);
        } else {
            sendProduct(dataForm);
        }
    }

    const sendProduct = async (dataForm) => {

        try {
            dispatchEvent('loader-create-product', { isLoading: true }, createForm)
            if (productId){
                await updateProduct(productId, token, dataForm)
            } else {

                await createProduct(dataForm)
            }
            dispatchEvent('loader-create-product', { isLoading: false }, createForm)
            dispatchEvent('create-product-notification', {
                message: 'Producto creado correctamente',
                type: 'success'
            }, createForm)

            setTimeout(() => {
                window.location.href = '/'
            }, 2500)

        } catch (error) {
            console.log(error);
            dispatchEvent('create-product-notification', {
                message: error,
                type: 'error'
            }, createForm)
        }

    }

    const showErrors = (errors) => {
        errors.forEach(error => {
            dispatchEvent('create-product-notification', {
                message: error,
                type: 'error'
            }, createForm)
        })
    }
    
    const getCreateData = (createForm) => {
        const formdata = new FormData(createForm)
        console.log(formdata);
        const name = formdata.get('name')
        const descripción = formdata.get('description')
        const price = formdata.get('price')
        const state = formdata.get('state')
        const category = formdata.get('category')
        const image = formdata.get('image')


        return {
            name: name,
            description: descripción,
            price: price,
            state: state,
            category: category,
            image: {
                name: image.name,
                type: image.type,

            }
        }
    }

    const setCreateData = async (createForm, productToUpdate) => {
       
        return   
    }

    

    



    // Tiene que recoger los datos de formulario y enviarlos a la api para registrarlos
        // 1.  Recoger los datos del formulario
            // - Uso de eventos en js: onsubmit
            // FormData 

        
        // 2. Enviar los datos a la API
            //- Usaremos fetch, es una forma moderna de hacer llamadas http desde el navegador
                // Metodos de fetch(): post
                //  Headers() : permite indicar el tipo
                // application/json
                // body -> datos del formulario
            

    
}