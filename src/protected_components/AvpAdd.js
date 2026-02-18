import React, { useState } from "react";
import UserService from "../services/avp.service";
import { Container} from "react-bootstrap";

import { useNavigate ,Link} from "react-router-dom";

const AddTutorial = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [file, setFile] = useState("");

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
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("published", published);
    formData.append("file", file);

   
   
      UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/avp_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/avp_list");
      });
  };





  return (
    <div className="login-container">
    <Container>
    <Link to="/avp_list">
                <button      className="m-3 btn btn-sm btn-primary"> Back</button>
               </Link>
      <h3>Add Tutorial</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={onChangeTitle}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={onChangeDescription}
            required
          ></textarea>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={published}
            onChange={onChangePublished}
          />
          <label className="form-check-label">Published</label>
        </div>
        <div className="form-group">
          <input type="file" onChange={onChangeFile} required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </Container>
    </div>
  );
};

export default AddTutorial;
