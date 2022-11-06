import React from "react";

export default function ProjectsGrid() {
  return (
    <div class="dash-container">
       
        <div class="dash-content">
          <div class="page-header">
            <div class="page-block">
              <div class="row align-items-center">
                <div class="col-auto">
                  <div class="page-header-title">
                    <h4 class="m-b-10"> Manage Projects</h4>
                  </div>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="https://demo.rajodiya.com/erpgo-saas/account-dashboard">
                        Dashboard
                      </a>
                    </li>
                    <li class="breadcrumb-item">Projects</li>
                  </ul>
                </div>
                <div class="col">
                  <div class="float-end">
                    <a
                      href="https://demo.rajodiya.com/erpgo-saas/project/list"
                      data-bs-toggle="tooltip"
                      title=""
                      class="btn btn-sm btn-primary"
                      data-bs-original-title="List View"
                    >
                      <i class="ti ti-list"></i>
                    </a>

                    <a
                      href="#"
                      class="btn btn-sm btn-primary action-item"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ti ti-filter"></i>
                    </a>
                    <div
                      class="dropdown-menu  dropdown-steady"
                      id="project_sort"
                    >
                      <a
                        class="dropdown-item active"
                        href="#"
                        data-val="created_at-desc"
                      >
                        <i class="ti ti-sort-descending"></i>Newest
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-val="created_at-asc"
                      >
                        <i class="ti ti-sort-ascending"></i>Oldest
                      </a>

                      <a
                        class="dropdown-item"
                        href="#"
                        data-val="project_name-desc"
                      >
                        <i class="ti ti-sort-descending-letters"></i>From Z-A
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-val="project_name-asc"
                      >
                        <i class="ti ti-sort-ascending-letters"></i>From A-Z
                      </a>
                    </div>

                    <a
                      href="#"
                      class="btn btn-sm btn-primary action-item"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="btn-inner--icon">Status</span>
                    </a>
                    <div
                      class="dropdown-menu  project-filter-actions dropdown-steady"
                      id="project_status"
                    >
                      <a
                        class="dropdown-item filter-action filter-show-all pl-4 active"
                        href="#"
                      >
                        Show All
                      </a>
                      <a
                        class="dropdown-item filter-action pl-4"
                        href="#"
                        data-val="in_progress"
                      >
                        In Progress
                      </a>
                      <a
                        class="dropdown-item filter-action pl-4"
                        href="#"
                        data-val="on_hold"
                      >
                        On Hold
                      </a>
                      <a
                        class="dropdown-item filter-action pl-4"
                        href="#"
                        data-val="complete"
                      >
                        Complete
                      </a>
                      <a
                        class="dropdown-item filter-action pl-4"
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
                      class="btn btn-sm btn-primary"
                      data-bs-original-title="Create New Project"
                    >
                      <i class="ti ti-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row min-750" id="project_view">
            <div class="row">
              <div class="col-md-6 col-xxl-3">
                <div class="card">
                  <div class="card-header border-0 pb-0">
                    <div class="d-flex align-items-center">
                      <img
                        avatar="proyecto222"
                        class="img-fluid wid-30 me-2"
                        alt=""
                      />
                      <h5 class="mb-0">
                        <a
                          class="text-dark"
                          href="https://demo.rajodiya.com/erpgo-saas/projects/20"
                        >
                          proyecto222
                        </a>
                      </h5>
                    </div>
                    <div class="card-header-right">
                      <div class="btn-group card-option">
                        <button
                          type="button"
                          class="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="ti ti-dots-vertical"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a
                            href="#!"
                            data-size="lg"
                            data-url="https://demo.rajodiya.com/erpgo-saas/projects/20/edit"
                            data-ajax-popup="true"
                            class="dropdown-item"
                            data-bs-original-title="Edit User"
                          >
                            <i class="ti ti-pencil"></i>
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
                            <a href="#!" class="dropdown-item bs-pass-para">
                              <i class="ti ti-archive"></i>
                              <span> Delete</span>
                            </a>
                          </form>{" "}
                          <a
                            href="#!"
                            data-size="lg"
                            data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/20"
                            data-ajax-popup="true"
                            class="dropdown-item"
                            data-bs-original-title="Invite User"
                          >
                            <i class="ti ti-send"></i>
                            <span>Invite User</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row g-2 justify-content-between">
                      <div class="col-auto">
                        <span class="badge rounded-pill bg-info">
                          In Progress
                        </span>
                      </div>
                    </div>
                    <p class="text-muted text-sm mt-3"></p>
                    <small>MEMBERS</small>
                    <div class="user-group">
                      <a href="#" class="avatar rounded-circle avatar-sm">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                          alt="image"
                          data-bs-toggle="tooltip"
                          title="Rajodiya Infotech"
                        />
                      </a>
                      <a href="#" class="avatar rounded-circle avatar-sm">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg"
                          alt="image"
                          data-bs-toggle="tooltip"
                          title="Richard Atkinson"
                        />
                      </a>
                    </div>
                    <div class="card mb-0 mt-3">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="col-6">
                            <h6 class="mb-0 text-danger">05 Nov 2022</h6>
                            <p class="text-muted text-sm mb-0">Start Date</p>
                          </div>
                          <div class="col-6 text-end">
                            <h6 class="mb-0">30 Nov 2022</h6>
                            <p class="text-muted text-sm mb-0">Due Date</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-xxl-3">
                <div class="card">
                  <div class="card-header border-0 pb-0">
                    <div class="d-flex align-items-center">
                      <img
                        src="https://demo.rajodiya.com/erpgo-saas/storage/projects/1626781922.png"
                        class="img-fluid wid-30 me-2"
                        alt=""
                      />
                      <h5 class="mb-0">
                        <a
                          class="text-dark"
                          href="https://demo.rajodiya.com/erpgo-saas/projects/1"
                        >
                          Explainer Test
                        </a>
                      </h5>
                    </div>
                    <div class="card-header-right">
                      <div class="btn-group card-option">
                        <button
                          type="button"
                          class="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="ti ti-dots-vertical"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a
                            href="#!"
                            data-size="lg"
                            data-url="https://demo.rajodiya.com/erpgo-saas/projects/1/edit"
                            data-ajax-popup="true"
                            class="dropdown-item"
                            data-bs-original-title="Edit User"
                          >
                            <i class="ti ti-pencil"></i>
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
                            <a href="#!" class="dropdown-item bs-pass-para">
                              <i class="ti ti-archive"></i>
                              <span> Delete</span>
                            </a>
                          </form>
                          <a
                            href="#!"
                            data-size="lg"
                            data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/1"
                            data-ajax-popup="true"
                            class="dropdown-item"
                            data-bs-original-title="Invite User"
                          >
                            <i class="ti ti-send"></i>
                            <span>Invite User</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row g-2 justify-content-between">
                      <div class="col-auto">
                        <span class="badge rounded-pill bg-info">
                          In Progress
                        </span>
                      </div>
                    </div>
                    <p class="text-muted text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempore corrupti iure magnam veritatis eveniet.</p>
                    <small>MEMBERS</small>
                    <div class="user-group">
                      <a href="#" class="avatar rounded-circle avatar-sm">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                          alt="image"
                          data-bs-toggle="tooltip"
                          title="Rajodiya Infotech"
                        />
                      </a>
                    </div>
                    <div class="card mb-0 mt-3">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="col-6">
                            <h6 class="mb-0 text-danger">20 Jul 2021</h6>
                            <p class="text-muted text-sm mb-0">Start Date</p>
                          </div>
                          <div class="col-6 text-end">
                            <h6 class="mb-0">20 Jul 2021</h6>
                            <p class="text-muted text-sm mb-0">Due Date</p>
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
