import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import AvpList from "../protected_components/AvpList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <AvpList />
        </Container>
   </div>

    )
}

export default Eventpage
