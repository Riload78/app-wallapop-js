import { ENV } from "../../config/env.js"
import { formatPrice } from "../../helper/formatPrice.js"

export const getProduct = async (productId) => {
    const url = `${ENV.apiProductBaseUrl}products/${productId}`
    try {
        const response = await fetch(url)
        if(!response.ok) throw new Error(error)
        const data = await response.json()
        const result = parseData(data)
        return result
        
    } catch (error) {
        throw new Error(error)
    }

}

export const deleteProduct = async (productId, token) => {
    try {
        const url = `${ENV.apiProductBaseUrl}products/${productId}`
        console.log(url);
        const options = {
            method: "DELETE",  
            headers:{
              'Authorization': `Bearer ${token}` 
            }
        }
        const response = await fetch(url, options)
        console.log(response);
        if(!response.ok){
            throw new Error(error)
        }
        const data = {
            message:  "Successfully deleted product"
        }
        return data


        
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}


const parseData = (data) => {
    return {
        id: data.id,
        name: data.name,
        description: data.description,
        price: formatPrice(data.price),
        state: data.state,
        category: data.category,
        image: data.image,
        link: `${ENV.appBaseUrl}view.html?id=${data.id}`,
        userId: data.userId,
        updatedAt: data.updatedAt
    }
}
