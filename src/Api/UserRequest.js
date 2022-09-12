import axios from "axios";

import { url } from "./constant";

const API = axios.create({ baseURL: url });

export const getUser = (userId) => API.get(`/api/v1/user/${userId}`);

export const updateUser = (id, formData) =>
  API.put(`/api/v1/user/${id}`, formData);
