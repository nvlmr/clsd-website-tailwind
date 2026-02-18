
import React from "react";
import { API_URL } from "../../config/index";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./posts.css";
import { collection_content } from "../../config/index";


export default function AboutCLSD() {


  const paragraph = `
  
  
  Center for Lakes Sustainable Development (CLSD), under the “Accelerated R&D Program for Capacity Building of Research and Development Institutions and Industrial Competitiveness Niche Centers in the Regions for R&D (NICER) of Science for Change Programs, aims to develop solutions and strategies for effective management and sustainability of various lakes in Region 4A or the Calabarazon Region, comprising the provinces of Cavite, Laguna, Batangas, Rizal and Quezon, since no lake environment in the Philippines is entirely free from anthropogenic stresses. The project started on October 2021.
  This project is being implemented by Assistant Professor Christian Paul de la Cruz of Laguna State Polytechnic University in Los Baños campus. Co-implementing with de la Cruz are Calabarzon local government units, the Bureau of Fisheries and Aquatic Resources Region 4A, the University of the Philippines Los Baños-School of Environmental Science and Management, UP Diliman, the Laguna Lake Development Authority, and the Southeast Asian Limnological Network, a nonprofit organization.
  The Laguna State Polytechnic University Los Baños Campus, College of Fisheries served as the implementing agency of the Lake NICER Project 2 entitled “Predictive Estimation of Ecological Carrying Capacity: Tool for Sustainable Aquaculture Development in Selected Crater Lakes in the Province of Quezon” that aims to make scientific basis for crafting policies related to effective management of lake environments, particularly in small crater lakes used for aquaculture and ecotourism, that can be beneficial to the lake communities.
  
   
   `;



  return (
    <>
     




      <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
                 About Center for Lakes Sustainable Development (CLSD)
                 </Box>
              <img
                className="singlePostImg"
                src={`${API_URL}${collection_content}1`}
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
