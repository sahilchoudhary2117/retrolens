import axios from "axios";

  if(window.location.hostname === "localhost"){
    baseURL: "http://127.0.0.1:8000/api/"
  } else {
    baseURL: "https://retrolens-backend.onrender.com/api/"
  }

const api = axios.create({
 
});

// Automatically attach JWT token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Delete Photo
export const deletePhoto = (id) => {
  return api.delete(`photos/${id}/`);
};

export default api;