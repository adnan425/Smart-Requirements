import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from "../Utllils/Accordion";
import PageHeader from "../Utllils/PageHeader";
import PageTitle from "./../Utllils/PageTitle";
import http from '../Services/httpService';
import Joi from 'joi-browser';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { projectRequirements } from '../Store/Projects/projects';

const apiUrl = 'http://localhost:3004/api';

export default function Elicitation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const projectId = useSelector(c => c.projects.selectedProject._id);
  const requirements = useSelector(c => c.projects.requirements);
  if (!projectId) {
    window.location = '../manager';
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectRequirements(projectId));
  }, [dispatch, projectId])

  const [requirement, setRequirement] = useState({
    title: '',
    description: '',
    type: 'Functional',
    projectId: projectId
  });
  const [errors, setErrors] = useState({});


  const requirementSchema = {
    title: Joi.string().min(5).max(50).required().label("Short Title"),
    description: Joi.string().min(1).max(500).required().label("Description"),
    type: Joi.string().min(1).max(26).required().label("Requirement Type"),
    projectId: Joi.string().min(11).max(25).required()
  }
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(requirement, requirementSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path[0]] = item.message;
    console.log(err);
    return err;
  }
  const handleSubmit = () => {
    const error = validate();
    if (error) {
      setErrors(error);
      return false;
    }
    doSubmit();
  }
  const doSubmit = () => {
    http.post(`${apiUrl}/manager/requirement`, requirement).then(({ status }) => {
      if (status === 200) {
        toast.success("Added your requirement.");
        setShow(false);
        setRequirement({
          title: '',
          description: '',
          type: 'Functional',
          projectId: projectId,
        })
      } else {
        toast(status);
      }
    }).catch(err => { console.log("error ", err.response.data); toast.error(err.response.data) });
  }
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          <PageHeader title="Requirement Analysis" />
          <div className="row">
            <PageTitle
              title="Requirements"
              description="In requirements engineering, requirements elicitation is the practice of researching and discovering the requirements of a system from users, customers, and other stakeholders."
            >
              {/* <button className="btn btn-sm btn-primary" onClick={handleShow} title="Create">
                <i className="ti ti-plus"></i></button> */}
            </PageTitle>

            {/* <Modal show={show} size="lg" onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Requirements</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="col-md-12 form-group">
                  <label forhtml="title" className="col-form-label">Short Title</label>
                  <input className="form-control" value={requirement.title} onChange={e => setRequirement({ ...requirement, title: e.target.value })} placeholder="Enter short title of requirement"
                    required="required" id='title' type="text" />
                  {errors && <small className="small  text-danger ">{errors['title']}</small>}
                </div>
                <div className="col-md-12 form-group">
                  <label forhtml="desc" className="col-form-label">Description</label>
                  <textarea className="form-control" placeholder="Enter description" value={requirement.description} onChange={e => setRequirement({ ...requirement, description: e.target.value })}
                    required="required" id='desc' type="text" />
                  {errors.description && <small className="small  text-danger ">{errors.description}</small>}

                </div>
                <div className="form-group col-md-12">
                  <label forhtml="type" className="col-form-label">Requirement Type</label>
                  <select className="form-control" required="required" id="type" onChange={e => setRequirement({ ...requirement, type: e.target.value })}>
                    <option value="Functional">Functional</option><option value="Non-Functional">Non-Functional</option></select>
                  {errors.type && <small className="small  text-danger ">{errors.type}</small>}

                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal> */}
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
                          {/* All Requirements */}
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
                                  <div class="accordion accordion-flush" id="accordionExample">
                                    {
                                      requirements && requirements.map((requirement) => {
                                        const { _id, title, description, type } = requirement;
                                        return (
                                          <Accordion id={_id} title={(type === 'Functional') ? `FR - ${title}` : `N-FR - ${title}`} description={description} />
                                        )
                                      })
                                    }
                                    {
                                      (requirements.length === 0) && <Accordion title='Requirements List is Empty' />

                                    }
                                  </div>

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
                                  <div class="accordion accordion-flush" id="accordionExample">
                                    {
                                      requirements && requirements.map((requirement) => {
                                        const { _id, title, description, type } = requirement;
                                        if (type === 'Functional') {
                                          return (
                                            <Accordion id={_id} title={(type === 'Functional') ? `FR - ${title}` : `N-FR - ${title}`} description={description} />
                                          )
                                        }
                                      })
                                    }
                                    {
                                      (requirements.length === 0) && <Accordion title='Requirements List is Empty' />

                                    }

                                  </div>
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
                                  <div class="accordion accordion-flush" id="accordionExample">
                                    {
                                      requirements  && requirements.map((requirement) => {
                                        const { _id, title, description, type } = requirement;
                                        if (type === 'Non-Functional') {
                                          return (
                                            <Accordion id={_id} title={(type === 'Functional') ? `FR - ${title}` : `N-FR - ${title}`} description={description} />
                                          )
                                        }
                                      })
                                    }
                                    {
                                      (requirements.length === 0) && <Accordion title='Requirements List is Empty' />

                                    }
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
        </div>
        {/* <!-- [ Main Content ] end --> */}
      </div>
    </div>
  );
}
