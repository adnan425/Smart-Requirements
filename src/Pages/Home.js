import "react-toastify/dist/ReactToastify.css";
import './../App.css';
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from 'react-avatar';

import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import Logout from './../Components/Utllils/Logout';

import Admin from '../Components/Admin/Admin';
import Users from "../Components/Admin/Users";
import Settings from "../Components/Admin/Settings";
import Projects from "../Components/Admin/Projects";
import Dashboard from "../Components/Admin/Dashboard"; 

import Manager from '../Components/ProjectManager/Home';
import NewProject from "../Components/ProjectManager/NewProject";
import ManagerProject from '../Components/ProjectManager/Projects'
import Elicitation from "../Components/ProjectManager/Elicitation";
import Phase2 from "../Components/ProjectManager/Phase2";
import ManagerSettings from './../Components/ProjectManager/Settings'; 
import Pdf from './../Components/ProjectManager/Pdf'; 


import Stakeholder from '../Components/Stakeholder/Home';
import StakeDashboard from '../Components/Stakeholder/Dashboard';
import StakeholderSettings from './../Components/Stakeholder/Settings'; 
import Analysis from "../Components/ProjectManager/Analysis";


const Login = lazy(() => import('./Login'));

export default function Home() {
  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={localStorage.getItem('themeMode') || 'light'}
      />
      {/* Same as */}
      {/* <ToastContainer /> */}
      <Suspense fallback={<div>Loading...</div>}>

        <ConfigProvider colors={['#685ee5', '#4ebbd3', '#6fd943', '#685ee5']}>
          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />

            {/* admin routes */}
            <Route path="admin" element={<Admin />} >
              <Route index element={<Dashboard />} />
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route exact path="users" element={<Users />} />
              <Route exact path="projects" element={<Projects />} /> 
              <Route exact path="settings" element={<Settings />} />
            </Route>

            <Route path="manager" element={<Manager />} >
              <Route index element={<ManagerProject />} />
              <Route exact path="new" element={<NewProject />} />
              <Route path="analysis" element={<Analysis />} />
              <Route path="phase1" element={<Elicitation />} />
              <Route path="phase2" element={<Phase2 />} />
              <Route path="pdf" element={<Pdf />} />
              <Route exact path="settings" element={<ManagerSettings />} />
            </Route>


            <Route path="/stakeholder" element={<Stakeholder />} >
              <Route index element={<StakeDashboard />} />
              <Route exact path="settings" element={<StakeholderSettings />} /> 
              

            </Route>
          </Routes>
        </ConfigProvider>
      </Suspense>
    </>
  );
}
