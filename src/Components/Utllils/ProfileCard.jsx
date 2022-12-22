import React from 'react'

export default function ProfileCard() {
    return (
        <div className="card text-center">
            <div className="card-header border-0 pb-0">
                <div className="card-header-right">
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
                                {/* <a
                                    href="/"
                                    className="dropdown-item" 
                                >
                                    <i className="ti ti-eye"></i>
                                    <span>Show</span>
                                </a> */}

                                {/* <a
                                    href="#!" 
                                    className="dropdown-item" 
                                >
                                    <i className="ti ti-pencil"></i>
                                    <span>Edit</span>
                                </a>  */}
                                <a
                                    href="#!"
                                    className="dropdown-item"
                                >
                                    <i className="ti ti-trash"></i>
                                    <span> Delete</span>
                                </a>
                                {/* <a
                                    href="#!" 
                                    className="dropdown-item" 
                                >
                                    <i className="ti ti-adjustments"></i>
                                    <span> Reset Password</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body full-card">
                <div className="img-fluid rounded-circle card-avatar">
                    <img
                        src="https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-4.jpg"
                        alt="kal"
                        className="img-user wid-80 rounded-circle"
                    />
                </div>
                <h4 className=" mt-2 text-primary">Mick Aston</h4>
                <p></p>
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <div className="d-grid text-primary">
                            client@example.com
                        </div>
                    </div>
                </div>

                <div className="card mb-0 mt-3"><div className="card-body p-3">
                    <div className="row"><div className="col-12"><p className="text-muted mb-0"><i className="ti ti-clock mx-3  card-icon-text-space"></i>Jul 12, 2021</p></div></div></div></div>
            </div>

        </div>
    )
}
