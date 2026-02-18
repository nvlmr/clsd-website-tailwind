import React from 'react';
import {
    Container,

} from "react-bootstrap";


import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import AllClsdProject from "../components/CLSD/clsdproject";


import "../pages/newheader.style.css";
const AllLiterature = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
         <Header />
           <Navbar />
         
           <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
           Lakes Sustainable Development Project
          </Box>



           <AllClsdProject />



           <Footer />
       </Container>
       </div>
    )
}

export default AllLiterature
