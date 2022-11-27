import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../Utllils/Header";
import Projects from "./Projects";
import SingleProject from "./SingleProject";
import NewProject from "./NewProject";
import SelectedProject from "./SelectedProject";
export default function Home() {
  const redirect = useNavigate();
  // const [projects, setProjects] = useState('');
  const projects = [
    {
      _id: 2,
      title: "Smart Tender System",
    },

    {
      _id: 3,
      title: "Smart Requirements",
    },
  ];
  const [selectedProject, setselectedProject] = useState({});

  const handleSelectProject = (project) => {  
    
    // IF ADD PROJECT THEN SHOW ADD FORM
    if(project.title !== "New Project") 
      redirect('/new project');
    
    // IF ALL PROJECT THEN SHOW ALL PROJECTS
    if(project.title === "All Projects")
      redirect('/manager');

    // UPDATE THE STATE
    

    //  CHECK ALL THE DETAILS
    console.log(selectedProject);
  };
  // console.log(selectedProject);

  useEffect(() => {
    // GET ALL THE DETAILS OF SELECTED PROJECT FROM SERVER
    const pro = {
      id: 12322,
      title: "Smart Requirements",
      description:
        "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.",
      manager: {
        id: "943",
        name: "adnan",
      },
      stakeholders: [
        {
          id: "534",
          name: "Stakeholder1",
        },
        {
          id: "534",
          name: "Stakeholder1",
        },
        {
          id: "534",
          name: "Stakeholder1",
        },
      ],
      status: "In progress",
      data: "2022-02-21",
      due_data: "In prgresss",
    };
    //  SET  DETAILS OF SELECTED PROJECT FROM SERVER
    // setselectedProject(pro); 
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <>
      <Sidebar items={projects} onProjectSelect={handleSelectProject} />
      <div className="main-content position-relative">
        <Header />
        <Outlet/>
        {/* <Projects />    */}
        {/* <SingleProject/> */}

        {/* <SelectedProject /> */}
      </div>
    </>
  );
}
