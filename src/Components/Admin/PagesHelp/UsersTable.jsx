import React from "react";

export default function UsersTable() {
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          {/* <!-- [ breadcrumb ] start --> */}

          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                  <div className="page-header-title">
                    <h4 className="m-b-10"> Store</h4>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="https://demo.rajodiya.com/lmsgo-saas/dashboard">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">stores</li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <div className="col-12"></div>
                  <div className="col-12 text-end">
                    <div className="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="https://demo.rajodiya.com/lmsgo-saas/store-subDomain/subDomain"
                        className=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Sub Domain"
                        aria-label="Sub Domain"
                      >
                        <i className="ti ti-subtask text-white"></i>
                      </a>
                    </div>

                    <div className="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="https://demo.rajodiya.com/lmsgo-saas/store-customDomain/customDomain"
                        className=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Custom Domain"
                        aria-label="Custom Domain"
                      >
                        <i className="ti ti-home-2 text-white"></i>
                      </a>
                    </div>
                    <div className="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="https://demo.rajodiya.com/lmsgo-saas/store-grid/grid"
                        className=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Grid View"
                        aria-label="Grid View"
                      >
                        <i className="ti ti-layout-grid text-white"></i>
                      </a>
                    </div>
                    <div className="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="#"
                        className=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-ajax-popup="true"
                        data-size="md"
                        data-title="Create New Store"
                        data-url="https://demo.rajodiya.com/lmsgo-saas/store-resource/create"
                        data-bs-original-title="Create New Store"
                        aria-label="Create New Store"
                      >
                        <i className="ti ti-plus text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- [ breadcrumb ] end --> */}
          {/* <!-- [ Main Content ] start --> */}

          <div className="row">
            {/* <!-- [ sample-page ] start --> */}
            <div className="col-sm-12">
              <div className="card">
                {/* <!-- Card header --> */}
                <div className="card-header">
                  <h5>All Store</h5>
                </div>
                {/* <!-- Table --> */}
                <div className="card-body table-border-style">
                  <div className="table-responsive overflow_hidden">
                    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                      <div className="dataTable-top">
                        <div className="dataTable-dropdown">
                          <label>
                            <select className="dataTable-selector">
                              <option value="5">5</option>
                              <option value="10" selected="">
                                10
                              </option>
                              <option value="15">15</option>
                              <option value="20">20</option>
                              <option value="25">25</option>
                            </select>{" "}
                            entries per page
                          </label>
                        </div>
                        <div className="dataTable-search">
                          <input
                            className="dataTable-input"
                            placeholder="Search..."
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="dataTable-container">
                        <table
                          id="pc-dt-simple"
                          className="table align-items-center dataTable-table"
                        >
                          <thead className="thead-light">
                            <tr>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" className="dataTable-sorter">
                                  User Name
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" className="dataTable-sorter">
                                  Email
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" className="dataTable-sorter">
                                  Stores
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" className="dataTable-sorter">
                                  Plan
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" className="dataTable-sorter">
                                  Created At
                                </a>
                              </th>
                              <th
                                scope="col"
                                className="text-center"
                                data-sortable=""
                                
                              >
                                <a href="#" className="dataTable-sorter">
                                  Action
                                </a>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            <tr>
                              <td>Owner</td>
                              <td>owner@example.com</td>
                              <td>3</td>
                              <td>Platinum</td>
                              <td>Oct 13, 2022</td>
                              <td className="text-center ">
                                {/* <!-- Actions --> */}
                                <div className="action-btn bg-info ms-2">
                                  <a
                                    href="#"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-resource/2/edit"
                                    data-ajax-popup="true"
                                    className="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-title="Edit Store"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-original-title="Edit"
                                    data-bs-original-title="Edit Store"
                                  >
                                    <span className="text-white">
                                      {" "}
                                      <i className="ti ti-edit"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div className="action-btn bg-success ms-2">
                                  <a
                                    href="#"
                                    className="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-plan/2/plan"
                                    data-ajax-popup="true"
                                    data-title="Upgrade Plan"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Upgrade Plan"
                                  >
                                    <span className="text-white">
                                      {" "}
                                      <i className="ti ti-trophy"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div className="action-btn bg-warning ms-2">
                                  <a
                                    href="#"
                                    className="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-reset-password/eyJpdiI6InNENWFZUEdEOGJYSWdSMmxGSWpGRUE9PSIsInZhbHVlIjoidHNhclZ6UGgzSmZOdmdwdjc2eGlIZz09IiwibWFjIjoiMDI1YWFhNzM1NjM1NTcwY2I5NmNkNzUwODk5ODM3M2IyMGY3YzJiOWUxNjMwYmNiNjhkOTdhMDE1ZWI0MTQ4YSIsInRhZyI6IiJ9"
                                    data-ajax-popup="true"
                                    data-title="Reset Password"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Reset Password"
                                  >
                                    <span className="text-white">
                                      {" "}
                                      <i className="ti ti-key"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div className="action-btn bg-danger ms-2">
                                  <form
                                    method="POST"
                                    action="https://demo.rajodiya.com/lmsgo-saas/store-resource/2"
                                    accept-charset="UTF-8"
                                  >
                                    <a
                                      href="#!"
                                      className="mx-3 btn btn-sm align-items-center show_confirm"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete"
                                    >
                                      <i className="ti ti-trash text-white"></i>
                                    </a>
                                  </form>
                                </div>
                              </td>
                            </tr>                            <tr>
                              <td>Aner</td>
                              <td>owner@example.com</td>
                              <td>3</td>
                              <td>Platinum</td>
                              <td>Oct 13, 2022</td>
                              <td className="text-center ">
                                {/* <!-- Actions --> */}
                                <div className="action-btn bg-info ms-2">
                                  <a
                                    href="#"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-resource/2/edit"
                                    data-ajax-popup="true"
                                    className="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-title="Edit Store"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-original-title="Edit"
                                    data-bs-original-title="Edit Store"
                                  >
                                    <span className="text-white">
                                      {" "}
                                      <i className="ti ti-edit"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div className="action-btn bg-success ms-2">
                                  <a
                                    href="#"
                                    className="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-plan/2/plan"
                                    data-ajax-popup="true"
                                    data-title="Upgrade Plan"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Upgrade Plan"
                                  >
                                    <span className="text-white">
                                      {" "}
                                      <i className="ti ti-trophy"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div className="action-btn bg-warning ms-2">
                                  <a
                                    href="#"
                                    className="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-reset-password/eyJpdiI6InNENWFZUEdEOGJYSWdSMmxGSWpGRUE9PSIsInZhbHVlIjoidHNhclZ6UGgzSmZOdmdwdjc2eGlIZz09IiwibWFjIjoiMDI1YWFhNzM1NjM1NTcwY2I5NmNkNzUwODk5ODM3M2IyMGY3YzJiOWUxNjMwYmNiNjhkOTdhMDE1ZWI0MTQ4YSIsInRhZyI6IiJ9"
                                    data-ajax-popup="true"
                                    data-title="Reset Password"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Reset Password"
                                  >
                                    <span className="text-white">
                                      {" "}
                                      <i className="ti ti-key"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div className="action-btn bg-danger ms-2">
                                  <form
                                    method="POST"
                                    action="https://demo.rajodiya.com/lmsgo-saas/store-resource/2"
                                    accept-charset="UTF-8"
                                  >
                                    <a
                                      href="#!"
                                      className="mx-3 btn btn-sm align-items-center show_confirm"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete"
                                    >
                                      <i className="ti ti-trash text-white"></i>
                                    </a>
                                  </form>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="dataTable-bottom">
                        <div className="dataTable-info">
                          Showing 1 to 1 of 1 entries
                        </div>
                        <nav className="dataTable-pagination">
                          <ul className="dataTable-pagination-list"></ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- [ sample-page ] end --> */}
          </div>

          {/* <!-- [ Main Content ] end --> */}
        </div>
      </div>
    </div>
  );
}
