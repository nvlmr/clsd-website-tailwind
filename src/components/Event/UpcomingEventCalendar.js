import React, { useState, useEffect } from "react";
import TutorialService from "../../services/calendar.service";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { Grid } from "@mui/material";
import EventPost from "./UpcomingEventCalendarPost";

const EventListHome = () => {
  const [programs, setPrograms] = useState([]);

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

  const isEventUpcoming = (program) => {
    const currentTime = new Date().getTime();
    const eventTime = new Date(program.createdAt).getTime();
    return eventTime >= currentTime;
  };

  const filteredPrograms = programs.filter(program => isEventUpcoming(program));
  // Sort the filtered programs in ascending order by createdAt
  filteredPrograms.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              {filteredPrograms.map(program => (
                <Col lg={12} className="mt-3" key={program.id}>
                  <EventPost
                    id={program.id}
                    title={program.title}
                    description={program.description}
                    createdAt={program.createdAt}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default EventListHome;
