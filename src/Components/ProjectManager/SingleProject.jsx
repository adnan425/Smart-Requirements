import React from "react";
import PageHeader from "./../Utllils/PageHeader";

export default function SingleProject() {
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          <PageHeader />
          <div className="row">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="row" id="printableArea">
                    {/* Intro of Project */}
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="avatar me-3">
                              <img
                                avatar="Beverly"
                                snyder=""
                                alt=""
                                className="img-user wid-45 rounded-circle"
                              />
                            </div>
                            <div className="d-block  align-items-center justify-content-between w-100">
                              <div className="mb-3 mb-sm-0">
                                <h5 className="mb-1"> Beverly Snyder</h5>
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
                              <h4 className="mt-3 mb-1"></h4>
                              <p> Fuga Temporibus ven</p>
                            </div>
                          </div>
                          <div className="card bg-primary mb-0">
                            <div className="card-body">
                              <div className="d-block d-sm-flex align-items-center justify-content-between">
                                <div className="row align-items-center">
                                  <span className="text-white text-sm">
                                    Start Date
                                  </span>
                                  <h5 className="text-white text-nowrap">
                                    27 Jun 2005
                                  </h5>
                                </div>
                                <div className="row align-items-center">
                                  <span className="text-white text-sm">
                                    End Date
                                  </span>
                                  <h5 className="text-white text-nowrap">
                                    26 Apr 1988
                                  </h5>
                                </div>
                              </div>
                              <div className="row">
                                <span className="text-white text-sm">
                                  Client
                                </span>
                                <h5 className="text-white text-nowrap">
                                  Kelly Brook
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Overview */}
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <h5>Overview</h5>
                        </div>
                        <div
                          className="card-body"
                          style={{ minHeight: "280px" }}
                        >
                          <div className="row align-items-center">
                            <div className="col-7">
                              <table className="table">
                                <tbody>
                                  <tr className="border-0">
                                    <th className="border-0">Project Name:</th>

                                    <td className="border-0">UI Development</td>
                                  </tr>
                                  <tr>
                                    <th className="border-0">
                                      Project Status:
                                    </th>
                                    <td className="border-0">
                                      <div className="badge bg-success p-2 px-3 rounded">
                                        In Progress
                                      </div>
                                    </td>
                                  </tr>

                                  <tr role="row">
                                    <th className="border-0">Start Date:</th>
                                    <td className="border-0">2020-09-15</td>
                                  </tr>
                                  <tr>
                                    <th className="border-0">Due Date:</th>
                                    <td className="border-0">2020-11-13</td>
                                  </tr>
                                  <tr>
                                    <th className="border-0">Total Members:</th>
                                    <td className="border-0">3</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="col-5">
                              <div className="circular-progressbar p-0">
                                <div className="flex-wrapper">
                                  <div className="single-chart">
                                    <svg
                                      viewBox="0 0 36 36"
                                      className="circular-chart orange orange"
                                    >
                                      <path
                                        className="circle-bg"
                                        d="M18 2.0845
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                      ></path>
                                      <path
                                        className="circle"
                                        strokeDasharray="33, 100"
                                        d="M18 2.0845 
                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                      ></path>
                                      <text
                                        x="18"
                                        y="20.35"
                                        className="percentage"
                                      >
                                        33%
                                      </text>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Overala progress */}
                    <div className="col-md-6">
                      <div className="card">
                        <div
                          className="card-header"
                          style={{ padding: "25px 35px !important" }}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="row">
                              <h5 className="mb-0">Milestone Progress</h5>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart">
                            <div className="chartjs-size-monitor">
                              <div className="chartjs-size-monitor-expand">
                                <div className=""></div>
                              </div>
                              <div className="chartjs-size-monitor-shrink">
                                <div className=""></div>
                              </div>
                            </div>
                            <div
                              id="milestone-chart"
                              className="chart-canvas chartjs-render-monitor"
                              height="150"
                              style={{ minHeight: "228.5px" }}
                            >
                              <div
                                id="apexchartsk274h63a"
                                className="apexcharts-canvas apexchartsk274h63a apexcharts-theme-light"
                                style={{ width: "516px", height: "228.5px" }}
                              >
                                <svg
                                  id="SvgjsSvg5088"
                                  width="516"
                                  height="228.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  link="http://www.w3.org/1999/xlink"
                                  svgjs="http://svgjs.dev"
                                  className="apexcharts-svg"
                                  data="ApexChartsNS"
                                  transform="translate(0, -20)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG5090"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(20.5, -10)"
                                  >
                                    <defs id="SvgjsDefs5089">
                                      <clipPath id="gridRectMaskk274h63a">
                                        <rect
                                          id="SvgjsRect5092"
                                          width="481"
                                          height="487"
                                          x="-3"
                                          y="-1"
                                          rx="0"
                                          ry="0"
                                          opacity="1"
                                          strokeWidth="0"
                                          stroke="none"
                                          strokeDasharray="0"
                                          fill="#fff"
                                        ></rect>
                                      </clipPath>
                                      <clipPath id="forecastMaskk274h63a"></clipPath>
                                      <clipPath id="nonForecastMaskk274h63a"></clipPath>
                                      <clipPath id="gridRectMarkerMaskk274h63a">
                                        <rect
                                          id="SvgjsRect5093"
                                          width="479"
                                          height="489"
                                          x="-2"
                                          y="-2"
                                          rx="0"
                                          ry="0"
                                          opacity="1"
                                          strokeWidth="0"
                                          stroke="none"
                                          strokeDasharray="0"
                                          fill="#fff"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                    <g
                                      id="SvgjsG5094"
                                      className="apexcharts-radialbar"
                                    >
                                      <g id="SvgjsG5095">
                                        <g
                                          id="SvgjsG5096"
                                          className="apexcharts-tracks"
                                        >
                                          <g
                                            id="SvgjsG5097"
                                            className="apexcharts-radialbar-track apexcharts-track"
                                            rel="1"
                                          >
                                            <path
                                              id="apexcharts-radialbarTrack-0"
                                              d="M 90.1829268292683 237.49999999999997 A 147.3170731707317 147.3170731707317 0 0 1 384.8170731707317 237.5"
                                              fill="none"
                                              fillOpacity="1"
                                              stroke="rgba(231,231,231,0.85)"
                                              strokeOpacity="1"
                                              strokeLinecap="butt"
                                              strokeWidth="51.33902439024391"
                                              strokeDasharray="0"
                                              className="apexcharts-radialbar-area"
                                              pathorig="M 90.1829268292683 237.49999999999997 A 147.3170731707317 147.3170731707317 0 0 1 384.8170731707317 237.5"
                                            ></path>
                                          </g>
                                        </g>
                                        <g id="SvgjsG5099">
                                          <g
                                            id="SvgjsG5104"
                                            className="apexcharts-series apexcharts-radial-series"
                                            seriesname="Progress"
                                            rel="1"
                                            realindex="0"
                                          >
                                            <path
                                              id="SvgjsPath5105"
                                              d="M 90.1829268292683 237.49999999999997 A 147.3170731707317 147.3170731707317 0 0 1 204.36086906739163 93.95865387066291"
                                              fill="none"
                                              fillOpacity="0.85"
                                              stroke="rgba(81,69,157,0.85)"
                                              strokeOpacity="1"
                                              strokeLinecap="butt"
                                              strokeWidth="52.926829268292686"
                                              strokeDasharray="0"
                                              className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                              angle="77"
                                              value="43"
                                              index="0"
                                              j="0"
                                              pathorig="M 90.1829268292683 237.49999999999997 A 147.3170731707317 147.3170731707317 0 0 1 204.36086906739163 93.95865387066291"
                                            ></path>
                                          </g>
                                          <circle
                                            id="SvgjsCircle5100"
                                            r="116.64756097560975"
                                            cx="237.5"
                                            cy="237.5"
                                            className="apexcharts-radialbar-hollow"
                                            fill="transparent"
                                          ></circle>
                                          <g
                                            id="SvgjsG5101"
                                            className="apexcharts-datalabels-group"
                                            transform="translate(0, 0) scale(1)"
                                            style={{ opacity: 1 }}
                                          >
                                            <text
                                              id="SvgjsText5102"
                                              fontFamily="Helvetica, Arial, sans-serif"
                                              x="237.5"
                                              y="237.5"
                                              textAnchor="middle"
                                              dominantBaseline="auto"
                                              fontSize="16px"
                                              fontWeight="600"
                                              fill="#51459d"
                                              className="apexcharts-text apexcharts-datalabel-label"
                                              style={{
                                                fontFamily:
                                                  "Helvetica, Arial, sans-serif",
                                              }}
                                            >
                                              Progress
                                            </text>
                                            <text
                                              id="SvgjsText5103"
                                              fontFamily="Helvetica, Arial, sans-serif"
                                              x="237.5"
                                              y="203.5"
                                              textAnchor="middle"
                                              dominantBaseline="auto"
                                              fontSize="20px"
                                              fontWeight="400"
                                              fill="#373d3f"
                                              className="apexcharts-text apexcharts-datalabel-value"
                                              style={{
                                                fontFamily:
                                                  "Helvetica, Arial, sans-serif",
                                              }}
                                            >
                                              43%
                                            </text>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <line
                                      id="SvgjsLine5106"
                                      x1="0"
                                      y1="0"
                                      x2="475"
                                      y2="0"
                                      stroke="#b6b6b6"
                                      strokeDasharray="0"
                                      strokeWidth="1"
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    ></line>
                                    <line
                                      id="SvgjsLine5107"
                                      x1="0"
                                      y1="0"
                                      x2="475"
                                      y2="0"
                                      strokeDasharray="0"
                                      strokeWidth="0"
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    ></line>
                                  </g>
                                  <g
                                    id="SvgjsG5091"
                                    className="apexcharts-annotations"
                                  ></g>
                                </svg>
                                <div className="apexcharts-legend"></div>
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
                            <div className="float-end">
                              <a
                                href="#"
                                data-size="lg"
                                data-url="https://demo.rajodiya.com/erpgo-saas/invite-project-member/21"
                                data-ajax-popup="true"
                                data-bs-toggle="tooltip"
                                title=""
                                className="btn btn-sm btn-primary"
                                data-bs-original-title="Add Member"
                              >
                                <i className="ti ti-plus"></i>
                              </a>
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
                                      <img
                                        src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                                        alt="image"
                                      />
                                    </div>
                                    <div className="div">
                                      <h5 className="m-0">Rajodiya Infotech</h5>
                                      <small className="text-muted">
                                        company@example.com
                                      </small>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-auto text-sm-end d-flex align-items-center">
                                  <div className="action-btn bg-danger ms-2">
                                    <form
                                      method="POST"
                                      action="https://demo.rajodiya.com/erpgo-saas/projects/21/users/2"
                                      acceptCharset="UTF-8"
                                    >
                                      <input
                                        name="_method"
                                        type="hidden"
                                        value="DELETE"
                                      />
                                      <a
                                        href="#"
                                        className="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                        data-bs-toggle="tooltip"
                                        title="Delete"
                                      >
                                        <i className="ti ti-trash text-white"></i>
                                      </a>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item px-0">
                              <div className="row align-items-center justify-content-between">
                                <div className="col-sm-auto mb-3 mb-sm-0">
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded-circle avatar-sm me-3">
                                      <img
                                        src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg"
                                        alt="image"
                                      />
                                    </div>
                                    <div className="div">
                                      <h5 className="m-0">Richard Atkinson</h5>
                                      <small className="text-muted">
                                        keanu2006@gmail.com
                                      </small>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-auto text-sm-end d-flex align-items-center">
                                  <div className="action-btn bg-warning ms-2">
                                    <a
                                      href="#"
                                      data-size="md"
                                      data-url="https://demo.rajodiya.com/erpgo-saas/projects/milestone/17/show"
                                      data-ajax-popup="true"
                                      data-bs-toggle="tooltip"
                                      title=""
                                      className="btn btn-sm"
                                      data-bs-original-title="View"
                                    >
                                      <i className="ti ti-eye text-white"></i>
                                    </a>
                                  </div>
                                  <div className="action-btn bg-info ms-2">
                                    <a
                                      href="#"
                                      data-size="md"
                                      data-url="https://demo.rajodiya.com/erpgo-saas/projects/milestone/17/edit"
                                      data-ajax-popup="true"
                                      data-bs-toggle="tooltip"
                                      title=""
                                      className="btn btn-sm"
                                      data-bs-original-title="Edit"
                                    >
                                      <i className="ti ti-pencil text-white"></i>
                                    </a>
                                  </div>
                                  <div className="action-btn bg-danger ms-2">
                                    <form
                                      method="POST"
                                      action="https://demo.rajodiya.com/erpgo-saas/projects/milestone/17"
                                      acceptCharset="UTF-8"
                                    >
                                      <input
                                        name="_method"
                                        type="hidden"
                                        value="DELETE"
                                      />
                                      <a
                                        href="#"
                                        className="mx-3 btn btn-sm  align-items-center bs-pass-para"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-original-title="Delete"
                                        aria-label="Delete"
                                      >
                                        <i className="ti ti-trash text-white"></i>
                                      </a>
                                    </form>
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
                          <h5>Activity Log</h5>
                          <small>Activity Log of this project</small>
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
                                    <b>Maris Chase</b> from To Do to Review
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
          </div>
          {/* <!-- [ Main Content ] end --> */}
        </div>
      </div>
    </div>
  );
}
