import React from 'react';


import {
    Container,
} from "react-bootstrap";
import Box from '@mui/material/Box';

import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import RnDPublication from "../components/Publication/RnDPublication";


import "../pages/newheader.style.css";
const PublicationPage = () => {

    return (
      <div className="mt-4 header" >
       <Container   >
         <Header />
           <Navbar />
    
           <Box   style={{ borderBottom: 2, borderColor: 'divider' , fontFamily: " klavika", fontSize: "36px" ,  color: '#353839 ', fontWeight: 'bold' }}   >
           R&D Publication 
          </Box>
           <RnDPublication />

           <Footer />
       </Container>
       </div>
    )
}

export default PublicationPage
