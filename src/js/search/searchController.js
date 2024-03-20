import { buildSearchForm } from "./searchView.js"

export const searchController = (searchWrapper) => {
    
    searchWrapper.innerHTML = buildSearchForm()
    const dropdownButton = searchWrapper.querySelector('#dropdown-button');
    const dropdownMenu = searchWrapper.querySelector('#dropdown');

    dropdownButton.addEventListener('click', function () {
        if (dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.remove('hidden');
        } else {
            dropdownMenu.classList.add('hidden');
        }
    });
}