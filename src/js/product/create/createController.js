import { isSizeValidate, isPriceValidate } from "../../helper/validate.js";
import { createProduct } from "./createModel.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";

export const createController = (createForm) => {
    console.log(createForm);
    //ad event
    createForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const dataForm = getCreateData(createForm)
        handlerCreateSubmit(dataForm)
    })

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
            await createProduct(dataForm)
            
        } catch (error) {
            throw new Error(error)
        }

    }

    const showErrors = (errors) => {
        errors.forEach(error => {
            dispatchEvent('create-product-validation', {
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