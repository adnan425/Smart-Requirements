import React from "react";
import { Link } from "react-router-dom";

export default function ProjectTable({ list }) {
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body table-border-style">
            <div className="table-responsive">
              <table className="table datatable">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Start Date</th>
                    <th>Users</th>
                    <th>Completion</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((project) => {
                    return (
                      <tr key={project.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={project.avatar}
                              className="wid-40 rounded me-3"
                              alt={project.name}
                            />
                            <p className="mb-0">
                              <Link
                                to={"project" + project.id}
                                className="name mb-0 h6 text-sm"
                              >
                                {project.name}
                              </Link>
                            </p>
                          </div>
                        </td>
                        <td>{project.start_date}</td>
                        <td>
                          <div className="avatar-group" id="project_13">
                            <Link
                              to={"project/" + project.id}
                              className="avatar rounded-circle"
                            >
                              <img
                                src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                                title="Rajodiya Infotech"
                                style={{ height: "36px", width: "36px" }}
                                alt="Name"
                              />
                            </Link>
                            <Link
                              to={"project/" + project.id}
                              className="avatar rounded-circle"
                              alt="Name"
                            >
                              <img
                                src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg"
                                title="Richard Atkinson"
                                style={{ height: "36px", width: "36px" }}
                                alt="Name"
                              />
                            </Link>
                            <Link
                              to={"project/" + project.id}
                              className="avatar rounded-circle"
                            >
                              <img
                                src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-2.jpg"
                                title="Sonya Sims"
                                alt="Name"
                                style={{ height: "36px", width: "36px" }}
                              />
                            </Link>
                          </div>
                        </td>
                        <td>
                          <h6 className="mb-0 text-success">
                            {project.progress}
                          </h6>
                          <div className="progress mb-0">
                            <div
                              className={"progress-bar " + project.classes}
                              style={{ width: project.progress }}
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span
                            className={
                              "badge p-2 px-3 rounded " + project.classes
                            }
                          >
                            {project.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <span>
                            <div className="action-btn bg-warning ms-2">
                              <Link
                                to={"project/" + project.id}
                                className="mx-3 btn btn-sm align-items-center"
                                data-bs-toggle="tooltip"
                                title={project.name}
                                data-original-title="Detail"
                                data-bs-original-title="Show"
                              >
                                <i className="ti ti-eye text-white"></i>
                              </Link>
                            </div>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
