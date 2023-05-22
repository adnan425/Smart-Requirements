import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../Utllils/Header";
import { useDispatch } from "react-redux";
import { getProjectById } from "../Store/Projects/projects";
import http from "../Services/httpService";
import { toast } from "react-toastify";
import Documentation from "./Documentation";
const apiUrl = "http://localhost:3004/api";

export default function Home() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const [isSelect, setIsSelect] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    try {
      http
        .get(`${apiUrl}/projects/stakeholder`)
        .then(({ data }) => {
          console.log(data);
          setProjects(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  const handleSelectProject = (project) => {
    // IF ADD PROJECT THEN SHOW ADD FORM
    switch (project.title) {
      case "All Projects": {
        setIsSelect(false);
        redirect("/reviewer");
        break;
      }
      default: {
        // UPDATE THE STATE
        dispatch(getProjectById(project._id));
        setIsSelect(true);
        break;
      }
    }
  };
  const IsSelectClick = () => {
    setIsSelect(!isSelect);
  };
  return (
    <>
      {projects && (
        <Sidebar items={projects} onProjectSelect={handleSelectProject} />
      )}

      <div className="main-content position-relative">
        <Header />
        {!isSelect && <Outlet />}
        {isSelect && <Documentation handlePhase={IsSelectClick} />}
      </div>
    </>
  );
}
