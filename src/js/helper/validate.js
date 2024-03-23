export const isEmailValidate = (email) => {
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return emailRegExp.test(email)
}

export const isEqualPassword = (password, confirmPassword) => {
    return password.trim() === confirmPassword.trim();
}

export const isSizeValidate = (name, size) => {
    return name.length <= size
}

export const isPriceValidate = (price) => {
    price = price.trim()
    const priceRegex = /^\d+(?:\.\d+)?$/;
    return priceRegex.test(price) && !isNaN(parseFloat(price))
}
