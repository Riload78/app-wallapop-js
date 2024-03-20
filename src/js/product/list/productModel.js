import { ENV } from "../../config/env.js";
import { formatPrice } from "../../helper/formatPrice.js";


export async function getProducts(start, limit, search) {
    const url = `${ENV.apiProductBaseUrl}/products?_start=${start}&_limit=${limit}&name_like=${search}`;
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

const parseData = (data) => {
    return data.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: formatPrice(product.price),
        state: product.state,
        category: product.category,
        image: product.image,
        link: `${ENV.appBaseUrl}view.html?id=${product.id}`
    }))
}