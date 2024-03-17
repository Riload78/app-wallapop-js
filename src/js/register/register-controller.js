import { createUser } from "./register-model.js";
import { dispatchEvent } from "../helper/dispatchEvent.js";
import { isEmailValidate, isEqualPassword } from "../helper/validate.js";

export function registerController (registerForm) {
    console.log(registerForm);
    
    // Añado evento  submit del formulario
    registerForm.addEventListener('submit', function (event){
        // Evito que el formulario se envíe por defecto
        event.preventDefault();
        console.log(event);

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

        showErrors(errors)

        if (errors.length === 0) {
            registerUser()
        } 
       
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
            dispatchEvent('loader', { isLoading: false }, registerForm)
            dispatchEvent('register-notifcation', {
                message: 'Usuario creado correctamente',
                type: 'success'
            }, registerForm)
            
            setTimeout(()=>{
                window.location.href = 'login.html'
            },2500)
        } catch (error) {
            console.log(error);
            dispatchEvent('register-notifcation', {
                message: error,
                type: 'error'
            }, registerForm)
        }
    }

    const toLogin = () =>{
       
    }
}