import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../Utllils/Header";
import SelectedProject from "./SelectedProject"; 
import { useDispatch } from "react-redux";
import { getProjectById } from "../Store/Projects/projects";
import http from "../Services/httpService";
import { toast } from "react-toastify";

const apiUrl = "http://localhost:3004/api";

export default function Home() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const [isSelect, setIsSelect] = useState(false);
  const [ projects, setProjects ] = useState([]); 

  const getProjects = ()=>{
    try {
      http.get(`${apiUrl}/projects/me`).then(({data})=>{
        setProjects(data);
      }).catch((err)=>{console.log(err)});
  } catch (error) {
      toast.error( error.message);
  }
  }
  useEffect(()=>{
    getProjects();
  }, []); 

 

  const handleSelectProject = (project) => {
    // IF ADD PROJECT THEN SHOW ADD FORM
    switch (project.title) {
      case "New Project": {
        setIsSelect(false);
        redirect("/manager/new");
        break;
      }
      case "All Projects":{
        setIsSelect(false);
        redirect("/manager");
        break;
      }
      case "Settings":{
        setIsSelect(false);
        redirect("/manager/settings");
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
