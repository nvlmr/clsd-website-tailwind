import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import ResearcherList from "../protected_components/ResearcherList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <ResearcherList />
        </Container>


   </div>

    )
}

export default Eventpage
