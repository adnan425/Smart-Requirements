import React from 'react'
import PageHeader from '../Utllils/PageHeader'

export default function Pdf() {
    return (
        <>
            <div className="page-content">
                <div className="dash-container">
                    <div className="dash-content">
                        <PageHeader title='Generate SRS' />
                        <div className="row">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div class="row">
                                        <div class="card ">
                                            <div class="card-body">
                                                <div class="row timeline-wrapper">
                                                    <div class="col-md-6 col-lg-4 col-xl-4">
                                                        <div class="timeline-icons"><span class="timeline-dots"></span>
                                                            <i class="ti ti-plus text-primary"></i>
                                                        </div>
                                                        <h6 class="text-primary my-3">Writing</h6>
                                                        <p class="text-muted text-sm mb-3"><i class="ti ti-clock mr-2"></i>Created on Nov 9, 2022</p>
                                                        {/* <a class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-original-title="Edit" title=""><i class="ti ti-edit mr-2"></i>Edit</a> */}
                                                    </div>
                                                    <div class="col-md-6 col-lg-4 col-xl-4">
                                                        <div class="timeline-icons"><span class="timeline-dots"></span>
                                                            <i class="ti ti-template text-warning"></i>
                                                        </div>
                                                        <h6 class="text-warning my-3">LaTeX Writed</h6>
                                                        <p class="text-muted text-sm mb-3">
                                                            <i class="ti ti-clock mr-2"></i>Sent on Jan 29, 2023
                                                        </p>
                                                        <a href="#/" class="btn btn-sm btn-warning"
                                                            data-bs-toggle="tooltip" data-original-title="Mark Sent"
                                                            data-bs-original-title="" title="Download LaTeX"><i class="ti ti-download mr-3"></i></a>

                                                    </div>
                                                    <div class="col-md-6 col-lg-4 col-xl-4">
                                                        <div class="timeline-icons"><span class="timeline-dots"></span>
                                                            <i class="ti ti-file text-info"></i>
                                                        </div>
                                                        <h6 class="text-info my-3">Generating Pdf</h6>
                                                        <p class="text-muted text-sm mb-3">Status : In Progress... </p>
                                                        <a href="#/" class="btn btn-sm btn-secondary mx-2" title="View Pdf" ><i class="ti ti-crosshair mr-3"></i></a>
                                                        <a href="#/" class="btn btn-sm btn-info" title="Download Pdf" ><i class="ti ti-download mr-3"></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center align-items-center mb-3">
                                        <div class="col-md-12 d-flex align-items-center justify-content-center">

                                            <div class="all-button-box mr-2">
                                                <a href="#/" class="btn btn-sm btn-primary">Generate PDF</a>
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
    )
}
