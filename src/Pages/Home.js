import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Components/Landing/Layout/LandingPage";
import Login from './Login/Login';
import Signup from './Signup';
export default function Home() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}
