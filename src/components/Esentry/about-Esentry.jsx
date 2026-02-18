
import React from "react";
import { API_URL } from "../../config/index";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import "./posts.css";
import { collection_content } from "../../config/index";
export default function Ecoinformatics() {


  const paragraph = `
  
  
  Develop and improve farming technologies for aquatic species, pilot trials and demonstration projects,  facilities for industry and researchers to carry out projects and trials, work with others towards sustainable aquaculture and fisheries, train staff and students and educate the public about aquaculture.
       
   
   `;


  return (
    <>
     


    


    <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px"  }}   >
    Ecoinformatics Laboratory
                 </Box>

      <img
  className="singlePostImg"
  src={`${API_URL}${collection_content}2`}
  alt=""
/>

<Typography variant="subtitle1" color="text.secondary" sx={{ color: '#353839 ' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }} >
  {paragraph.split("\n").map((paragraph, index) => (
    <p align="justify"  key={index}>
      {paragraph}
    </p>
  ))}
</Typography>




    </>
  );
}
