import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import RNDProjectList from "../protected_components/RNDProjectList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <RNDProjectList />
        </Container>
   </div>

    )
}

export default Eventpage
