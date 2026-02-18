import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/index"

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "tag", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "tag", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `tag/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `tag/${id}`,  data ,{ headers: authHeader() });
};

const remove = (id, data) => {
  return axios.delete(API_URL + `tag/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const findByTitle = (title) => {
  return axios.get(API_URL + `tag?title=${title}` , { headers: authHeader() } );
};


//public route
function getAllPublic() {
  return axios.get(API_URL + "public_tag"  );
}

const getPublic = id => {
  return axios.get(API_URL + `public_tag/${id}`  );
};

const findByTitlePublic = (title) => {
  return axios.get(API_URL + `public_tag t?title=${title}`  );
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
