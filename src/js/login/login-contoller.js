import { loginUser } from "./login-model.js";
import { isEmailValidate } from "../helper/validate.js";
import { dispatchEvent } from "../helper/dispatchEvent.js";

export const loginController = (loginForm) => {

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('submit');
        handlerLoginSubmit()
    })

    const handlerLoginSubmit = () => {
        let errors = []

        if (!isEmailValidate(email)) {
            errors.push('El email no es válido')
        }

        showErrors(errors)

        if(errors.length === 0){
            submitLogin()
        }
    }

    const submitLogin = async () => {
        const { email, password } = getLoginData(loginForm)
        try {
            const jwt = await loginUser(email, password)
            localStorage.setItem("token", jwt);
            dispatchEvent('login-notification', {
                type: 'success',
                message: 'Usuario logueado correctamente'
            },loginForm)
            setTimeout( () => {
                window.location.href = "/"
            }, 3000)
        } catch (error) {
            dispatchEvent('login-notification',{
                type:'error',
                message: error.message
            },loginForm)
        }
    }

    const showErrors = (errors) => {
        errors.forEach(error => {
            dispatchEvent('login-validation', {
                message: error,
                type: 'error'
            }, loginForm)
        })
        
    }


    const getLoginData = (loginForm) => {
        const formData = new FormData(loginForm);
        const email = formData.get('email').trim()
        const password = formData.get('password')
        
        return {
            email: email,
            password: password
        }
    }

   



    // Get the elements we need to manipulate in our code -> ok

    // Submit form -> ok

    // call method at model

    // Integrate modul notification

    // Integrate Loading


}