import React, { useState, useEffect } from "react";
import UserService from "../services/literature.service";
import { Container} from "react-bootstrap";
import AuthService from "../services/auth.service";
import { useNavigate ,Link} from "react-router-dom";

const AddTutorial = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [doi, setDoi] = useState("");

  const [published, setPublished] = useState(false);
  const [file, setFile] = useState("");


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

  const onChangeLink = (e) => {
    setLink(e.target.value);
  };

  const onChangeDoi = (e) => {
    setDoi(e.target.value);
  };

  const onChangePublished = (e) => {
    setPublished(e.target.checked);
  };

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("doi", doi);
    formData.append("published", published);
    formData.append("file", file);

   
   
      UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/literature_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/literature_list");
      });
  };





  return (
    <div className="login-container">
    <Container>
    <Link to="/literature_list">
                <button      className="m-3 btn btn-sm btn-primary"> Back</button>
               </Link>
      <h3>Add Literature</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label>Title</label>
          <textarea
            type="text"
            className="form-control"
            value={title}
            onChange={onChangeTitle}
            required
          />
        </div>


        <div className="form-group mt-4">
          <label>Link</label>
          <textarea
            className="form-control"
            value={link}
            onChange={onChangeLink}
            required
            />
        </div>

        <div className="form-group mt-4">
          <label>DOI</label>
          <textarea
            className="form-control"
            value={doi}
            onChange={onChangeDoi}
            required
            />
        </div>

      

        {((showAdminBoard || showModeratorBoard) && currentUser) && (
        <div className="form-group form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            checked={published}
            onChange={onChangePublished}
          />
          <label className="form-check-label">Published</label>
        </div>
           )}

           
  

      
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
      </Container>
    </div>
  );
};

export default AddTutorial;
