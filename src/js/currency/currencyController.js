import { buildCurrency } from "../currency/currencyView.js";
export const currencyController = (currencyWrapper) => {
    console.log(currencyWrapper)

    const inputCurrency = currencyWrapper.querySelector("#input-currency");

    const renderView =  () => {
        const {local, change} = getBrowserLang()
        currencyWrapper.innerHTML = buildCurrency(local, change)
    }

    const getBrowserLang = () => {
        const navLang = navigator.language || 'es_ES'
        return  {
            local : navigator.language || 'es_ES',
            change: 'us_US'
        }
    }
    
    currencyWrapper.addEventListener('change', () => {

    })

    renderView()
}