import { ENV } from "../../config/env.js";
import { formatPrice } from "../../helper/formatPrice.js";

const url = `${ENV.apiProductBaseUrl}/products`;

export async function getProducts() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const result = parseData(data)
        return result

    } catch (error) {
        console.log(error);
        throw new Error(`Error en la petición de datos. ${error}`);
    }
}

function parseData(data) {
    return data.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: formatPrice(product.price),
        state: product.state,
        category: product.category,
        image: ENV.mediaUrl + product.image,
        link: `${ENV.appBaseUrl}view.html?id=${product.id}`
    }))
}