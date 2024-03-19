export function buildPagination(page, pagesCount) {
    return `
        <nav class="flex" aria-label="Page navigation example">
            <a id="back" href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            <div id="items" class="items flex"></div>
            <a id="next" href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </nav>
    `
}

export function buildItemsPagination(page, start, limit) {
    return `
       <a href="?start=${start}&limit=${limit}" class="flex items-center justify-center px-4 h-10 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">${page}</a>
    `
}

