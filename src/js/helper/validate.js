export const isEmailValidate = (email) => {
    const validateEmail = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)
    return validateEmail.test(email.value)
}

export const isEqualPassword = (password, confirmPassword) => {
    return password.value === confirmPassword.value
}

export const isSizeValidate = (name, size) => {
    return name.length <= size
}

export const isPriceValidate = (price) => {
    price = price.trim();

    const priceRegex = /^\d+(?:\.\d+)?$/;
    return priceRegex.test(price) && !isNaN(parseFloat(price));
}
