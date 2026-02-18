import axios from "axios";

import { API_URL } from "../config/index";



const findByTitle = (title) => {
  return axios.get(API_URL + `api-iecs.php?api=public_event=${title}`  );
};

function getAllPublic() {
  return axios.get(API_URL + "/iecs/getAll"  );
}

const getPublic = id => {
  return axios.get(API_URL + `/iecs/getId/${id}`  );
};

const findByTitlePublic = (title) => {
  return axios.get(API_URL + `/iecs/getTitle/${title}`  );
};

const UserService = {
  
  findByTitle,

  getAllPublic,
  getPublic,
  findByTitlePublic

};





export default UserService;
