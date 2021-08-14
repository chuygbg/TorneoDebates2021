
import './App.css';
import "./index.css"
//Importing components
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import Landing from "./components/landing"

//End of imports
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';

function App(User) {
  if(User){
    return (
      <React.Fragment>
        <Header></Header>
        <Main>
        </Main>
        <Footer></Footer>
      </React.Fragment>
      );
  }else{
    return(
    <React.Fragment>
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
    </React.Fragment>
    )
  }



  
}

export default App;
