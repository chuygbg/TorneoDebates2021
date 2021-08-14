import React from "react"

function LoginPopUp(){
    return (
        <section id="LoginPopUp">
            <label>Nombre De Usuario</label>
            <input id="NombreDeUsuario" type="text" placeholder="Nombre"></input>
            <label>Contraseña</label>
            <input id="Contraseña" type="password"></input>
            <button id="login">Login</button>
        </section>
        

    )
        
}




export default LoginPopUp