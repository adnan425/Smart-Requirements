import React from "react";

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
  const recentProjects = [
    {
      id: 1,
      name: 'Codeigniter 4',
      started_data: '30-10-2020',
      progess: '16%',
      status: 'On Hold',
      classes: 'bg-danger'
    },
    {
      id: 2,
      name: 'Codeigniter 3',
      started_data: '30-10-2022',
      progess: '36%',
      status: 'In Progresss',
      classes: 'bg-info'
    },
  ]
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                      <h4 className="m-b-10"> Dashboard </h4>
                    </div>
                    <div className="col-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
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
                        {cardData.map((card) => {
                          return (
                            <div className="col-lg-3 col-6 d-flex">
                              <div className="card w-100">
                                <div className="card-body">
                                  <div className={"theme-avtar " +  card.className }>
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
                            recentProjects.map(project=>{
                              return(
                                <div className="card border-success border-2 border-bottom-0 border-start-0 border-end-0">
                                <div className="card-body">
                                  <div className="form-check">
                                    <label
                                      className="form-check-label d-block"
                                      for="customCheckdef1"
                                    >
                                      <span>
                                        <span className="row align-items-center">
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Name
                                            </span>
                                            <h6 className="text-nowrap mb-3 mb-sm-0">
                                              {project.name}
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Type
                                            </span> <br></br>
                                            <h6 className={"mb-3 mb-sm-0 badge bg-info rounded " + project.classes}>{project.status}</h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Created at
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">
                                              {project.started_data}
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Target
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">
                                            <a href="#" className="avatar rounded-circle">
                                            <img src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-8.jpg"
                                             title="Rajodiya Infotech" style={{height:"36px",width:"36px"}}/>
                                                        </a>
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Progress
                                            </span>
                                            <h6 className="mb-2 d-block">{project.progess}</h6>
                                            <div className="progress mb-0">
                                              <div
                                                className={"progess-bar "+ project.classes}
                                                style={{width: project.progess}}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
