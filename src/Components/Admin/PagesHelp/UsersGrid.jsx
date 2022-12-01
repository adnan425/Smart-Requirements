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
                        <li className="breadcrumb-item active" aria-current="page">
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
                        <div className="col-auto pe-0">
                          <a
                            href="#"
                            className="btn btn-sm btn-primary btn-icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-size="lg"
                            data-ajax-popup="true"
                            data-title="Create New Store"
                            data-url="https://demo.rajodiya.com/whatsstore-saas/store-resource/create"
                            data-bs-original-title="Create New Store"
                          >
                            <i className="ti ti-plus text-white"></i>
                          </a>
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
           
              <div className="col-md-4 col-xxl-3">
              <div className="card">
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
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-edit/3"
                          data-ajax-popup="true"
                          data-title="Edit User"
                          className="dropdown-item"
                        >
                          <i className="ti ti-edit"></i>
                          <span>Edit</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-plan/3/plan"
                          data-ajax-popup="true"
                          data-title="Upgrade Plan"
                          className="dropdown-item"
                        >
                          <i className="ti ti-trophy"></i>
                          <span>Upgrade Plan</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/user-reset-password/3"
                          data-ajax-popup="true"
                          data-title="Reset Password"
                          className="dropdown-item"
                        >
                          <i className="ti ti-key"></i>
                          <span>Reset Password</span>
                        </a>

                        <form
                          method="POST"
                          action="https://demo.rajodiya.com/whatsstore-saas/store-delete/3"
                          accept-charset="UTF-8"
                          id="delete-form-3"
                        >
                          <a
                            href="#!"
                            className="mx-3   btn-sm d-inline-flex align-items-center show_confirm"
                          >
                            <i className="ti ti-trash"></i>{" "}
                            <span className="ms-1">Delete</span>{" "}
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="avatar-parent-child">
                    <img
                      alt=""
                      src="https://demo.rajodiya.com/whatsstore-saas/storage/uploads/profile//avatar.png"
                      className="img-fluid rounded-circle card-avatar"
                    />
                  </div>

                  <h5 className="h6 mt-4 mb-0"> Isaac Mcmahon</h5>
                  <a href="#" className="d-block text-sm text-muted my-4">
                    {" "}
                    vone@mailinator.com
                  </a>
                  <div className="card mb-0 mt-3">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="mb-0">0</h6>
                          <p className="text-muted text-sm mb-0">Products</p>
                        </div>
                        <div className="col-6 text-end">
                          <h6 className="mb-0">1</h6>
                          <p className="text-muted text-sm mb-0">Stores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="actions d-flex justify-content-between">
                    <span className="d-block text-sm text-muted">
                      {" "}
                      Plan : Free Plan
                    </span>
                  </div>
                  <div className="actions d-flex justify-content-between mt-1">
                    <span className="d-block text-sm text-muted">
                      Plan Expired : Unlimited
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xxl-3">
              <div className="card">
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
                      <div className="dropdown-menu dropdown-menu-end"  >
                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-edit/4"
                          data-ajax-popup="true"
                          data-title="Edit User"
                          className="dropdown-item"
                        >
                          <i className="ti ti-edit"></i>
                          <span>Edit</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-plan/4/plan"
                          data-ajax-popup="true"
                          data-title="Upgrade Plan"
                          className="dropdown-item"
                        >
                          <i className="ti ti-trophy"></i>
                          <span>Upgrade Plan</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/user-reset-password/4"
                          data-ajax-popup="true"
                          data-title="Reset Password"
                          className="dropdown-item"
                        >
                          <i className="ti ti-key"></i>
                          <span>Reset Password</span>
                        </a>

                        <form
                          method="POST"
                          action="https://demo.rajodiya.com/whatsstore-saas/store-delete/4"
                          accept-charset="UTF-8"
                          id="delete-form-4"
                        >
                          <a
                            href="#!"
                            className="mx-3   btn-sm d-inline-flex align-items-center show_confirm"
                          >
                            <i className="ti ti-trash"></i>{" "}
                            <span className="ms-1">Delete</span>{" "}
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="avatar-parent-child">
                    <img
                      alt=""
                      src="https://demo.rajodiya.com/whatsstore-saas/storage/uploads/profile//avatar.png"
                      className="img-fluid rounded-circle card-avatar"
                    />
                  </div>

                  <h5 className="h6 mt-4 mb-0"> Germane Page</h5>
                  <a href="#" className="d-block text-sm text-muted my-4">
                    {" "}
                    Germane@mailinator.com
                  </a>
                  <div className="card mb-0 mt-3">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="mb-0">0</h6>
                          <p className="text-muted text-sm mb-0">Products</p>
                        </div>
                        <div className="col-6 text-end">
                          <h6 className="mb-0">1</h6>
                          <p className="text-muted text-sm mb-0">Stores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="actions d-flex justify-content-between">
                    <span className="d-block text-sm text-muted">
                      {" "}
                      Plan : Free Plan
                    </span>
                  </div>
                  <div className="actions d-flex justify-content-between mt-1">
                    <span className="d-block text-sm text-muted">
                      Plan Expired : Unlimited
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xxl-3">
              <div className="card">
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
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-edit/5"
                          data-ajax-popup="true"
                          data-title="Edit User"
                          className="dropdown-item"
                        >
                          <i className="ti ti-edit"></i>
                          <span>Edit</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-plan/5/plan"
                          data-ajax-popup="true"
                          data-title="Upgrade Plan"
                          className="dropdown-item"
                        >
                          <i className="ti ti-trophy"></i>
                          <span>Upgrade Plan</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/user-reset-password/5"
                          data-ajax-popup="true"
                          data-title="Reset Password"
                          className="dropdown-item"
                        >
                          <i className="ti ti-key"></i>
                          <span>Reset Password</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="avatar-parent-child">
                    <img
                      alt=""
                      src="https://demo.rajodiya.com/whatsstore-saas/storage/uploads/profile//avatar.png"
                      className="img-fluid rounded-circle card-avatar"
                    />
                  </div>

                  <h5 className="h6 mt-4 mb-0"> Hilda Bates</h5>
                  <a href="#" className="d-block text-sm text-muted my-4">
                    {" "}
                    Hilda@mailinator.com
                  </a>
                  <div className="card mb-0 mt-3">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="mb-0">0</h6>
                          <p className="text-muted text-sm mb-0">Products</p>
                        </div>
                        <div className="col-6 text-end">
                          <h6 className="mb-0">1</h6>
                          <p className="text-muted text-sm mb-0">Stores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="actions d-flex justify-content-between">
                    <span className="d-block text-sm text-muted">
                      {" "}
                      Plan : Free Plan
                    </span>
                  </div>
                  <div className="actions d-flex justify-content-between mt-1">
                    <span className="d-block text-sm text-muted">
                      Plan Expired : Unlimited
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xxl-3">
              <a
                href="https://demo.rajodiya.com/whatsstore-saas/product/create"
                className="btn-addnew-project"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="Create"
              >
                <i className="ti ti-plus text-white"></i>
                <div className="bg-primary proj-add-icon">
                  <i className="ti ti-plus"></i>
                </div>
                <h6 className="mt-4 mb-2">New Store</h6>
                <p className="text-muted text-center">
                  Click here to add New Store
                </p>
              </a>
              <div className="card-body text-center"></div>
              <div className="card-footer">
                <div className="actions d-flex justify-content-between"></div>
                <div className="actions d-flex justify-content-between mt-1"></div>
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
