import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserService from "../services/publication.service";
import { Container,Dropdown  } from "react-bootstrap";



const Equipment = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    title: "",
    degree: "",
    adviser: "",
    year: "",
    student: "",

    types: "",
    archived: false,
    published: false,

 
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = (id) => {
    UserService.get(id)
      .then((response) => {
        const { id, title, degree, adviser, year, student,  types, archived, published } =
          response.data;
        setCurrentTutorial({
          id,
          title,
          degree,
          adviser,
          year,
          student,


          types,
          archived,
          published,

      
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
      identification: updatedTags,
    };
  });
};



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };




  const options = [
    { value: "CLSD Publication", label: "CLSD Publication" },
    { value: "CLSD Under Project Thesis", label: "CLSD (Under Project Thesis)" },
    { value: "R&D Publication", label: "R&D Publication" },
    { value: "R&D Under Project Thesis", label: "R&D (Under Project Thesis)" },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleItemChange = (option) => {
    const isSelected = selectedOptions.includes(option.value);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((value) => value !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
  };
  
  useEffect(() => {
    setCurrentTutorial((prevState) => ({
      ...prevState,
      types: selectedOptions,
    }));
  }, [selectedOptions]);
  
  



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
             
        navigate("/publication_list");
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
      
        navigate("/publication_list");
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };

  const updateTutorial = () => {
    if (confirmUpdate()) {
      const { id, title, degree, adviser, year, student, types,archived, published } =
        currentTutorial;
      const data = new FormData();
      data.append("id", id);
      data.append("title", title);
      data.append("degree", degree);
      data.append("adviser", adviser);
      data.append("year", year);
      data.append("student", student);

      data.append("types", types); // Convert tags to JSON string
      data.append("archived", archived);
      data.append("published", published);



   
      UserService.update(id, data)
        .then((response) => {
          console.log(response.data);
          setMessage("The tutorial was updated successfully!");
          navigate("/publication_list");
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
          navigate("/publication_list");
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
                    <h4>Edit Publication</h4>
                  </strong>
                </label>
              </div>
              <div>
                <Link to="/publication_list">
                  <button className="m-3 btn btn-sm btn-primary">Back</button>
                </Link>
              </div>
            </div>

            <form>

            <div className="form-group mb-4">
                <label htmlFor="title">Title</label>
                <textarea
                  className="form-control"
                  id="title"
                  name="title"
                  value={currentTutorial.title}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="degree">Degree</label>
                <textarea
                  className="form-control"
                  id="degree"
                  name="degree"
                  value={currentTutorial.degree}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="adviser">Adviser</label>
                <textarea
                  className="form-control"
                  id="adviser"
                  name="adviser"
                  value={currentTutorial.adviser}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="year">Year</label>
                <textarea
                  className="form-control"
                  id="year"
                  name="year"
                  value={currentTutorial.year}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="year">Student/s</label>
                <textarea
                  className="form-control"
                  id="student"
                  name="student"
                  value={currentTutorial.student}
                  onChange={handleInputChange}
                  style={{
                    resize: "vertical",
                    minHeight: "50px",
                    overflow: "auto",
                  }}
                />
              </div>



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

                  
              <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-identification">
    {selectedOptions.length > 0 ? selectedOptions.join(", ") : currentTutorial.types}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    {options.map((option) => (
      <Dropdown.Item
        key={option.value}
        onClick={() => handleItemChange(option)}
        active={selectedOptions.includes(option.value)}
      >
        {option.label}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>







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
