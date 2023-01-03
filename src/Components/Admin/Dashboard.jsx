import React, { useEffect, useState } from "react";
import PageHeader from "../Utllils/PageHeader";
import http from "../Services/httpService";
import { toast } from "react-toastify";
const moment = require('moment');
const apiUrl = "http://localhost:3004/api";

export default function Dashboard() {
  const cardData = [
    {
      id: "1",
      icon: "ti ti-users",
      heading: "Users",
      total: 10,
      className: "bg-danger",
    },
    {
      id: "2",
      icon: "ti ti-tools",
      heading: "Projects",
      total: 10,
      className: "bg-info",
    },
    {
      id: "3",
      icon: "ti ti-box",
      heading: "Pending Projects",
      total: 10,
      className: "bg-warning",
    },
    {
      id: "4",
      icon: "ti ti-clipboard-check",
      heading: "Completed Projects",
      total: 10,
      className: "bg-primary",
    },
  ];
  // const projects = useSelector(s => s.projects.list);
  const [projects, setProjects] = useState([]);
  const recentProjects = projects.slice(0, 2);
  const getProjects = () => {
    try {
      http.get(`${apiUrl}/projects`).then(({ data }) => {
        setProjects(data);
      }).catch((err) => { console.log(err) });
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          <PageHeader title="Dasboard" />

          {/* <div className="row"> */}
          <div className="row">
            <div className="col-sm-12">
              {/* <div className="row"> */}
              <div className="row">
                <div className="col-xl-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body stats welcome-card">
                      <div className="col-xxl-12 pt-2">
                        <h3 className="mb-1" id="greetings">
                          Welcome Back,
                        </h3>

                        <p>
                          Have a nice day! Did you know that you can quickly
                          add your favorite product or category to the
                          store?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="row">
                    {cardData && cardData.map((card) => {
                      return (
                        <div className="col-lg-3 col-6 d-flex">
                          <div className="card w-100">
                            <div className="card-body">
                              <div className={"theme-avtar " + card.className}>
                                <i className={card.icon}></i>
                              </div>
                              <p className="text-muted text-sm mt-4 mb-2">
                                Total
                              </p>
                              <h6 className="mb-3">{card.heading}</h6>
                              <h3 className="mb-0">{card.total}</h3>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>


                <div className="col-xxl-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>Recent Projects</h5>
                    </div>
                    <div className="card-body">
                      {
                        (recentProjects) && recentProjects.map(project => {
                          const { _id, title, date } = project;
                          const start_date = moment(date).format("MMM Do YYYY");
                          return (

                            <div key={_id} className="card border-success border-2 border-bottom-0 border-start-0 border-end-0">
                              <div className="card-body">
                                <div className="form-che ck">
                                  <label
                                    className="form-check-label d-block"
                                    htmlFor="customCheckdef1"
                                  >
                                    <span>
                                      <span className="row align-items-center">
                                        <span className="col">
                                          <span className="text-muted text-sm">
                                            Name
                                          </span>
                                          <h6 className="text-nowrap mb-3 mb-sm-0">
                                            {title}
                                          </h6>
                                        </span>
                                        <span className="col">
                                          <span className="text-muted text-sm">
                                            Status
                                          </span> <br></br>
                                          <h6 className={"mb-3 mb-sm-0 badge bg-info rounded bg-success"}>{"Started"}</h6>
                                        </span>
                                        <span className="col">
                                          <span className="text-muted text-sm">
                                            Created at
                                          </span>
                                          <h6 className="mb-3 mb-sm-0">
                                            {start_date}
                                          </h6>
                                        </span>
                                        <span className="col">
                                          <span className="text-muted text-sm">
                                            Manager
                                          </span>
                                          <h6 className="mb-3 mb-sm-0">
                                            Name
                                          </h6>
                                        </span>
                                        <span className="col">
                                          <span className="text-muted text-sm">
                                            Progress
                                          </span>
                                          <h6 className="mb-2 d-block">{"50%"}</h6>
                                          <div className="progress mb-0">
                                            <div
                                              className={"progess-bar bg-success"}
                                              style={{ width: '50%' }}
                                            ></div>
                                          </div>
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
