import React from "react"
import RegionOption from "./RegionOption" 

function RegionList(props){
    console.log("props regiones ↓")
    console.log(props)
    console.log("props.regiones ↓")
    console.log(props.regiones)
    if(props.regiones == undefined){
        return  <select id="RegionSelect" placeholder="Loading"></select>
    }else if(props.regiones !=undefined){

    return(
        <React.Fragment>
            
        <select onChange={props.onChange} id="RegionSelect">
        {props.regiones.map((region) =>  {return <RegionOption key={region.Region} region={region.Region}></RegionOption>})}
        
        </select>
        </React.Fragment>
    )
    }

}

export default RegionList