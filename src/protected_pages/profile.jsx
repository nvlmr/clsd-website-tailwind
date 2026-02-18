import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import Profile from "../protected_components/Profile";



const ProfilePage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <Profile />
        </Container>
   </div>

    )
}

export default ProfilePage
