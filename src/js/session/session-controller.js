import { buildLoggedNav, buildNotLoggedNav } from './session-view.js'
import { getUserData } from './session-model.js'

export const sessionController = (sessionWapper) => {
    
    const token = localStorage.getItem('token')
    const isSession = () => token

    // sessionWapper.innerHTML = isSession() ? buildLoggedNav() : buildNotLoggedNav();

    if (isSession()) {
        sessionWapper.innerHTML = buildLoggedNav()
        const logoutBtn = sessionWapper.querySelector('#logout') 
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault()
            localStorage.removeItem('token')
            sessionController(sessionWapper)
            window.location.href='/index.html';
        });
    } else {
        sessionWapper.innerHTML = buildNotLoggedNav()
    }

    const getSession = () => {
        return isSession()
    }

    
    const getSessionData = async () => {
        try {
            const userData = await getUserData(token)
            console.log(userData);
            return userData
            
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    return {
        getSessionData,
        getSession
    }
}