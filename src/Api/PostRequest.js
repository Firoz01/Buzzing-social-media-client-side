import axios from "axios";
import { url } from "./constant";


const API = axios.create({ baseURL: url });

export const getTimeLinePosts = (id) => API.get(`/api/v1/posts/${id}/timeline`);
