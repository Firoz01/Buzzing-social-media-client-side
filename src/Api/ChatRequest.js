import axios from "axios";
import { url } from "./constant";
const API = axios.create({ baseURL: url });
export const userChats = (id) => API.get(`/api/v1/chat/${id}`);
