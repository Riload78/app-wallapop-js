import { ENV } from '../config/env.js'

export async function createUser (email, password) {
    const url = `${ENV.apiUserBaseUrl}registers`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password: password })
    }
    const response = await fetch(url, options)

    console.log(response);
    if (!response.ok) {
        throw new Error(`Error al crear el usuario. ${response.statusText}`)
    }
    
}