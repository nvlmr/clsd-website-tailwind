import React from 'react';
import {
    Container,

} from "react-bootstrap";

import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import CLSD from "./../components/CLSD/about-CLSD";

import CLSD_view from  "../views/CLSD";
import "./newheader.style.css";
const Contactpage = () => {

    return (
        <div className='header'>
          <Container  bg="light"  className="mt-4 mb-4">
            <Header />
              <Navbar />
             
              <CLSD />
              <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
             
                 </Box>

              <CLSD_view />
       


              <Footer />
          </Container>
        </div>
    )
}

export default Contactpage
