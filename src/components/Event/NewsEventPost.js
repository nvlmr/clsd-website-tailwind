

import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {
    Col,Row,Container
} from "react-bootstrap";


import {paragraph} from "./styles.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TagIcon from '@mui/icons-material/Tag';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { API_URL } from "../../config/index";
import { event_content } from "../../config/index";




export default function ProgramPost({ id, title, fileName,  description, createdAt }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/news-event/${id}`);
  }

const options = { month: 'long', day: 'numeric' , year: 'numeric'};

  return (


<>



{/*}

        <div className="mt-4" bg="light" style={{ maxWidth: '960px' }} onClick={handleClick}  >
          <Card.Img     variant="top"   width="420" height="420"   src={imageUrl}   />
            <Card.Body>
                <Card.Title >   <h4>{title}  </h4 >  </Card.Title>

                    <CalendarMonthIcon /> {new Date(createdAt.seconds*1000).toLocaleDateString("en-US",options)}
                <Card.Text align="justify"  className='paragraph'>{description}
                </Card.Text>
            </Card.Body>
        </div>
*/}

{/*}
<Card sx={{ maxWidth: 960 }} onClick={handleClick}  ClassName= 'mt-4'>
*/}

<Card sx={{ maxWidth: 960 }} onClick={handleClick}   ClassName= 'mt-4'>
  <CardActionArea>
    <CardMedia
      component="img"
      height="450"
      image={`${API_URL}${event_content}${id}`}
      alt="green iguana"
    />

  {/*}  <img src={`http://localhost:8080/api/event_image/${image_url}`} alt="" />

    */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" sx={{ color: '#353839 ', fontWeight: 'bold' }} className=" mt-2" style={{ fontFamily: " klavika", fontSize: "32px" }}>
        {title}
      </Typography>
      <Typography gutterBottom  component="div" style={{ fontFamily: " klavika", fontSize: "18px" }} >
        <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US",options)}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }}>
       <p align='justify'  className='paragraph'>{description} </p>
      </Typography>

    </CardContent>
  </CardActionArea>
  {/*}
  <CardActions>
    <Button size="small" color="primary">
      Share
    </Button>
  </CardActions>

  */}

  </Card>





</>





  );
}
