

import React from "react";
import {useNavigate} from "react-router-dom"
import {
    Col,Row
} from "react-bootstrap";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { API_URL } from "../../config/index";
import { csld_project_content } from "../../config/index";


export default function ProgramPost({ id, title, createdAt, fileName }) {

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/clsd-project/${id}`);
  }
const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (

<>


<Card onClick={handleClick}  ClassName= 'mt-4'>
  <CardActionArea>
  <Row   align="left"  >
  <Col md='6'  bg="light"   >

    <CardMedia
      component="img"
      height="150"
      image={`${API_URL}${csld_project_content}${id}`}
      alt="green iguana"
    />
    </Col>
      <Col md='6' bg="light"   >

    <CardContent>
      <Typography gutterBottom variant="subtitle2" component="div" sx={{ color: '#353839 ', fontWeight: 'bold' }} style={{ fontFamily: " klavika", fontSize: "16px" }} >
        {title}
      </Typography>
      <Typography gutterBottom variant="h10" component="div" style={{ fontFamily: " klavika", fontSize: "16px" }}>
        <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US",options)}
      </Typography>

    </CardContent>
    </Col>
  </Row>
  </CardActionArea>
</Card>



</>





  );
}
