export const isEmailValidate = (email) => {
    const validateEmail = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)
    return validateEmail.test(email.value)
}

export const isEqualPassword = (password, confirmPassword) => {
    return password.value === confirmPassword.value
}