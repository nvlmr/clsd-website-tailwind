import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserService from "../services/researcher.service";
import { Container } from "react-bootstrap";
import { API_URL } from "../config/index";
import Typography from '@mui/material/Typography';


const Equipment = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    email: "",

    researchinterest: [],
    description: "",


    archived: false,
    published: false,
    fileName: null,
   
    
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const desOptions = [
    { id: 1, name: "Project Leader" },
    { id: 2, name: "Faculty Researcher" },
    { id: 3, name: "Research Assistant" },
    // Add more tags as needed
  ];




  const getTutorial = (id) => {
    UserService.get(id)
      .then((response) => {
        const { id, firstName, middleName,lastName, suffix, email, researchinterest, description, archived, published, fileName } =
          response.data;
        setCurrentTutorial({
          id,
          firstName,
          middleName,
          lastName,
          suffix,
          email,
          researchinterest: researchinterest || [],
          description,
          archived,
          published,
          fileName: fileName || null,
          
         
        });
        console.log(response.data);
      })
      .catch((e
        ) => {
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
      researchinterest: updatedTags,
    };
  });
};



const handleInputChange = (event) => {
  const { name, value } = event.target;
  setCurrentTutorial((prevState) => ({
    ...prevState,
    [name]: value,
  }));
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
             
        navigate("/researcher_list");
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
      const { id, firstName, middleName, lastName, suffix, email,   description,   researchinterest, archived, published, fileName } =
        currentTutorial;
      const data = new FormData();
      data.append("id", id);
      data.append("firstName", firstName);
      data.append("middleName", middleName);
      data.append("lastName", lastName);
      data.append("suffix", suffix);
      data.append("email", email);
      data.append("researchinterest", researchinterest);
      data.append("description", description);
      data.append("archived", archived);
      data.append("published", published);
      data.append("file", fileName);

    

      UserService.update(id, data)
        .then((response) => {
          console.log(response.data);
          setMessage("The tutorial was updated successfully!");
          navigate("/researcher_list");
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
          navigate("/researcher_list");
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
                    <h4>Edit Researcher</h4>
                  </strong>
                </label>
              </div>
              <div>
                <Link to="/researcher_list">
                  <button className="m-3 btn btn-sm btn-primary">Back</button>
                </Link>
              </div>
            </div>

            <form>
              
            <div className="form-group mb-4">
                <label htmlFor="description">Description</label>
                <select
                className="form-control"
                  id="description"
                    name="description"
                   value={currentTutorial.description}
                        onChange={handleInputChange}
                      >

                  <option value="">Select a description</option>
                  {desOptions.map(des => (
                    <option key={des.id} value={des.name}>
                      {des.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="firstName">First Name</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={currentTutorial.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="middleName">Middle Initial</label>
                <textarea
                  className="form-control"
                  id="middleName"
                  name="middleName"
                  value={currentTutorial.middleName}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="lastName">Last Name</label>
                <textarea
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={currentTutorial.lastName}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="suffix"> Suffix</label>
                <textarea
                  className="form-control"
                  id="suffix"
                  name="suffix"
                  value={currentTutorial.suffix}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>

              
              <div className="form-group mb-4">
                <label htmlFor="email"> Email</label>
                <textarea
                  className="form-control"
                  id="email"
                  name="email"
                  value={currentTutorial.email}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
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
                      src={currentTutorial.imagePreviewUrl}
                      alt="Selected"
                      style={{ maxWidth: "200px", marginBottom: "10px" }}
                    />
                  )}
                  {!currentTutorial.imagePreviewUrl && (
                    <img
                      src={`${API_URL}researcher-content/${currentTutorial.fileName}`}
                      alt="Researcher Image"
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
    <strong>Research Interest:</strong>
  </label>
  <div>
    <label>
      <input
        type="checkbox"
        name="researchinterest"
        value="Molecular Biology & Biotechnology"
        checked={currentTutorial.researchinterest.includes("Molecular Biology & Biotechnology")}
        onChange={handleCheckboxChange}
      />
    Molecular Biology & Biotechnology
    </label>
  </div>


  <div>
    <label>
      <input
        type="checkbox"
        name="researchinterest"
        value="Microbiology & Parasitology"
        checked={currentTutorial.researchinterest.includes("Microbiology & Parasitology")}
        onChange={handleCheckboxChange}
      />
     Microbiology & Parasitology
    </label>
  </div>

  <div>
    <label>
      <input
        type="checkbox"
        name="researchinterest"
        value="Aquaculture"
        checked={currentTutorial.researchinterest.includes("Aquaculture")}
        onChange={handleCheckboxChange}
      />
      Aquaculture
    </label>
  </div>

  <div>
    <label>
      <input
        type="checkbox"
        name="researchinterest"
        value="Health & Nutrition"
        checked={currentTutorial.researchinterest.includes("Health & Nutrition")}
        onChange={handleCheckboxChange}
      />
      Health & Nutrition
    </label>
  </div>

  <div>
    <label>
      <input
        type="checkbox"
        name="researchinterest"
        value="Environmental Science"
        checked={currentTutorial.researchinterest.includes("Environmental Science")}
        onChange={handleCheckboxChange}
      />
     Environmental Science
    </label>
  </div>


  <div>
    <label>
      <input
        type="checkbox"
        name="researchinterest"
        value="Machine Learning"
        checked={currentTutorial.researchinterest.includes("Machine Learning")}
        onChange={handleCheckboxChange}
      />
   Machine Learning
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
