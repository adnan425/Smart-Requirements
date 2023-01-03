import React, {useState} from "react";
import { Link } from "react-router-dom";
import auth from "../Services/authService";
export default function PageHeader({
  handleView = "",
  title = "Dashboard",
  icon = "",
}) {
  const [user, setUser] = useState(auth.getCurrentUser); 

  return (
    <div className="page-header">
      <div className="page-block">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <h4 className="m-b-10">
                  {" "}
                  <div className="d-inline-block">
                    <h5 className="h4 d-inline-block font-weight-400 mb-0">
                      {title}
                    </h5>
                  </div>
                </h4>
              </div>
              <div className="col-auto">
                {handleView && (
                  <button
                    onClick={
                      handleView === "" ? "{JavaScript:Void(0)}" : handleView
                    }
                    className="btn btn-sm btn-primary btn-icon m-1"
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Grid View"
                  >
                    <i className={icon}></i>
                  </button>
                )}
              </div>
            </div>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={`/${user.role}`}>Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="">{title}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
