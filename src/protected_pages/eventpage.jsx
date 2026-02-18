import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import EventList from "../protected_components/EventList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <EventList />
        </Container>
   </div>

    )
}

export default Eventpage
