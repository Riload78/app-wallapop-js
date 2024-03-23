import { createUser } from "./register-model.js";
import { dispatchEvent } from "../helper/dispatchEvent.js";
import { isEmailValidate, isEqualPassword } from "../helper/validate.js";

export function registerController (registerForm) {

    registerForm.addEventListener('submit', function (event){
        event.preventDefault();
        handlerRegisterSubmit()
    })

    const handlerRegisterSubmit = () => {
        let errors = []

        if (!isEmailValidate(email.value)) {
            errors.push("El correo no es válido")
        }

        if (!isEqualPassword(password.value, confirmpassword.value)) {
            errors.push('Las contraseñas no coinciden')
        }

        if (errors.length === 0) {
            registerUser()
        } 
        
        showErrors(errors)
    } 

    const showErrors = (errors) => {
        errors.forEach(error => {
            dispatchEvent('register-notifcation', {
                message: error,
                type: 'error'
            }, registerForm)
        })
    }

    const registerUser = async () => {
        try {
            dispatchEvent('loader', { isLoading: true }, registerForm)
            await createUser (email.value, password.value)
            dispatchEvent('register-notifcation', {
                message: 'Usuario creado correctamente',
                type: 'success'
            }, registerForm)
            
            setTimeout(()=>{
                window.location.href = 'login.html'
            },2500)
        } catch (error) {
            
            dispatchEvent('register-notifcation', {
                message: error.message,
                type: 'error'
            }, registerForm)
        } finally{
            dispatchEvent('loader', { isLoading: false }, registerForm)

        }
    }
}