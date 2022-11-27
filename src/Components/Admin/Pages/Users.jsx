import React from "react";

export default function Users() {
  return (
    <div className="page-content">
      {/* <!-- [ Main Content ] start --> */}
      <div className="dash-container">
        <div className="dash-content">
          {/* <!-- [ breadcrumb ] start --> */}
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="d-block d-sm-flex align-items-center justify-content-between">
                    <div>
                      <div className="page-header-title">
                        <h4 className="m-b-10"> WhatsStore</h4>
                      </div>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="https://demo.rajodiya.com/whatsstore-saas/dashboard">
                            Home
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          User
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="row  m-1">
                        <div className="col-auto pe-0">
                          <a
                            href="https://demo.rajodiya.com/whatsstore-saas/store-customDomain/customDomain"
                            className="btn btn-sm btn-primary btn-icon"
                          >
                            Sub Domain
                          </a>
                        </div>
                        <div className="col-auto pe-0">
                          <a
                            href="https://demo.rajodiya.com/whatsstore-saas/store-customDomain/customDomain"
                            className="btn btn-sm btn-primary btn-icon"
                          >
                            Custom Domain
                          </a>
                        </div>
                        <div className="col-auto pe-0">
                          <div className="col-auto pe-0">
                            <a
                              href="https://demo.rajodiya.com/whatsstore-saas/store-resource"
                              className="btn btn-sm btn-primary btn-icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="List View"
                              aria-label="List View"
                            >
                              <i className="fas fa-list text-white"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- <div className="row"> --> */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                <div className="col-md-3">
                  <div className="card text-center">
                    <div className="card-header border-0 pb-0">
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
                              href="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              className="dropdown-item"
                              data-bs-original-title="View"
                            >
                              <i className="ti ti-eye"></i>
                              <span>Show</span>
                            </a>

                            <a
                              href="#!"
                              data-size="md"
                              data-url="https://demo.rajodiya.com/erpgo-saas/clients/4/edit"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Edit User"
                            >
                              <i className="ti ti-pencil"></i>
                              <span>Edit</span>
                            </a>

                            <form
                              method="POST"
                              action="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              accept-charset="UTF-8"
                              id="delete-form-4"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                value="DELETE"
                              />
                              <a href="#!" className="dropdown-item bs-pass-para">
                                <i className="ti ti-archive"></i>
                                <span> Delete </span>
                              </a>
                            </form>

                            <a
                              href="#!"
                              data-url="https://demo.rajodiya.com/erpgo-saas/client-reset-password/eyJpdiI6IjEvTnFUWTByb0hSay9qQk45dTZ6TkE9PSIsInZhbHVlIjoiakNLQms2M1JTSkJtTExvaDc4R2ppUT09IiwibWFjIjoiM2Y5N2M5YWQwZGQ2ZDhjYmUxNTE0MDRkOTFiOWQ2ZTQ3Yjc0ZjRlNGVlMDM3NWM2NWZhNWM5ZTcyMTZmMzJjYyIsInRhZyI6IiJ9"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Reset Password"
                            >
                              <i className="ti ti-adjustments"></i>
                              <span> Reset Password</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body full-card">
                      <div className="img-fluid rounded-circle card-avatar">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-4.jpg"
                          alt="kal"
                          className="img-user wid-80 rounded-circle"
                        />
                      </div>
                      <h4 className=" mt-2 text-primary">Mick Aston</h4>
                      <p></p>
                      <div className="row">
                        <div className="col-12 col-sm-12">
                          <div className="d-grid text-primary">
                            client@example.com
                          </div>
                        </div>
                      </div>
                      <div
                        className="align-items-center h6 mt-2"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Last Login"
                      >
                        2022-11-06 19:54:56
                      </div>
                    </div>
                    <div className="card-footer p-3">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="mb-0"> 2</h6>
                          <p className="text-muted text-sm mb-0">Deals</p>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0"> 4</h6>
                          <p className="text-muted text-sm mb-0">Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center">
                    <div className="card-header border-0 pb-0">
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
                              href="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              className="dropdown-item"
                              data-bs-original-title="View"
                            >
                              <i className="ti ti-eye"></i>
                              <span>Show</span>
                            </a>

                            <a
                              href="#!"
                              data-size="md"
                              data-url="https://demo.rajodiya.com/erpgo-saas/clients/4/edit"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Edit User"
                            >
                              <i className="ti ti-pencil"></i>
                              <span>Edit</span>
                            </a>

                            <form
                              method="POST"
                              action="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              accept-charset="UTF-8"
                              id="delete-form-4"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                value="DELETE"
                              />
                              <a href="#!" className="dropdown-item bs-pass-para">
                                <i className="ti ti-archive"></i>
                                <span> Delete </span>
                              </a>
                            </form>

                            <a
                              href="#!"
                              data-url="https://demo.rajodiya.com/erpgo-saas/client-reset-password/eyJpdiI6IjEvTnFUWTByb0hSay9qQk45dTZ6TkE9PSIsInZhbHVlIjoiakNLQms2M1JTSkJtTExvaDc4R2ppUT09IiwibWFjIjoiM2Y5N2M5YWQwZGQ2ZDhjYmUxNTE0MDRkOTFiOWQ2ZTQ3Yjc0ZjRlNGVlMDM3NWM2NWZhNWM5ZTcyMTZmMzJjYyIsInRhZyI6IiJ9"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Reset Password"
                            >
                              <i className="ti ti-adjustments"></i>
                              <span> Reset Password</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body full-card">
                      <div className="img-fluid rounded-circle card-avatar">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-4.jpg"
                          alt="kal"
                          className="img-user wid-80 rounded-circle"
                        />
                      </div>
                      <h4 className=" mt-2 text-primary">Mick Aston</h4>
                      <p></p>
                      <div className="row">
                        <div className="col-12 col-sm-12">
                          <div className="d-grid text-primary">
                            client@example.com
                          </div>
                        </div>
                      </div>
                      <div
                        className="align-items-center h6 mt-2"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Last Login"
                      >
                        2022-11-06 19:54:56
                      </div>
                    </div>
                    <div className="card-footer p-3">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="mb-0"> 2</h6>
                          <p className="text-muted text-sm mb-0">Deals</p>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0"> 4</h6>
                          <p className="text-muted text-sm mb-0">Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center">
                    <div className="card-header border-0 pb-0">
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
                              href="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              className="dropdown-item"
                              data-bs-original-title="View"
                            >
                              <i className="ti ti-eye"></i>
                              <span>Show</span>
                            </a>

                            <a
                              href="#!"
                              data-size="md"
                              data-url="https://demo.rajodiya.com/erpgo-saas/clients/4/edit"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Edit User"
                            >
                              <i className="ti ti-pencil"></i>
                              <span>Edit</span>
                            </a>

                            <form
                              method="POST"
                              action="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              accept-charset="UTF-8"
                              id="delete-form-4"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                value="DELETE"
                              />
                              <a href="#!" className="dropdown-item bs-pass-para">
                                <i className="ti ti-archive"></i>
                                <span> Delete </span>
                              </a>
                            </form>

                            <a
                              href="#!"
                              data-url="https://demo.rajodiya.com/erpgo-saas/client-reset-password/eyJpdiI6IjEvTnFUWTByb0hSay9qQk45dTZ6TkE9PSIsInZhbHVlIjoiakNLQms2M1JTSkJtTExvaDc4R2ppUT09IiwibWFjIjoiM2Y5N2M5YWQwZGQ2ZDhjYmUxNTE0MDRkOTFiOWQ2ZTQ3Yjc0ZjRlNGVlMDM3NWM2NWZhNWM5ZTcyMTZmMzJjYyIsInRhZyI6IiJ9"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Reset Password"
                            >
                              <i className="ti ti-adjustments"></i>
                              <span> Reset Password</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body full-card">
                      <div className="img-fluid rounded-circle card-avatar">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-4.jpg"
                          alt="kal"
                          className="img-user wid-80 rounded-circle"
                        />
                      </div>
                      <h4 className=" mt-2 text-primary">Mick Aston</h4>
                      <p></p>
                      <div className="row">
                        <div className="col-12 col-sm-12">
                          <div className="d-grid text-primary">
                            client@example.com
                          </div>
                        </div>
                      </div>
                      <div
                        className="align-items-center h6 mt-2"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Last Login"
                      >
                        2022-11-06 19:54:56
                      </div>
                    </div>
                    <div className="card-footer p-3">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="mb-0"> 2</h6>
                          <p className="text-muted text-sm mb-0">Deals</p>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0"> 4</h6>
                          <p className="text-muted text-sm mb-0">Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center">
                    <div className="card-header border-0 pb-0">
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
                              href="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              className="dropdown-item"
                              data-bs-original-title="View"
                            >
                              <i className="ti ti-eye"></i>
                              <span>Show</span>
                            </a>

                            <a
                              href="#!"
                              data-size="md"
                              data-url="https://demo.rajodiya.com/erpgo-saas/clients/4/edit"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Edit User"
                            >
                              <i className="ti ti-pencil"></i>
                              <span>Edit</span>
                            </a>

                            <form
                              method="POST"
                              action="https://demo.rajodiya.com/erpgo-saas/clients/4"
                              accept-charset="UTF-8"
                              id="delete-form-4"
                            >
                              <input
                                name="_method"
                                type="hidden"
                                value="DELETE"
                              />
                              <a href="#!" className="dropdown-item bs-pass-para">
                                <i className="ti ti-archive"></i>
                                <span> Delete </span>
                              </a>
                            </form>

                            <a
                              href="#!"
                              data-url="https://demo.rajodiya.com/erpgo-saas/client-reset-password/eyJpdiI6IjEvTnFUWTByb0hSay9qQk45dTZ6TkE9PSIsInZhbHVlIjoiakNLQms2M1JTSkJtTExvaDc4R2ppUT09IiwibWFjIjoiM2Y5N2M5YWQwZGQ2ZDhjYmUxNTE0MDRkOTFiOWQ2ZTQ3Yjc0ZjRlNGVlMDM3NWM2NWZhNWM5ZTcyMTZmMzJjYyIsInRhZyI6IiJ9"
                              data-ajax-popup="true"
                              className="dropdown-item"
                              data-bs-original-title="Reset Password"
                            >
                              <i className="ti ti-adjustments"></i>
                              <span> Reset Password</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body full-card">
                      <div className="img-fluid rounded-circle card-avatar">
                        <img
                          src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-4.jpg"
                          alt="kal"
                          className="img-user wid-80 rounded-circle"
                        />
                      </div>
                      <h4 className=" mt-2 text-primary">Mick Aston</h4>
                      <p></p>
                      <div className="row">
                        <div className="col-12 col-sm-12">
                          <div className="d-grid text-primary">
                            client@example.com
                          </div>
                        </div>
                      </div>
                      <div
                        className="align-items-center h6 mt-2"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Last Login"
                      >
                        2022-11-06 19:54:56
                      </div>
                    </div>
                    <div className="card-footer p-3">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="mb-0"> 2</h6>
                          <p className="text-muted text-sm mb-0">Deals</p>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0"> 4</h6>
                          <p className="text-muted text-sm mb-0">Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          {/* <!-- </div> --> */}
        </div>
      </div>
      {/* <!-- [ Main Content ] end --> */}
    </div>
  );
}
