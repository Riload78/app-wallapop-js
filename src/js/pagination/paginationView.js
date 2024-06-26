export function buildPagination(page, pagesCount) {
    return `
        <nav class="nav">
            <div id="items" class="items flex"></div>
        </nav>
    `
}

export function buildItemsPagination(page, start, limit) {
    return `
       <div data-pagination="?start=${start}&limit=${limit}" class="item-page-link">${page}</div>
    `
}

