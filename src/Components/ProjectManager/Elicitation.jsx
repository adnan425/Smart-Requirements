import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from "../Utllils/Accordion";
import PageHeader from "../Utllils/PageHeader";
import PageTitle from "./../Utllils/PageTitle";

export default function Elicitation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [requirement, setRequirement] = useState({
    title: '',
    description: '',
    type: '',
  })
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">

          <PageHeader title="Requirements Elicitation" />
          <div className="row">
            <PageTitle
              title="Requirements"
              description="In requirements engineering, requirements elicitation is the practice of researching and discovering the requirements of a system from users, customers, and other stakeholders."
            >
              <button className="btn btn-sm btn-primary" onClick={handleShow} title="Create">
                <i className="ti ti-plus"></i></button>
            </PageTitle>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Requirements</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="col-md-12 form-group">
                  <label for="title" className="col-form-label">Short Title</label>
                  <input className="form-control" value={requirement.title} onChange={e=> setRequirement({...requirement,title:e.target.value})} placeholder="Enter short title of requirement"
                    required="required" id='title' type="text" />
                </div>
                <div className="col-md-12 form-group">
                  <label for="desc" className="col-form-label">Description</label>
                  <input className="form-control" placeholder="Enter description" value={requirement.description} onChange={e=>setRequirement({...requirement, description: e.target.value})}
                    required="required" id='desc' type="text" />
                </div>
                <div className="form-group col-md-12">
                <label for="type" className="col-form-label">Requirement Type</label>
                <select className="form-control select2" required="required" id="type">
                  <option value="Functional">Functional</option><option value="Non-Functional">Non-Functional</option></select>
            </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="row">
              <div className="p-3 card">
                <ul
                  className="nav nav-pills nav-fill"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">

                    <button
                      className="nav-link active"
                      id="pills-user-tab-3"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-user-3"
                      type="button"
                    >
                      All Requirements
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">

                    <button
                      className="nav-link"
                      id="pills-user-tab-1"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-user-1"
                      type="button"
                    >
                      Functional Requirements
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-user-tab-2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-user-2"
                      type="button"
                    >
                      Non -Functional Requirements
                    </button>
                  </li>
                </ul>
              </div>
              <div className="px-0">
                <div style={{ position: "relative" }}>
                  <div className="tab-content no-padding" id="myTab2Content">
                    <div
                      className="tab-pane fade show active"
                      id="lang3"
                      role="tabpanel"
                      aria-labelledby="home-tab4"
                    >
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade active show"
                          id="pills-user-3"
                          role="tabpanel"
                          aria-labelledby="pills-user-tab-3"
                        >
                          <div className="card">
                            <div className="card-header">
                              <h5>All Requirements</h5>
                              <small className="text-muted">
                                These details will be used to collect invoice
                                payments. Each invoice will have a payment
                                button based on the below configuration.
                              </small>
                            </div>
                            <div className="card-body">
                              <div className="faq justify-content-center">
                                <div className="col-sm-12 col-md-10-12 col-xxl-12">
                                  <Accordion
                                    id="fr-1"
                                    title="FR:1 Use should Login"
                                    description="<strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow."
                                  />
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-user-1"
                          role="tabpanel"
                          aria-labelledby="pills-user-tab-1"
                        >
                          <div className="card">
                            <div className="card-header">
                              <h5>Functional Requirements</h5>
                              <small className="text-muted">
                                These details will be used to collect invoice
                                payments. Each invoice will have a payment
                                button based on the below configuration.
                              </small>
                            </div>
                            <div className="card-body">
                              <div className="faq justify-content-center">
                                <div className="col-sm-12 col-md-10-12 col-xxl-12">
                                  <Accordion
                                    id="fr-1"
                                    title="FR:1 Use should Login"
                                    description="<strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow."
                                  />
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-user-2"
                          role="tabpanel"
                          aria-labelledby="pills-user-tab-2"
                        >
                          <div className="card">
                            <div className="card-header">
                              <h5>Non Functional Requirements</h5>
                              <small className="text-muted">
                                These details will be used to collect invoice
                                payments. Each invoice will have a payment
                                button based on the below configuration.
                              </small>
                            </div>
                            <div className="card-body">
                              <div className="faq justify-content-center">
                                <div className="col-sm-12 col-md-10-12 col-xxl-12">
                                  <Accordion
                                    id="fr-1"
                                    title="FR:1 Use should
              Login"
                                    description="<strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow."
                                  />
                                </div>
                              </div>

                            </div>
                          </div>
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
    //   </div>
  );
}
