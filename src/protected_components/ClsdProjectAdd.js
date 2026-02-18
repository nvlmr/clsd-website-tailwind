import React, { useState } from "react";
import UserService from "../services/clsd.service";
import { Container} from "react-bootstrap";

import { useNavigate ,Link} from "react-router-dom";

const AddTutorial = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [project_leader, setProject_leader] = useState("");
  const [implementing_agency, setImplementing_agency] = useState("");
  const [published, setPublished] = useState(false);
  const [archived, setArchived] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeProjectLeader = (e) => {
    setProject_leader(e.target.value);
  };

  const onChangeImplementing_agency = (e) => {
    setImplementing_agency(e.target.value);
  };

  const onChangePublished = (e) => {
    setPublished(e.target.checked);
  };

  const onChangeArchived = (e) => {
    setArchived(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("project_leader", project_leader);
    formData.append("implementing_agency", implementing_agency);
    formData.append("published", published);
    formData.append("archived", archived);
   
   
      UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/clsd_project_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/clsd_project_list");
      });
  };

  return (

    <Container>                
     <div className="d-flex justify-content-between align-items-center">
           <div>
               <label>
               <strong>  <h4>Add CLSD Project</h4></strong>
               </label>
           </div>
          <div>
           <Link to="/clsd_project_list">
            <button  className="m-3 btn btn-sm btn-primary"> Back</button>
           </Link>
          </div>
    </div>


      <form onSubmit={handleSubmit}>
     
      <div className="form-group  mb-4">
          <label>Title</label>
          <textarea
            className="form-control"
            value={title}
            onChange={onChangeTitle}
            required
          ></textarea>
        </div>
        <div className="form-group  mb-4">
          <label>Project Leader</label>
          <input
            type="text"
            className="form-control"
            value={project_leader}
            onChange={onChangeProjectLeader}
            required
          />
        </div>


        <div className="form-group  mb-4">
          <label>Implementing Agency</label>
          <textarea
            className="form-control"
            value={implementing_agency}
            onChange={onChangeImplementing_agency}
            required
          ></textarea>
        </div>


  
    
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </Container>
   
  );
};

export default AddTutorial;
