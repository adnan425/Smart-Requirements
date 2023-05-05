import React from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../Services/authService";
import Avatar from "react-avatar";

const moment = require("moment");

export default function DataGrid({ list, handleDelete }) {
  const userRole = getCurrentUser();

  return (
    <>
      <section className="section">
        <div className="filters-content">
          <div
            className="row grid "
            style={{ position: "relative", height: "386.375px" }}
          >
            {list &&
              list.length !== 0 &&
              list.map((project) => {
                const { _id, title, date, status, description, stakeholders } =
                  project;
                const start_date = moment(date).format("MMM Do YYYY");
                return (
                  <>
                    <div className="col-md-3 ">
                      <div className="card">
                        <div className="card-header border-0 pb-0">
                          <div className="d-flex align-items-center">
                            <Link>
                              <Avatar name={title} size={"30px"} round="20%" />
                            </Link>
                            <h5 className="mb-0 px-2">
                              <Link title={title}>{title}</Link>
                            </h5>
                          </div>
                          <div className="card-header-right">
                            <div className="btn-group card-option">
                              <button
                                type="button"
                                className="btn dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                {/* <a href="#/" className="dropdown-item" >
                                  <i className="ti ti-user-plus"></i> <span>Invite Users</span>
                                </a> */}

                                {userRole && userRole.role === "manager" && (
                                  <Link
                                    onClick={(e) => {
                                      handleDelete(_id);
                                    }}
                                    className="dropdown-item text-danger delete-popup bs-pass-para"
                                  >
                                    <i className="ti ti-trash"></i>{" "}
                                    <span>Delete</span>
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row g-2 justify-content-between">
                            <div className="col-auto">
                              <span className="badge rounded-pill bg-secondary">
                                {status}
                              </span>
                            </div>

                            <div className="col-auto">
                              <p className="mb-0">
                                <b>Start Date:</b> {start_date}
                              </p>
                            </div>
                          </div>
                          <p className="text-muted text-sm mt-3">
                            {description}
                          </p>
                          <h6 className="text-muted">MEMBERS</h6>
                          <div className="user-group mx-2">
                            {stakeholders &&
                              stakeholders.slice(0, 5).map((stakeholder) => {
                                return (
                                  <>
                                    <Link
                                      href="#"
                                      className="img_group"
                                      key={stakeholder}
                                    >
                                      <Avatar
                                        name={title}
                                        size={"30px"}
                                        round="50%"
                                      />
                                    </Link>
                                  </>
                                );
                              })}
                            {stakeholders.length === 0 && <p>Empty.</p>}
                          </div>
                          {/* <div className="card mb-0 mt-3">
                            <div className="card-body p-3">
                              <div className="row">
                                <div className="col-12">
                                  <h6 className="mb-0">9</h6>
                                  <p className="text-muted text-sm mb-0">Tasks</p>
                                </div> 
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            {list && list.length === 0 && (
              <div className="card-body table-border-style">
                {" "}
                Project list is empty.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
