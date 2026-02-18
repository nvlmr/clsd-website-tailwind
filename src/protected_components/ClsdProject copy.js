import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import UserService from "../services/clsd.service";
import { Container} from "react-bootstrap";




const Tutorial = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    state: false,
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

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
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status
    };
   
       UserService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial,   published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
   
  };


  const updateState = state => {
    var data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      state: state,
    
    };
   
       UserService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial,   state: state});
        console.log(response.data);
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
        setMessage("The tutorial was updated successfully!");
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
/*
  function confirmChangeStatus() {
    return window.confirm("Are you sure you want to change status of  this item?");
  }
*/
  return (
    <Container>

    <div>
      
      {currentTutorial ? (
        <div className="edit-form">
          
           
                           
        <div className="d-flex justify-content-between align-items-center">
        <div>
            <label>
               <strong>  <h4>Edit CLSD Project</h4></strong>
            </label>
        </div>
              <div>
               <Link to="/clsd_project_list">
                <button  className="m-3 btn btn-sm btn-primary"> Back</button>
               </Link>
              </div>
        </div>

             <form>

            <div className="form-group mb-4">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group  mb-4">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>


            <div className="form-group  mb-4">
              <label>
                <strong>State of the Project:</strong>
              </label>
              {currentTutorial.state ? "Finished" : "Ongoing"}
            </div>






            <div className="form-group  mb-4">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
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
              className="badge badge-primary mr-2"
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



          {currentTutorial.state ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateState(false)}
            >
              Finished
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateState(true)}
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