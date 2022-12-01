import React from "react";
import { Link } from "react-router-dom";

export default function DataGrid({ list }) {
  return (
    <>
      {list.map((project) => {
        return (
          <>
            <div classname="col-xl-3 col-lg-4 col-sm-6">
              <div classname="card hover-shadow-lg">
                <div classname="card-header border-0 pb-0">
                  <div classname="d-flex justify-content-between align-items-center">
                    <div>
                      <h6
                        classname="mb-0"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Start Date "
                      >
                        {project.start_date}
                      </h6>
                    </div>
                    <div classname="text-right">
                      <div classname="actions">
                        <h6
                          classname="mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Due Date "
                        >
                          {project.due_date}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="card-body text-center">
                  <h5 classname=" my-4">
                    <Link to={"project/" + project.id} classname="text-dark">
                      {project.name}
                    </Link>
                  </h5>
                  <div classname="avatar-group hover-avatar-ungroup mb-3">
                    <a href="#" classname="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-4.jpg"
                        classname=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Anthony B Renfroe"
                        aria-label="Anthony B Renfroe"
                      />
                    </a>
                    <a href="#" classname="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-3_1663328248_1663672251.jpg"
                        classname=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Keire"
                        aria-label="Keire"
                      />
                    </a>
                    <a href="#" classname="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-5.jpg"
                        classname=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Adrienne J Reed"
                        aria-label="Adrienne J Reed"
                      />
                    </a>
                  </div>
                  <span classname="clearfix"></span>
                  <span
                    className={
                      "badge fix_badges bg-success p-2 px-3 rounded " +
                      project.classes
                    }
                  >
                    {project.status}
                  </span>
                </div>
                <div classname="card-footer">
                  <div classname="actions d-flex justify-content-between px-4">
                    <div classname="action-btn bg-info ms-2">
                      <Link
                        to="edit"
                        classname="mx-3 btn btn-sm d-inline-flex align-items-center"
                        data-bs-whatever="Edit Project"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit"
                      >
                        {" "}
                        <span classname="text-white">
                          {" "}
                          <i classname="ti ti-edit"></i>
                        </span>
                      </Link>
                    </div>
                    <div classname="action-btn bg-warning ms-2">
                      <Link
                        to={"project/" + project.id}
                        classname="mx-3 btn btn-sm d-inline-flex align-items-center"
                        data-bs-whatever="View Project"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="View"
                      >
                        {" "}
                        <span classname="text-white">
                          {" "}
                          <i classname="ti ti-eye"></i>
                        </span>
                      </Link>
                    </div>
                    <div classname="action-btn bg-danger ms-2">
                      <button classname="mx-3 btn btn-sm d-flex align-items-center show_confirm">
                        <i
                          classname="ti ti-trash text-white"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Delete"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
