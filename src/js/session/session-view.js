export const buildLoggedNav = () => {
    return `
        <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
        <a class="btn-primary" href="./create.html">Añadir producto</a>
        
    `
}

export const buildNotLoggedNav = () => {
    return `
        <a class="btn-primary" href="./login.html">Iniciar sesión</a>
        <a class="btn-secondary" href="./register.html">Registrarse</a>
    `
}