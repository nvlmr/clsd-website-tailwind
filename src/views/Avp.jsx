import React from 'react';
import {
    Container,

} from "react-bootstrap";


import { Button } from "@mui/material";
import Box from '@mui/material/Box';




import Avp from "./../video/mainvid";


import "../pages/newheader.style.css";
const AllNewsEventView = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
   
           <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >
             <h2>All NewsEvent </h2>
               </Box>

           <Container className="mt-4 mb-4" >



                           <Avp />





             </Container>




       
       </Container>
       </div>
    )
}

export default AllNewsEventView
