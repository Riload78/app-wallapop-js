import { buildView } from "./detailView.js";
import { getProduct } from "./detailModel.js";

export const viewController = async (viewWrapper) => {
    console.log(viewWrapper);
    // obtener los parametros de la url
    const url = window.location.search
    const queryParams = new URLSearchParams(url);
    const productId = queryParams.get('id')
    console.log(productId);

    // OBtener los datos del api del producto en cuestion
    // enviarlos a la vista
    try {
        const product = await getProduct(productId)
        viewWrapper.innerHTML = buildView(product)
    } catch (error) {
        throw new Error(error)
    }

    // 

} 