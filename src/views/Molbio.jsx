import React from 'react';
import {
    Container
} from "react-bootstrap";

import Box from '@mui/material/Box';

import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import Molbio from  "../components/ResearchUnit/molbio";

import "../pages/newheader.style.css";
const PostProgramPage = () => {


    return (
                 <div className="mt-4 header" >
        <Container   bg="primary"  className="mt-4"   >
          <Header />
          <Navbar />


          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >

            </Box>

              <Molbio />

            <Footer />
        </Container>
        </div>
    )
}

export default PostProgramPage
