import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const uploadImage = (data) => API.post("/api/v1/upload/", data);

export const uploadPost = (data) => API.post("/api/v1/posts/", data);
