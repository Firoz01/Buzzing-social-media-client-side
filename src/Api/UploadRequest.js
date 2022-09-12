import axios from "axios";
import { url } from "./constant";


const API = axios.create({ baseURL: url });



export const uploadPost = (data) => {
  return API.post("/api/v1/posts/", data);
};

