import { ENV } from "../../config/env.js"

export const createProduct = async (dataForm) => {
    const url = `${ENV.apiProductBaseUrl}products`
    const token = localStorage.getItem('token')

    const body = {
        ... dataForm,
        image: dataForm.image.dataImg
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

export const getProduct = async (productId, token) => {
    console.log('entro getProduct');
    try {
        const url = `${ENV.apiProductBaseUrl}products/${productId}`;
        const options = {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }

        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)

        return  data
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const updateProduct = async (productId, token, dataform) => {
    try {
        const url = `${ENV.apiProductBaseUrl}products/${productId}`; 

        const body = {
            ...dataForm,
            image: dataForm.image.dataImg
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataform)
        }
        const response = await fetch(url, options)
        const data = await response.json();
        console.log("resData", data);
        return data;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}