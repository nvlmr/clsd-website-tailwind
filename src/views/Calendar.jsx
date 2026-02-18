import React from 'react';
import {
  Container,Row,Col

} from "react-bootstrap";
import Box from '@mui/material/Box';

import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import CaledanrEvent from "../components/Event/Calendar";
import UpcomingCaledarEvent from "../components/Event/UpcomingEventCalendar";

import "../pages/newheader.style.css";
const AllNewsEventView = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
         <Header />
           <Navbar />
       

               <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
               All Calendar Event
                 </Box>


           <Container className="mt-4 mb-4" >





                           <Row className="mt-4 mb-4">
       <Col lg={7}>       <CaledanrEvent />     </Col>
       <Col lg={5} >      <UpcomingCaledarEvent/>         </Col>
      </Row>

             </Container>




           <Footer />
       </Container>
       </div>
    )
}

export default AllNewsEventView
