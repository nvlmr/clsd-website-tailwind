import React, { useState, useEffect } from "react";
import UserService from "../services/researcher.service";
import { Container} from "react-bootstrap";
import AuthService from "../services/auth.service";
import { useNavigate ,Link} from "react-router-dom";

const AddTutorial = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [email, setEmail ]= useState("");

  const [description, setDescription ]= useState("");

  const [archived, setArchived] = useState(false);
  const [published, setPublished] = useState(false);
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // State for image preview URL





  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);


  
  useEffect(() => {


    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeMiddleName = (e) => {
    setMiddleName(e.target.value);
  };
  const onChangeSuffix = (e) => {
    setSuffix(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };


  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeArchived= (e) => {
    setArchived(e.target.checked);
  };

  const onChangePublished = (e) => {
    setPublished(e.target.checked);
  };

   const onChangeFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile)); // Set image preview URL
  };

  const desOptions = [
    { id: 1, name: "Project Leader" },
    { id: 2, name: "Faculty Researcher" },
    { id: 3, name: "Research Assistant" },
    // Add more tags as needed
  ];

  const [researchinterest, setTags] = useState([
    { id: 1, name: 'Molecular Biology & Biotechnology' },
    { id: 2, name: ' Microbiology & Parasitology' },
    { id: 3, name: 'Aquaculture' },
    { id: 4, name: 'Health & Nutrition' },
    { id: 5, name: 'Environmental Science  ' },
    { id: 6, name: 'Machine Learning  ' }
    // Add more tags as needed
  ]);


  
  const [selectedTags, setSelectedTags] = useState([]);
  
const onChangeTag = (tagId) => {
  if (selectedTags.includes(tagId)) {
    setSelectedTags(selectedTags.filter(id => id !== tagId));
  } else {
    setSelectedTags([...selectedTags, tagId]);
  }
};






  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("middleName", middleName);
    formData.append("suffix", suffix);
    formData.append("email", email);

    formData.append("description", description);

    formData.append("archived", archived);
    formData.append("published", published);
    formData.append("file", file);


    const tagNames = selectedTags.map(tagId => {
      const tag = researchinterest.find(tag => tag.id === tagId);
      return tag ? tag.name : "";
    });
    formData.append("researchinterest", tagNames.join(","));
   




      UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/researcher_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/researcher_list");
      });
  };

 

  return (
    <div className="login-container">
    <Container>
    <Link to="/researcher_list">
                <button      className="m-3 btn btn-sm btn-primary"> Back</button>
               </Link>
      <h3>Add Tutorial</h3>
      <form onSubmit={handleSubmit}>

      <div className="form-group mb-4">
                <label htmlFor="description">Types</label>
                <select
                className="form-control"
                  id="description"
                    name="description"
                   value={description}
                        onChange={onChangeDescription}
                      >

                  <option value="">Select a Types</option>
                  {desOptions.map(des => (
                    <option key={des.id} value={des.name}>
                      {des.name}
                    </option>
                  ))}
                </select>
              </div>



      <div>
  {researchinterest.map(tag => (
    <div className="form-group form-check" key={tag.id}>
      <input
        type="checkbox"
        className="form-check-input"
        checked={selectedTags.includes(tag.id)}
        onChange={() => onChangeTag(tag.id)}
        id={tag.id.toString()}
      />
      <label className="form-check-label" htmlFor={tag.id.toString()}>{tag.name}</label>
    </div>
  ))}
</div>


        <div className="form-group">
          <label>FirstName</label>
          <textarea
            type="text"
            className="form-control"
            value={firstName}
            onChange={onChangeFirstName}
            required
          />
        </div>

        <br></br>

        <div className="form-group">
          <label>Middle Name</label>
          <textarea
            className="form-control"
            value={middleName}
            onChange={onChangeMiddleName}
            required
            />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <textarea
            className="form-control"
            value={lastName}
            onChange={onChangeLastName}
            required
            />
        </div>

        <div className="form-group">
          <label>Suffix</label>
          <textarea
            className="form-control"
            value={suffix}
            onChange={onChangeSuffix}
            required
            />
        </div>


        <div className="form-group">
        <label>Email</label>
        <textarea
          className="form-control"
          value={email}
          onChange={onChangeEmail}
          required
          />
      </div>


 

        <br></br>
{/*}
        {((showAdminBoard || showModeratorBoard) && currentUser) && (
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={published}
            onChange={onChangePublished}
          />
          <label className="form-check-label">Published</label>
        </div>
           )}
        */}
           
        <br></br>

        <div className="form-group">
          <input type="file" onChange={onChangeFile} required />
        </div>
   {/* Image preview */}
   {imagePreview && (
          <div className="form-group">
       
            <img src={imagePreview} alt="Preview" className="img-preview"  style={{ height: "250px" }} />
            
          </div>
        )}
        <br></br>

      
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </Container>
    </div>
  );
};

export default AddTutorial;
