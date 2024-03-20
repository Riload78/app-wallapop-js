import { dispatchEvent } from "../helper/dispatchEvent.js";
import { buildSearchForm } from "./searchView.js"

export const searchController = (searchWrapper) => {

    searchWrapper.innerHTML = buildSearchForm()
    const dropdownButton = searchWrapper.querySelector('#dropdown-button');
    const dropdownMenu = searchWrapper.querySelector('#dropdown');
    const searchForm = searchWrapper.querySelector('#search-form')
    const categoryForm = searchForm.querySelector('.category-select')

    dropdownButton.addEventListener('click', function () {
        if (dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.remove('hidden');
        } else {
            dropdownMenu.classList.add('hidden');
        }
    });

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formSearch = new FormData(searchForm)
        const search = formSearch.get('search')
        console.log(search);
        const newUrl = `?name_like=${search}`;
        dispatchEvent('search-params', { search: search, url: newUrl }, searchWrapper)
        // history.pushState(null, '', newUrl);
    })

    categoryForm.addEventListener('click', (event) => {

    })

}