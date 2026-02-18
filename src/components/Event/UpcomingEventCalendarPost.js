

import React from "react";

import {
    Col,Row
} from "react-bootstrap";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';



export default function ProgramPost({ id, title, createdAt }) {



const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (

<>




<Card  ClassName= 'mt-4'>

  <Row   align="center"  >

    <CardContent>
      <Typography gutterBottom variant="subtitle2" component="div" sx={{ color: '#353839 ', fontWeight: 'bold' }} style={{ fontFamily: " klavika", fontSize: "21px" }} >
        {title}
      </Typography>
      <Typography gutterBottom variant="h10" component="div" style={{ fontFamily: " klavika", fontSize: "16px" }}>
        <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US",options)}
      </Typography>

    </CardContent>

  </Row>
 
</Card>



</>





  );
}
