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

export function buildMessage (message) {
    return `
        <div class="message">
            <span class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
            </span>
            <div class="text-wrapper">
                ${message}
            </div>
        </div>
    `
}