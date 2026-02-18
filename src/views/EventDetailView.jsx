import React from 'react';
import {
    Container 
} from "react-bootstrap";

import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import EventDetails from  "../components/Event/NewsEventView";



import "../pages/newheader.style.css";
const PostProgramPage = () => {
 

    return (
       <div className="mt-4 header" >
        <Container   bg="primary"  className="mt-4"   >
          <Header />
            <Navbar />
        
            <Container className="mt-4 mb-4" >
        
                  <EventDetails />

              </Container>

            <Footer />
        </Container>
        </div>
    )
}

export default PostProgramPage
