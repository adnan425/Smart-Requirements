import React from "react";
import {Link } from 'react-router-dom';

export default function ProjectGrid({ list }) {
  return (
    <>
      {list.map((project) => {
        return (
          <div className="col-md-6 col-xxl-3">
            <div className="card">
              <div className="card-header d-flex align-items-center border-0 pb-0">
                <div className="d-flex align-items-center">
                  <img
                    src={project.avatar}
                    className="img-fluid wid-30 me-2"
                    alt={project.name}
                  />
                  <h5 className="mb-0">
                    <Link className="text-dark" to={"project/" + project.id}>
                      {project.name}
                    </Link>
                  </h5>
                </div>
                {/* <div className="card-header-right">
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
                              <a
                                href="#!"
                                data-size="lg"
                                data-url="https://demo.rajodiya.com/erpgo-saas/projects/13/edit"
                                data-ajax-popup="true"
                                className="dropdown-item"
                                data-bs-original-title="Edit User"
                              >
                                <i className="ti ti-pencil"></i>
                                <span>Edit</span>
                              </a>
                              <form
                                method="POST"
                                action="https://demo.rajodiya.com/erpgo-saas/projects/13"
                                accept-charset="UTF-8"
                              >
                                <input
                                  name="_method"
                                  type="hidden"
                                  value="DELETE"
                                />
    
                                <a href="#!" className="dropdown-item bs-pass-para">
                                  <i className="ti ti-archive"></i>
                                  <span> Delete</span>
                                </a>
                              </form>
                              <a
                                href="#!"
                                data-size="lg"
                                data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/13"
                                data-ajax-popup="true"
                                className="dropdown-item"
                                data-bs-original-title="Invite User"
                              >
                                <i className="ti ti-send"></i>
                                <span>Invite User</span>
                              </a>
                            </div>
                          </div>
                        </div> */}
              </div>
              <div className="card-body">
                <div className="row g-2 justify-content-between">
                  <div className="col-auto">
                    <span className={"badge rounded-pill " + project.classes}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-muted text-sm mt-3">{project.description}</p>
                <small>MEMBERS</small>
                <div className="user-group">
                  {
                    <Link
                      to={"user/" + project.members.member_id}
                      className="avatar rounded-circle avatar-sm"
                    >
                      <img
                        src={project.members.member_profile}
                        alt={project.members.member_name}
                        data-bs-toggle="tooltip"
                        title={project.members.member_name}
                      />
                    </Link>
                  }
                </div>
                <div className="card mb-0 mt-3">
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-6 ">
                        <h6 className="mb-0 text-danger">
                          {project.start_date}
                        </h6>
                        <p className="text-muted text-sm mb-0">Start Date</p>
                      </div>
                      <div className="col-6 text-end">
                        <h6 className="mb-0">{project.due_date}</h6>
                        <p className="text-muted text-sm mb-0">Due Date</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
