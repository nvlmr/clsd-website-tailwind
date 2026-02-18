

import React from "react";
import {useNavigate} from "react-router-dom"

import Typography from '@mui/material/Typography';


export default function ProgramPost({ id,title, link }) {
  const navigate = useNavigate();



  return (


<>



      <Typography
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
            </Typography>


</>





  );
}
