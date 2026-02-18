import React from 'react';
import {
    Container 
} from "react-bootstrap";

import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import ClsdProjectDetails from  "../components/CLSD/clsdprojectdetails";



import "../pages/newheader.style.css";
const ClsdProjectPage = () => {
 

    return (
       <div className="mt-4 header" >
        <Container   bg="primary"  className="mt-4"   >
          <Header />
            <Navbar />
        
            <Container className="mt-4 mb-4" >
        
                  <ClsdProjectDetails />

              </Container>

            <Footer />
        </Container>
        </div>
    )
}

export default ClsdProjectPage
