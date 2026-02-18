import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import TutorialService from "../../services/clsd.service";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { API_URL } from "../../config/index";
import { clsd_project_content } from "../../config/index";

import { Container, Row, Col } from "react-bootstrap";

import Box from '@mui/material/Box';

const Tutorial = () => {
  const { id } = useParams();

  const initialTutorialState = {
    id: null,
    title: "",
    duration: "",
    funding: "",
    implementation: "",

    fileName: "",
    createdAt: "",
    tags: [] // Add tags property to the initialTutorialState
  };

  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [tutorials, setTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);

  useEffect(() => {
    getTutorial(id);
  }, [id]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const getTutorial = (id) => {
    TutorialService.getPublic(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  useEffect(() => {
    filterTutorialsByTags();
  }, [currentTutorial, tutorials]);

  const filterTutorialsByTags = () => {
    const filteredTutorials = tutorials.filter(program =>
      program.tags.some(tag => currentTutorial.tags.includes(tag)) && program.id !== currentTutorial.id
    );
    setFilteredTutorials(filteredTutorials.slice(0, 3)); // Display only the first three items
  };

  const retrieveTutorials = () => {
    TutorialService.getAllPublic()
      .then(response => {
        const tutorialsData = response.data.map(tutorial => ({
          ...tutorial,
          tags: Array.isArray(tutorial.tags) ? tutorial.tags : [tutorial.tags] // Convert tags to array if it's not already an array
        }));
        setTutorials(tutorialsData);
      })
      .catch(e => {
        console.log(e);
      });
  };




  return (
    <>

<Row>
 <Col lg={8} className="mt-4" >

       <Card sx={{ maxWidth: 960 }} className='mt-4'>
        <CardMedia
          component="img"
          height="40%"
          image={`${API_URL}${clsd_project_content}${currentTutorial.id}`}
          alt="events"
        />
      </Card>

      <Typography gutterBottom variant="h4" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "36px" }}>
        {currentTutorial.title}
      </Typography>

      <Typography gutterBottom variant="h10" component="div" className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }}>
        <CalendarMonthIcon /> {new Date(currentTutorial.createdAt).toLocaleDateString("en-US", options)}
      </Typography>

      <Typography gutterBottom variant="h10" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "36px" }}>
       Duration: {currentTutorial.duration}
      </Typography>
      <Typography gutterBottom variant="h10" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "36px" }}>
       Funding Agency: {currentTutorial.funding}
      </Typography>
      <Typography gutterBottom variant="h10" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "36px" }}>
       Implementing Agency: {currentTutorial.implementing}
      </Typography>

                      </Col>
                      <Col lg={4}>



                      </Col>
                      {/* Widgets ends here */}
                 
                  </Row>


 


 

    </>
  );
};

export default Tutorial;