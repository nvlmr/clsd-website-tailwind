import React from 'react';
import {
    Container,Row,Col

} from "react-bootstrap";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"


import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import FoodInnovation from  "../components/ResearchUnit/food-innovation";

import "../pages/newheader.style.css";
const PostProgramPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/all-news-event`);
  }
    return (
               <div className="mt-4 header" >
        <Container   bg="primary"  className="mt-4"   >
          <Header />
          <Navbar />


          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >

            </Box>

                    <FoodInnovation />

            <Footer />
        </Container>
        </div>
    )
}

export default PostProgramPage
