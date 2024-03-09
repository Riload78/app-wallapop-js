const url = 'http://127.0.0.1:8000/api/productss';

export async function getProducts () {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
        
    } catch (error) {
        throw new Error(error)
    }
}