import React from "react";
import PageHeader from "../Utllils/PageHeader";

export default function SelectedProject(props) {
  const { title: projectTitle } = props.project.selectedProject;
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

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    <img
                      avatar="Beverly"
                      alt=""
                      className="img-user wid-45 rounded-circle"
                    />
                  </div>
                  <div className="d-block  align-items-center justify-content-between w-100">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="mb-1"> {projectTitle}</h5>
                      <p className="mb-0 text-sm"></p>
                      <div className="progress-wrapper">
                        <span className="progress-percentage">
                          <small className="font-weight-bold">
                            Completed: :{" "}
                          </small>
                          60%
                        </span>
                        <div className="progress progress-xs mt-2">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            aria-valuenow="60%"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <h4 className="mt-3 mb-1"> {""}</h4>
                    <p> Fuga Temporibus ven</p>
                  </div>
                </div>
                <div className="card bg-primary mb-0">
                  <div className="card-body">
                    <div className="d-block d-sm-flex align-items-center justify-content-between">
                      <div className="row align-items-center">
                        <span className="text-white text-sm">Start Date</span>
                        <h5 className="text-white text-nowrap">27 Jun 2005</h5>
                      </div>
                      <div className="row align-items-center">
                        <span className="text-white text-sm">End Date</span>
                        <h5 className="text-white text-nowrap">26 Apr 1988</h5>
                      </div>
                    </div>
                    <div className="row">
                      <span className="text-white text-sm">Client</span>
                      <h5 className="text-white text-nowrap">Kelly Brook</h5>
                    </div>
                  </div>
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
                  <div className="col" id={phase.id}>
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
                              <h5>{phase.title}</h5>
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
