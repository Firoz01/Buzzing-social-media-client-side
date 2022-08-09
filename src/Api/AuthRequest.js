import axios from "axios";

//const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://buzzing-api.herokuapp.com" });

export const logIn = (formData) => API.post("/api/v1/auth/login", formData);
export const signUp = (formData) => API.post("/api/v1/auth/register", formData);
