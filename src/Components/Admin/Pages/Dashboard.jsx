import React from 'react'

export default function Dashboard() {
  return (
    <div class="page-content">
    <div class="dash-container">
      <div class="dash-content">
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <h4 class="m-b-10"> Dashboard - location1</h4>
                  </div>
                  <div class="col-auto"></div>
                </div>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"> </li>
                  <a href="https://demo.rajodiya.com/cmmsgo/home"></a>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="row">
                  <div class="col-xl-6 d-flex">
                    <div class="card w-100">
                      <div class="card-body stats welcome-card">
                        <div class="col-xxl-12">
                          <h3 class="mb-1" id="greetings">
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
                  <div class="col-xxl-6">
                    <div class="row">
                      <div class="col-lg-3 col-6 d-flex">
                        <div class="card w-100">
                          <div class="card-body">
                            <div class="theme-avtar bg-primary">
                              <i class="ti ti-clipboard-check"></i>
                            </div>
                            <p class="text-muted text-sm mt-4 mb-2">
                              Total
                            </p>
                            <h6 class="mb-3">Total Work Order</h6>
                            <h3 class="mb-0">4 </h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-6 d-flex">
                        <div class="card w-100">
                          <div class="card-body">
                            <div class="theme-avtar bg-info">
                              <i class="ti ti-click"></i>
                            </div>
                            <p class="text-muted text-sm mt-4 mb-2">
                              Total
                            </p>
                            <h6 class="mb-3">Complete Work Order</h6>
                            <h3 class="mb-0">1 </h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-6 d-flex">
                        <div class="card w-100">
                          <div class="card-body">
                            <div class="theme-avtar bg-warning">
                              <i class="ti ti-box"></i>
                            </div>
                            <p class="text-muted text-sm mt-4 mb-2">
                              Total
                            </p>
                            <h6 class="mb-3">Assets</h6>
                            <h3 class="mb-0">3 </h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-6 d-flex">
                        <div class="card w-100">
                          <div class="card-body">
                            <div class="theme-avtar bg-danger">
                              <i class="ti ti-tools"></i>
                            </div>
                            <p class="text-muted text-sm mt-4 mb-2">
                              Total
                            </p>
                            <h6 class="mb-3">PMs</h6>
                            <h3 class="mb-0">2 </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex">
                    <div class="card w-100">
                      <div class="card-header">
                        <h5>Total Work Order</h5>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-6">
                            <div class="col-12">
                              <span class="d-flex align-items-center mb-2">
                                <i class="f-10 lh-1 fas fa-circle text-info"></i>
                                <h5 class="ms-2 mt-2">80%</h5>
                                <span class="ms-2 text-sm">pending</span>
                              </span>
                            </div>
                            <div class="col-12">
                              <span class="d-flex align-items-center mb-2">
                                <i class="f-10 lh-1 fas fa-circle text-primary"></i>
                                <h5 class="ms-2 mt-2">20%</h5>
                                <span class="ms-2 text-sm">Complete</span>
                              </span>
                            </div>
                          </div>
                          <div class="col-6">Chart show using lib</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-12">
                    <div class="card card-fluid">
                      <div class="card-header d-flex justify-content-between">
                        <div>
                          <h5>Work Order</h5>
                          <p>
                            <b> 1</b> Work Order completed out of 5
                          </p>
                        </div>
                      </div>
                      <table class="table table-centered table-hover mb-0 animated">
                        <tbody>
                          <tr>
                            <td>
                              <div class="font-14 my-1">
                                <a
                                  href="https://demo.rajodiya.com/cmmsgo/opentask/24"
                                  class="text-body"
                                ></a>
                              </div>

                              <span class="text-muted font-13">
                                Due Date :
                                <span class="text-danger">
                                  2022-07-27
                                </span>
                              </span>
                            </td>
                            <td>
                              <span class="text-muted font-13">
                                Status
                              </span>
                              <br />
                              <span class="bg-primary p-1 px-2 rounded text-white">
                                Complete
                              </span>
                            </td>
                            <td>
                              <span class="text-muted font-13">
                                Project
                              </span>
                              <div class="font-14 mt-1 font-weight-normal">
                                Mcguire
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Goal</h5>
                      </div>
                      <div class="card-body">
                        <div class="card border-success border-2 border-bottom-0 border-start-0 border-end-0">
                          <div class="card-body">
                            <div class="form-check">
                              <label
                                class="form-check-label d-block"
                                for="customCheckdef1"
                              >
                                <span>
                                  <span class="row align-items-center">
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Name
                                      </span>
                                      <h6 class="text-nowrap mb-3 mb-sm-0">
                                        Bill Goal
                                      </h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Type
                                      </span>
                                      <h6 class="mb-3 mb-sm-0">Bill</h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Duration
                                      </span>
                                      <h6 class="mb-3 mb-sm-0">
                                        2021-04 To 2022-04
                                      </h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Target
                                      </span>
                                      <h6 class="mb-3 mb-sm-0">
                                        $14,950.00 of $50,000.00
                                      </h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Progress
                                      </span>
                                      <h6 class="mb-2 d-block">29.90%</h6>
                                      <div class="progress mb-0">
                                        <div
                                          class="progress-bar bg-danger"
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
                        <div class="card border-success border-2 border-bottom-0 border-start-0 border-end-0">
                          <div class="card-body">
                            <div class="form-check">
                              <label
                                class="form-check-label d-block"
                                for="customCheckdef1"
                              >
                                <span>
                                  <span class="row align-items-center">
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Name
                                      </span>
                                      <h6 class="text-nowrap mb-3 mb-sm-0">
                                        Invoice Goal
                                      </h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Type
                                      </span>
                                      <h6 class="mb-3 mb-sm-0">
                                        Invoice
                                      </h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Duration
                                      </span>
                                      <h6 class="mb-3 mb-sm-0">
                                        2021-04 To 2022-04
                                      </h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Target
                                      </span>
                                      <h6 class="mb-3 mb-sm-0">
                                        $25,350.00 of $40,000.00
                                      </h6>
                                    </span>
                                    <span class="col">
                                      <span class="text-muted text-sm">
                                        Progress
                                      </span>
                                      <h6 class="mb-2 d-block">63.38%</h6>
                                      <div class="progress mb-0">
                                        <div
                                          class="progress-bar bg-warning"
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
  )
}
