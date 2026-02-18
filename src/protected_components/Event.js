import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserService from "../services/event.service";
import { Container } from "react-bootstrap";
import { API_URL } from "../config/index";



const Equipment = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
    fileName: null,
    tags: [],
    archived: false,
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = (id) => {
    UserService.get(id)
      .then((response) => {
        const { id, title, description, published, fileName, tags,archived } =
          response.data;
        setCurrentTutorial({
          id,
          title,
          description,
          published,
          fileName: fileName || null,
          tags: tags || [],
          archived,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getTutorial(id);
  }, [id]);


const handleCheckboxChange = (event) => {
  const { value, checked } = event.target;

  setCurrentTutorial((prevState) => {
    const updatedTagsMap = new Map(prevState.tagsMap); // Create a copy of the existing tags map

    if (checked) {
      updatedTagsMap.set(value, true); // Add the value to the tags map
    } else {
      updatedTagsMap.delete(value); // Remove the value from the tags map
    }

    const updatedTags = Array.from(updatedTagsMap.keys()); // Convert the tags map back to an array

    return {
      ...prevState,
      tagsMap: updatedTagsMap,
      tags: updatedTags,
    };
  });
};



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imagePreviewUrl = URL.createObjectURL(file);
    setCurrentTutorial((prevState) => ({
      ...prevState,
      fileName: file,
      imagePreviewUrl: imagePreviewUrl,
    }));
  };


  const updatePublished = (status) => {
    if (confirmUpdate()) {
    var data = {
      id: currentTutorial.id,
 
      published: status
    };
   
       UserService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
             
        navigate("/event_list");
      })
      .catch(e => {
        console.log(e);
      });
    }
  };

  const updateArchived = condition => {
    if (confirmUpdate()) {
    const data = {
      id: currentTutorial.id,
  
      archived: condition,
    };
  
    UserService.update(currentTutorial.id, data)
      .then((response) => {
        setCurrentTutorial({ ...currentTutorial, archived: condition });
        console.log(response.data);
      
        navigate("/event_list");
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };

  const updateTutorial = () => {
    if (confirmUpdate()) {
      const { id, title, description, published, fileName, tags,archived } =
        currentTutorial;
      const data = new FormData();
      data.append("id", id);
      data.append("title", title);
      data.append("description", description);
      data.append("published", published);
      data.append("file", fileName);
      data.append("tags", tags); // Convert tags to JSON string
      data.append("archived", archived);

      UserService.update(id, data)
        .then((response) => {
          console.log(response.data);
          setMessage("The tutorial was updated successfully!");
          navigate("/event_list");
        })
        .catch((e) => {
          console.log(e);
      
        });
    }
  };

  const deleteTutorial = () => {
    if (confirmDelete()) {
      UserService.remove(currentTutorial.id)
        .then((response) => {
          console.log(response.data);
          navigate("/event_list");
        })
        .catch((e) => {
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

  function confirmChangeStatus() {
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
                    <h4>Edit Event</h4>
                  </strong>
                </label>
              </div>
              <div>
                <Link to="/event_list">
                  <button className="m-3 btn btn-sm btn-primary">Back</button>
                </Link>
              </div>
            </div>

            <form>
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
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={currentTutorial.description}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "300px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="fileName"
                  name="fileName"
                  onChange={handleImageChange}
                />
              </div>

              {/* Display the selected image preview and existing image */}
              {currentTutorial.fileName && (
                <div className="form-group mb-4">
                  {currentTutorial.imagePreviewUrl && (
                    <img
                      src={currentTutorial.imagePreviewUrl}s
                      alt="Selected"
                      style={{ maxWidth: "200px", marginBottom: "10px" }}
                    />
                  )}
                  {!currentTutorial.imagePreviewUrl && (
                    <img
                      src={`${API_URL}event-content/${currentTutorial.fileName}`}
                      alt="Event Image"
                      style={{ height: "250px" }}
                    />
                  )}
                </div>
              )}

              <div className="form-group mb-4">
                <label>
                  <strong>Status:</strong>
                </label>
                <span
                  style={{
                    color: currentTutorial.published ? "green" : "red",
                  }}
                >
                  {currentTutorial.published ? "Published" : "Pending"}
                </span>
              </div>

                  
              <div className="form-group mb-4">
                <label>
                  <strong>Status:</strong>
                </label>
                <span
                  style={{
                    color: currentTutorial.archived ? "blue" : "green",
                  }}
                >
                  {currentTutorial.archived ? "Archived" : "Latest"}
                </span>
              </div>


              <div className="form-group mb-4">
  <label>
    <strong>All News:</strong>
  </label>
  <div>
    <label>
      <input
        type="checkbox"
        name="tags"
        value="All News"
        checked={currentTutorial.tags.includes("All News")}
        onChange={handleCheckboxChange}
      />
      All News
    </label>
  </div>


  <div>
    <label>
      <input
        type="checkbox"
        name="tags"
        value="Training & Workshop"
        checked={currentTutorial.tags.includes("Training & Workshop")}
        onChange={handleCheckboxChange}
      />
      Training & Workshop
    </label>
  </div>

  <div>
    <label>
      <input
        type="checkbox"
        name="tags"
        value="CLSD Participation on R&D"
        checked={currentTutorial.tags.includes("CLSD Participation on R&D")}
        onChange={handleCheckboxChange}
      />
      CLSD Participation on R&D
    </label>
  </div>

  <div>
    <label>
      <input
        type="checkbox"
        name="tags"
        value="Opportunities"
        checked={currentTutorial.tags.includes("Opportunities")}
        onChange={handleCheckboxChange}
      />
      Opportunities
    </label>
  </div>

  <div>
    <label>
      <input
        type="checkbox"
        name="tags"
        value="Newly Approved R&D Projects"
        checked={currentTutorial.tags.includes("Newly Approved R&D Projects")}
        onChange={handleCheckboxChange}
      />
      Newly Approved R&D Projects
    </label>
  </div>


  {/* Add more tags as needed */}
</div>







            </form>

            {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

            <button
              className="badge badge-danger mr-2"
              onClick={deleteTutorial}
            >
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
                UnArchived
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updateArchived(true)}
              >
                Archived
              </button>
            )}



            {message && <p>{message}</p>}
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

export default Equipment;
