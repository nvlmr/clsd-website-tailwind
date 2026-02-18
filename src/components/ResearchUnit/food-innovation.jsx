import React from "react";
import { API_URL } from "../../config/index";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./posts.css";
import { collection_content } from "../../config/index";

export default function FoodInnovation() {


  const paragraph =   `Provides equipment for the processing and development of fisheries products. Aids students in innovating existing products derived from fisheries products.Aims to guide multidisciplinary teams of students and young professionals through the process of innovation – from identifying challenges to developing consumer-centric solutions to laboratory prototyping and business model development.
   `;
 
  const bullet =`
  Isolation and purification.
  Biochemical and phenotypic characterization. 
  DNA extraction.  
  Molecular identification.  
  Disc diffusion assay. 
  Agar dilution assay. 
  Broth dilution assay
     
     `;
  const bulletPoints = bullet.split('.').map((point, index) => (
    <li key={index}>{point.trim()}</li>
  ));

  return (
    <>
    


  <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
  Food Innovation Laboratory
                  </Box>

                <img
                   className="singlePostImg"
                   src={`${API_URL}${collection_content}8`} // food innovation.jpg
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
