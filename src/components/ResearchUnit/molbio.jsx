import React from "react";
import { API_URL } from "../../config/index";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { collection_content } from "../../config/index";

import "./posts.css";

export default function Molbio() {

  const paragraph =   `
  
  The Molecular and Microbiology Laboratory is important for experimental studies of graduates and undergraduates.It provides services such as DNA extraction, isolation and purification of desired isolates and other services related in microbiology studies.The facilities of the microbiology and molecular laboratory can cater all kinds of microbiology analysis like presence of antimicrobial properties,phytochemical, and many more.
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
        Molecular Biology & Microbiology Laboratory
                  </Box>

                <img
                   className="singlePostImg"
                   src={`${API_URL}${collection_content}5`} // molbio.jpg
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
