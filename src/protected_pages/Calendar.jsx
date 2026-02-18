import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import CalendarEvent from "../protected_components/Calendar";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <CalendarEvent />
        </Container>
   </div>

    )
}

export default Eventpage
