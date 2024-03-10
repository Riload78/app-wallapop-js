export function formatPrice (price) {
    const languaje = navigator.language || 'es-ES';
    const options = { style: 'currency', currencyDisplay: 'symbol', currency:getCurrencyCode(languaje)}
    const formatPrice = new Intl.NumberFormat(languaje, options);
    return formatPrice.format(price)

}

function getCurrencyCode(language){
    const currencies = {
        'es_ES': 'EUR',
        'en_US': 'USD'
    }
    return currencies[language] || 'EUR'
}