import React from "react";
import PageHeader from "../Utllils/PageHeader";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
export default function SelectedProject({ handlePhase }) {

  const project = useSelector((c) => c.projects.selectedProject);
  const { _id, title: projectTitle,    date } = project;
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
          <div class="card bg-primary">
            <div class="card-body">
              <div class="d-block d-sm-flex align-items-center justify-content-between">
                <h4 class="text-white">  {projectTitle}</h4>
                <div class="d-flex  align-items-center">
                  <div class="px-3">
                    <span class="text-white text-sm">Start Date:</span>
                    <h5 class="text-white text-nowrap">{start_date}</h5>
                  </div>
                  <div class="px-3">
                    <span class="text-white text-sm">Due Date:</span>
                    <h5 class="text-white">06 Oct 2020</h5>
                  </div>
                  <div class="px-3">
                    <span class="text-white text-sm">Total Members:</span>
                    <h5 class="text-white text-nowrap">8</h5>
                  </div>
                  <div class="px-3">

                    <div class="badge  bg-secondary p-2 px-3 rounded">Ongoing</div>

                  </div>
                </div>


                <div class="d-flex align-items-center ">
                   
                  <button class="btn btn-light d">
                    <a href="/" class="bs-pass-para">
                      <i class="ti ti-chart-line"> </i></a>
                      </button>

                </div>     

              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header card-body ">
                <h5>Requirements Phases</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
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
            {/* <!-- [ sample-page ] end --> */}
          </div>
        </div>
        {/* <!-- [ Main Content ] end --> */}
      </div>
    </div>
  );
}
