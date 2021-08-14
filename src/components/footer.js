import React from "react"
import logo from "../images/LogoBlanco.png"

function Footer(){
    return (
        <footer style={{display:"flex", background:"#343a40", height:"30vh"}}>
            <div id='left-side'>
                <img src={logo} style={{  width: "30em", margin: "1em"}}></img>
            </div>
            <div id='cener-column'></div>
            <div id='right-side'></div>
        </footer>        

    )
        
}




export default Footer