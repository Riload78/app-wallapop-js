import { ENV } from '../config/env.js'

export async function createUser (email, password) {
    try {
        const url = `${ENV.apiUserBaseUrl}register`
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username: email, password: password })
        }
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`Error al crear el usuario. ${response.statusText}`)
        }
        
    } catch (error) {
        throw new Error(`Se ha producido un error. ${error}`)
    }

}