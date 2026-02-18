import React from "react";
import { API_URL } from "../../config/index";
import { collection_content } from "../../config/index";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import "./posts.css";

export default function AboutCLSD() {

 // The Science Research Laboratory (SRL) of the Laguna State Polytechnic University - Los Baños Campus (LSPU-LBC) was first established in early 2014 as the Science Laboratory Annex Building of the College of Fisheries (COF), originally designed for instruction purposes. With support from the former University President, Dr. Nestor M. De Vera, and the former Campus Director (LSPU-LB), Dr. Daniel D. Bunal, the plans to develop this laboratory facility into a science research complex was then approved through the initiative of Prof. Christian Paul P. de la Cruz, who served as the founding Station Manager. 
  //  In 2015, some basic laboratory wares and simple equipment commonly used in science classes were acquired, in support of its original function as a teaching laboratory. In the same year, the Atomic Absorption Spectrometer (AAS) was acquired as SRL’s very first research instrument.
  // 
  const paragraph = `
  
  
  The first major opportunity for SRL came when our "champion," Dr. Dalisay G. Fernandez and her team from the Inland Aquatic Resources Division (IARD), Department of Science and Technology - Philippine Council for Agriculture, Aquatic, and Natural Resources Research and Development (DOST-PCAARRD) – paid a visit in mid-2015 for a seminar-workshop on project proposal writing for possible funding by the agency. 
   In response, the research team led by Prof. de la Cruz (as Project Leader) was able to submit a viable project proposal on the development of milkfish aqua-synbiotic technology, that was approved for implementation in July 2016, with a total budget of PhP 4M. Considered as the first externally-funded research, the milkfish aqua-synbiotic project was a huge breakthrough in the R&D history of LSPU. With improved R&D facilities, the faculty and students alike were inspired to conduct research.
    In line with the government’s initiatives on regional scientific-research development, additional funding from DOST-PCAARRD was approved in mid-2017, amounting to Php 10M to cover the "improvement of the research station for fisheries biotechnology and post-harvest technology.” The amount was used to rehabilitate the fish ponds and tanks (part of the Aquaculture Research Station) and also for purchase of additional state-of-the-art laboratory equipment, in support of on-going activities in relation to the milkfish project. 
    LSPU-LBC, for its counterpart, has also disbursed the amount of Php 1.6M, that were spent on repairs/enhancement of laboratory rooms and purchase of furniture. To this end, the SRL is mandated to support research undertakings in fisheries that are responsive to pressing issues linked to food security and safety, environmental degradation in aquatic ecosystems, public health risks, and social equality.


   `;


  return (
    <>
  




      

               <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
                 About Science and Research Laboratory
                 </Box>


      <img
  className="singlePostImg"
  src={`${API_URL}${collection_content}10`}
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
