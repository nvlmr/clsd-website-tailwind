import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import TagList from "../protected_components/TagList";



const Tagpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <TagList />
        </Container>
   </div>

    )
}

export default Tagpage
