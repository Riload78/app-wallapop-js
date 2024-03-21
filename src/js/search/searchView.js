export const buildSearchForm = () => {
    return `
        <form id="search-form" class="max-w-lg mx-auto">
            <div class="content-form">
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="dropdown-button" type="button">
                    Categorias
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id="dropdown" class="dropdown-content hidden">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" data-category="hogar" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hogar</button>
                        </li>
                        <li>
                            <button type="button" data-category="electronica"" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Electrónica</button>
                        </li>
                    </ul>
                </div>
                <div class="relative w-full">
                    <input type="search" name="search" id="search-dropdown" class="search-input" placeholder="Buscador de productos" required />
                    <button type="submit" class="search-btn">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    `
}