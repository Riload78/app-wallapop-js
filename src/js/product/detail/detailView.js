export const buildView = (product) => {
    return `
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto">
                <!-- Blog post header -->
                <div class="flex w-full justify-between items-center py-4">
                            <div class="py-8">
                                <h1 class="text-3xl font-bold mb-2">${product.name}</h1>
                                <p class="text-gray-500 text-sm">Published on <time datetime="${product.updatedAt}">${product.updatedAt}</time></p>
                            </div>
                            <div class="state">
                                <div class="type">${product.state}</div>
                            </div>
                </div>

                <!-- Featured image -->
                <img src="${product.image}" alt="Featured image" class="w-full h-auto mb-8">
                <div class="state">
                    <div class="price text-2xl text-blue-700">${product.price}</div>
                </div>
                <!-- Blog post content -->
                <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                    ${product.description}
                </div>
            </div>
        </div>
    `

}