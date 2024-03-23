import { dispatchEvent } from "../helper/dispatchEvent.js";
import { buildSearchForm } from "./searchView.js"

export const searchController = (searchWrapper) => {

    searchWrapper.innerHTML = buildSearchForm()

    const dropdownButton = searchWrapper.querySelector('#dropdown-button');
    const dropdownMenu = searchWrapper.querySelector('#dropdown');
    const searchForm = searchWrapper.querySelector('#search-form')
    const categoriesLink = searchForm.querySelectorAll('#dropdown ul li')
    let clearButton

    const createClearButton = (filter) => {
        if (!clearButton) {
            const btnClear = document.createElement('div')
            btnClear.classList.add('btn', 'btn-primary', 'btn-clean')
            btnClear.textContent = `${filter}`
            searchWrapper.appendChild(btnClear)
            clearButton = btnClear


            clearButton.addEventListener('click', () => {
                dispatchEvent('clean-filters', { search: '', category: '' }, searchWrapper)
                searchWrapper.removeChild(clearButton)
                clearButton = null
            })
        } else {
            clearButton = null
            const btnTooRemove = searchWrapper.querySelector('.btn-clean')
            btnTooRemove.remove()
            //const btnToRemove =  clearButton.nextElementSibling || clearButton.previousElementSibling;
            // searchForm.innerHTML=''
            createClearButton(filter)
           
        }
    }

    const renderCategories = () => {
        categoriesLink.forEach(category => {
            category.addEventListener('click', (event) => {
                event.preventDefault()
                const category = String(event.target.dataset.category);
                const newUrl = `?category_like=${category}`
                dispatchEvent('search-params', { search: '', category: category, url: newUrl }, searchWrapper)
                dropdownMenu.classList.add('hidden');
                createClearButton(category)
            })
        })
    }

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
        const newUrl = `?name_like=${search}`;
        dispatchEvent('search-params', { search: search, category:'', url: newUrl }, searchWrapper)
        createClearButton(search)
    })
    
    renderCategories()
}