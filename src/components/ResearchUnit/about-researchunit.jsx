
import React from "react";
import { API_URL } from "../../config/index";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { collection_content } from "../../config/index";

import "./posts.css";

export default function AboutResearchUnit() {


  const paragraph = `The Science Research Laboratory (SRL) of the Laguna State Polytechnic University - Los Baños Campus (LSPU-LBC) was first established in early 2014 as the Science Laboratory Annex Building of the College of Fisheries (COF), originally designed for instruction purposes.
   With support from the former University President, Dr. Nestor M. De Vera, and the former Campus Director (LSPU-LB), Dr. Daniel D. Bunal, the plans to develop this laboratory facility into a science research complex was then approved through the initiative of Prof. Christian Paul P. de la Cruz, who served as the founding Station Manager. 
   In 2015, some basic laboratory wares and simple equipment commonly used in science classes were acquired, in support of its original function as a teaching laboratory. 
   In the same year, the Atomic Absorption Spectrometer (AAS) was acquired as SRL’s very first research instrument.`;




  return (

    <>

                 <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
                 About Research Units 
                 </Box>


      <img
  className="singlePostImg"
  src={`${API_URL}${collection_content}4`} // research unit.jpg
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
