import React, { useState, useEffect } from "react";
import TutorialService from "../services/calendar.service";
import { Container, Row, Col, Form, FormControl, Button, Modal } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/en-gb";
import { Typography } from "@mui/material";






const EventCalendar = () => {
  const [tutorials, setTutorials] = useState([]);
  const [published, setPublished] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    createdAt: null,
    updatedAt: null,
  });

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialService.getAll()
      .then((response) => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshTutorials = () => {
    retrieveTutorials();
  };

  const localizer = momentLocalizer(moment);

  const events = tutorials.map((tutorial) => ({
    id: tutorial.id,
    title: tutorial.title,
    description: tutorial.description,

    start: moment(tutorial.createdAt).toDate(),
    end: moment(tutorial.createdAt).toDate(),
  }));

  const handleSelectSlot = ({ start, end }) => {
    const selectedStartDate = moment(start);
    const selectedEndDate = moment(end);

    // Set the desired time, e.g., 10:00 AM
    const desiredStartTime = moment().set({ hour: 10, minute: 0, second: 0 });
    const desiredEndTime = moment().set({ hour: 11, minute: 0, second: 0 });

    // Set the date part of the selected start and end times
    const updatedStartDate = selectedStartDate
      .set({ hour: desiredStartTime.hour(), minute: desiredStartTime.minute() })
      .toDate();
    const updatedEndDate = selectedEndDate
      .set({ hour: desiredEndTime.hour(), minute: desiredEndTime.minute() })
      .toDate();

    setNewEvent((prevState) => ({
      ...prevState,
      createdAt: updatedStartDate,
      updatedAt: updatedEndDate,
    }));

    setShowModal(true);
    setEditingEvent(null);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({
      id: event.id,
      title: event.title,
      description: event.description,
      published: event.status,
      createdAt: event.start,
      updatedAt: event.end,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewEvent({
      title: "",
      description: "",
      createdAt: null,
      updatedAt: null,
    });
    setEditingEvent(null);
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newEvent.title);
    formData.append("description", newEvent.description);
    formData.append("createdAt", newEvent.createdAt);
    formData.append("updatedAt", newEvent.updatedAt);

    TutorialService.create(formData)
      .then((response) => {
        console.log(response);
        refreshTutorials(); // Refresh tutorials after creating event
      })
      .catch((error) => {
        console.log(error);
      });

    handleCloseModal();
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", editingEvent.id); // Use the id from editingEvent
    formData.append("title", newEvent.title);
    formData.append("description", newEvent.description);
    formData.append("published", published); // Update the published status
    formData.append("createdAt", newEvent.createdAt);
    formData.append("updatedAt", newEvent.updatedAt);

    TutorialService.update(editingEvent.id, formData) // Pass the id to TutorialService.update
      .then((response) => {
        console.log(response);
        refreshTutorials(); // Refresh tutorials after updating event
      })
      .catch((error) => {
        console.log(error);
      });

    handleCloseModal();
  };

  const handleDeleteEvent = () => {
    if (!editingEvent) return;

    TutorialService.remove(editingEvent.id)
      .then((response) => {
        console.log(response);
        refreshTutorials(); // Refresh tutorials after deleting event
      })
      .catch((error) => {
        console.log(error);
      });

    handleCloseModal();
  };

  const handlePublishToggle = () => {
    setPublished((prevPublished) => !prevPublished);
  };

  return (
    <>
      <Row>
        <Col lg={8} className="mt-4">
          <Calendar
            views={["month", "week", "day", "agenda"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "80vh" }}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleEditEvent} // Added event selection handler
          />


        </Col>
        <Col lg={4}></Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography variant="h5">
              {editingEvent ? "Edit Event" : "Create Event"}
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="eventTitle">
              <Form.Label>
                <Typography variant="body1">Title</Typography>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="eventDescription">
              <Form.Label>
                <Typography variant="body1">Description</Typography>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event description"
                value={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="eventStart">
              <Form.Label>
                <Typography variant="body1">Start Date/Time</Typography>
              </Form.Label>
              <Form.Control
                type="datetime-local"
                value={
                  newEvent.createdAt
                    ? moment(newEvent.createdAt).format("YYYY-MM-DDTHH:mm")
                    : ""
                }
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    createdAt: moment(e.target.value).toDate(),
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="eventEnd">
              <Form.Label>
                <Typography variant="body1">End Date/Time</Typography>
              </Form.Label>
              <Form.Control
                type="datetime-local"
                value={
                  newEvent.updatedAt
                    ? moment(newEvent.updatedAt).format("YYYY-MM-DDTHH:mm")
                    : ""
                }
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    updatedAt: moment(e.target.value).toDate(),
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="eventPublish">
              <Form.Label>
                <Typography variant="body1">Publish</Typography>
              </Form.Label>
              <Button
                variant={published ? "primary" : "secondary"}
                onClick={handlePublishToggle}
              >
                {published ? "Published" : "Unpublished"}
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            <Typography variant="body1">Cancel</Typography>
          </Button>
          {editingEvent ? (
            <>
              <Button variant="danger" onClick={handleDeleteEvent}>
                <Typography variant="body1">Delete</Typography>
              </Button>
              <Button variant="primary" onClick={handleUpdateEvent}>
                <Typography variant="body1">Update</Typography>
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={handleCreateEvent}>
              <Typography variant="body1">Create</Typography>
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EventCalendar;
