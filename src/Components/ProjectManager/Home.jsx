import React, { useState, useEffect,useContext  } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../Utllils/Header"; 
import SelectedProject from "./SelectedProject"; 
import projectContext from '../Context/ProjectContext'; 
import auth from "../Services/authService";
export default function Home() {

  const redirect = useNavigate();

  const context = useContext(projectContext);
  console.log("context : ", context);
const autUser = auth.getCurrentUser();
console.log(autUser);
  const [user, setUser] = useState(auth.getCurrentUser); 
// console.log(user);
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
        <Header user={user} />
        {!isSelect && <Outlet /> } 

      {/* {!isSelect && <SingleProject/> } */}
        {isSelect && <SelectedProject project={{selectedProject}} />}
        
      </div>
    </>
  );
}
