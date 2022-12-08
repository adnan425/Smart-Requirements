import jwtDecode from "jwt-decode";
import http from "./httpService";
// import { apiUrl } from './../../config.json';
import { useState } from 'react';
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
export async function getCurrentUser() {
  try {
    const { data }= await http.get('http://localhost:3004/api/users/me');
    return await data;
  
  } catch (ex) {
    return null;
  }
}
export default {
  login,
  Logout,
  getCurrentUser,
  getJWT
};
