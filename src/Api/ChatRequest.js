import axios from "axios";
import { url } from "./constant";
const API = axios.create({ baseURL: url });
export const userChats = (id) => API.get(`/api/v1/chat/${id}`);
export const createChats = (data) => API.post(`/api/v1/chat/`, data);
export const checkChatsAvailabe = (firstId, secondId) =>
  API.get(`/api/v1/chat/find/${firstId}/${secondId}`);
