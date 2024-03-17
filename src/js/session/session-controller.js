import { buildLoggedNav, buildNotLoggedNav } from './session-view.js'

export const sessionController = (sessionWapper) => {
    
    const token = localStorage.getItem('token')
    const isSession = () => token

    sessionWapper.innerHTML = isSession() ? buildLoggedNav() : buildNotLoggedNav();
    if (isSession()) {
        sessionWapper.innerHTML = buildLoggedNav()
        const logoutBtn = sessionWapper.querySelector('#logout') 
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault()
            localStorage.removeItem('token')
            sessionController(sessionWapper)
        });
    } else {
        sessionWapper.innerHTML = buildNotLoggedNav()
    }

}