

export function buildProduct (product) {
    return `
        <a href="${product.link}">
            <img class="list-image" src="${product.image}" alt="">
        </a>
        <div class="list-info">
            <div class="space-y-2">
                <a href="${product.link}">
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

export function buildSkeleton () {
    return `
        <div class="skeleton flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div class="h-48 rounded-t dark:bg-gray-700"></div>
            <div class="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                <div class="w-full h-6 rounded dark:bg-gray-700"></div>
                <div class="w-full h-6 rounded dark:bg-gray-700"></div>
                <div class="w-3/4 h-6 rounded dark:bg-gray-700"></div>
            </div>
        </div>
    `
}