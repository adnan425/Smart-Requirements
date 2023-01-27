import React from 'react'
import Avatar from 'react-avatar';
export default function ProfileCard({id="", name="Manager", email="manager@mail.com", date="", handleClick=""}) {
    return (
        <div className="card text-center" key={id+"09o3"}>
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
                                onClick={(e)=>{e.preventDefault(); handleClick(id)} }
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
                    {/* <img
                        src="storage/uploads/avatar/user-4.jpg"
                        alt="kal"
                        className="img-user wid-80 rounded-circle"
                    /> */}
                    <Avatar name={name} round="50%"/>
                </div>
                <h4 className=" mt-2 text-primary">{name}</h4>
                <p></p>
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <div className="d-grid text-primary">
                            {email}
                        </div>
                    </div>
                </div>

                <div className="card mb-0 mt-3"><div className="card-body p-3">
                    <div className="row"><div className="col-12"><p className="text-muted mb-0"><i className="ti ti-clock mx-3  card-icon-text-space"></i>{date}</p></div></div></div></div>
            </div>

        </div>
    )
}
