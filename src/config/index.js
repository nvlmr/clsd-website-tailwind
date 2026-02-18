import axios from "axios";


const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||     window.location.hostname === "[::1]" || window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// export const API_URL = isLocalhost ? "http://localhost:3001/api/" || "http://192.168.31.25:3001/api/"  : "https://lspu.edu.ph/lake-sustainable-development/api/";

export const API_URL_AUTH  = isLocalhost ? "http://localhost:3001/api/auth/" : "https://lspu.edu.ph/lake-sustainable-development/api/";

//export const API_URL = isLocalhost ? "http://192.168.31.9:3000/" : "http://localhost:3000/" ;


//export const API_URL =   isLocalhost ? "http://clsd_api_v2/" || "http://clsd_api_v2/"  : "https://lspu.edu.ph/lake-sustainable-development/api/";
// export const API_URL =     "https://lspu.edu.ph/lake-sustainable-development-api";
//export const API_URL =     "http://localhost/clsd_api_v3";


// //

export const API_URL  = isLocalhost ? "http://localhost/clsd_api_v3" : "https://lspu.edu.ph/lake-sustainable-development-api";



export const  collection_content =  "/collections/getfileId/";
export const  event_content =  "/events/getfileId/";
export const  equipment_content =  "/equipments/getfileId/";
export const  research_team_content =  "/research_teams/getfileId/";
export const  clsd_project_content =  "/clsd_projects/getfileId/";

export const Axios = axios.create({
    withCredentials: true, 
     baseURL: API_URL,
});

