
import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import TutorialService from "../../services/fundedproject.service";

const DOSTFundedProject = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    retrieveEvents();
  }, []);

  const retrieveEvents = () => {
    TutorialService.getAllPublic()
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const targetTypes = ["CLSD Publication", "CLSD Under Project Thesis"];

  // const filteredEvents = events.filter((event) =>
  //   targetTypes.includes(event.types)
  // );

  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Project Leader</th>
            <th>Title</th>
            <th>Funding Agency</th>          
            <th>Duration</th>
            <th>Budget</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.projectleader}</td>
              <td>{event.title}</td>
              <td>{event.fundingagency}</td>
              <td>{event.druation}</td>
              <td>{event.budget}</td>
              <td>
                {event.status === 0 ? "Ongoing" : event.status === 1 ? "Completed" : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DOSTFundedProject;

