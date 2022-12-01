import React from "react";

export default function Dashboard() {
  return (
    <>
         <div className="page-content">
          <div className="dash-container">
            <div className="dash-content">
              <div className="page-header">
                <div className="page-block">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <h4 className="m-b-10"> Dashboard - location1</h4>
                        </div>
                        <div className="col-auto"></div>
                      </div>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"> </li>
                        <a href="https://demo.rajodiya.com/cmmsgo/home"></a>
                      </ul>
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
                              <div className="col-xxl-12">
                                <h3 className="mb-1" id="greetings">
                                  Good Afternoon,
                                </h3>

                                <h6> location1 </h6>
                                <p>
                                  Have a nice day! Did you know that you can
                                  quickly add your favorite product or category
                                  to the store?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6">
                          <div className="row">
                            <div className="col-lg-3 col-6 d-flex">
                              <div className="card w-100">
                                <div className="card-body">
                                  <div className="theme-avtar bg-primary">
                                    <i className="ti ti-clipboard-check"></i>
                                  </div>
                                  <p className="text-muted text-sm mt-4 mb-2">
                                    Total
                                  </p>
                                  <h6 className="mb-3">Total Work Order</h6>
                                  <h3 className="mb-0">4 </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex">
                              <div className="card w-100">
                                <div className="card-body">
                                  <div className="theme-avtar bg-info">
                                    <i className="ti ti-click"></i>
                                  </div>
                                  <p className="text-muted text-sm mt-4 mb-2">
                                    Total
                                  </p>
                                  <h6 className="mb-3">Complete Work Order</h6>
                                  <h3 className="mb-0">1 </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex">
                              <div className="card w-100">
                                <div className="card-body">
                                  <div className="theme-avtar bg-warning">
                                    <i className="ti ti-box"></i>
                                  </div>
                                  <p className="text-muted text-sm mt-4 mb-2">
                                    Total
                                  </p>
                                  <h6 className="mb-3">Assets</h6>
                                  <h3 className="mb-0">3 </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex">
                              <div className="card w-100">
                                <div className="card-body">
                                  <div className="theme-avtar bg-danger">
                                    <i className="ti ti-tools"></i>
                                  </div>
                                  <p className="text-muted text-sm mt-4 mb-2">
                                    Total
                                  </p>
                                  <h6 className="mb-3">PMs</h6>
                                  <h3 className="mb-0">2 </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 d-flex">
                          <div className="card w-100">
                            <div className="card-header">
                              <h5>Total Work Order</h5>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-6">
                                  <div className="col-12">
                                    <span className="d-flex align-items-center mb-2">
                                      <i className="f-10 lh-1 fas fa-circle text-info"></i>
                                      <h5 className="ms-2 mt-2">80%</h5>
                                      <span className="ms-2 text-sm">pending</span>
                                    </span>
                                  </div>
                                  <div className="col-12">
                                    <span className="d-flex align-items-center mb-2">
                                      <i className="f-10 lh-1 fas fa-circle text-primary"></i>
                                      <h5 className="ms-2 mt-2">20%</h5>
                                      <span className="ms-2 text-sm">Complete</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6">Chart show using lib</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-12">
                          <div className="card card-fluid">
                            <div className="card-header d-flex justify-content-between">
                              <div>
                                <h5>Work Order</h5>
                                <p>
                                  <b> 1</b> Work Order completed out of 5
                                </p>
                              </div>
                            </div>
                            <table className="table table-centered table-hover mb-0 animated">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="font-14 my-1">
                                      <a
                                        href="https://demo.rajodiya.com/cmmsgo/opentask/24"
                                        className="text-body"
                                      ></a>
                                    </div>

                                    <span className="text-muted font-13">
                                      Due Date :
                                      <span className="text-danger">
                                        2022-07-27
                                      </span>
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Status
                                    </span>
                                    <br />
                                    <span className="bg-primary p-1 px-2 rounded text-white">
                                      Complete
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Project
                                    </span>
                                    <div className="font-14 mt-1 font-weight-normal">
                                      Mcguire
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>Goal</h5>
                            </div>
                            <div className="card-body">
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
                                              Bill Goal
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Type
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">Bill</h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Duration
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">
                                              2021-04 To 2022-04
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Target
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">
                                              $14,950.00 of $50,000.00
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Progress
                                            </span>
                                            <h6 className="mb-2 d-block">29.90%</h6>
                                            <div className="progress mb-0">
                                              <div
                                                className="progress-bar bg-danger"
                                                // style="width: 29.90%"
                                              ></div>
                                            </div>
                                          </span>
                                        </span>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
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
                                              Invoice Goal
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Type
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">
                                              Invoice
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Duration
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">
                                              2021-04 To 2022-04
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Target
                                            </span>
                                            <h6 className="mb-3 mb-sm-0">
                                              $25,350.00 of $40,000.00
                                            </h6>
                                          </span>
                                          <span className="col">
                                            <span className="text-muted text-sm">
                                              Progress
                                            </span>
                                            <h6 className="mb-2 d-block">63.38%</h6>
                                            <div className="progress mb-0">
                                              <div
                                                className="progress-bar bg-warning"
                                                // style="width: 63.38%"
                                              ></div>
                                            </div>
                                          </span>
                                        </span>
                                      </span>
                                    </label>
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
       
    </>
  );
}
