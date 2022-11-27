import React from "react";
import { Link } from "react-router-dom";
import ProjectGrid from "../../Utllils/DataGrid";
import ProjectTable from "../../Utllils/DataList";
export default function Projects() {
  const projectsList = [
    {
      id: 1,
      avatar:
        "https://demo.rajodiya.com/erpgo-saas/storage/projects/1626783039.png",
      name: "Codeigniter 4",
      status: "On Hold",
      progress: "76%",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor",
      members: {
        member_id: 1,
        member_name: "John",
        member_profile:
          "https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg",
      },
      start_date: "25 Apr 2021",
      due_date: "25 Apr 2021",
      classes: "bg-success",
    },
    {
      id: 2,
      avatar:
        "https://demo.rajodiya.com/erpgo-saas/storage/projects/1626783039.png",
      name: "Codeigniter 5",
      status: "On Hold",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor",
      progress: "16%",
      members: [
        {
          member_id: 1,
          member_name: "John",
          member_profile:
            "https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg",
        },
        {
          member_id: 2,
          member_name: "John",
          member_profile:
            "https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg",
        },
      ],
      start_date: "25 Apr 2021",
      due_date: "25 Apr 2021",
      classes: "bg-info",
    },
    {
      id: 3,
      avatar:
        "https://demo.rajodiya.com/erpgo-saas/storage/projects/1626783039.png",
      name: "Codeigniter 3",
      status: "On Hold",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor",
      progress: "36%",
      members: {
        member_id: 1,
        member_name: "John",
        member_profile:
          "https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg",
      },
      start_date: "25 Apr 2021",
      due_date: "In progress",
      classes: "bg-primary",
    },
  ];
  
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="page-header-title">
                    <h4 className="m-b-10"> {Projects}</h4>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">{Projects}</li>
                  </ul>
                </div>
                <div className="col">
                  <div className="float-end">
                    <a
                      href="https://demo.rajodiya.com/erpgo-saas/project/list" 
                      data-bs-toggle="tooltip"
                      title="List View"
                      className="btn btn-sm btn-primary"
                      data-bs-original-title="List View"
                    >
                      <i className="ti ti-list"></i>
                    </a>
  

                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row min-750" id="project_view">
            <div className="row">
              <ProjectTable list={projectsList} />
              <ProjectGrid list={projectsList} />
            </div>
          </div>
          {/* <!-- [ Main Content ] end --> */}
        </div>
      </div>
    </div>
  );
}
