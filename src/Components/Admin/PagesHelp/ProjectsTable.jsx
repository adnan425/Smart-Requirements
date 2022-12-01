import React from "react";

export default function ProjectsTable() {
  return (
    <div className="dash-container">
      <div
        className="modal fade"
        id="commonModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ display: "block", paddingLeft: "0px" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="body">
              <form
                method="POST"
                action="https://demo.rajodiya.com/erpgo-saas/projects"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
              >
                <div className="modal-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group">
                        <label for="project_name" className="form-label">
                          Project Name
                        </label>
                        <span className="text-danger">*</span>
                        <input
                          className="form-control"
                          required="required"
                          name="project_name"
                          type="text"
                          id="project_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label for="start_date" className="form-label">
                          Start Date
                        </label>
                        <input
                          className="form-control"
                          name="start_date"
                          type="date"
                          id="start_date"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label for="end_date" className="form-label">
                          End Date
                        </label>
                        <input
                          className="form-control"
                          name="end_date"
                          type="date"
                          id="end_date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-12 col-md-12">
                      <label for="project_image" className="form-label">
                        Project Image
                      </label>
                      <span className="text-danger">*</span>
                      <div className="form-file mb-3">
                        <input
                          type="file"
                          className="form-control"
                          name="project_image"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label for="client" className="form-label">
                          Client
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          className="form-control"
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
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label for="user" className="form-label">
                          User
                        </label>
                        <span className="text-danger">*</span>
                        <select
                          className="form-control"
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
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label for="budget" className="form-label">
                          Budget
                        </label>
                        <input
                          className="form-control"
                          name="budget"
                          type="number"
                          id="budget"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-6">
                      <div className="form-group">
                        <label for="estimated_hrs" className="form-label">
                          Estimated Hours
                        </label>
                        <input
                          className="form-control"
                          min="0"
                          maxlength="8"
                          name="estimated_hrs"
                          type="number"
                          id="estimated_hrs"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group">
                        <label for="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          rows="4"
                          cols="50"
                          name="description"
                          id="description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group">
                        <label for="tag" className="form-label">
                          Tag
                        </label>
                        <input
                          className="form-control"
                          data-toggle="tags"
                          name="tag"
                          type="text"
                          id="tag"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="form-group">
                        <label for="status" className="form-label">
                          Status
                        </label>
                        <select
                          name="status"
                          id="status"
                          className="form-control main-element"
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
                <div className="modal-footer">
                  <input
                    type="button"
                    value="Cancel"
                    className="btn  btn-light"
                    data-bs-dismiss="modal"
                  />
                  <input
                    type="submit"
                    value="Create"
                    className="btn  btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
                    href="https://demo.rajodiya.com/erpgo-saas/projects"
                    data-bs-toggle="tooltip"
                    title=""
                    className="btn btn-sm btn-primary"
                    data-bs-original-title="Grid View"
                  >
                    <i className="ti ti-layout-grid"></i>
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
                  <div className="dropdown-menu  dropdown-steady" id="project_sort">
                    <a
                      className="dropdown-item active"
                      href="#"
                      data-val="created_at-desc"
                    >
                      <i className="ti ti-sort-descending"></i>Newest
                    </a>
                    <a className="dropdown-item" href="#" data-val="created_at-asc">
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
                    className="dropdown-menu project-filter-actions dropdown-steady"
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

          </div>
        </div>
        {/* <!-- [ Main Content ] end --> */}
      </div>
    </div>
  );
}
