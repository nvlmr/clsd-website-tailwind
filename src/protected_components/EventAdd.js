import React, { useState, useEffect } from "react";
import UserService from "../services/event.service";
import { Container} from "react-bootstrap";
import AuthService from "../services/auth.service";
import { useNavigate ,Link} from "react-router-dom";



const AddTutorial = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // State for image preview URL





  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [checkboxItems, setCheckboxItems] = useState([
    { id: 1, label: 'Published', checked: false },
    { id: 2, label: 'Featured', checked: false },
    { id: 3, label: 'Archived', checked: false },
  ]);

  
  useEffect(() => {


    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangePublished = (e) => {
    setPublished(e.target.checked);
  };

   const onChangeFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile)); // Set image preview URL
  };

  const [tags, setTags] = useState([
    { id: 1, name: 'All News' },
    { id: 2, name: 'Training & Workshop' },
    { id: 3, name: 'CLSD Participation on R&D' },
    { id: 4, name: 'Opportunities' },
    { id: 5, name: 'Newly Approve R&D Projects' }
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
    formData.append("title", title);
    formData.append("description", description);
    formData.append("published", published);
    formData.append("file", file);


    const tagNames = selectedTags.map(tagId => {
      const tag = tags.find(tag => tag.id === tagId);
      return tag ? tag.name : "";
    });
    formData.append("tags", tagNames.join(","));
   




      UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/event_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/event_list");
      });
  };

 

  return (
    <div className="login-container">
    <Container>
    <Link to="/event_list">
                <button      className="m-3 btn btn-sm btn-primary"> Back</button>
               </Link>
      <h3>Add Tutorial</h3>
      <form onSubmit={handleSubmit}>

      <div>
  {tags.map(tag => (
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
          <label>Title</label>
          <textarea
            type="text"
            className="form-control"
            value={title}
            onChange={onChangeTitle}
            required
          />
        </div>

        <br></br>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={onChangeDescription}
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
