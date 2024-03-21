import { dispatchEvent } from "../helper/dispatchEvent.js";
import { buildSearchForm } from "./searchView.js"

export const searchController = (searchWrapper) => {

    searchWrapper.innerHTML = buildSearchForm()

    const dropdownButton = searchWrapper.querySelector('#dropdown-button');
    const dropdownMenu = searchWrapper.querySelector('#dropdown');
    const searchForm = searchWrapper.querySelector('#search-form')
    const categoriesLink = searchForm.querySelectorAll('#dropdown ul li')

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
        dispatchEvent('search-params', { search: search, category:'', url: newUrl }, searchWrapper)
    })

    categoriesLink.forEach(category => {
        category.addEventListener('click', (event) => {
            event.preventDefault()
            const category =  String(event.target.dataset.category);
            const newUrl = `?category_like=${category}`
            dispatchEvent('search-params', { search: '', category: category, url: newUrl }, searchWrapper)
            createClearButton()
        })
    });


    const createClearButton = () => {
        const btnClear = document.createElement('div')
        btnClear.classList.add('btn','btn-primary', 'btn-clean')
        btnClear.textContent = 'Eliminar filtros'
        searchWrapper.appendChild(btnClear)
        btnClear.addEventListener('click', ()=> {
            console.log('click');
            dispatchEvent('clean-filters',{ search:'', category:'' }, searchWrapper)
            btnClear.parentNode.removeChild(btnClear)
        })
    }



}