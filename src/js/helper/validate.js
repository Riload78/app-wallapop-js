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
    const priceNumber = parseInt(price);
    return !isNaN(priceNumber) && typeof (priceNumber) === 'number';
}
