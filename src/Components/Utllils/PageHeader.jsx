import React from "react";

export default function PageHeader({handleView = ""}) {
  return (
    <div className="page-header">
      <div className="page-block">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <h4 className="m-b-10">
                  {" "}
                  <div className="d-inline-block">
                    <h5 className="h4 d-inline-block font-weight-400 mb-0">
                      Project Reports
                    </h5>
                  </div>
                </h4>
              </div>
              <div className="col-auto">
                <button
                  onClick={handleView}
                  className="btn btn-sm btn-primary btn-icon m-1"
                  data-bs-toggle="tooltip"
                  data-bs-original-title="Grid View"
                >
                  <i className="ti ti-layout-grid text-white"></i>
                </button>
                <a
                  href="https://demo.rajodiya.com/crmgo-saas/project/create"
                  className="btn btn-sm btn-primary btn-icon m-1"
                  data-bs-whatever="Create New Project"
                  data-bs-toggle="tooltip"
                  data-bs-original-title="Create"
                >
                  {" "}
                  <i className="ti ti-plus text-white"></i>
                </a>
              </div>
            </div>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"> </li>
              <a href=""></a>
              <li className="breadcrumb-item">
                <a href="">
                  Dashboard
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="https://demo.rajodiya.com/crmgo-saas/project_report">
                  Project Report
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Project Details
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
