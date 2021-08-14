import React, {useState,useEffect} from "react"
import ReactDOM from "react";
import RegionList from "./nested_components/RegionList" 
import Brackets from "./nested_components/Brackets"




function Main(){



    const [loadedRegiones, setLoadedRegiones] = useState([]);
    const [DisplayRegion, setRegionToDisplay] = useState(null)

    useEffect(()=>{
            var url="https://script.google.com/macros/s/AKfycbzs83ix-yY_eEhSW0GKFsEyX2BwnQyx0EybSgmoRHbGV6ZxafGGYySfEu4ogkIkdrCD-Q/exec";

        fetch(url)
            .then(response => {
            return response.json()
            }).then(data =>{
               // console.log(data)

               setLoadedRegiones(data);
                
            })

    },[]);

    function selectRegion(event){
        console.log(event.target.value)
        setRegionToDisplay(event.target.value)
    }

    return (
        <React.Fragment>
       <center>
           <div style={{display:"flex", justifyContent:"center", alignContent:"center", alignItems:"center", background:"#3D5467"}}>
            <RegionList onChange={selectRegion} regiones={loadedRegiones.Region}></RegionList>
           </div>
       </center>
            <Brackets selectRegion={DisplayRegion} data={loadedRegiones.Data}></Brackets>
        
        </React.Fragment>

    )
}



export default Main