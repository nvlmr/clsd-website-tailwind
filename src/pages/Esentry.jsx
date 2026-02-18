import React from 'react';
import {
    Container,

} from "react-bootstrap";


import { Button } from "@mui/material";
import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import Esentry from "./../components/Esentry/about-Esentry";


import "./newheader.style.css";
const Contactpage = () => {

    return (
        <div className='header'>
          <Container  bg="light"  className="mt-4 mb-4">
            <Header />
              <Navbar />

            

              <Esentry />


              <Footer />
          </Container>
        </div>
    )
}

export default Contactpage
