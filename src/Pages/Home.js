import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import Admin from '../Components/Admin/Admin';
import Users from "../Components/Admin/Users";
import Settings from "../Components/Admin/Settings";
import Projects from "../Components/Admin/Projects";
import Dashboard from "../Components/Admin/Dashboard";
import SrsTemplate from "../Components/Admin/PagesHelp/SrsTemplate";
import Suggesstion from "../Components/Admin/PagesHelp/suggesstions";

import Manager from '../Components/ProjectManager/Home';
import NewProject from "../Components/ProjectManager/NewProject";
import ManagerProject from '../Components/ProjectManager/Projects'
import Stakeholder from '../Components/Stakeholder/Home';
import Elicitation from "../Components/ProjectManager/Elicitation";
import Phase2 from "../Components/ProjectManager/Phase2";
import Logout from './../Components/Utllils/Logout';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = lazy(()=>import('./Login'));

export default function Home() {
  return (
    <> 
    <ToastContainer/>
    <Suspense fallback={<div>Loading...</div>}>


      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword/>} />

        {/* admin routes */}
        <Route path="admin" element={<Admin />} >
          <Route index element={<Dashboard />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="users" element={<Users />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="srs" element={<SrsTemplate />} />
          <Route exact path="suggestions" element={<Suggesstion />} />
          <Route exact path="settings" element={<Settings />} />
        </Route>

        <Route path="manager" element={<Manager />} >
          <Route  index element={<ManagerProject/>} />
          <Route  exact path="new" element={<NewProject/>} />
          <Route path="phase1" element={<Elicitation/>} />
          <Route path="phase2" element={<Phase2/>} />
          <Route exact path="settings" element={<Settings />} />

        </Route>


        <Route path="/stakeholder" element={<Stakeholder />} />
      </Routes>

      </Suspense>

    </>
  );
}
