import React from "react";
import Header from "../Utllils/Header"; 
import Leftbar from "./Sidebar/Leftbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import SrsTemplate from './Pages/SrsTemplate';
import Suggesstion from './Pages/suggesstions';
import Settings from './Pages/Settings';
import Projects from './Pages/Projects';

export default function Admin() {
  return (
    <>
    
      <Leftbar />
      <div class="main-content position-relative">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/srs" element={<SrsTemplate/>} />
          <Route path="/suggestions" element={<Suggesstion/>} />
          <Route path="/settings" element={<Settings/>} />

          </Routes>
        {/* render components */}
      </div>
    </>
  );
}
