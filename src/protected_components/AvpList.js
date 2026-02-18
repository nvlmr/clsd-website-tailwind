import React, { useState, useEffect } from "react";
import UserService from "../services/avp.service";
import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";

import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';




import AuthService from "../services/auth.service";

const EventList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");



  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);



  useEffect(() => {
    retrieveTutorials();
    
    
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    UserService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    UserService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    UserService.findByTitle(searchTitle)
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };




  return (
    <div className="login-container">
    <Container>


    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary "
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Event List</h4>
        <Link to="/event_add">
        <button      className="m-3 btn btn-sm btn-primary"> Add New Event</button>
      </Link>


        



        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
              </li>
            ))}
        </ul>

       
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Event</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentTutorial.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTutorial.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
            <div>
              
            <Video  
                width="100%"
                height="100%"

                 controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                // poster="http://localhost:5001/gallery/CLSD-building.jpg"
                 onCanPlayThrough={() => {
                     // Do stuff
                 }}>
                 <source src="http://localhost:5001/avp/NICER-AVP.mp4" type="video/webm" />
                 <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
             </Video>
             {   /*
              <img src={`http://localhost:5001/api/image/${currentTutorial.fileName}`} height="300" width="450"/>
                */   }


              </div>
          

            {showAdminBoard && currentUser ? (
  <Link
    to={"/avp/" + currentTutorial.id}
    className="badge badge-warning"
  >
    Edit
  </Link>
) : null}



          </div>
        ) : (
          <div>
            <br />
            <p>Please click any...</p>
          </div>
        )}
      </div>
    </div>
    </Container>
    </div>
  );
};

export default EventList;