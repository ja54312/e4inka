import React from "react";
import Contacto from "./components/contacto";
import Description from "./components/description";
import Trabajos from "./components/trabajos";
import './body.css';


const Body = () => {
    return(
      <>
        <body>
              <Description/>
              <Trabajos/>
              <Contacto/>
        </body>
      </>
    )
}

export default Body