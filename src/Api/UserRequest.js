import axios from "axios";

import { url } from "./constant";

const API = axios.create({ baseURL: url });

export const getUser = (userId) => API.get(`/api/v1/user/${userId}`);

export const updateUser = (id, formData) =>
  API.put(`/api/v1/user/${id}`, formData);

export const getAllUser = () => API.get(`/api/v1/user/`);

export const followUser = (id, data) =>
  API.put(`/api/v1/user/${id}/follow`, data);

export const unfollowUser = (id, data) =>
  API.put(`/api/v1/user/${id}/unfollow`, data);
