import { buildLoggedNav, buildNotLoggedNav } from './session-view.js'

export const sessionController = (sessionWapper) => {
    console.log(sessionWapper);
    const token = localStorage.getItem('token')

    // Comprobar si existe sesion
    const isSession = () => token
    // Si existe session -> vista pintara html ->añadir twwet - nombre ususario
    // sSi n o exista -> html -> btn login || register
    sessionWapper.innerHTML = isSession() ? buildLoggedNav() : buildNotLoggedNav();

}