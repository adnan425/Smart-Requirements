import React from 'react';
import { Navigate } from 'react-router-dom'; 
import authService from '../Services/authService';

const ManagerRoute = ({ children }) => {
  const token = localStorage.getItem("token") || "";
  const user = authService.getCurrentUser();

  if (!token) {
    return <Navigate to="/login" />;
  } else if (user?.role === 'manager') {
    return children;
  }
  return <Navigate to="/notfound" />;
}
 
export default ManagerRoute;
