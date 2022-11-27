import React from "react";
import { Link } from "react-router-dom";

export default function DataGrid({ list }) {
  return (
    <>
      {list.map((project) => {
        return (
          <>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card hover-shadow-lg">
                <div class="card-header border-0 pb-0">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h6
                        class="mb-0"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Start Date "
                      >
                        {project.start_date}
                      </h6>
                    </div>
                    <div class="text-right">
                      <div class="actions">
                        <h6
                          class="mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Due Date "
                        >
                          {project.due_date}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h5 class=" my-4">
                    <Link to={"project/" + project.id} class="text-dark">
                      {project.name}
                    </Link>
                  </h5>
                  <div class="avatar-group hover-avatar-ungroup mb-3">
                    <a href="#" class="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-4.jpg"
                        class=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Anthony B Renfroe"
                        aria-label="Anthony B Renfroe"
                      />
                    </a>
                    <a href="#" class="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-3_1663328248_1663672251.jpg"
                        class=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Keire"
                        aria-label="Keire"
                      />
                    </a>
                    <a href="#" class="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-5.jpg"
                        class=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Adrienne J Reed"
                        aria-label="Adrienne J Reed"
                      />
                    </a>
                  </div>
                  <span class="clearfix"></span>
                  <span
                    className={
                      "badge fix_badges bg-success p-2 px-3 rounded " +
                      project.classes
                    }
                  >
                    {project.status}
                  </span>
                </div>
                <div class="card-footer">
                  <div class="actions d-flex justify-content-between px-4">
                    <div class="action-btn bg-info ms-2">
                      <Link
                        to="edit"
                        class="mx-3 btn btn-sm d-inline-flex align-items-center"
                        data-bs-whatever="Edit Project"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit"
                      >
                        {" "}
                        <span class="text-white">
                          {" "}
                          <i class="ti ti-edit"></i>
                        </span>
                      </Link>
                    </div>
                    <div class="action-btn bg-warning ms-2">
                      <Link
                        to={"project/" + project.id}
                        class="mx-3 btn btn-sm d-inline-flex align-items-center"
                        data-bs-whatever="View Project"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="View"
                      >
                        {" "}
                        <span class="text-white">
                          {" "}
                          <i class="ti ti-eye"></i>
                        </span>
                      </Link>
                    </div>
                    <div class="action-btn bg-danger ms-2">
                      <button class="mx-3 btn btn-sm d-flex align-items-center show_confirm">
                        <i
                          class="ti ti-trash text-white"
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
