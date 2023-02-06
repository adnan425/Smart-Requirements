import React from "react";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
const moment = require('moment');

export default function DataList({ list }) {
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          {
            list && list.length !== 0 && <div className="card-body table-border-style">
              <div className="table-responsive">
                <table className="table datatable table-hover">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Start Date</th>
                      {/* <th>Users</th> */}
                      <th>Completion</th>
                      <th>Status</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list && list.map((project) => {
                      const { _id, title, date, status } = project;
                      const start_date = moment(date).format("MMM Do YYYY");;
                      const progress = "50%";
                      const classes = "bg-success";
                      return (
                        <tr key={_id}>
                          <td>
                            <div className="d-flex align-items-center">
                              {/* <img
                              src="https://demo.rajodiya.com/erpgo-saas/storage/projects/1626783039.png"
                              className="wid-40 rounded me-3"
                              alt={title}
                            /> */}
                              <Avatar size="30" name={title} round="30%" className="wid-40 rounded me-3" />

                              <p className="mb-0">
                                <Link
                                  to={"project/" + _id}
                                  className="name mb-0 h6 text-sm"
                                >
                                  {title}
                                </Link>
                              </p>
                            </div>
                          </td>
                          <td>{start_date}</td>
                          {/* <td>
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
                        </td> */}
                          {/* <td> */}

                            {/* <div className="user-group">
                              <img src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-1.jpg"
                                data-bs-toggle="tooltip" title="" data-bs-original-title="Rajodiya Infotech"
                                aria-label="Rajodiya Infotech" />
                              <img src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-4.jpg"
                                data-bs-toggle="tooltip" title="" data-bs-original-title="Anthony B Renfroe"
                                aria-label="Anthony B Renfroe" />
                              <img src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-5.jpg"
                                data-bs-toggle="tooltip" title="" data-bs-original-title="Adrienne J Reed" aria-label="Adrienne J Reed" />

                            </div> */}
                          {/* </td> */}
                          <td>
                            <h6 className="mb-0 text-success">
                              {progress}
                            </h6>
                            <div className="progress mb-0">
                              <div
                                className={"progress-bar " + classes}
                                style={{ width: progress }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span
                              className={
                                "badge p-2 px-3 rounded " + classes
                              }
                            >
                              {status}
                            </span>
                          </td>
                          <td className="text-right">
                            {/* <div className="action-btn bg-warning ms-2">
                            <button
                              href="#"
                              className="mx-3 btn btn-sm d-inline-flex align-items-center"
                              data-bs-whatever="View Project"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="View"
                            >
                              {" "}
                              <span className="text-white">
                                {" "}
                                <i className="ti ti-eye"></i>
                              </span>
                            </button>
                          </div> */}

                            <div className="action-btn bg-danger ms-2">

                              <button
                                href="#!"
                                className="mx-3 btn btn-sm d-flex align-items-center show_confirm"
                              >
                                <i
                                  className="ti ti-trash text-white"
                                  data-bs-toggle="tooltip"
                                  data-bs-original-title="Delete"
                                ></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          }
          {
            list && list.length === 0 && <div className="card-body table-border-style"> Project list is empty.</div>
          }

        </div>
      </div>
    </>
  );
}
