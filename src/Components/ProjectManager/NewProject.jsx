import React from "react";

export default function NewProject() {
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          {/* <!-- [ breadcrumb ] start --> */}
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                      <h4 className="m-b-10">
                        {" "}
                        <div className="d-inline-block">
                          <h5 className="h4 d-inline-block font-weight-400 mb-0">
                            Project Edit
                          </h5>
                        </div>
                      </h4>
                    </div>
                    <div className="col-auto"></div>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"> </li>
                    <a href="https://demo.rajodiya.com/crmgo-saas/dashboard"></a>
                    <li className="breadcrumb-item">
                      <a href="https://demo.rajodiya.com/crmgo-saas/dashboard">
                        Dashboard
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="https://demo.rajodiya.com/crmgo-saas/project">
                        Project
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Edit
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- [ breadcrumb ] end --> */}
          {/* <!-- [ Main Content ] start --> */}
          <div className="row">
            <form
              method="POST"
              action="https://demo.rajodiya.com/crmgo-saas/project/1"
              acceptCharset="UTF-8"
              className="mt-4"
            >
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label for="title" className="form-label">
                        Project Title
                      </label>
                      <input
                        className="form-control"
                        required="required"
                        name="title"
                        type="text"
                        value="UI Development"
                        id="title"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <label for="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        rows="2"
                        name="description"
                        cols="50"
                        id="description"
                      >
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs. The passage is attributed to an unknown
                        typesetter in the 15th century who is thought to have
                        scrambled parts of Cicero's De Finibus Bonorum et
                        Malorum for use in a type specimen book.
                      </textarea>
                    </div>
                    <div className="modal-footer pr-0">
                      <button
                        type="button"
                        className="btn  btn-light"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <input
                        className="btn  btn-primary"
                        type="submit"
                        value="Update"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- [ Main Content ] end --> */}
        </div>
      </div>
    </div>
  );
}
