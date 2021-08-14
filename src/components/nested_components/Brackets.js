import React, {useState, useEffect} from "react"
import Match from "./Match"
import "./components.css"


function Brakets(props){

    console.log("props.data ↓")
    console.log(props.data)

    var obj = {
        cuartosDeFinal :[],
        semifinalistas: [],
        finalistas:[],
    }


    if(props.data == undefined){
        return (
        <React.Fragment>
            <main>
                <img src=""></img>
            </main>
            <div id="LoadingBraketContainer"></div>
        </React.Fragment>
        )
    }


    props.data.map((region)=>{
        console.log("Esto es una region ↓")
        console.log(region)
     
        for(const key of Object.keys(region)){
            if(key == props.selectRegion){


                return region[key].map((escuela)=>{

                    console.log("esto es una escuela ↓")
                    console.log(escuela)

                    obj.cuartosDeFinal.push(escuela)

                    if(escuela.Semi_Final != ""){
                        obj.semifinalistas.push(escuela);
                    }
                    if(escuela.Final != ""){
                        obj.finalistas.push(escuela)
                    }


                    console.log(obj)

                })
            }
        }

    });

    return(
        <main style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", alignItems:"center", height:"fit-content"}}>
            <div className="stage" id="CuartosDeFinal">
            <h1 style={{alignSelf:"center", position:"absolute", top:"5px"}}>Cuartos De Final</h1>
                {
                obj.cuartosDeFinal.map((escuela)=>{
                    return <React.Fragment>
                        
                        <div className="contestant" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                            <h3>{escuela.MDL}</h3><h1>|</h1><h2>{escuela.Cuartos_de_Final}</h2>
                        </div>
                    </React.Fragment>
                })
            }</div>
            <div className="stage" id="SemiFinal">
            <h1 style={{alignSelf:"center", position:"absolute", top:"5px"}}>Semi Final</h1>
                {
                obj.semifinalistas.map((escuela)=>{
                    return <div className="contestant" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <h3>{escuela.MDL}</h3><h1>|</h1><h2>{escuela.Semi_Final}</h2>
                    </div>
                    
                })
                }
            </div>
            <div className="stage" id="Final">
            <h1 style={{alignSelf:"center", position:"absolute", top:"5px"}}>Final</h1>
                {   
                obj.finalistas.map((escuela)=>{
                    return <div class="contestant" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <h3>{escuela.MDL}</h3><h1>|</h1><h2>{escuela.Final}</h2>
                    </div>
                })
                }
            </div>

        </main>
    )
   
}

export default Brakets