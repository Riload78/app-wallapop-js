import { buildPagination, buildItemsPagination } from "./paginationView.js";
import { getProducts } from "./paginationModel.js";
import { dispatchEvent } from "../helper/dispatchEvent.js";


export const paginationController = (paginationWrapper) => {

    const start = 0
    const limit = 8
    const search = ''
    const category = ''
    
    const renderPaginationContent = async (start, limit, search, category) => {
        const paginationContent = document.createElement('div')
        paginationContent.classList.add('pagination-content')
        const renderPagination = paginationWrapper.appendChild(paginationContent)
        renderPagination.innerHTML = buildPagination()
        try {
            const pages = await calculatePages(limit, search, category)
            const items = renderPaginationItem(pages, start, limit)
            
            const itemsContent = document.createElement('div')
            itemsContent.classList.add('items-per-page')
            const itemsContainer = paginationWrapper.querySelector('#items')
            itemsContainer.appendChild(itemsContent)
            itemsContainer.innerHTML = items
            handlerLinksPagination(search, category)
            
        } catch (error) {
            throw new Error (error)
        }
    }

    const handlerLinksPagination = (search, category) => {
        const paginationItems = paginationWrapper.querySelectorAll('#items .item-page-link')
        paginationItems[0].classList.add('active');
        paginationItems.forEach(item => {

            item.addEventListener('click', (event) => {
                paginationItems.forEach(otherItem => otherItem.classList.remove('active'))
                event.target.classList.add('active')
                const newUrl = event.target.dataset.pagination
                dispatchEvent('search-params', { search, category, url: newUrl }, paginationWrapper)
            });
        });
    };

    const calculatePages = async (limit, search, category) => {
        try {

            const numProducts = await getProducts(search, category)
            let pages = 0;
            if (numProducts % limit === 0) {
                pages = numProducts / limit
            } else {
                pages = Math.floor(numProducts / limit) + 1
            }
            return pages

        } catch (error) {
            throw new Error(error)
        }

    }
 
    const renderPaginationItem = (pages, start, limit) => {
        let items = ''
        for (let index = 0; index < pages; index++) {
            items += buildItemsPagination(index + 1, start, limit)
            start += limit;
        }
        return items
    }

    const handlerProductNumber = (url) => {
        const queryParams = new URLSearchParams(url);
        const search = queryParams.has("name_like") ? queryParams.get("name_like") : ''
        const category = queryParams.has("category_like") ? queryParams.get("category_like") : ''
        paginationWrapper.innerHTML = ''
        renderPaginationContent(start, limit, search, category)
     } 

     renderPaginationContent(start, limit, search, category)
   
     return {
         handlerProductNumber
     }
}