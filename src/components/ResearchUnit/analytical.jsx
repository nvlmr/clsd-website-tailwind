
import React from "react";
import { API_URL } from "../../config/index";
import "./posts.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { collection_content } from "../../config/index";


export default function Analytical() {


  const paragraph = `  Provides and conducts microbiological analyses as requested and specified by different clients who come from all walks of life (domestic, academic, research or industrial sectors within the university).The preparation room is used to store weak and strong/hazardous chemicals to avoid accidents in the laboratory.`;
 
  const bullet =`Sample classification. Assaying. Analysis for chemical, material,   biological, geological  and environmental samples`;
  const bulletPoints = bullet.split('.').map((point, index) => (
    <li key={index}>{point.trim()}</li>
  ));


  return (
    <>
      
 

      <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
      Analytical Services Laboratory
                 </Box>


        <img
          className="singlePostImg"
         
          src={`${API_URL}${collection_content}6`} // analytical.jpg
          alt=""
        />

      
       

           <Typography variant="subtitle1" color="text.secondary" sx={{ color: '#353839 ' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }} >
            {paragraph.split("\n").map((paragraph, index) => (
              <p align="justify"  key={index}>
               {paragraph}
               </p>
                     ))}
              </Typography>


                 <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "36px" }}   >
                   Services
                 </Box>




         <Typography variant="subtitle1" color="text.secondary" sx={{ color: '#353839 ' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }}>
                           <ul>{bulletPoints}</ul>
        </Typography>


     

    </>
  );
}
