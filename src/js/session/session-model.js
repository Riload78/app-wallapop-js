import { ENV } from "../config/env.js";

export const getUserData = async (token) => {
    try {
        const url = `${ENV.apiUserBaseUrl}me/`
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const response = await fetch(url, options);
        const data = await response.json()
        const result = parseUser(data, token)

        return result

    } catch (error) {
        throw new Error(error)
    }
}

const parseUser = (user, token) => {
    return {
        id: user.id,
        token: token
    }
}

