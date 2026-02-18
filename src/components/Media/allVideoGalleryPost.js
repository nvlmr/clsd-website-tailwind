

import React from "react";
import {useNavigate} from "react-router-dom"


import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { API_URL } from "../../config/index";
import { event_content } from "../../config/index";
import ReactPlayer from 'react-player';

export default function ProgramPost({ id, tags,title, description, category,  published, createdAt,   fileName, link }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/news-event/${id}`);
  }
const options = { month: 'long', day: 'numeric' , year: 'numeric'};
  return (


<>

{/* <Card onClick={handleClick}  > */}
<Card>
  <CardActionArea>
    {/* <CardMedia
      component="img"
      height="220"
          image={`${API_URL}${event_content}${id}`}
      alt="green iguana"
    /> */}
    
   
    <CardContent>

    <Typography gutterBottom variant="h8" component="div" sx={{ color: '#808080', fontWeight: 'bold' }}   style={{ fontFamily: " klavika", fontSize: "14px" }}  >
        {tags}
      </Typography>
      

      {/* <Typography gutterBottom variant="h8" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} style={{ fontFamily: " klavika", fontSize: "18px" }} >
        {title}
      </Typography> */}

      <ReactPlayer
        url={link}
        width="100%"
        height="100%"
        controls  // Add controls for play/pause, volume, etc.
      />

      {/* <Typography
              gutterBottom
              variant="h8"
              component="div"
              sx={{
                color: '#353839',
                fontWeight: 'bold',
                cursor: 'pointer',  // Add cursor style to indicate it's clickable
                textDecoration: 'underline',  // Add underline style for better visibility
              }}
              style={{ fontFamily: 'klavika', fontSize: '18px' }}
              onClick={() => window.open(link, '_blank')}
            >
                    {title}
            </Typography> */}
      <Typography gutterBottom variant="h10" component="div" sx={{  color: '#808080', fontWeight: 'bold'  }} style={{ fontFamily: " klavika", fontSize: "14px" }}  >
        <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US",options)}
      </Typography>

    </CardContent>
  </CardActionArea>

</Card>





</>





  );
}
