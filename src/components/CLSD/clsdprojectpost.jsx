import React from "react";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProgramPost({ id, tags, title, description, category, published, createdAt, link }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/clsd-project/${id}`);
  }

  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <>
      <Card onClick={handleClick}>
        <CardActionArea>
                    <CardMedia
                component="img"
                width="50%"
                height="50%"
                src={`https://drive.google.com/uc?id=${link}`}
                alt="clsd project"
              />
          <CardContent>
            <Typography gutterBottom variant="h8" component="div" sx={{ color: '#808080', fontWeight: 'bold' }} style={{ fontFamily: "klavika", fontSize: "14px" }}>
              {tags}
            </Typography>
            <Typography gutterBottom variant="h8" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} style={{ fontFamily: "klavika", fontSize: "18px" }}>
              {title}
            </Typography>
            <Typography gutterBottom variant="h10" component="div" sx={{ color: '#808080', fontWeight: 'bold' }} style={{ fontFamily: "klavika", fontSize: "14px" }}>
              <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US", options)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
