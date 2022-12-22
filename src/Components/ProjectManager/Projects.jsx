import React, { useState } from "react";
import DataList from "../Utllils/DataList";
import DataGrid from "../Utllils/DataGrid";
import PageHeader from "../Utllils/PageHeader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Projects() {
  const projectsList = useSelector((c) => c.projects.list);
  const [gridView, setGridView] = useState(true);
  console.log(projectsList);
  return (
    <>
      <div className="page-content">
        <div className="dash-container">
          <div className="dash-content">
            <PageHeader handleView={handleClick => { setGridView(!gridView); }} title="All Projects" icon={(gridView) ? "ti ti-layout-grid" : "ti ti-list"} />
            <div className="col-xl-12 col-lg-12 col-md-12 d-flex Palign-items-center justify-content-end mb-3">
              <div className="row">
                <div className="btn-group btn-group-toggle" data-toggle="buttons" aria-label="Basic radio toggle button group">
                  <label className="btn btn-primary month-label active">
                    <Link className="text-white">  Pending </Link>

                  </label>

                  <label className="btn btn-primary year-label">
                    <Link className="text-white">Completed</Link>

                  </label>
                </div>
              </div>
            </div>
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
