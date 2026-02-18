import React from 'react';
import {
    Container,
} from "react-bootstrap";
import Box from '@mui/material/Box';

import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import AllVideoGallery from "../components/Media/allVideoGallery";


import "../pages/newheader.style.css";
const AllVideoGalleryView = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
         <Header />
           <Navbar />
       

               <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
              Video Gallery 
                 </Box>


           <Container className="mt-4 mb-4" >



                           <AllVideoGallery />





             </Container>




           <Footer />
       </Container>
       </div>
    )
}

export default AllVideoGalleryView
