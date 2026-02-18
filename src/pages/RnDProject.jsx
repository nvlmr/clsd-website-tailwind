import React from 'react';
import {
    Container
} from "react-bootstrap";

import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import RnDProject from "../components/R&D/rnd_project";


import "../pages/newheader.style.css";
const AllLiterature = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
         <Header />
           <Navbar />


           <Box   style={{ borderBottom: 2, borderColor: 'divider' , fontFamily: " klavika", fontSize: "36px" ,  color: '#353839 ', fontWeight: 'bold' }}   >
           R&D and Non-R&D Project
          </Box>


           <RnDProject />

           <Footer />
       </Container>
       </div>
    )
}

export default AllLiterature
