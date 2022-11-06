import React from "react";

export default function UsersTable() {
  return (
    <div class="page-content">
      <div class="dash-container">
        <div class="dash-content">
          {/* <!-- [ breadcrumb ] start --> */}

          <div class="page-header">
            <div class="page-block">
              <div class="row align-items-center">
                <div class="col-md-6 mb-3">
                  <div class="page-header-title">
                    <h4 class="m-b-10"> Store</h4>
                  </div>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="https://demo.rajodiya.com/lmsgo-saas/dashboard">
                        Home
                      </a>
                    </li>
                    <li class="breadcrumb-item">stores</li>
                  </ul>
                </div>

                <div class="col-md-6">
                  <div class="col-12"></div>
                  <div class="col-12 text-end">
                    <div class="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="https://demo.rajodiya.com/lmsgo-saas/store-subDomain/subDomain"
                        class=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Sub Domain"
                        aria-label="Sub Domain"
                      >
                        <i class="ti ti-subtask text-white"></i>
                      </a>
                    </div>

                    <div class="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="https://demo.rajodiya.com/lmsgo-saas/store-customDomain/customDomain"
                        class=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Custom Domain"
                        aria-label="Custom Domain"
                      >
                        <i class="ti ti-home-2 text-white"></i>
                      </a>
                    </div>
                    <div class="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="https://demo.rajodiya.com/lmsgo-saas/store-grid/grid"
                        class=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Grid View"
                        aria-label="Grid View"
                      >
                        <i class="ti ti-layout-grid text-white"></i>
                      </a>
                    </div>
                    <div class="btn btn-sm btn-primary btn-icon m-1">
                      <a
                        href="#"
                        class=""
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
                        <i class="ti ti-plus text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- [ breadcrumb ] end --> */}
          {/* <!-- [ Main Content ] start --> */}

          <div class="row">
            {/* <!-- [ sample-page ] start --> */}
            <div class="col-sm-12">
              <div class="card">
                {/* <!-- Card header --> */}
                <div class="card-header">
                  <h5>All Store</h5>
                </div>
                {/* <!-- Table --> */}
                <div class="card-body table-border-style">
                  <div class="table-responsive overflow_hidden">
                    <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                      <div class="dataTable-top">
                        <div class="dataTable-dropdown">
                          <label>
                            <select class="dataTable-selector">
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
                        <div class="dataTable-search">
                          <input
                            class="dataTable-input"
                            placeholder="Search..."
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="dataTable-container">
                        <table
                          id="pc-dt-simple"
                          class="table align-items-center dataTable-table"
                        >
                          <thead class="thead-light">
                            <tr>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" class="dataTable-sorter">
                                  User Name
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" class="dataTable-sorter">
                                  Email
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" class="dataTable-sorter">
                                  Stores
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" class="dataTable-sorter">
                                  Plan
                                </a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                
                              >
                                <a href="#" class="dataTable-sorter">
                                  Created At
                                </a>
                              </th>
                              <th
                                scope="col"
                                class="text-center"
                                data-sortable=""
                                
                              >
                                <a href="#" class="dataTable-sorter">
                                  Action
                                </a>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="list">
                            <tr>
                              <td>Owner</td>
                              <td>owner@example.com</td>
                              <td>3</td>
                              <td>Platinum</td>
                              <td>Oct 13, 2022</td>
                              <td class="text-center ">
                                {/* <!-- Actions --> */}
                                <div class="action-btn bg-info ms-2">
                                  <a
                                    href="#"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-resource/2/edit"
                                    data-ajax-popup="true"
                                    class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-title="Edit Store"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-original-title="Edit"
                                    data-bs-original-title="Edit Store"
                                  >
                                    <span class="text-white">
                                      {" "}
                                      <i class="ti ti-edit"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div class="action-btn bg-success ms-2">
                                  <a
                                    href="#"
                                    class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-plan/2/plan"
                                    data-ajax-popup="true"
                                    data-title="Upgrade Plan"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Upgrade Plan"
                                  >
                                    <span class="text-white">
                                      {" "}
                                      <i class="ti ti-trophy"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div class="action-btn bg-warning ms-2">
                                  <a
                                    href="#"
                                    class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-reset-password/eyJpdiI6InNENWFZUEdEOGJYSWdSMmxGSWpGRUE9PSIsInZhbHVlIjoidHNhclZ6UGgzSmZOdmdwdjc2eGlIZz09IiwibWFjIjoiMDI1YWFhNzM1NjM1NTcwY2I5NmNkNzUwODk5ODM3M2IyMGY3YzJiOWUxNjMwYmNiNjhkOTdhMDE1ZWI0MTQ4YSIsInRhZyI6IiJ9"
                                    data-ajax-popup="true"
                                    data-title="Reset Password"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Reset Password"
                                  >
                                    <span class="text-white">
                                      {" "}
                                      <i class="ti ti-key"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div class="action-btn bg-danger ms-2">
                                  <form
                                    method="POST"
                                    action="https://demo.rajodiya.com/lmsgo-saas/store-resource/2"
                                    accept-charset="UTF-8"
                                  >
                                    <a
                                      href="#!"
                                      class="mx-3 btn btn-sm align-items-center show_confirm"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete"
                                    >
                                      <i class="ti ti-trash text-white"></i>
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
                              <td class="text-center ">
                                {/* <!-- Actions --> */}
                                <div class="action-btn bg-info ms-2">
                                  <a
                                    href="#"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-resource/2/edit"
                                    data-ajax-popup="true"
                                    class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-title="Edit Store"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-original-title="Edit"
                                    data-bs-original-title="Edit Store"
                                  >
                                    <span class="text-white">
                                      {" "}
                                      <i class="ti ti-edit"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div class="action-btn bg-success ms-2">
                                  <a
                                    href="#"
                                    class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-plan/2/plan"
                                    data-ajax-popup="true"
                                    data-title="Upgrade Plan"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Upgrade Plan"
                                  >
                                    <span class="text-white">
                                      {" "}
                                      <i class="ti ti-trophy"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div class="action-btn bg-warning ms-2">
                                  <a
                                    href="#"
                                    class="mx-3 btn btn-sm d-inline-flex align-items-center"
                                    data-size="md"
                                    data-url="https://demo.rajodiya.com/lmsgo-saas/store-reset-password/eyJpdiI6InNENWFZUEdEOGJYSWdSMmxGSWpGRUE9PSIsInZhbHVlIjoidHNhclZ6UGgzSmZOdmdwdjc2eGlIZz09IiwibWFjIjoiMDI1YWFhNzM1NjM1NTcwY2I5NmNkNzUwODk5ODM3M2IyMGY3YzJiOWUxNjMwYmNiNjhkOTdhMDE1ZWI0MTQ4YSIsInRhZyI6IiJ9"
                                    data-ajax-popup="true"
                                    data-title="Reset Password"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-original-title="Reset Password"
                                  >
                                    <span class="text-white">
                                      {" "}
                                      <i class="ti ti-key"></i>{" "}
                                    </span>
                                  </a>
                                </div>

                                <div class="action-btn bg-danger ms-2">
                                  <form
                                    method="POST"
                                    action="https://demo.rajodiya.com/lmsgo-saas/store-resource/2"
                                    accept-charset="UTF-8"
                                  >
                                    <a
                                      href="#!"
                                      class="mx-3 btn btn-sm align-items-center show_confirm"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Delete"
                                    >
                                      <i class="ti ti-trash text-white"></i>
                                    </a>
                                  </form>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="dataTable-bottom">
                        <div class="dataTable-info">
                          Showing 1 to 1 of 1 entries
                        </div>
                        <nav class="dataTable-pagination">
                          <ul class="dataTable-pagination-list"></ul>
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
