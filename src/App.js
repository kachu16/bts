import React from "react";
import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Handles from "./components/Handles";
// import Cards from "./components/Cards";

import Itune from "./components/containers/Itune";



const App = () => {
  return (
    // <div>
    //   <div style={{height: 'auto', backgroundColor: 'rgb(17 24 39)'}}>
    //   <Navbar/>  
    //   <Main/> 
    //   </div>
    //   <Cards/>
    //   <Handles/>
    // </div>

    <div>
      <Navbar/>
      <Itune/>
    </div>
  )
}

export default App
;