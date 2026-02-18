import React from 'react';
import {
    Container,

} from "react-bootstrap";


import { Button } from "@mui/material";
import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import EquipmentList from "../components/ResearchUnit/EquipmentList";


import "./newheader.style.css";
const Contactpage = () => {

    return (
        <div className="header">
          <Container  bg="light"  className="mt-4 mb-4">
            <Header />
              <Navbar />
              <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
           Lakes Sustainable Development Equipment 
          </Box>
              <EquipmentList />


              <Footer />
          </Container>
        </div>
    )
}

export default Contactpage
