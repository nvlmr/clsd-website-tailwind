import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import EquipmentList from "../protected_components/EquipmentList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <EquipmentList />
        </Container>
   </div>

    )
}

export default Eventpage
