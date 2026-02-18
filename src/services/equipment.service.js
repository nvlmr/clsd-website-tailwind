import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/index"

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "equipment", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "equipment", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `equipment/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `equipment/${id}`,  data ,{ headers: authHeader() });
};

const remove = (id, data) => {
  return axios.delete(API_URL + `equipment/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const findByTitle = (title) => {
  return axios.get(API_URL + `equipment?title=${title}` , { headers: authHeader() } );
};

function getAllPublic() {
  return axios.get(API_URL + "/equipments/getAll"  );
}

const getPublic = id => {
  return axios.get(API_URL + `/equipments/getId/${id}`  );
};

const findByTitlePublic = (title) => {
  return axios.get(API_URL + `/equipments/getTitle/${title}`  );
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
