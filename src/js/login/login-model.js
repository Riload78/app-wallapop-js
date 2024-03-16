import { ENV } from "../config/env.js"

export const loginUser = async (email, password) => {
    const url = `${ENV.apiUserBaseUrl}login`
    console.log(url);

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
        console.log(response)
        const data = await response.json()
        if (!response.ok) throw new Error(data.message || 'HTTP error!')
        return data.accessToken;
        
    } catch (error) {
        throw new Error(error)
    }

}