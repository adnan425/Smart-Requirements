import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import authService from '../Services/authService';

const AdminRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token") || "";
    let user ;
    if(token){
        user = authService.getCurrentUser();
    }
    console.log(user);
    return (
        <Route {...rest} render={props => {
            if (token) { 
                if(user){

                }
                
                return <Component {...props} />; 
            }
            return <Redirect to={{ pathname: '/login' }} />;
        }} />);
}
AdminRoute.propTypes = {
    component: PropTypes.elementType
};
export default AdminRoute