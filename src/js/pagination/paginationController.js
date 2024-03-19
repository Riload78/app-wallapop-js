import { buildPagination, buildItemsPagination } from "./paginationView.js";
import { getProducts } from "./paginationModel.js";


export const paginationController = (paginationWrapper) => {
    console.log('paginationwraooer', paginationWrapper);
    const start = 0
    const limit = 8

    const renderPaginationContent = async (start, limit) => {
        const paginationContent = document.createElement('div')
        paginationContent.classList.add('pagination-content')
        const renderPagination = paginationWrapper.appendChild(paginationContent)
        renderPagination.innerHTML = buildPagination()

        const pages = await calculatePages(limit)
        const items = renderPaginationItem(pages, start, limit)
        const itemsContent = document.createElement('div')
        itemsContent.classList.add('items-per-page')
        const itemsContainer = paginationWrapper.querySelector('#items')
        itemsContainer.appendChild(itemsContent)
        itemsContainer.innerHTML = items

    }

    const calculatePages = async (limit) => {
        const numProducts = await getProducts()
        let pages = 0;
        if (numProducts % limit === 0) {
            pages = numProducts / limit
        } else {
            pages = Math.floor(numProducts / limit) + 1
        }
        return pages
    }
 
    const renderPaginationItem = (pages, start, limit) => {
        let items = ''
        for (let index = 0; index < pages; index++) {
            items += buildItemsPagination(index + 1, start, limit)
            start += limit;
        }
        
        return items
    }

    const pagination = renderPaginationContent(start, limit)
    
}