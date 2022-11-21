import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Components/Landing/Layout/LandingPage";
import Login from './Login/Login';
import Signup from './Signup';
import Manager from '../Components/ProjectManager/Home';
import Admin from '../Components/Admin/Admin';
import Stakeholder from '../Components/Stakeholder/Home';
export default function Home() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/manager" element={<Manager/>} />
        <Route path="/stakeholder" element={<Stakeholder/>} />
      </Routes>
    </>
  );
}
