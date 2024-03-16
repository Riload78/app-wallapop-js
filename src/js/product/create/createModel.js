import { ENV } from "../../config/env.js"

export const createProduct = async (dataForm) => {
    const url = `${ENV.apiProductBaseUrl}products`
    const token = localStorage.getItem('token')

    const body = {
        ... dataForm,
        image: dataForm.image.name
    }

    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }
    try {
        const response = await fetch(url, options)
        if (!response.ok) throw new Error(`Error al crear el producto: ${response.status}`);
        
    } catch (error) {
        throw new Error(error);
    }

}