import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import UserService from "../services/rnd.service";
import { Container } from "react-bootstrap";

const Tutorial = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    title: "",
    project_leader: "",
    implementing_agency: "",
    tags: "",
    archived: false,
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const tagsOptions = [
    { id: 1, name: "R&D Project" },
    { id: 2, name: "Non R&D Project" },
    { id: 3, name: "In-house Extention Project" },
    // Add more tags as needed
  ];

  const getTutorial = id => {
    UserService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTutorial(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentTutorial.id,
      published: status
    };
   
    UserService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
        navigate("/rnd_project_list");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateArchived = archived => {
    var data = {
      id: currentTutorial.id,
      archived: archived
    };
   
    UserService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, archived: archived });
        console.log(response.data);
        navigate("/rnd_project_list");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    if (confirmUpdate()) {
      UserService.update(currentTutorial.id, currentTutorial)
        .then(response => {
          console.log(response.data);
          navigate("/rnd_project_list");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  const deleteTutorial = () => {
    if (confirmDelete()) {
      UserService.remove(currentTutorial.id)
        .then(response => {
          console.log(response.data);
          navigate("/clsd_project_list");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  function confirmDelete() {
    return window.confirm("Are you sure you want to delete this item?");
  }

  function confirmUpdate() {
    return window.confirm("Are you sure you want to update this item?");
  }

  return (
    <Container>
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <label>
                  <strong>
                    <h4>Edit R&D Project</h4>
                  </strong>
                </label>
              </div>
              <div>
                <Link to="/rnd_project_list">
                  <button className="m-3 btn btn-sm btn-primary"> Back</button>
                </Link>
              </div>
            </div>

            <form>
              <div className="form-group mb-4">
                <label htmlFor="tags">Tags</label>
                <select
                  className="form-control"
                  id="tags"
                  name="tags"
                  value={currentTutorial.tags}
                  onChange={handleInputChange}
                >
                  <option value="">Select a tag</option>
                  {tagsOptions.map(tag => (
                    <option key={tag.id} value={tag.name}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="title">Title</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={currentTutorial.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="project_leader">Project Leader</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="project_leader"
                  name="project_leader"
                  value={currentTutorial.project_leader}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="implementing_agency">Implementing Agency</label>
                <textarea
                  className="form-control"
                  id="implementing_agency"
                  name="implementing_agency"
                  value={currentTutorial.implementing_agency}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "100px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label>
                  <strong>State of the Project:</strong>
                </label>
                <span
                  style={{
                    color: currentTutorial.archived ? "blue" : "green",
                  }}
                >
                  {currentTutorial.archived ? "Finished" : "Ongoing"}
                </span>
              </div>

              <div className="form-group mb-4">
                <label>
                  <strong>Status: </strong>
                </label>
                <span
                  style={{
                    color: currentTutorial.published ? "green" : "red",
                  }}
                >
                  {currentTutorial.published ? "Published" : "Pending"}
                </span>
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updatePublished(false)}
              >
                Pending
              </button>
            ) : (
              <button
                className="badge badge-primarymr-2"
                onClick={() => updatePublished(true)}
              >
                Published
              </button>
            )}

            <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={updateTutorial}
            >
              Update
            </button>

            {currentTutorial.archived ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updateArchived(false)}
              >
                Finished
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updateArchived(true)}
              >
                Ongoing
              </button>
            )}

            <p>{message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click any...</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Tutorial;
