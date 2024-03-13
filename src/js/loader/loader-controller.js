import { buildLoader } from "./loader-view.js";


export const loaderController = (loaderWrapper) => {

    function loaderStatus (loadingStatus){
        loadingStatus ? showLoader() : hideLoader()
    }
    const showLoader = () => {
        loaderWrapper.classList.add('loading')
        loaderWrapper.innerHTML = buildLoader()
    }

    const  hideLoader = () => {
        loaderWrapper.classList.remove('loading')
        loaderWrapper.innerHTML = ''
    }

    return {
        loaderStatus
    }
}