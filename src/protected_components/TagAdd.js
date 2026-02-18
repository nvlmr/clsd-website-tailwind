import React, { useState } from "react";
import UserService from "../services/tag.service";
import { Container} from "react-bootstrap";

import { useNavigate ,Link} from "react-router-dom";

const AddTutorial = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [published, setPublished] = useState(false);


  const onChangeName = (e) => {
    setName(e.target.value);
  };


  const onChangePublished = (e) => {
    setPublished(e.target.checked);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

    formData.append("published", published);

   
   
      UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/tag_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/tag_list");
      });
  };





  return (

    <Container>
  
  

      
       
                       
    <div className="d-flex justify-content-between align-items-center">
    <div>
        <label>
           <strong>  <h4>Edit CLSD Project</h4></strong>
        </label>
    </div>
          <div>
           <Link to="/tag_list">
            <button  className="m-3 btn btn-sm btn-primary"> Back</button>
           </Link>
          </div>
    </div>


      <form onSubmit={handleSubmit}>
        <div className="form-group  mb-4">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={onChangeName}
            required
          />
        </div>
 


        <div className="form-group form-check  mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            checked={published}
            onChange={onChangePublished}
          />
          <label className="form-check-label">Published</label>
        </div>
    
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </Container>
   
  );
};

export default AddTutorial;
