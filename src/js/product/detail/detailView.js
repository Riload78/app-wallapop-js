export const buildView = (product) => {
    return `
        <div class="item">
            <img src="${product.image}" alt="Featured image" class="list-image">
            <div class="type ${product.state}">${product.state}</div>
            <div class="list-info">
                <div class="space-y-2">
                    <h2 class="h2">${product.name}</h2>
                    <p class="text-gray-100">${product.description}</p>
                </div>
                 <div class="state">
                    <div class="price">${product.price}</div>
                    <div class="tag">${product.category}</div>
                </div>
                <p class="text-gray-100 text-sm">Fecha de publicación:<time datetime="${product.updatedAt}">${product.updatedAt}</time></p>
            </div>
        </div>
    `
}

export const buildToolbar = () => {
    return `
        <div id="toolbar">
            <button id="edit-button"type="button" class="btn-primary">Editar</button>
            <button id="remove-button" class="btn-secondary">Eliminar</button>
        </div>
    `
}