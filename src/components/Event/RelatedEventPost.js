

import React from "react";
import {useNavigate} from "react-router-dom"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { API_URL } from "../../config/index";
import { event_content } from "../../config/index";




export default function ProgramPost({ id,title, tags }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/news-event/${id}`);
  }
const options = { month: 'long', day: 'numeric' , year: 'numeric'};
  return (


<>



<Card onClick={handleClick}  >
  <CardActionArea>
    <CardMedia
      component="img"
      height="220"
          image={`${API_URL}${event_content}${id}`}
      alt="green iguana"
    />
    <CardContent>

      <Typography gutterBottom variant="h8" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} style={{ fontFamily: " klavika", fontSize: "18px" }} >
        {title}
      </Typography>
      <Typography gutterBottom variant="h8" component="div" sx={{ color: '#808080', fontWeight: 'bold' }}   style={{ fontFamily: " klavika", fontSize: "14px" }}  >
        {tags}
      </Typography>

    </CardContent>
  </CardActionArea>

</Card>





</>





  );
}
