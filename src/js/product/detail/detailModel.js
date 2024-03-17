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