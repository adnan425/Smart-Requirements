import React, { useState, useEffect,useContext  } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../Utllils/Header"; 
import SelectedProject from "./SelectedProject"; 
import projectContext from '../Context/ProjectContext'; 
import getProjects from "../Store/Projects";
export default function Home() {

  const redirect = useNavigate();
  console.log(getProjects());
  const context = useContext(projectContext);
  console.log("context : ", context); 


  // const { projects, setProjects } = context;
  const projects = [
    {
      "_id": "63810bc3c954f2e8c6b8de0c",
      "title": "Tender System",
      "isCompleted": false,
      "date": "2022-11-25T18:38:59.746Z"
    },
    {
      "_id": "63810c07c82ad69feddd646f",
      "title": "System",
      "isCompleted": false,
      "date": "2022-11-25T18:40:07.121Z"
    },
    {
      "_id": "63810c11c82ad69feddd6474",
      "title": "Smart Test",
      "isCompleted": false,
      "date": "2022-11-25T18:40:17.688Z"
    },
    {
      "_id": "63810cf2c82ad69feddd647a",
      "title": "Smart Requirem",
      "isCompleted": false,
      "date": "2022-11-25T18:44:02.584Z"
    },
    {
      "isCompleted": false,
      "_id": "63810d0ee687af763fd518ff",
      "title": "Smart Requirem34",
      "date": "2022-11-27T15:48:19.528Z"
    },
    {
      "_id": "638123380b27d0210d2af933",
      "title": "Smart Requiremts",
      "isCompleted": false,
      "date": "2022-11-25T20:19:04.335Z"
    },
    {
      "_id": "63812c418cad3c8365caf060",
      "title": "Projects Testing",
      "isCompleted": false,
      "date": "2022-11-25T20:57:37.184Z"
    }
  ];
 
  const [selectedProject, setselectedProject] = useState([]);
  const [isSelect, setIsSelect] = useState(false);

  const handleSelectProject = (project) => {
    // IF ADD PROJECT THEN SHOW ADD FORM
    if (project.title === "New Project") {
      setIsSelect(false);
      redirect("/manager/new");
    }

    // IF ALL PROJECT THEN SHOW ALL PROJECTS
    else if (project.title === "All Projects") {
      setIsSelect(false);
      redirect("/manager");
    } else {
      // UPDATE THE STATE
      setselectedProject(project);
      setIsSelect(true);

      //  CHECK ALL THE DETAILS
      console.log(selectedProject);
    }
  };

  useEffect(() => {
    // GET ALL THE DETAILS OF SELECTED PROJECT FROM SERVER
   
    //  SET  DETAILS OF SELECTED PROJECT FROM SERVER
    // setselectedProject(pro);
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <>
      <Sidebar items={projects} onProjectSelect={handleSelectProject} />
      <div className="main-content position-relative">
        <Header/>
        {!isSelect && <Outlet /> } 

      {/* {!isSelect && <SingleProject/> } */}
        {isSelect && <SelectedProject project={{selectedProject}} />}
        
      </div>
    </>
  );
}
