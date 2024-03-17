export const buildLoggedNav = () => {
    return `
        <a class="btn-primary" href="./create.html">Añadir producto</a>
        <a id="logout" class="btn-secondary" href="#">Cerrar sesión</a>
    `
}

export const buildNotLoggedNav = () => {
    return `
        <a class="btn-primary" href="./login.html">Iniciar sesión</a>
        <a class="btn-secondary" href="./register.html">Registrarse</a>
    `
}