import React from "react";
import { Link  } from "react-router-dom";
import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import clsd from "./../components/image/LSD.png";
import mainBanner from "./../components/image/clsd-header.png";
import clsdlogo from "./styles.css";
import banner from "./styles.css";
import DateTime from "./Datetime";


import '@fontsource/roboto/700.css';

export default function Main() {


  return (
    <div>
      
      <section className="overflow-hidden">
        <div className="container mb-2" >
          <div className="row">
        <div className="col-12 col-md-2  order-md-1   section mt-4 mb-2" >
        
        <img alt="clsdlogo" className="clsdlogo"  src={clsd}  />

            </div>
            <div className="col-12 col-md-10 col-xl-7 order-md-2 section">


    <Typography component="div" className="content">
    <Box sx={{  fontWeight: '1000',  fontSize: 30 , fontStyle: 'Roboto' , color:"  white" , mb:-5,mt:5, lineHeight: 3 }}>  NICER Lakes R&D Center</Box>
    <Box sx={{ fontWeight: '1000',  fontSize: 30 , fontStyle: 'Bebas Neue' , color:" white" , lineHeight: 1}}>    ________________________________________</Box>
    <Box sx={{ fontWeight: '1000',  fontSize: 30 , fontStyle: 'Roboto' , color:" white"  }} >Lakes Sustainable Development</Box>

  </Typography>
            </div>
            {/*}
            <div className="col-12 col-md-1 offset-xl-1 order-md-3   text-white col-xl-2 section pt-md-0 pb-0 mt-4 mb-4" >
                  <Typography component="div" sx={{  fontWeight: '1000',  fontSize: 12 , fontStyle: 'italic' , color:"white" , mb:-5,mt:5, lineHeight: 3 }}>
                <DateTime />
                  </Typography>
                </div>
                */}
          </div>
        </div>
      </section>

    </div>
  );
}
