import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import authService from '../Services/authService';

const ManagerRoutes = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token") || "";
    let user ;
    if(token){
        user = authService.getCurrentUser();
    }
    console.log(user);
    return (
        <Route {...rest} render={props => {
            if (token) { 
                 
                return <Component {...props} />; 
            }
            return <Navigate to={{ pathname: '/login' }} />;
        }} />);
}
ManagerRoutes.propTypes = {
    component: PropTypes.elementType
};
export default ManagerRoutes