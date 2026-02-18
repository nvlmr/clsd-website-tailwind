import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import LiteratureList from "../protected_components/LiteratureList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <LiteratureList />
        </Container>
   </div>

    )
}

export default Eventpage
