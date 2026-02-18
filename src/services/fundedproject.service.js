import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/index"

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "publication", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "publication", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `publication/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `publication/${id}`,  data ,{ headers: authHeader() });
};

const remove = (id, data) => {
  return axios.delete(API_URL + `publication/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const findByTitle = (title) => {
  return axios.get(API_URL + `publication?title=${title}` , { headers: authHeader() } );
};

function getAllPublic() {
  return axios.get(API_URL + "/funded_projects/getAll"  );
}

const getPublic = id => {
  return axios.get(API_URL + `/funded_projects/getId/${id}`  );
};

const findByTitlePublic = (title) => {
  return axios.get(API_URL + `/funded_projects/getTitle/${title}`  );
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
