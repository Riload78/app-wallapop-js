import { ENV } from "../config/env.js"

export const loginUser = async (email, password) => {
    const url = `${ENV.apiUserBaseUrl}login`

    const body = {
        username: email,
        password: password
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        if (!response.ok) throw new Error(`Usuario o contraseña incorrectos. ${response.statusText}`)
        return data.accessToken;
        
    } catch (error) {
        throw new Error('Servicio no disponible en este momento. Inténtelo más tarde')
    }
}