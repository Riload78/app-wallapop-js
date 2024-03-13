import { createUser } from "./register-model.js";

export function registerController (registerForm) {
    console.log(registerForm);

    // Añado evento  submit del formulario
    registerForm.addEventListener('submit', function (event){
        // Evito que el formulario se envíe por defecto
        event.preventDefault();
        handlerRegisterSubmit()
    })


    //recoger los datos del formulario
    const email = registerForm.querySelector('#email');
    const password = registerForm.querySelector("#password");
    const confirmPassword = registerForm.querySelector("#confirm-password");

    function handlerRegisterSubmit () {
        let errors = []

        if (!isEmailValidate) {
            errors.push("El correo no es válido")
        }

        if(!isEqualPassword) {
            errors.push('Las contraseñas no coinciden')
        }

        if (errors.length === 0) {
            registerUser()
        } else{
            showErrors(errors)
        }
    }
    
    function isEmailValidate() {
        const validateEmail = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)
        return validateEmail.test(email.value)
    }
    
    function isEqualPassword () {
        return password.value === confirmPassword.value 
    }

    function showErrors (errors) {
        errors.forEach(error => {
            dispatchEvent('register-notifcation', {
                message: error,
                type: 'error'
            }, registerForm)
        })
    }

    async function registerUser () {
        try {
            await createUser (email.value, password.value)
        } catch (error) {
            console.log(error);
        }
    }

    

    // Validar los datos del formulario

    // Enviarlos a la Api

    // Responder al usuario

}