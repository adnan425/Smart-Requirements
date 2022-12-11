import React, { useState } from "react";
import DataGrid from "../../Utllils/DataGrid";
import DataList from "../../Utllils/DataList";
import PageHeader from "../../Utllils/PageHeader";
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
  const [gridView, setGridView] = useState(true);
  // For change the view  | GRID VIEW | LIST VIEW
  const handleClick = () => {
    gridView === true ? setGridView(false) : setGridView(true);
  };
  return (
    <>
      <div className="page-content">
        <div className="dash-container">
          <div className="dash-content">
            <PageHeader
              handleView={handleClick}
              title="All Projects"
              icon={gridView ? "ti ti-layout-grid" : "ti ti-list"}
            />
            <div className="row min-750" id="project_view">
              <div className="row">
                {!gridView && <DataList list={projectsList} />}
                {gridView && <DataGrid list={projectsList} />}
              </div>
            </div>
            {/* <!-- [ Main Content ] end --> */}
          </div>
        </div>
      </div>
    </>
  );
}
