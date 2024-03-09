import { ENV } from "../config/env.js";

export function buildProduct (product) {
    return `
        <a href="${ENV.apiBaseUrl}${product.id}">
            <img class="list-image" src="${ENV.mediaUrl}${product.image}" alt="">
        </a>
        <div class="list-info">
            <div class="space-y-2">
                <a href="${ENV.appBaseUrl}product/${product.id}">
                    <h2 class="h2">${product.name}</h2>
                    <p class="text-gray-100">${product.description}</p>
                </a>
            </div>
            <div class="state">
                <div class="price">${product.price}</div>
                <div class="type">${product.state}</div>
            </div>
            <div class="list-tags">
                <a rel="noopener noreferrer" href="#" class="tag">${product.category}</a>
            </div>
        </div>
    `
}

export function buildMessage (messageDiv) {

}