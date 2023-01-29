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

  let project = useSelector((c) => c.projects.selectedProject);
  let projectId = useSelector((c) => c.projects.selectedProject._id);

  const s = useSelector((c) => c.projects.selectedProject.stakeholdersDetails);
  const [stakeholders, setStakeholders] = useState(s);

  useEffect(() => {
    setStakeholders(s);
  }, [s])


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectTitle(projectId));
  }, [dispatch, projectId])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errors, setErrors] = useState({});
  const [stakeholder, setStakeholder] = useState({
    name: '',
    email: '',
    password: ''
  })

  const stakeholderSchema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required()
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
    const data = { projectId: projectId, ...stakeholder };
    http.post(`${apiUrl}/projects/stakeholder`, data).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        toast.success(res.data);
        setShow(false);
        setStakeholder({
          name: '',
          email: '',
          password: ''
        })

      } else {
        toast.info(res.data);
      }
    }).catch(err => { console.log("error ", err.response.data); toast.info(err.response.data) });
  }
  const handleDelete = (id) => {
    const data = { projectId: projectId, userId: id };
    console.log(data);
    http.delete(`${apiUrl}/projects/stakeholder`, { data }).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        toast.success(res.data);
        //  let s = stakeholders.map(user=>user.id!==id);
        // setStakeholders(stakeholders.map(user => user.id !== id));
      } else {
        toast.info(res.data);
      }
    }).catch(err => { console.log("error ", err.response.data); toast.info(err.response.data) });
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
      path: '/manager/pdf'

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
                      const { _id, name, date, email } = stakeholder;
                      const start_date = moment(date).fromNow();
                      return (
                        <div className="col-lg-3 col-sm-6 col-md-6" key={_id+98}>

                          <ProfileCard id={_id} name={name} email={email} date={start_date} handleClick={handleDelete} />
                        </div>
                      )
                    })}
                     
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <Link onClick={handleShow} className="btn-addnew-project"
                        data-bs-toggle="tooltip" data-bs-placement="top" title="project" >
                        <div className="bg-primary proj-add-icon">
                          <i className="ti ti-plus"></i>
                        </div>
                        <h6 className="mt-4 mb-2">New User</h6>
                        <p className="text-muted text-center">Click here to add New User</p>
                      </Link>
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
