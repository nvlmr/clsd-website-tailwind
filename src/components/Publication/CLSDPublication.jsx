
import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import TutorialService from "../../services/publication.service";

const CLSDPublication = () => {
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
            <th>Student/s</th>
            <th>Degree Sought</th>
            <th>Title</th>          
            <th>Adviser</th>
            <th>Year</th>
            <th>Manuscript</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.student}</td>
              <td>{event.degree}</td>
              <td>{event.title}</td>
              <td>{event.adviser}</td>
              <td>{event.year}</td>
              <td>{event.tags}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CLSDPublication;

