import api from "./api";

export async function registerUser(userData) {
  const response = await api.post("register/", userData);
  return response.data;
}

export async function loginUser(userData) {
  const response = await api.post("login/", userData);
  return response.data;
}

export async function getProfile() {
  const response = await api.get("profile/");
  return response.data;
}