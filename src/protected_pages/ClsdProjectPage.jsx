import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import ClsdProjectList from "../protected_components/ClsdProjectList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <ClsdProjectList />
        </Container>
   </div>

    )
}

export default Eventpage
