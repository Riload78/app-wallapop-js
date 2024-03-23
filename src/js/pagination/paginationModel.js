import { ENV } from "../config/env.js"

export const getProducts = async (search, category) => {
    const url = `${ENV.apiProductBaseUrl}products?&name_like=${search}&category_like=${category}`;
    try {
        const response = await fetch(url)
        const data = await response.json()
        const result = data.length
        return result

    } catch (error) {
        throw new Error(`Error en la petición de datos. ${error}`);
    }
}