export function formatPrice (price) {
    const languaje = navigator.language || 'es-ES';
    const options = { style: 'currency', currencyDisplay: 'symbol', currency:getCurrencyCode(languaje)}
    const formatPrice = new Intl.NumberFormat(languaje, options);
    return formatPrice.format(price)

}

function getCurrencyCode(language){
    const currencies = {
        'es-ES': 'EUR',
        'en-US': 'USD',
        'en-GB-oxendict': 'GBP'
    }
    return currencies[language] || 'EUR'
}

/**
 * LLamar a una api para conversion de rate y mostrar el resultado en la vista -> Pendiente
 */

