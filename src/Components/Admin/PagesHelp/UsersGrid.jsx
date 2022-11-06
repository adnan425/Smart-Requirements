import React from "react";

export default function Users() {
  return (
    <div class="page-content">
      {/* <!-- [ Main Content ] start --> */}
      <div class="dash-container">
        <div class="dash-content">
          {/* <!-- [ breadcrumb ] start --> */}
          <div class="page-header">
            <div class="page-block">
              <div class="row align-items-center">
                <div class="col-md-12">
                  <div class="d-block d-sm-flex align-items-center justify-content-between">
                    <div>
                      <div class="page-header-title">
                        <h4 class="m-b-10"> WhatsStore</h4>
                      </div>
                      <ul class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="https://demo.rajodiya.com/whatsstore-saas/dashboard">
                            Home
                          </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          User
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div class="row  m-1">
                        <div class="col-auto pe-0">
                          <a
                            href="https://demo.rajodiya.com/whatsstore-saas/store-customDomain/customDomain"
                            class="btn btn-sm btn-primary btn-icon"
                          >
                            Sub Domain
                          </a>
                        </div>
                        <div class="col-auto pe-0">
                          <a
                            href="https://demo.rajodiya.com/whatsstore-saas/store-customDomain/customDomain"
                            class="btn btn-sm btn-primary btn-icon"
                          >
                            Custom Domain
                          </a>
                        </div>
                        <div class="col-auto pe-0">
                          <div class="col-auto pe-0">
                            <a
                              href="https://demo.rajodiya.com/whatsstore-saas/store-resource"
                              class="btn btn-sm btn-primary btn-icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="List View"
                              aria-label="List View"
                            >
                              <i class="fas fa-list text-white"></i>
                            </a>
                          </div>
                        </div>
                        <div class="col-auto pe-0">
                          <a
                            href="#"
                            class="btn btn-sm btn-primary btn-icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-size="lg"
                            data-ajax-popup="true"
                            data-title="Create New Store"
                            data-url="https://demo.rajodiya.com/whatsstore-saas/store-resource/create"
                            data-bs-original-title="Create New Store"
                          >
                            <i class="ti ti-plus text-white"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- <div class="row"> --> */}
          <div class="row">
           
              <div class="col-md-4 col-xxl-3">
              <div class="card">
                <div class="card-header border-0 pb-0">
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
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-edit/3"
                          data-ajax-popup="true"
                          data-title="Edit User"
                          class="dropdown-item"
                        >
                          <i class="ti ti-edit"></i>
                          <span>Edit</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-plan/3/plan"
                          data-ajax-popup="true"
                          data-title="Upgrade Plan"
                          class="dropdown-item"
                        >
                          <i class="ti ti-trophy"></i>
                          <span>Upgrade Plan</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/user-reset-password/3"
                          data-ajax-popup="true"
                          data-title="Reset Password"
                          class="dropdown-item"
                        >
                          <i class="ti ti-key"></i>
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
                            class="mx-3   btn-sm d-inline-flex align-items-center show_confirm"
                          >
                            <i class="ti ti-trash"></i>{" "}
                            <span class="ms-1">Delete</span>{" "}
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <div class="avatar-parent-child">
                    <img
                      alt=""
                      src="https://demo.rajodiya.com/whatsstore-saas/storage/uploads/profile//avatar.png"
                      class="img-fluid rounded-circle card-avatar"
                    />
                  </div>

                  <h5 class="h6 mt-4 mb-0"> Isaac Mcmahon</h5>
                  <a href="#" class="d-block text-sm text-muted my-4">
                    {" "}
                    vone@mailinator.com
                  </a>
                  <div class="card mb-0 mt-3">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="mb-0">0</h6>
                          <p class="text-muted text-sm mb-0">Products</p>
                        </div>
                        <div class="col-6 text-end">
                          <h6 class="mb-0">1</h6>
                          <p class="text-muted text-sm mb-0">Stores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="actions d-flex justify-content-between">
                    <span class="d-block text-sm text-muted">
                      {" "}
                      Plan : Free Plan
                    </span>
                  </div>
                  <div class="actions d-flex justify-content-between mt-1">
                    <span class="d-block text-sm text-muted">
                      Plan Expired : Unlimited
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <div class="card">
                <div class="card-header border-0 pb-0">
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
                      <div class="dropdown-menu dropdown-menu-end"  >
                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-edit/4"
                          data-ajax-popup="true"
                          data-title="Edit User"
                          class="dropdown-item"
                        >
                          <i class="ti ti-edit"></i>
                          <span>Edit</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-plan/4/plan"
                          data-ajax-popup="true"
                          data-title="Upgrade Plan"
                          class="dropdown-item"
                        >
                          <i class="ti ti-trophy"></i>
                          <span>Upgrade Plan</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/user-reset-password/4"
                          data-ajax-popup="true"
                          data-title="Reset Password"
                          class="dropdown-item"
                        >
                          <i class="ti ti-key"></i>
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
                            class="mx-3   btn-sm d-inline-flex align-items-center show_confirm"
                          >
                            <i class="ti ti-trash"></i>{" "}
                            <span class="ms-1">Delete</span>{" "}
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <div class="avatar-parent-child">
                    <img
                      alt=""
                      src="https://demo.rajodiya.com/whatsstore-saas/storage/uploads/profile//avatar.png"
                      class="img-fluid rounded-circle card-avatar"
                    />
                  </div>

                  <h5 class="h6 mt-4 mb-0"> Germane Page</h5>
                  <a href="#" class="d-block text-sm text-muted my-4">
                    {" "}
                    Germane@mailinator.com
                  </a>
                  <div class="card mb-0 mt-3">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="mb-0">0</h6>
                          <p class="text-muted text-sm mb-0">Products</p>
                        </div>
                        <div class="col-6 text-end">
                          <h6 class="mb-0">1</h6>
                          <p class="text-muted text-sm mb-0">Stores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="actions d-flex justify-content-between">
                    <span class="d-block text-sm text-muted">
                      {" "}
                      Plan : Free Plan
                    </span>
                  </div>
                  <div class="actions d-flex justify-content-between mt-1">
                    <span class="d-block text-sm text-muted">
                      Plan Expired : Unlimited
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <div class="card">
                <div class="card-header border-0 pb-0">
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
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-edit/5"
                          data-ajax-popup="true"
                          data-title="Edit User"
                          class="dropdown-item"
                        >
                          <i class="ti ti-edit"></i>
                          <span>Edit</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/store-plan/5/plan"
                          data-ajax-popup="true"
                          data-title="Upgrade Plan"
                          class="dropdown-item"
                        >
                          <i class="ti ti-trophy"></i>
                          <span>Upgrade Plan</span>
                        </a>

                        <a
                          href="#"
                          data-size="md"
                          data-url="https://demo.rajodiya.com/whatsstore-saas/user-reset-password/5"
                          data-ajax-popup="true"
                          data-title="Reset Password"
                          class="dropdown-item"
                        >
                          <i class="ti ti-key"></i>
                          <span>Reset Password</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body text-center">
                  <div class="avatar-parent-child">
                    <img
                      alt=""
                      src="https://demo.rajodiya.com/whatsstore-saas/storage/uploads/profile//avatar.png"
                      class="img-fluid rounded-circle card-avatar"
                    />
                  </div>

                  <h5 class="h6 mt-4 mb-0"> Hilda Bates</h5>
                  <a href="#" class="d-block text-sm text-muted my-4">
                    {" "}
                    Hilda@mailinator.com
                  </a>
                  <div class="card mb-0 mt-3">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="mb-0">0</h6>
                          <p class="text-muted text-sm mb-0">Products</p>
                        </div>
                        <div class="col-6 text-end">
                          <h6 class="mb-0">1</h6>
                          <p class="text-muted text-sm mb-0">Stores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="actions d-flex justify-content-between">
                    <span class="d-block text-sm text-muted">
                      {" "}
                      Plan : Free Plan
                    </span>
                  </div>
                  <div class="actions d-flex justify-content-between mt-1">
                    <span class="d-block text-sm text-muted">
                      Plan Expired : Unlimited
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <a
                href="https://demo.rajodiya.com/whatsstore-saas/product/create"
                class="btn-addnew-project"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="Create"
              >
                <i class="ti ti-plus text-white"></i>
                <div class="bg-primary proj-add-icon">
                  <i class="ti ti-plus"></i>
                </div>
                <h6 class="mt-4 mb-2">New Store</h6>
                <p class="text-muted text-center">
                  Click here to add New Store
                </p>
              </a>
              <div class="card-body text-center"></div>
              <div class="card-footer">
                <div class="actions d-flex justify-content-between"></div>
                <div class="actions d-flex justify-content-between mt-1"></div>
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
