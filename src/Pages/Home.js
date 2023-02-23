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
import Documentation from "../Components/ProjectManager/Documentation";
import ManagerSettings from './../Components/ProjectManager/Settings';
import Pdf from './../Components/ProjectManager/Pdf';
import Analysis from "../Components/ProjectManager/Analysis";


import Stakeholder from '../Components/Stakeholder/Home';
import StakeDashboard from '../Components/Stakeholder/Dashboard';
import StakeholderSettings from './../Components/Stakeholder/Settings';

import ManagerRoutes from "../Components/PrivateRoutes/ManagerRoute";
import AdminRoute from "../Components/PrivateRoutes/AdminRoute";
import StakeholderRoute from "../Components/PrivateRoutes/StakeholderRoute";



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
            <Route path="admin" element={<AdminRoute><Admin /></AdminRoute>} >
              <Route index element={<AdminRoute><Dashboard /></AdminRoute>} />
              <Route exact path="dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
              <Route exact path="users" element={<AdminRoute><Users /></AdminRoute>} />
              <Route exact path="projects" element={<AdminRoute><Projects /></AdminRoute>} />
              <Route exact path="settings" element={<AdminRoute><Settings /></AdminRoute>} />
            </Route>

            <Route path="manager" element={<ManagerRoutes><Manager /></ManagerRoutes>} >
              <Route index element={<ManagerRoutes><ManagerProject /></ManagerRoutes>} />
              <Route exact path="new" element={<ManagerRoutes><NewProject /></ManagerRoutes>} />
              <Route path="analysis" element={<ManagerRoutes><Analysis /></ManagerRoutes>} />
              <Route path="phase1" element={<ManagerRoutes><Elicitation /></ManagerRoutes>} />
              <Route path="documentation" element={<ManagerRoutes><Documentation /></ManagerRoutes>} />
              <Route path="pdf" element={<ManagerRoutes><Pdf /></ManagerRoutes>} />
              <Route exact path="settings" element={<ManagerRoutes><ManagerSettings /></ManagerRoutes>} />
            </Route>


            <Route path="/stakeholder" element={<StakeholderRoute><Stakeholder /></StakeholderRoute>} >
              <Route index element={<StakeholderRoute><StakeDashboard /></StakeholderRoute>} />
              <Route exact path="settings" element={<StakeholderRoute><StakeholderSettings /></StakeholderRoute>} />
            </Route>
          </Routes>
        </ConfigProvider>
      </Suspense>
    </>
  );
}
