import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/index"

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "user_role", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "user_role", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `user_role/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `user_role/${id}`,  data ,{ headers: authHeader() });
};

const remove = (id, data) => {
  return axios.delete(API_URL + `user_role/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const findByTitle = (title) => {
  return axios.get(API_URL + `user_role?title=${title}` , { headers: authHeader() } );
};



const UserService = {
  
  getAll,
  get,
  create,
  update,
  remove,

  findByTitle
};





export default UserService;
