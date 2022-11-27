import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import Signup from './Signup';
import LandingPage from "../Components/Landing/Layout/LandingPage";
import Admin from '../Components/Admin/Admin';
import Users from "../Components/Admin/Pages/Users";
import Settings from "../Components/Admin/Pages/Settings";
import Projects from "../Components/Admin/Pages/Projects";
import Dashboard from "../Components/Admin/Pages/Dashboard";
import SrsTemplate from "../Components/Admin/Pages/SrsTemplate";
import Suggesstion from "../Components/Admin/Pages/suggesstions";

import Manager from '../Components/ProjectManager/Home';
import Stakeholder from '../Components/Stakeholder/Home';

export default function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

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
          <Route  index element={<Projects/>} />
        </Route>


        <Route path="/stakeholder" element={<Stakeholder />} />
      </Routes>


    </>
  );
}
