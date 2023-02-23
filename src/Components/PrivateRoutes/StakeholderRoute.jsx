import React from 'react';
import { Navigate } from 'react-router-dom'; 
import authService from '../Services/authService';

const StakeholderRoute = ({ children }) => {
  const token = localStorage.getItem("token") || "";
  const user = authService.getCurrentUser();

  if (!token) {
    return <Navigate to="/login" />;
  } else if (user?.role === 'stakeholder') {
    return children;
  }
  return <Navigate to="/notfound" />;
}
export default StakeholderRoute;
