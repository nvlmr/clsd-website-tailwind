/*
import axios from "axios";

const API_URL = "http://localhost:5001/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
/*
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
*/
/*
getCurrentUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    const { exp } = this.parseJwt(user.accessToken);

    if (exp * 1000 < Date.now()) {
      // Token has expired, remove user from localStorage and return null
      localStorage.removeItem("user");
      return null;
    }

    return user;
  }

  return null;
}





const changePassword = (oldPassword, newPassword, accessToken = null) => {
  const headers = {};
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return axios
    .put(API_URL + "changePassword", {
      oldPassword,
      newPassword,
    }, {
      headers,
    })
    .then((response) => {
      return response.data;
    });
};



const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  changePassword,
};

export default AuthService;

*/

import axios from "axios";




import { API_URL_AUTH} from "../config/index"


//const API_URL = "http://localhost:3001/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL_AUTH + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL_AUTH + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    const { exp } = parseJwt(user.accessToken);

    if (exp * 1000 < Date.now()) {
      // Token has expired, remove user from localStorage and return null
      localStorage.removeItem("user");
      return null;
    }

    return user;
  }

  return null;
};

const parseJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload);
};

const changePassword = (oldPassword, newPassword, accessToken = null) => {
  const headers = {};
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return axios
    .put(
      API_URL_AUTH + "changePassword",
      {
        oldPassword,
        newPassword,
      },
      {
        headers,
      }
    )
    .then((response) => {
      return response.data;
    });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  changePassword,
};

export default AuthService;
