import React from 'react';
import {useNavigate} from "react-router-dom"


import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import { Button, Box } from "@mui/material";

import Navbar from "./navbar";




//import "./newheader.style.css";
const Dashboard = () => {


    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
    
        <Navbar />
           


     </Container>




            </div>

    )
}

export default Dashboard
