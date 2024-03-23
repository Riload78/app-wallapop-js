import { isSizeValidate, isPriceValidate } from "../../helper/validate.js";
import { createProduct, getProduct, updateProduct } from "./createModel.js";
import { dispatchEvent } from "../../helper/dispatchEvent.js";

export const createController = async (createForm, getSessionData) => {
    console.log(createForm);
    const url = window.location.search
    const queryParams = new URLSearchParams(url);
    const productId = queryParams.get('id')
    const user = await getSessionData()
    const token = user.token  

    createForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const dataForm = await getCreateData(createForm)
        handlerCreateSubmit(dataForm)
    })

    const getCreateData = async (createForm) => {
        const formdata = new FormData(createForm)
        console.log(formdata);
        const name = formdata.get('name')
        const description = formdata.get('description')
        const price = formdata.get('price')
        const state = formdata.get('state')
        const category = formdata.get('category')
        const image = formdata.get('image')
        let imageData = ""
        try {
            imageData = await readFileAsDataURL(image);
        } catch (error) {
            console.log(error);
            throw new Error(error)
        }
        return {
            name: name,
            description: description,
            price: price,
            state: state,
            category: category,
            image: imageData
        }
    }

    const readFileAsDataURL = async (file) => {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject(new Error('No se ha seleccionado ninguna imagen.'));
            }

            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };

    const sendProduct = async (dataForm) => {

        try {
            
            if (productId) {
                try {
                    dispatchEvent('loader-create-product', { isLoading: true }, createForm)
                    await updateProduct(productId, token, dataForm)
                    dispatchEvent('create-product-notification', {
                        type: 'success',
                        message: 'Producto actualizado correctamente'
                    }, createForm)
                } catch (error) {
                    dispatchEvent('create-product-notification', {
                        type: 'error',
                        message: `Se produjo un error al actualizar el producto. ${error}`
                    }, createForm)
                }finally {
                    dispatchEvent('loader-create-product', { isLoading: true }, createForm)
                    
                }
            } else {
                try {
                    dispatchEvent('loader-create-product', { isLoading: true }, createForm)
                    await createProduct(dataForm)
                    dispatchEvent('create-product-notification', {
                        type: 'success',
                        message: 'Producto creado correctamente'
                    }, createForm)
                    
                } catch (error) {
                    dispatchEvent('create-product-notification', {
                        type: 'error',
                        message: `Se produjo un error al crear el producto. ${error}`
                    }, createForm)
                } finally {
                    dispatchEvent('loader-create-product', { isLoading: true }, createForm)
                }
            }
            
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
            
        } catch (error) {
            console.log(error);
            dispatchEvent('create-product-notification', {
                message: error,
                type: 'error'
            }, createForm)
        } finally{
            dispatchEvent('loader-create-product', { isLoading: false }, createForm)
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

    const handlerCreateSubmit = (dataForm) => {
        let errors = []
        if (!isSizeValidate(dataForm.name, 40)) errors.push("Error en el nombre del producto. Demasiasdo largo")
        if (!isPriceValidate(dataForm.price)) errors.push("Ingrese un precio valido");
        if (!isSizeValidate(dataForm.description, 300)) errors.push("Error en el descripción del producto. Demasiasdo largo");

        if (errors.length > 0) {
            showErrors(errors);
        } else {
            sendProduct(dataForm);
        }
    }

    const handlerRenderEditForm = () => {
        const titleWrapper = createForm.querySelector('.login-title')
        const button = createForm.querySelector('button')
        const wrapperNote = document.createElement('note')
        wrapperNote.innerHTML = 'Para editar el anuncio se requiere adjuntar de nuevo la imagen'

        const inputFile = createForm.querySelector('.file-wrapper')
        inputFile.appendChild(wrapperNote)

        const title = titleWrapper.innerHTML = '<h1 class="h1">Editar anuncio</h1>'
        titleWrapper.innerHTML = title

        button.innerHTML = 'Actualizar'
        button.classList.add('edit')
    }


    if(productId){
        try {
            dispatchEvent('loader-create-product', { isLoading: true }, createForm)
            const productToUpdate = await getProduct(productId, token)
            handlerRenderEditForm()
            if (!productToUpdate && user.id !== productToUpdate.userId) {
                createForm['name'].value = ''
                createForm['description'].value = ''
                createForm['price'].value = ''
                createForm.reset()
            } else {
                createForm['name'].value = productToUpdate.name
                createForm['description'].value = productToUpdate.description
                createForm['price'].value = productToUpdate.price
                createForm['state'].value = productToUpdate.state
                createForm['category'].value = productToUpdate.category
            }     
        } catch (error) {
            dispatchEvent('create-product-notification', {
                type: 'error',
                message: `Se produjo un error al mostar la informacion del producto a editar. ${error}`
            }, createForm)
        }finally {
            dispatchEvent('loader-create-product', { isLoading: false }, createForm)
        }
    }
}