import React, { useState, useEffect } from "react";
import PageHeader from "../Utllils/PageHeader"; 
import { Link } from "react-router-dom";
import Card from "../Utllils/Card";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from "react-toastify";
import Joi from 'joi-browser';
import http from '../Services/httpService';
import ProfileCard from "../Utllils/ProfileCard";
import { useSelector, useDispatch } from 'react-redux';
import { getProjectTitle } from './../Store/SRS/srs'; 
const moment = require('moment');

const apiUrl = 'http://localhost:3004/api';


export default function SelectedProject({ handlePhase }) {
  const stakeholders = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },

  ]
  const project = useSelector((c) => c.projects.selectedProject);
  const projectId = useSelector((c) => c.projects.selectedProject._id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectTitle(projectId));
  }, [dispatch, projectId])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errors, setErrors] = useState({});
  const [stakeholder, setStakeholder] = useState({
    projectId: projectId,
    name: '',
    email: '',
    password: ''
  })

  const stakeholderSchema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
    projectId: Joi.string().min(11).max(25).required()
  }
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(stakeholder, stakeholderSchema, options);
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
    http.post(`${apiUrl}/projects/stakeholder`, stakeholder).then(({ status }) => {
      if (status === 200) {
        toast.success("Successfully added.");
        setShow(false);
        setStakeholder({
          name: '',
          email: '',
          password: '',
          projectId: projectId,
        })

      } else {
        toast(status);
      }
    }).catch(err => { console.log("error ", err.response.data); toast.error(err.response.data) });


  }
  const { _id, title: projectTitle, date } = project;
  const start_date = moment(date).format("MMM Do YYYY");

  // const classes = "bg-success";
  const phases = [
    {
      id: 1,
      title: "Requirements Elicitation",
      path: '/manager/phase1'
    },
    {
      id: 2,
      title: "Requirements Analaysis",
      path: '/manager/phase2'

    },
    {
      id: 3,
      title: "Requirements Tracability",
      path: '/manager/phase1'

    },
    {
      id: 4,
      title: "Requirements Verification",
      path: '/manager/phase1'

    },
    {
      id: 5,
      title: "Generate Report",
      path: '/manager/phase1'

    },
  ];
  return (
    <div className="dash-container">
      <div className="dash-content">
        <PageHeader title={projectTitle} />

        <div className="row" key={_id}>
          <div className="card bg-primary">
            <div className="card-body">
              <div className="d-block d-sm-flex align-items-center justify-content-between">
                <h4 className="text-white">  {projectTitle}</h4>
                <div className="row col-md-9">
                  <div className="col-md-3 px-3">
                    <span className="text-white text-sm mb-2 d-block">Progress : 30%</span>
                    <h5 className="text-white text-nowrap" style={{ padding: "5px !important" }}>
                      <div className="progress custom_progress">

                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" ariav-aluenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}>
                        </div>
                      </div></h5>
                  </div>
                  <div className="col-md-3 px-3">
                    <small className="text-white mb-2 d-block">Start Date</small>
                    <h5 className="text-white text-nowrap">{start_date}</h5>
                  </div>
                  <div className="col-md-3 px-3" >
                    <div className="row">
                      <div className="col-auto">
                        <span className="text-white text-sm mb-2 d-block">Status:</span>
                      </div>
                      <div className="badge  bg-secondary p-2 px-3 rounded">Ongoing</div>
                    </div>
                  </div>
                  <div className="col-md-3 px-3">
                    <div className="d-flex align-items-center py-2">
                      <button className="btn btn-light">
                        <a href="/" className="bs-pass-para">
                          <i className="ti ti-chart-line"> </i></a>
                      </button>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Card title="Requirement Phases" description="Requirements elicitation practices include interviews, questionnaires, user observation, workshops, brainstorming, use cases, role playing and prototyping.">
              <div className="row kanban-wrapper horizontal-scroll-cards">

                {phases && phases.map((phase) => {
                  return (

                    <div className="col" id={phase.id}  >

                      <div className="card">
                        <div className="card-header">
                          <div className="float-end">
                            <label className="btn btn-sm btn-primary btn-icon task-header">
                              <span className="count text-white">{phase.id}</span>
                            </label>
                          </div>
                          <h5 className="mb-0">Step {phase.id}</h5>
                        </div>
                        <div
                          className="card-body kanban-box"
                          id="kanban-blacklist-1"
                          data-id="1"
                        >
                          <div className="card" data-id="8">
                            <div className="pt-3 ps-3">
                              <span className="badge rounded-pill bg-warning ml-1">
                                Phase
                              </span>
                              <div className="card-header border-0 pb-0 position-relative">
                                <h5><Link onClick={handlePhase} to={phase.path}>{phase.title}</Link></h5>
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
                                        href="#!"
                                        className="dropdown-item"
                                        data-size="lg"
                                        data-url="https://demo.rajodiya.com/crmgo-saas/lead/8/label"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        data-bs-whatever="Add Label"
                                      >
                                        <i className="ti ti-sticker"></i>
                                        <span>Add Label</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                {" "}
                                <div className="d-flex align-items-center justify-content-between">
                                  <ul className="list-inline mb-0">
                                    <li className="list-inline-item d-inline-flex align-items-center">
                                      <i className="f-16 text-primary ti ti-message-2"></i>
                                      Oct 23, 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>


            {/* <!-- [ sample-page ] end --> */}
          </div>
        </div>
        {
          stakeholders &&
          <>
            <div className="row">
              <div className="col-xxl-12">
                <Card title="Stakeholders" description="Stakeholder means any people or groups who are positively or negatively impacted by a project, initiative, policy or organisation. ">
                  <div className="row timeline-wrapper">

                    {stakeholders.map(stakeholder => {
                      const { id } = stakeholder;
                      return (
                        <div className="col-lg-3 col-sm-6 col-md-6" key={id}>
                          <ProfileCard />
                        </div>
                      )
                    })}
                    <div className="col-md-3">
                      <button onClick={handleShow} className="btn-addnew-project"
                        data-bs-toggle="tooltip" data-bs-placement="top" title="project" >
                        <div className="bg-primary proj-add-icon">
                          <i className="ti ti-plus"></i>
                        </div>
                        <h6 className="mt-4 mb-2">New User</h6>
                        <p className="text-muted text-center">Click here to add New User</p>
                      </button>
                      <Modal show={show} size="lg" onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Requirements</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="col-md-12 form-group">
                            <label forhtml="name" className="col-form-label">Name</label>
                            <input className="form-control" value={stakeholder.name} onChange={e => setStakeholder({ ...stakeholder, name: e.target.value })} placeholder="Enter Name"
                              required="required" id='name' type="text" />
                            {errors && <small className="small  text-danger ">{errors['name']}</small>}
                          </div>
                          <div className="col-md-12 form-group">
                            <label forhtml="email" className="col-form-label">Email</label>
                            <input className="form-control" value={stakeholder.email} onChange={e => setStakeholder({ ...stakeholder, email: e.target.value })} placeholder="Enter Email"
                              required="required" id='email' type="email" />
                            {errors && <small className="small  text-danger ">{errors['email']}</small>}
                          </div>
                          <div className="col-md-12 form-group">
                            <label forhtml="pass" className="col-form-label">Password</label>
                            <input className="form-control" value={stakeholder.password} onChange={e => setStakeholder({ ...stakeholder, password: e.target.value })} placeholder="Enter Password"
                              required="required" id='pass' type="password" />
                            {errors && <small className="small  text-danger ">{errors['password']}</small>}
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
                      </Modal>
                    </div>
                  </div>
                </Card>

              </div>
            </div>
          </>
        }

        {/* <!-- [ Main Content ] end --> */}
      </div>
    </div>
  );
}
