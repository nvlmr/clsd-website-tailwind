import React from 'react';
import {useNavigate} from "react-router-dom"


import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import { Button, Box } from "@mui/material";

import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import MainSlider from  "../components/Slider/Slider";
import Avp from  "../video/mainvid";
import NewsEvent from  "../views/NewsEvent";



//import "./newheader.style.css";
const Homepage = () => {

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
        <Header />
        <Navbar />
       
           <Avp />
            
           <NewsEvent/>   


        
       
         <Footer />
     </Container>




            </div>

    )
}

export default Homepage
