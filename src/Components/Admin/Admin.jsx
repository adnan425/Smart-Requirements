import React from "react";
import Header from "../Utllils/Header";
import Leftbar from "./Sidebar/Leftbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import SrsTemplate from "./Pages/SrsTemplate";
import Suggesstion from "./Pages/suggesstions";
import Settings from "./Pages/Settings";
import Projects from "./Pages/Projects";

export default function Admin() {
  return (
    <>
      <Leftbar />
      <div class="main-content position-relative">
        <Header />
        <Routes>
          <Route exact path="admin/dashboard" element={<Dashboard />}>
            <Route exact path="users" element={<Users />} />
            <Route exact path="projects" element={<Projects />} />
            <Route exact path="srs" element={<SrsTemplate />} />
            <Route exact path="suggestions" element={<Suggesstion />} />
            <Route exact path="settings" element={<Settings />} />
          </Route>
        </Routes>
        {/* render components */}
      </div>
    </>
  );
}
