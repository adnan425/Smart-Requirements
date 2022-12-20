import React, {  } from "react";
import PageHeader from "../Utllils/PageHeader";
import { useSelector,  } from 'react-redux';
import { Link } from "react-router-dom";
import Card from "../Utllils/Card"; 
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
  const project = useSelector((c) => c.projects.selectedProject);;

  const { _id, title: projectTitle, date } = project;



  const start_date = date;
  // const classes = "bg-success";
  const phases = [
    {
      id: 1,
      title: "Requirements Elicitation",
    },
    {
      id: 2,
      title: "Requirements Analaysis",
    },
    {
      id: 3,
      title: "Requirements Tracability",
    },
    {
      id: 4,
      title: "Requirements Verification",
    },
    {
      id: 5,
      title: "Generate Report",
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
                    <h5 className="text-white text-nowrap">Jul 12, 2021</h5>
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

                {phases.map((phase) => {
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
                                <h5><Link onClick={handlePhase} to={'/manager/phase1'}>{phase.title}</Link></h5>
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
                        <div className="col-lg-3 col-sm-6 col-md-6">
                          <div className="card text-white text-center">
                            <div className="card-header border-0 pb-0">

                              <div className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0">
                                  <div className="badge p-2 px-3 rounded bg-primary"></div>
                                </h6>
                              </div>

                              <div className="card-header-right">
                                <div className="btn-group card-option">
                                  <div className="action-btn bg-danger ms-2">
                                    <a className="align-items-center btn btn-sm d-inline-flex  " href="/" >
                                      <i className="ti ti-trash text-white"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <a href="https://demo.rajodiya.com/workgo-saas/storage/productimages/user_2.jpg" >
                                <img src="https://demo.rajodiya.com/workgo-saas/storage/productimages/user_2.jpg" alt="user" height={"100px"}
                                  className="  rounded-circle card-avatar" />
                              </a>
                              <h4 className="text-primary mt-2">Alex</h4>
                              <small className="text-primary">alex@example.com</small>

                              <div className="row mt-3">
                                <div className="col-12 col-sm-12">
                                  <div className="card mb-0">
                                    <div className="card-body p-3">
                                      <div className="row">
                                        <div className="col-12">
                                          <p className="text-muted   mb-0">
                                            <i className="ti ti-clock mx-3  card-icon-text-space"></i>Jul 12, 2021</p>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    <div className="col-md-3">
                      <a href="/" className="btn-addnew-project"
                        data-bs-toggle="tooltip" data-bs-placement="top" title="project" >
                        <div className="bg-primary proj-add-icon">
                          <i className="ti ti-plus"></i>
                        </div>
                        <h6 className="mt-4 mb-2">New User</h6>
                        <p className="text-muted text-center">Click here to add New User</p>
                      </a>
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
