import { ENV } from "../../config/env.js"
import { formatPrice } from "../../helper/formatPrice.js"

export const getProduct = async (productId) => {
    const url = `${ENV.apiProductBaseUrl}products?id=${productId}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        const result = parseData(data)
        console.log(result)
        return result[0]
        
    } catch (error) {
        throw new Error(error)
    }

}

// export const getUserData = async (token) => {
//     try {
//         const url = `${ENV.apiUserBaseUrl}me/`
//         const options = {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//         console.log(url, options);
//         const response = await fetch(url, options);
//         const data = await response.json()
//         console.log('getUserData', data);
//         const result = parseUser(data)

        
//         return result
        
//     } catch (error) {
//         console.log(error);
//         throw new Error(error)
//     }
// }

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
    return data.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: formatPrice(product.price),
        state: product.state,
        category: product.category,
        image: ENV.mediaUrl + product.image,
        link: `${ENV.appBaseUrl}view.html?id=${product.id}`,
        userId: product.userId,
        updatedAt: product.updatedAt
    }))
}

// const parseUser = (user) => {
//     return {
//         id: user.id
//     }
// }