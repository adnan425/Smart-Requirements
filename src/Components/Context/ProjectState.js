import React, { useState } from 'react'
import ProjectContext from './ProjectContext'
const ProjectState = (props) => {
    const initialProjects = [
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
    const [projects, setProjects] = useState(initialProjects);
    return (
        <ProjectContext.Provider value={{ projects, setProjects }}>
            {props.children}
        </ProjectContext.Provider>
    )
}
export default ProjectState;

