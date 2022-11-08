import React from "react";
import { Link } from "react-router-dom";
import ProjectGrid from "../../Utllils/ProjectGrid";
import ProjectTable from "../../Utllils/ProjectTable";
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
                    <h4 className="m-b-10"> Projects</h4>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">Projects</li>
                  </ul>
                </div>
                <div className="col">
                  <div className="float-end">
                    <a
                      href="https://demo.rajodiya.com/erpgo-saas/project/list"
                      data-bs-toggle="tooltip"
                      title=""
                      className="btn btn-sm btn-primary"
                      data-bs-original-title="List View"
                    >
                      <i className="ti ti-list"></i>
                    </a>

                    <a
                      href="#"
                      className="btn btn-sm btn-primary action-item mx-1"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti ti-filter"></i>
                    </a>
                    <div
                      className="dropdown-menu  dropdown-steady"
                      id="project_sort"
                    >
                      <a
                        className="dropdown-item active"
                        href="#"
                        data-val="created_at-desc"
                      >
                        <i className="ti ti-sort-descending"></i>Newest
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-val="created_at-asc"
                      >
                        <i className="ti ti-sort-ascending"></i>Oldest
                      </a>

                      <a
                        className="dropdown-item"
                        href="#"
                        data-val="project_name-desc"
                      >
                        <i className="ti ti-sort-descending-letters"></i>From
                        Z-A
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-val="project_name-asc"
                      >
                        <i className="ti ti-sort-ascending-letters"></i>From A-Z
                      </a>
                    </div>

                    <a
                      href="#"
                      className="btn btn-sm btn-primary action-item"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="btn-inner--icon">Status</span>
                    </a>
                    <div
                      className="dropdown-menu project-filter-actions dropdown-steady"
                      id="project_status"
                    >
                      <a
                        className="dropdown-item filter-action filter-show-all pl-4 active"
                        href="#"
                      >
                        Show All
                      </a>
                      <a
                        className="dropdown-item filter-action pl-4"
                        href="#"
                        data-val="in_progress"
                      >
                        In Progress
                      </a>
                      <a
                        className="dropdown-item filter-action pl-4"
                        href="#"
                        data-val="on_hold"
                      >
                        On Hold
                      </a>
                      <a
                        className="dropdown-item filter-action pl-4"
                        href="#"
                        data-val="complete"
                      >
                        Complete
                      </a>
                      <a
                        className="dropdown-item filter-action pl-4"
                        href="#"
                        data-val="canceled"
                      >
                        Canceled
                      </a>
                    </div>

                  
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
