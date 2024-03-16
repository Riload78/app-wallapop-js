import { buildLoggedNav, buildNotLoggedNav } from './session-view.js'

export const sessionController = (sessionWapper) => {
    
    const token = localStorage.getItem('token')
    const isSession = () => token

    sessionWapper.innerHTML = isSession() ? buildLoggedNav() : buildNotLoggedNav();

}