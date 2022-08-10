import axios from "axios";

//const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://buzzing-api.herokuapp.com" });

export const getTimeLinePosts = (id) => API.get(`/api/v1/posts/${id}/timeline`);
