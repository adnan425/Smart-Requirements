import http from "./httpService"; 
import jwtDecode from "jwt-decode";
const apiUrl = "http://localhost:3004/api";
const apiEndPoint = apiUrl + "/auth";

http.setJWT(getJWT());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem("token", jwt);
}

export function getJWT(){
    return localStorage.getItem("token");
}
export function Logout() {
  localStorage.removeItem("token");
}
export function getCurrentUser() {
  try {
     return  jwtDecode(getJWT());
  
  } catch (ex) {
    return null;
  }
};
export default {
  login,
  Logout,
  getCurrentUser,
  getJWT
};
