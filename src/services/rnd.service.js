import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/index"

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "rnd_project", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "rnd_project", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `rnd_project/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `rnd_project/${id}`,  data ,{ headers: authHeader() });
};

const remove = (id, data) => {
  return axios.delete(API_URL + `ernd_projectvent/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const findByTitle = (title) => {
  return axios.get(API_URL + `rnd_project?title=${title}` , { headers: authHeader() } );
};

function getAllPublic() {
  return axios.get(API_URL + "public_rnd_project"  );
}

const getPublic = id => {
  return axios.get(API_URL + `public_rnd_project/${id}`  );
};

const findByTitlePublic = (title) => {
  return axios.get(API_URL + `public_rnd_project?title=${title}`  );
};

const UserService = {
  
  getAll,
  get,
  create,
  update,
  remove,

  findByTitle,

  getAllPublic,
  getPublic,
  findByTitlePublic

};





export default UserService;
