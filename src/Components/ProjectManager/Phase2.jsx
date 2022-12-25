import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Utllils/Button';
import Input from '../Utllils/Input';
import PageHeader from "../Utllils/PageHeader";
import Joi from 'joi-browser';
import { useSelector, useDispatch } from 'react-redux';
import http from '../Services/httpService';
const apiUrl = "http://localhost:3004/api";
const moment = require('moment');


export default function Phase2() {
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState('Title Page'); 

  const projectId = useSelector((c) => c.projects.selectedProject._id);
  if (!projectId || projectId === null || projectId === 'undefined') {
    window.location = './';
  }
  const getTitle = useSelector(state => state.srs.title);
  toast(getTitle);



  const [projectTitle, setProjectTitle] = useState({
    title: getTitle.title,
    author: getTitle.author,
    orginzation: getTitle.orginzation,
    date: moment(getTitle.date).format("MMM Do YYYY")
  }); 
   const updateTitleSchema = {
    title: Joi.string().min(5).max(50).required().label("Project Title"),
    author: Joi.string().min(1).max(500).required().label("Prepared By"),
    orginzation: Joi.string().min(1).max(26).required().label("Orginzation"),
}
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(projectTitle, updateTitleSchema, options);
    if (!error) return null;

    const err = {};
    for (let item of error.details) err[item.path] = item.message;

    console.log(err);
    return err;
  }
  const doSubmit = () => {
 toast(projectId);
  http.put(`${apiUrl}/projects/${projectId}`, setProjectTitle).then(({ status }) => {
    if (status === 200) {
      toast.success("Updated."); 
    } else {
      toast(status);
    }
  }).catch(err => { console.log("error ", err.response.data); toast.error(err.response.data) });



 
  }
  const handlSubmitTitle = e => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setErrors(error);
      return false;
    }
    doSubmit();

  }
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">

          <PageHeader title="SRS Template" />
          <div className="row">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-3">
                    <div className="card sticky-top" style={{ top: '30px' }}>
                      <div className="list-group list-group-flush" id="useradd-sidenav">
                        <a href="#title-page" onClick={() => { setActive('Title Page') }} className={`list-group-item list-group-item-action border-0 ${(active === 'Title Page') ? 'active' : ""}`}>Title Page
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#intro" onClick={() => { setActive('Introduction') }} className={`list-group-item list-group-item-action border-0  ${(active === 'Introduction') ? 'active' : ""}`}>1. Introduction
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#description" onClick={() => { setActive('Overall Description') }} className={`list-group-item list-group-item-action border-0  ${(active === 'Overall Description') ? 'active' : ""}`}>2. Overall Description
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#interface" onClick={() => { setActive('External Interface Requirements') }} className={`list-group-item list-group-item-action border-0  ${(active === 'External Interface Requirements') ? 'active' : ""}`}>3. External Interface Requirements
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#features" onClick={() => { setActive('System Features') }} className={`list-group-item list-group-item-action border-0  ${(active === 'System Features') ? 'active' : ""}`}>4. System Features
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div id="title-page" class="card">
                      <form onSubmit={handlSubmitTitle} >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>Title Page</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button className="btn btn-sm btn-primary mx-2" onClick={''} title="Mark it completed.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={''} title="Lock It.">
                                <i className="ti ti-lock-open"></i></button>

                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <Input name={'title'} value={projectTitle.title} label={"Project Title"} placeholder="Smart Requirements" error={errors.title} onChange={e => setProjectTitle({ ...projectTitle, title: e.target.value })} classes="col-md-6" />
                            <Input name={'prepared_by'} value={projectTitle.author} label={"Prepared By"} placeholder="Adnan" error={errors.author} onChange={e => setProjectTitle({ ...projectTitle, author: e.target.value })} classes="col-md-6" />
                            <Input name={'org'} value={projectTitle.orginzation} label={"Originzation"} placeholder="SZABIST" error={errors.orginzation} onChange={e => setProjectTitle({ ...setProjectTitle, orginzation: e.target.value })} classes="col-md-6" />
                            <Input name={'date'} value={projectTitle.date} label={"Date"} error={''} onChange={''} classes="col-md-6" />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="intro" class="card">
                      <form >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>1. Introduction</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button className="btn btn-sm btn-primary" onClick={''} title="Mark it completed.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary mx-2" onClick={''} title="Lock It.">
                                <i className="ti ti-lock-open"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={e => {
                                e.preventDefault();
                                toast.info('1.1 Purpose: Identify the product whose software requirements are specified in this document, including the revision or release number. Describe the scope of the product that is covered by this SRS, particularly if this SRS describes only part of the system or a single subsystem.>')
                              }} title="Lock It.">
                                <i className="ti ti-help"  ></i></button>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <Input tag='textarea' name={'purpose'} value={''} label={"1.1 Purpose"} error={''} placeholder="<Identify the product whose software requirements are specified in this document, including the revision or release number. Describe the scope of the product that is covered by this SRS, particularly if this SRS describes only part of the system or a single subsystem.>" onChange={''} />
                            <Input tag='textarea' name={'conventions'} value={''} label={"1.2 Document Conventions"} error={''} onChange={''} />
                            <Input tag='textarea' name={'audience'} value={''} label={"1.3 Intended Audience and Reading Suggestions"} error={''} onChange={''} />
                            <Input tag='textarea' name={'scope'} value={''} label={"1.4 Product Scope"} error={''} onChange={''} />
                            <Input tag='textarea' name={'references'} value={''} label={"1.5 References"} error={''} onChange={''} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="description" class="card">
                      <form >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>2. Overall Description</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button className="btn btn-sm btn-primary mx-2" onClick={''} title="Lock It.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={''} title="Lock It.">
                                <i className="ti ti-lock-open"></i></button>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <Input tag='textarea' name={'perspective'} value={''} label={"2.1 Product Perspective"} error={''} onChange={''} />
                            <Input tag='textarea' name={'function'} value={''} label={"2.2 Product Functions"} error={''} onChange={''} />
                            <Input tag='textarea' name={'userClasses'} value={''} label={"2.3 User Classes and Characteristics"} error={''} onChange={''} />
                            <Input tag='textarea' name={'operating'} value={''} label={"2.4 Operating Environment"} error={''} onChange={''} />
                            <Input tag='textarea' name={'design'} value={''} label={"2.5 Design and Implementation Constraints"} error={''} onChange={''} />
                            <Input tag='textarea' name={'documentation'} value={''} label={"2.6 User Documentation"} error={''} onChange={''} />
                            <Input tag='textarea' name={'assumption'} value={''} label={"2.7 Assumptions and Dependencies"} error={''} onChange={''} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="interface" class="card">
                      <form >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>3. External Interface Requirements</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button className="btn btn-sm btn-primary mx-2" onClick={''} title="Lock It.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={''} title="Lock It.">
                                <i className="ti ti-lock-open"></i></button>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <Input tag='textarea' name={'perspective'} value={''} label={"2.1 Product Perspective"} error={''} onChange={''} />
                            <Input tag='textarea' name={'function'} value={''} label={"2.2 Product Functions"} error={''} onChange={''} />
                            <Input tag='textarea' name={'userClasses'} value={''} label={"2.3 User Classes and Characteristics"} error={''} onChange={''} />
                            <Input tag='textarea' name={'operating'} value={''} label={"2.4 Operating Environment"} error={''} onChange={''} />
                            <Input tag='textarea' name={'design'} value={''} label={"2.5 Design and Implementation Constraints"} error={''} onChange={''} />
                            <Input tag='textarea' name={'documentation'} value={''} label={"2.6 User Documentation"} error={''} onChange={''} />
                            <Input tag='textarea' name={'assumption'} value={''} label={"2.7 Assumptions and Dependencies"} error={''} onChange={''} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
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
  );
}
