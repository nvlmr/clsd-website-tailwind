import React from 'react';
import {
    Container,Row,Col

} from "react-bootstrap";

import Box from '@mui/material/Box';

import Events from  "../components/Event/NewsEvent";
import EventList from  "../components/Event/eventList";

const PostProgramPage = () => {


    return (
             
        <Container   bg="primary"  className="mt-4"   >
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,  color: '#353839', fontSize: "36px" }}  style={{ fontFamily: " klavika"}}   >
             <h2> News & Event </h2>
               </Box>
    
      <Row className="mt-4 mb-4">
       <Col lg={7}>       <Events />     </Col>
       <Col lg={5} >      <EventList/>         </Col>
      </Row>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,  color: '#353839', fontSize: "36px" }}  style={{ fontFamily: " klavika"}}   >
             <h2> </h2>
               </Box>
        </Container>
         
    )
}

export default PostProgramPage
