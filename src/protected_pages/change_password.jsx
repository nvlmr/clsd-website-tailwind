import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import Change_pass from "../protected_components/ChangePassword";



const ProfilePage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <Change_pass />
        </Container>
   </div>

    )
}

export default ProfilePage
