import React, { useState, useEffect } from "react";
import TutorialService from "../../services/event.service";

import { Container, Row, Col } from "react-bootstrap";

import EventPost from "./eventListPost";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";



const EventListHome = () => {
  const [programs, setPrograms] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber *   usersPerPage;

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialService.getAllPublic()
      .then(response => {
        setPrograms(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };



  const filteredList = (programs) => {
    return programs
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by createdAt in descending order
  };


  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              {filteredList(programs)
               // .reverse() // Reverse the order of the programs array
               .slice(pagesVisited + 1, pagesVisited + usersPerPage + 1) // Skip the first row
               
                .map(program => (
                  <Col lg={12} className="mt-1">
                    <EventPost
                      id={program.id}
                      title={program.title}
                      description={program.description}
                      createdAt={program.createdAt}
                      fileName={program.fileName}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col lg={4}></Col>
        </Row>


         
        <Row className="justify-content-center mt-4 ">
          <Col lg={12}>
            <Link to="/all-news-event">
              <Button variant="outlined" color="primary">
                Read More <i className="fas fa-arrow-right ml-2" />
              </Button>
            </Link>
          </Col>
        </Row>


      </Container>
    </>
  );
};

export default EventListHome;
