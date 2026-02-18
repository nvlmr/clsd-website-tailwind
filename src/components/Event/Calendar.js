import React, { useState, useEffect } from "react";
import TutorialService from "../../services/calendar.service";
import { Container, Row, Col, Form, FormControl, Modal, Button } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/en-gb"; // Import the locale you want to use

const EventCalendar = () => {
  const [tutorials, setTutorials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialService.getAllPublic()
      .then((response) => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const localizer = momentLocalizer(moment);

  const events = tutorials.map((tutorial) => ({
    id: tutorial.id,
    title: tutorial.title,
    start: moment(tutorial.createdAt).toDate(),
    end: moment(tutorial.createdAt).toDate(),
  }));

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <Row>
     
          <Calendar
            views={["month", "week", "day", "agenda"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "80vh" }}
            onSelectEvent={handleSelectEvent} // Added event selection callback
          />
      
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent && selectedEvent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <div>
        
              <p>{selectedEvent.start.toString()}</p>
              {/* Add other event information here */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EventCalendar;
