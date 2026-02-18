import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import CollectionList from "../protected_components/CollectionList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <CollectionList />
        </Container>
   </div>

    )
}

export default Eventpage
