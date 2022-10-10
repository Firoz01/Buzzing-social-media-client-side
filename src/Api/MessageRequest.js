import axios from "axios";

import { url } from "./constant";

const API = axios.create({ baseURL: url });

export const getMessages = (id) => API.get(`/api/v1/message/${id}`);

export const addMessage = (data) => API.post(`/api/v1/message/`, data);
