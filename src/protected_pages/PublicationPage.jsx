import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import PublicationList from "../protected_components/PublicationList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <PublicationList />
        </Container>
   </div>

    )
}

export default Eventpage
