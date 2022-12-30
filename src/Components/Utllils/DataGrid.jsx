import React from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../Services/authService";

const moment = require('moment');

export default function DataGrid({ list }) {
  const userRole = getCurrentUser();
  return (
    <>
      {list && list.length!==0 && list.map((project) => {

        const { _id, title, date, status } = project;
        const start_date = moment(date).format("MMM Do YYYY");;
        return (
          <>
            <div className="col-xl-3 col-lg-4 col-sm-6" key={_id}>
              <div className="card hover-shadow-lg">
                <div className="card-header border-0 pb-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6
                        className="mb-0"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Start Date "
                      >
                        {start_date}
                      </h6>
                    </div>
                    <div className="text-right">
                      <div className="actions">
                        <h6
                          className="mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Due Date "
                        >
                          {status}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className=" my-4">
                    <Link to={"project/" + project.id} className="text-dark">
                      {title}
                    </Link>
                  </h5>
                  <div className="avatar-group hover-avatar-ungroup mb-3">
                    <Link href="#" className="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-4.jpg"
                        className=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Anthony B Renfroe"
                        aria-label="Anthony B Renfroe"
                      />
                    </Link>
                    <Link href="#" className="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-3_1663328248_1663672251.jpg"
                        className=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Keire"
                        aria-label="Keire"
                      />
                    </Link>
                    <Link href="#" className="user-group1">
                      <img
                        src="https://demo.rajodiya.com/crmgo-saas/storage/uploads/avatar/avatar-5.jpg"
                        className=""
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Adrienne J Reed"
                        aria-label="Adrienne J Reed"
                      />
                    </Link>
                  </div>
                  <span className="clearfix"></span>
                  <span
                    className={
                      "badge fix_badges bg-success p-2 px-3 rounded " +
                      project.classes
                    }
                  >
                    {status}
                  </span>
                </div>
                <div className="card-footer">
                  <div className="actions d-flex justify-content-between px-4">
                    {
                      userRole.role === 'manager' && <> <div className="action-btn bg-info ms-2">
                        <Link
                          to="edit"
                          className="mx-3 btn btn-sm d-inline-flex align-items-center"
                          data-bs-whatever="Edit Project"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Edit"
                        >
                          {" "}
                          <span className="text-white">
                            {" "}
                            <i className="ti ti-edit"></i>
                          </span>
                        </Link>
                      </div>
                    

                    <div className="action-btn bg-warning ms-2">
                      <Link
                        to={"project/" + _id}
                        className="mx-3 btn btn-sm d-inline-flex align-items-center"
                        data-bs-whatever="View Project"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="View"
                      >
                        {" "}
                        <span className="text-white">
                          {" "}
                          <i className="ti ti-eye"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="action-btn bg-danger ms-2">
                        <button className="mx-3 btn btn-sm d-flex align-items-center show_confirm">
                          <i
                            className="ti ti-trash text-white"
                            data-bs-toggle="tooltip"
                            data-bs-original-title="Delete"
                          ></i>
                        </button>
                      </div>
                      </>
}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      {
            list && list.length===0 && 
            <>
            <div className="card"><div className="card-header"> Project list is empty.</div></div>
            </>
          }
    </>
  );
}