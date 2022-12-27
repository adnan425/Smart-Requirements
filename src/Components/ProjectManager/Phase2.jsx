import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Utllils/Button';
import Input from '../Utllils/Input';
import PageHeader from "../Utllils/PageHeader";
import Joi from 'joi-browser';
import { useSelector } from 'react-redux';
import http from '../Services/httpService';
import { useEffect } from 'react';
const moment = require('moment');
const apiUrl = "http://localhost:3004/api";


export default function Phase2() {
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState('Title Page');

  const projectId = useSelector((c) => c.projects.selectedProject._id);
  if (!projectId || projectId === null || projectId === 'undefined') {
    window.location = './';
  }
  const getTitle = useSelector(state => state.srs.title);
  const [projectTitle, setProjectTitle] = useState({
    title: getTitle.title,
    author: getTitle.author,
    organization: getTitle.organization,
    date: moment(getTitle.date).format("MMM Do YYYY")
  });
  const updateTitleSchema = {
    title: Joi.string().min(5).max(50).required().label("Project Title"),
    author: Joi.string().min(1).max(500).required().label("Prepared By"),
    organization: Joi.string().min(1).max(26).required().label("organization"),
  }
  const [intro, setIntro] = useState({
    purpose: '',
    conventions: '',
    audience: '',
    scope: '',
    references: ''
  });
  const [desc, setDesc] = useState(
    {
      projectId:  '',
      fucntions:   '',
      perspective:  '',
      characteristics:   '',
      envirnoment:   '',
      implementation:   '',
      documentation:   '',
      assumptions:   '',
      
    }
  )
  const [isIntro, setIsIntro] = useState(false); // check that intro is already in db
  const [introId, setIntroId] = useState(false); // setIntroId for update
  function getIntro() {
    http.get(`${apiUrl}/project/intro/${projectId}`).then(({ data }) => {
      console.log("Intro fsf", data);
      setIsIntro(true);
      setIntro({
        purpose: data.purpose,
        conventions: data.conventions,
        audience: data.audience,
        scope: data.scope,
        references: data.references
      });
      setIntroId(data._id);

    }).catch(err => {
      console.log(err.response.data);
      // toast.info('');
      setIntro({
        purpose: '',
        conventions: '',
        audience: '',
        scope: '',
        references: ''
      });
      setIsIntro(false);
    });
  };
  useEffect(() => {
    getIntro();
  }, [])
  const introSchema = {
    purpose: Joi.string().min(5).max(500).required().label("Purpose"),
    conventions: Joi.string().min(5).max(500).required().label("Conventions"),
    audience: Joi.string().min(5).max(500).required().label("Audience"),
    scope: Joi.string().min(5).max(500).required().label("Scope"),
    references: Joi.string().min(5).max(500).required().label("References")
  }
  const descSchema = {
    perspective: Joi.string().min(5).max(500).required().label("Product Perspective"),
    functions: Joi.string().min(5).max(500).required().label("Product Functions"),
    characteristics: Joi.string().min(5).max(500).required().label("User Classes and Characteristics"),
    envirnoment: Joi.string().min(5).max(500).required().label("Operating Environment"),
    implementation: Joi.string().min(5).max(500).required().label("Design & Implementation Constraints"),
    documentation: Joi.string().min(5).max(500).required().label("User Documentation"),
    assumptions: Joi.string().min(5).max(500).required().label("Assumptions & Dependencies")
  }
  const [introErrors, setIntroErrors] = useState({});
  const introValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(intro, introSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  }
  const doIntroSubmit = () => {
    if (!isIntro) {
      // store with new entry  
      http.post(`${apiUrl}/project/intro`, { projectId: projectId, ...intro })
        .then(res => {
          console.log(res.status);
          if (res.status === 200) {
            toast.success("Successfully added.");
          }
        }).catch(err => {
          console.log(err);
          toast.error(err);
        })

    } else {
      // update with existing recorde
      toast("update entry", isIntro);
      http.put(`${apiUrl}/project/intro`, { '_id': introId, 'projectId': projectId, ...intro })
        .then(res => {
          console.log(res);
          toast(res, "updated");
          toast(res);
        }).catch(err => {
          console.log(err);
          toast.error(err);
        })
    }

  }
  const handleIntroSubmit = e => {
    e.preventDefault();
    const error = introValidate();
    if (error) {
      setIntroErrors(error);
      return false;
    }
    setIntroErrors({});
    doIntroSubmit();
  }
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(projectTitle, updateTitleSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
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
    }).catch(err => { toast.error(err.response.data) });
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
  const descValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(intro, introSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  }
  const handleDescSubmit = e => {
    e.preventDefault();
    const error = descValidate();
    if (error) {
      setErrors(error);
      return false;
    }
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
                              <button className="btn btn-sm btn-primary mx-2" onClick={e => e.preventDefault()} title="Mark it completed.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={e => e.preventDefault()} title="Lock It.">
                                <i className="ti ti-lock-open"></i></button>

                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <Input name={'title'} value={projectTitle.title} label={"Project Title"} placeholder="Smart Requirements" error={errors.title} onChange={e => setProjectTitle({ ...projectTitle, title: e.target.value })} classes="col-md-6" />
                            <Input name={'prepared_by'} value={projectTitle.author} label={"Prepared By"} placeholder="Adnan" error={errors.author} onChange={e => setProjectTitle({ ...projectTitle, author: e.target.value })} classes="col-md-6" />
                            <Input name={'org'} value={projectTitle.organization} label={"Originzation"} placeholder="SZABIST" error={errors.organization} onChange={e => setProjectTitle({ ...setProjectTitle, organization: e.target.value })} classes="col-md-6" />
                            <Input name={'date'} value={projectTitle.date} label={"Date"} error={''} onChange={''} classes="col-md-6" />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="intro" class="card">
                      <form onSubmit={handleIntroSubmit}>
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>1. Introduction</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button className="btn btn-sm btn-primary" onClick={e => e.preventDefault()} title="Mark it completed.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary mx-2" onClick={e => e.preventDefault()} title="Lock It.">
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
                            <Input tag='textarea' name={'purpose'} value={intro.purpose} label={"1.1 purpose"} error={introErrors.purpose} onChange={e => setIntro({ ...intro, purpose: e.target.value })} />
                            <Input tag='textarea' name={'conventions'} value={intro.conventions} label={"1.2 Document Conventions"} error={introErrors.conventions} onChange={e => setIntro({ ...intro, conventions: e.target.value })} />
                            <Input tag='textarea' name={'audience'} value={intro.audience} label={"1.3 Intended Audience and Reading Suggestions"} error={introErrors.audience} onChange={e => setIntro({ ...intro, audience: e.target.value })} />
                            <Input tag='textarea' name={'scope'} value={intro.scope} label={"1.4 Product Scope"} error={introErrors.scope} onChange={e => setIntro({ ...intro, scope: e.target.value })} />
                            <Input tag='textarea' name={'references'} value={intro.references} label={"1.5 References"} error={introErrors.references} onChange={e => setIntro({ ...intro, references: e.target.value })} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="description" class="card">
                      <form onSubmit={handleDescSubmit} >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>2. Overall Description</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button className="btn btn-sm btn-primary mx-2" onClick={e => e.preventDefault()} title="Lock It.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={e => e.preventDefault()} title="Lock It.">
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
                              <button className="btn btn-sm btn-primary mx-2" onClick={e => e.preventDefault()} title="Lock It.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={e => e.preventDefault()} title="Lock It.">
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
