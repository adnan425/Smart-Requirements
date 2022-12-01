import React from "react";

export default function ProjectsGrid() {
  return (
    <div className="dash-container">
       
        <div className="dash-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="page-header-title">
                    <h4 className="m-b-10"> Manage Projects</h4>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://demo.rajodiya.com/erpgo-saas/account-dashboard">
                        Dashboard
                      </a>
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
                      className="btn btn-sm btn-primary action-item"
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
                        <i className="ti ti-sort-descending-letters"></i>From Z-A
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
                      className="dropdown-menu  project-filter-actions dropdown-steady"
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

                    <a
                      href="#"
                      data-size="lg"
                      data-url="https://demo.rajodiya.com/erpgo-saas/projects/create"
                      data-ajax-popup="true"
                      data-bs-toggle="tooltip"
                      title=""
                      className="btn btn-sm btn-primary"
                      data-bs-original-title="Create New Project"
                    >
                      <i className="ti ti-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row min-750" id="project_view">
            <div className="row">
              <div className="col-md-6 col-xxl-3">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center">
                      <img
                        avatar="proyecto222"
                        className="img-fluid wid-30 me-2"
                        alt=""
                      />
                      <h5 className="mb-0">
                        <a
                          className="text-dark"
                          href="https://demo.rajodiya.com/erpgo-saas/projects/20"
                        >
                          proyecto222
                        </a>
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
                          <a
                            href="#!"
                            data-size="lg"
                            data-url="https://demo.rajodiya.com/erpgo-saas/projects/20/edit"
                            data-ajax-popup="true"
                            className="dropdown-item"
                            data-bs-original-title="Edit User"
                          >
                            <i className="ti ti-pencil"></i>
                            <span>Edit</span>
                          </a>
                          <form
                            method="POST"
                            action="https://demo.rajodiya.com/erpgo-saas/projects/20"
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
                          </form>{" "}
                          <a
                            href="#!"
                            data-size="lg"
                            data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/20"
                            data-ajax-popup="true"
                            className="dropdown-item"
                            data-bs-original-title="Invite User"
                          >
                            <i className="ti ti-send"></i>
                            <span>Invite User</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row g-2 justify-content-between">
                      <div className="col-auto">
                        <span className="badge rounded-pill bg-info">
                          In Progress
                        </span>
                      </div>
                    </div>
                    <p className="text-muted text-sm mt-3"></p>
                    <small>MEMBERS</small>
                    <div className="user-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                          alt="image"
                          data-bs-toggle="tooltip"
                          title="Rajodiya Infotech"
                        />
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg"
                          alt="image"
                          data-bs-toggle="tooltip"
                          title="Richard Atkinson"
                        />
                      </a>
                    </div>
                    <div className="card mb-0 mt-3">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-6">
                            <h6 className="mb-0 text-danger">05 Nov 2022</h6>
                            <p className="text-muted text-sm mb-0">Start Date</p>
                          </div>
                          <div className="col-6 text-end">
                            <h6 className="mb-0">30 Nov 2022</h6>
                            <p className="text-muted text-sm mb-0">Due Date</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xxl-3">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://demo.rajodiya.com/erpgo-saas/storage/projects/1626781922.png"
                        className="img-fluid wid-30 me-2"
                        alt=""
                      />
                      <h5 className="mb-0">
                        <a
                          className="text-dark"
                          href="https://demo.rajodiya.com/erpgo-saas/projects/1"
                        >
                          Explainer Test
                        </a>
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
                          <a
                            href="#!"
                            data-size="lg"
                            data-url="https://demo.rajodiya.com/erpgo-saas/projects/1/edit"
                            data-ajax-popup="true"
                            className="dropdown-item"
                            data-bs-original-title="Edit User"
                          >
                            <i className="ti ti-pencil"></i>
                            <span>Edit</span>
                          </a>{" "}
                          <form
                            method="POST"
                            action="https://demo.rajodiya.com/erpgo-saas/projects/1"
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
                            data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/1"
                            data-ajax-popup="true"
                            className="dropdown-item"
                            data-bs-original-title="Invite User"
                          >
                            <i className="ti ti-send"></i>
                            <span>Invite User</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row g-2 justify-content-between">
                      <div className="col-auto">
                        <span className="badge rounded-pill bg-info">
                          In Progress
                        </span>
                      </div>
                    </div>
                    <p className="text-muted text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempore corrupti iure magnam veritatis eveniet.</p>
                    <small>MEMBERS</small>
                    <div className="user-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                          alt="image"
                          data-bs-toggle="tooltip"
                          title="Rajodiya Infotech"
                        />
                      </a>
                    </div>
                    <div className="card mb-0 mt-3">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-6">
                            <h6 className="mb-0 text-danger">20 Jul 2021</h6>
                            <p className="text-muted text-sm mb-0">Start Date</p>
                          </div>
                          <div className="col-6 text-end">
                            <h6 className="mb-0">20 Jul 2021</h6>
                            <p className="text-muted text-sm mb-0">Due Date</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- [ Main Content ] end --> */}
        </div>
      </div> 
  );
}
