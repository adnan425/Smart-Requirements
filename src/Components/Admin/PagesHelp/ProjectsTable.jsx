import React from "react";

export default function ProjectsTable() {
  return (
    <div class="dash-container">
      <div
        class="modal fade"
        id="commonModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ display: "block", paddingLeft: "0px" }}
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create New Project
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="body">
              <form
                method="POST"
                action="https://demo.rajodiya.com/erpgo-saas/projects"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
              >
                <div class="modal-body">
                  <div class="row">
                    <div class="col-sm-12 col-md-12">
                      <div class="form-group">
                        <label for="project_name" class="form-label">
                          Project Name
                        </label>
                        <span class="text-danger">*</span>
                        <input
                          class="form-control"
                          required="required"
                          name="project_name"
                          type="text"
                          id="project_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 col-md-6">
                      <div class="form-group">
                        <label for="start_date" class="form-label">
                          Start Date
                        </label>
                        <input
                          class="form-control"
                          name="start_date"
                          type="date"
                          id="start_date"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="form-group">
                        <label for="end_date" class="form-label">
                          End Date
                        </label>
                        <input
                          class="form-control"
                          name="end_date"
                          type="date"
                          id="end_date"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-12 col-md-12">
                      <label for="project_image" class="form-label">
                        Project Image
                      </label>
                      <span class="text-danger">*</span>
                      <div class="form-file mb-3">
                        <input
                          type="file"
                          class="form-control"
                          name="project_image"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="form-group">
                        <label for="client" class="form-label">
                          Client
                        </label>
                        <span class="text-danger">*</span>
                        <select
                          class="form-control"
                          required="required"
                          id="client"
                          name="client"
                        >
                          <option value="" selected="selected">
                            Select Client
                          </option>
                          <option value="4">Mick Aston</option>
                          <option value="11">Kelly Brook</option>
                          <option value="12">Jennifer Ellison</option>
                          <option value="13">Joseph Fiennes</option>
                          <option value="14">Emilia Fox</option>
                          <option value="47">Catherine Page</option>
                          <option value="49">Juliet May</option>
                          <option value="50">Chloe Humphrey</option>
                          <option value="51">August Mclaughlin</option>
                          <option value="55">Carter Benjamin</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="form-group">
                        <label for="user" class="form-label">
                          User
                        </label>
                        <span class="text-danger">*</span>
                        <select
                          class="form-control"
                          required="required"
                          name="user[]"
                        >
                          <option value="" selected="selected">
                            Select User
                          </option>
                          <option value="8">Richard Atkinson</option>
                          <option value="54">Sonya Sims</option>
                          <option value="58">Buffy Walter</option>
                          <option value="64">Abel Callahan</option>
                          <option value="65">Aileen Butler</option>
                          <option value="66">Rana Blankenship</option>
                          <option value="67">Maia</option>
                          <option value="72">Anne George</option>
                          <option value="88">Ira Bradley</option>
                          <option value="90">kjh</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="form-group">
                        <label for="budget" class="form-label">
                          Budget
                        </label>
                        <input
                          class="form-control"
                          name="budget"
                          type="number"
                          id="budget"
                        />
                      </div>
                    </div>
                    <div class="col-6 col-md-6">
                      <div class="form-group">
                        <label for="estimated_hrs" class="form-label">
                          Estimated Hours
                        </label>
                        <input
                          class="form-control"
                          min="0"
                          maxlength="8"
                          name="estimated_hrs"
                          type="number"
                          id="estimated_hrs"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-12">
                      <div class="form-group">
                        <label for="description" class="form-label">
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          rows="4"
                          cols="50"
                          name="description"
                          id="description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-12">
                      <div class="form-group">
                        <label for="tag" class="form-label">
                          Tag
                        </label>
                        <input
                          class="form-control"
                          data-toggle="tags"
                          name="tag"
                          type="text"
                          id="tag"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-12">
                      <div class="form-group">
                        <label for="status" class="form-label">
                          Status
                        </label>
                        <select
                          name="status"
                          id="status"
                          class="form-control main-element"
                        >
                          <option value="in_progress">In Progress</option>
                          <option value="on_hold">On Hold</option>
                          <option value="complete">Complete</option>
                          <option value="canceled">Canceled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <input
                    type="button"
                    value="Cancel"
                    class="btn  btn-light"
                    data-bs-dismiss="modal"
                  />
                  <input
                    type="submit"
                    value="Create"
                    class="btn  btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
                    href="https://demo.rajodiya.com/erpgo-saas/projects"
                    data-bs-toggle="tooltip"
                    title=""
                    class="btn btn-sm btn-primary"
                    data-bs-original-title="Grid View"
                  >
                    <i class="ti ti-layout-grid"></i>
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
                  <div class="dropdown-menu  dropdown-steady" id="project_sort">
                    <a
                      class="dropdown-item active"
                      href="#"
                      data-val="created_at-desc"
                    >
                      <i class="ti ti-sort-descending"></i>Newest
                    </a>
                    <a class="dropdown-item" href="#" data-val="created_at-asc">
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
                    class="dropdown-menu project-filter-actions dropdown-steady"
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
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body table-border-style">
                  <div class="table-responsive">
                    <table class="table datatable">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Status</th>
                          <th>Users</th>
                          <th>Completion</th>
                          <th class="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <img
                                src="https://demo.rajodiya.com/erpgo-saas/storage/projects/1626783039.png"
                                class="wid-40 rounded me-3"
                                alt="avatar image"
                              />
                              <p class="mb-0">
                                <a
                                  href="https://demo.rajodiya.com/erpgo-saas/projects/13"
                                  class="name mb-0 h6 text-sm"
                                >
                                  Newsletter Templates
                                </a>
                              </p>
                            </div>
                          </td>
                          <td class="">
                            <span class="badge bg-warning p-2 px-3 rounded">
                              On Hold
                            </span>
                          </td>
                          <td class="">
                            <div class="avatar-group" id="project_13">
                              <a href="#" class="avatar rounded-circle">
                                <img
                                  src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                                  title="Rajodiya Infotech"
                                  style={{ height: "36px", width: "36px" }}
                                />
                              </a>
                              <a href="#" class="avatar rounded-circle">
                                <img
                                  src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg"
                                  title="Richard Atkinson"
                                  style={{ height: "36px", width: "36px" }}
                                />
                              </a>
                              <a href="#" class="avatar rounded-circle">
                                <img
                                  src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-2.jpg"
                                  title="Sonya Sims"
                                  style={{ height: "36px", width: "36px" }}
                                />
                              </a>
                            </div>
                          </td>
                          <td class="text-end">
                            <h5 class="mb-0 text-success">16%</h5>
                            <div class="progress mb-0">
                              <div
                                class="progress-bar bg-danger"
                                style={{ width: "16%" }}
                              ></div>
                            </div>
                          </td>
                          <td class="text-end">
                            <span>
                              <div class="action-btn bg-warning ms-2">
                                <a
                                  href="#"
                                  class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                  data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/13"
                                  data-ajax-popup="true"
                                  data-size="lg"
                                  data-bs-toggle="tooltip"
                                  title="Invite User"
                                  data-title="Invite User"
                                >
                                  <i class="ti ti-send text-white"></i>
                                </a>
                              </div>
                              <div class="action-btn bg-info ms-2">
                                <a
                                  href="#"
                                  class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                  data-url="https://demo.rajodiya.com/erpgo-saas/projects/13/edit"
                                  data-ajax-popup="true"
                                  data-size="lg"
                                  data-bs-toggle="tooltip"
                                  title="Edit"
                                  data-title="Edit Project"
                                >
                                  <i class="ti ti-pencil text-white"></i>
                                </a>
                              </div>
                              <div class="action-btn bg-danger ms-2">
                                <form
                                  method="POST"
                                  action="https://demo.rajodiya.com/erpgo-saas/projects/13/users/54"
                                  accept-charset="UTF-8"
                                >
                                  <input
                                    name="_method"
                                    type="hidden"
                                    value="DELETE"
                                  />
                                  <a
                                    href="#"
                                    class="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                    data-bs-toggle="tooltip"
                                    title="Delete"
                                  >
                                    <i class="ti ti-trash text-white"></i>
                                  </a>
                                </form>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <img
                                src="https://demo.rajodiya.com/erpgo-saas/storage/projects/1626783039.png"
                                class="wid-40 rounded me-3"
                                alt="avatar image"
                              />
                              <p class="mb-0">
                                <a
                                  href="https://demo.rajodiya.com/erpgo-saas/projects/13"
                                  class="name mb-0 h6 text-sm"
                                >
                                  Newsletter Templates
                                </a>
                              </p>
                            </div>
                          </td>
                          <td class="">
                            <span class="badge bg-warning p-2 px-3 rounded">
                              On Hold
                            </span>
                          </td>
                          <td class="">
                            <div class="avatar-group" id="project_13">
                              <a href="#" class="avatar rounded-circle">
                                <img
                                  src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                                  title="Rajodiya Infotech"
                                  style={{ height: "36px", width: "36px" }}
                                />
                              </a>
                              <a href="#" class="avatar rounded-circle">
                                <img
                                  src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg"
                                  title="Richard Atkinson"
                                  style={{ height: "36px", width: "36px" }}
                                />
                              </a>
                              <a href="#" class="avatar rounded-circle">
                                <img
                                  src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-2.jpg"
                                  title="Sonya Sims"
                                  style={{ height: "36px", width: "36px" }}
                                />
                              </a>
                            </div>
                          </td>
                          <td class="text-end">
                            <h5 class="mb-0 text-success">16%</h5>
                            <div class="progress mb-0">
                              <div
                                class="progress-bar bg-danger"
                                style={{ width: "16%" }}
                              ></div>
                            </div>
                          </td>
                          <td class="text-end">
                            <span>
                              <div class="action-btn bg-warning ms-2">
                                <a
                                  href="#"
                                  class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                  data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/13"
                                  data-ajax-popup="true"
                                  data-size="lg"
                                  data-bs-toggle="tooltip"
                                  title="Invite User"
                                  data-title="Invite User"
                                >
                                  <i class="ti ti-send text-white"></i>
                                </a>
                              </div>
                              <div class="action-btn bg-info ms-2">
                                <a
                                  href="#"
                                  class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                  data-url="https://demo.rajodiya.com/erpgo-saas/projects/13/edit"
                                  data-ajax-popup="true"
                                  data-size="lg"
                                  data-bs-toggle="tooltip"
                                  title="Edit"
                                  data-title="Edit Project"
                                >
                                  <i class="ti ti-pencil text-white"></i>
                                </a>
                              </div>
                              <div class="action-btn bg-danger ms-2">
                                <form
                                  method="POST"
                                  action="https://demo.rajodiya.com/erpgo-saas/projects/13/users/54"
                                  accept-charset="UTF-8"
                                >
                                  <input
                                    name="_method"
                                    type="hidden"
                                    value="DELETE"
                                  />
                                  <a
                                    href="#"
                                    class="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                    data-bs-toggle="tooltip"
                                    title="Delete"
                                  >
                                    <i class="ti ti-trash text-white"></i>
                                  </a>
                                </form>
                              </div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
