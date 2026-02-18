import React from 'react';
import {
    Container,

} from "react-bootstrap";


import { Button } from "@mui/material";
import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import ResearchUnit from "./../components/ResearchUnit/about-researchunit";
import ResearchUnitList from "./../components/ResearchUnit/researchunitlist";

import "./newheader.style.css";
const Contactpage = (props) => {

    return (
             <div className="mt-4 header" >
          <Container  className="mt-4 mb-4">
            <Header />
              <Navbar />

              <ResearchUnit />
                <ResearchUnitList />


              <Footer />
          </Container>
        </div>
    )
}

export default Contactpage
