import axios from "axios";

import { url } from "./constant";


const API = axios.create({ baseURL: url });

export const logIn = (formData) => API.post("/api/v1/auth/login", formData);
export const signUp = (formData) => API.post("/api/v1/auth/register", formData);
