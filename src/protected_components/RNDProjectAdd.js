import React, { useState } from "react";
import UserService from "../services/rnd.service";
import { Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

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

  const [tags, setTags] = useState([
    { id: 1, name: "R&D Project" },
    { id: 2, name: "Non R&D Project" },
    { id: 3, name: "In-house Extention Project" },
    // { id: 4, name: 'Opportunities' },
    // { id: 5, name: 'Newly Approve R&D Projects' }
    // Add more tags as needed
  ]);

  const [selectedTag, setSelectedTag] = useState(null);

  const onChangeTag = (tagId) => {
    setSelectedTag(tagId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("project_leader", project_leader);
    formData.append("implementing_agency", implementing_agency);
    formData.append("published", published);
    formData.append("archived", archived);

    const selectedTagName = selectedTag
      ? tags.find((tag) => tag.id === selectedTag).name
      : "";
    formData.append("tags", selectedTagName);

    UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/rnd_project_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/rnd_project_list");
      });
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <label>
            <strong>
              <h4>Add R&D Project</h4>
            </strong>
          </label>
        </div>
        <div>
          <Link to="/rnd_project_list">
            <button className="m-3 btn btn-sm btn-primary"> Back</button>
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          {tags.map((tag) => (
            <div className="form-group form-check" key={tag.id}>
              <input
                type="radio"
                className="form-check-input"
                checked={selectedTag === tag.id}
                onChange={() => onChangeTag(tag.id)}
                id={tag.id.toString()}
              />
              <label className="form-check-label" htmlFor={tag.id.toString()}>
                {tag.name}
              </label>
            </div>
          ))}
        </div>

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
