import { ENV } from "../config/env.js"

export const getProducts = async () => {
    const url = `${ENV.apiProductBaseUrl}/products`;
    try {
        const response = await fetch(url)
        const data = await response.json()
        const result = data.length
        return result

    } catch (error) {
        console.log(error);
        throw new Error(`Error en la petición de datos. ${error}`);
    }
}