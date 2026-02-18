import React from 'react';
import {useNavigate} from "react-router-dom"


import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import { Button, Box } from "@mui/material";



import EventAdd from "../admin_components/LiteratureAdd";


//import "./newheader.style.css";
const Eventpage = () => {

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/all-news-event`);
  }
    function handleClick1() {
      navigate(`/AboutCLSD`);
  }


    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
      
        <EventAdd />
     
     </Container>




            </div>

    )
}

export default Eventpage
