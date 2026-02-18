import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/index"

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "avp", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "avp", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `avp/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `avp/${id}`,  data ,{ headers: authHeader() });
};

const remove = (id, data) => {
  return axios.delete(API_URL + `avp/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const findByTitle = (title) => {
  return axios.get(API_URL + `avp?title=${title}` , { headers: authHeader() } );
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
