import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../Utllils/Header";
import { useSelector, useDispatch } from "react-redux";
import { getProjectById, getStakeholderProjects } from "../Store/Projects/projects";
import SelectedProject from "./SelectedProject";

export default function Home() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const projects = useSelector((c) => c.projects.list);
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    dispatch(getStakeholderProjects());
  }, [dispatch]);
  const handleSelectProject = (project) => {
    // IF ADD PROJECT THEN SHOW ADD FORM
    switch (project.title) {

      case "My Projects": {
        setIsSelect(false);
        redirect("/stakeholder");
        break;
      }
      case "Settings": {
        setIsSelect(false);
        redirect("/stakeholder/settings");
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
  }
  return (
    <>
      {
        projects && <Sidebar items={projects} onProjectSelect={handleSelectProject} />
      }
      <div className="main-content position-relative">
        <Header />
        {!isSelect && <Outlet />}
        {isSelect && <SelectedProject handlePhase={IsSelectClick} />}
      </div>
    </>
  );
}
