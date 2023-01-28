import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from "../Utllils/Accordion";
import PageHeader from "../Utllils/PageHeader";
import PageTitle from './../Utllils/PageTitle';
import http from '../Services/httpService';
import Joi from 'joi-browser';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { projectRequirements } from '../Store/Projects/projects';

import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
const apiUrl = 'http://localhost:3004/api';
const moment = require('moment');

export default function SingleProject() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const projectId = useSelector(c => c.projects.selectedProject._id);
    const [requirements, setRrequirements] = useState([]);
    if (!projectId) {
        // window.location = '../stakeholder';
    }

    const getRequirements = () => {
        try {
            http.get(`${apiUrl}/manager/requirement/${projectId}`)
                .then(({ data }) => {
                    setRrequirements(data);
                }).catch(error => {
                    toast.error(error.message);
                })

        } catch (error) {
            toast.error(error.message);
            return error.message
        }
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(projectRequirements(projectId));
        getRequirements();

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
                getRequirements();
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
    let project = useSelector((c) => c.projects.selectedProject); 
  
    const s = useSelector((c) => c.projects.selectedProject.stakeholdersDetails);
    const [stakeholders, setStakeholders] = useState(s);
  
    useEffect(() => {
      setStakeholders(s);
    }, [s])
    
    const { title: projectTitle, date , status } = project;
    const start_date = moment(date).format("MMM Do YYYY");
    return (
        
        <div className="page-content">
            <div className="dash-container">
                <div className="dash-content">
                    <PageHeader />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="row" id="printableArea">
                                    {/* Intro of Project */}
                                    <div class="col-xxl-12">
                                        <div class="card bg-primary">
                                            <div class="card-body">
                                                <div class="d-block d-sm-flex align-items-center justify-content-between">
                                                    <h4 class="text-white"> {projectTitle}</h4>
                                                    <div class="d-flex  align-items-center">
                                                        <div class="px-3">
                                                            <span class="text-white text-sm">Start Date:</span>
                                                            <h5 class="text-white text-nowrap">{start_date}</h5>
                                                        </div>
                                                        <div class="px-3">
                                                            <span class="text-white text-sm">Due Date:</span>
                                                            <h5 class="text-white">{status}</h5>
                                                        </div>
                                                        <div class="px-3">
                                                            <span class="text-white text-sm">Total Members:</span>
                                                            <h5 class="text-white text-nowrap"> { project.stakeholders.length }</h5>
                                                        </div>
                                                        <div class="px-3">

                                                            <div class="badge  bg-secondary p-2 px-3 rounded">{status}</div>

                                                        </div>
                                                    </div>


                                                    <div class="d-flex align-items-center ">
                                                        {/* <button class="btn btn-light d-flex align-items-between me-3">
                                                            <a href="#/" >
                                                                <i class="ti ti-edit"> </i>
                                                            </a>
                                                        </button> */}
                                                        {/* <button class="btn btn-light d"><a href="#/" class="bs-pass-para" data-toggle="popover" title="Delete" ><i class="ti ti-trash"> </i></a></button> */}

                                                    </div>                 

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* <PageHeader title="Requirements Elicitation" /> */}
                                        <div className="row">
                                            <PageTitle
                                                title="Requirements"
                                                description="In requirements engineering, requirements elicitation is the practice of researching and discovering the requirements of a system from users, customers, and other stakeholders."
                                            >
                                                <button className="btn btn-sm btn-primary" onClick={handleShow} title="Create">
                                                    <i className="ti ti-plus"></i></button>
                                            </PageTitle>

                                            <Modal show={show} size="lg" onHide={handleClose}>
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
                                            </Modal>
                                            <div className="row">
                                                <div className="p-3 card" >
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
                                                <div className="px-0 ">
                                                    <div style={{ position: "relative" }}>
                                                        <div className="tab-content no-padding" id="myTab2Content">
                                                            <div
                                                                className="tab-pane fade show active "
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
                                                                        <div className="card activity-scroll">
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
                                                                                        <div className="accordion accordion-flush" id="accordionExample">
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
                                                                        <div className="card activity-scroll ">
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
                                                                                        <div className="accordion accordion-flush" id="accordionExample">
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
                                                                        <div className="card activity-scroll">
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
                                                                                        <div className="accordion accordion-flush" id="accordionExample">
                                                                                            {
                                                                                                requirements && requirements.length !== 0 && requirements.map((requirement) => {
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

                                    {/* Stakeholders */}
                                    <div className="col-xl-6">
                                        <div className="card activity-scroll">
                                            <div className="card-header">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="float-start">
                                                        <h5 className="">Members</h5>
                                                        <small className=" text-sm">
                                                            Rajodiya Infotech Create new Expense{" "}
                                                            <b>FInance</b>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <ul
                                                    className="list-group list-group-flush list"
                                                    id="project_users"
                                                >
                                                    <li className="list-group-item px-0">
                                                        <div className="row align-items-center justify-content-between">
                                                            <div className="col-sm-auto mb-3 mb-sm-0">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar rounded-circle avatar-sm me-3">
                                                                        <Avatar name={''} round="50%" />

                                                                    </div>
                                                                    <div className="div">
                                                                        <h5 className="m-0">Rajodiya Infotech</h5>
                                                                        <small className="text-muted">
                                                                            company@example.com
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Changes date time  */}
                                    <div className="col-xl-6">
                                        <div className="card activity-scroll">
                                            <div className="card-header">
                                                <h5>Requirements</h5>
                                                <small>Activity Log of this project</small>
                                                <div className="float-end">
                                                    <Link
                                                        to={'/stakeholder/requirements'}
                                                        data-bs-toggle="tooltip"
                                                        title=""
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        <i className="ti ti-plus"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="card-body vertical-scroll-cards">
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-plus"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Expense</h6>
                                                                <p className="text-muted text-sm">
                                                                    Rajodiya Infotech Create new Expense{" "}
                                                                    <b>FInance</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            4 hours ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Maris Chase</b> lorem200 from To Do to Review
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            7 hours ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Stacey Spence</b> from In Progress to
                                                                    Review
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            3 weeks ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Maris Chase</b> from Review to To Do
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            3 weeks ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Maris Chase</b> from To Do to Review
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            3 weeks ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Stacey Spence</b> from Review to In
                                                                    Progress
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            3 weeks ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Stacey Spence</b> from In Progress to
                                                                    Review
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            3 weeks ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Stacey Spence</b> from Review to In
                                                                    Progress
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            3 weeks ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-bug"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Bug</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Created new bug{" "}
                                                                    <b>Aperiam nostrum amet</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            3 weeks ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-gem"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Milestone</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Create new milestone{" "}
                                                                    <b>ygvgty</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-plus"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Create new Task{" "}
                                                                    <b>Stacey Spence</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-gem"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Milestone</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Create new milestone{" "}
                                                                    <b>ytytf6</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-plus"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Create new Task{" "}
                                                                    <b>Maris Chase</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Irma Walls</b> from To Do to Done
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Cora Robbins</b> from Review to Done
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Kimberly Richardson</b> from In Progress
                                                                    to Done
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-plus"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Create new Task{" "}
                                                                    <b>Kimberly Richardson</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-plus"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Create new Task{" "}
                                                                    <b>Cora Robbins</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Irma Walls</b> from Done to To Do
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-arrows-alt"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Move Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Moved the Task{" "}
                                                                    <b>Irma Walls</b> from To Do to Done
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card p-2 mb-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="theme-avtar bg-primary">
                                                                <i className="ti ti-fa-plus"></i>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Create Task</h6>
                                                                <p className="text-muted text-sm mb-0">
                                                                    Rajodiya Infotech Create new Task{" "}
                                                                    <b>Irma Walls</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted text-sm mb-0">
                                                            1 month ago
                                                        </p>
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
                </div >
            </div >
        </div >
    );
}
