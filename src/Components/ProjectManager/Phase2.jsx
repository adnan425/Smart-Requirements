import Joi from 'joi-browser';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';

import Button from '../Utllils/Button';
import Input from '../Utllils/Input';
import PageHeader from "../Utllils/PageHeader";
import { useSelector } from 'react-redux';
import http from '../Services/httpService';
import Quill from '../Utllils/Quill';
const moment = require('moment');
const _ = require('lodash');
const apiUrl = "http://localhost:3004/api";

export default function Phase2() {
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState('Title Page');
  const projectId = useSelector((c) => c.projects.selectedProject._id);
  if (!projectId || projectId === null || projectId === 'undefined') {
    window.location = './';
  }
  const getTitle = useSelector(state => state.srs.title);

  // ------------------------- States --------------------------
  const [projectTitle, setProjectTitle] = useState({
    title: getTitle.title,
    author: getTitle.author,
    organization: getTitle.organization,
    date: moment(getTitle.date).format("MMM Do YYYY")
  });
  const [intro, setIntro] = useState({
    purpose: '',
    conventions: '',
    audience: '',
    scope: '',
    references: ''
  });
  const [desc, setDesc] = useState(
    {
      perspective: '',
      functions: '',
      characteristics: '',
      envirnoment: '',
      implementation: '',
      documentation: '',
      assumptions: '',
    }
  )
  const [nonFun, setNonFun] = useState(
    {
      performance: '',
      safety: '',
      security: '',
      quality: '',
      business: ''
    }
  )
  const [features, setFeatures] = useState('');
  const [interfaceRequirements, setInterfaceRequirements] = useState('');
  const [otherRequirements, setOtherRequirements] = useState('');
  // ------------------------- Get Data From API --------------------------
  function getIntro() {
    http.get(`${apiUrl}/project/intro/${projectId}`).then(({ data }) => {
      console.log("Introduction: ", data);
      setIntro({
        purpose: data.purpose,
        conventions: data.conventions,
        audience: data.audience,
        scope: data.scope,
        references: data.references
      });

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
    });
  };
  function getDesc() {
    http.get(`${apiUrl}/project/desc/${projectId}`).then(({ data }) => {
      console.log("Description: ", data);
      setDesc(
        {
          functions: data.functions,
          perspective: data.perspective,
          characteristics: data.characteristics,
          envirnoment: data.envirnoment,
          implementation: data.implementation,
          documentation: data.implementation,
          assumptions: data.assumptions,
        }
      );
    }).catch(err => {
      setDesc({
        functions: '',
        perspective: '',
        characteristics: '',
        envirnoment: '',
        implementation: '',
        documentation: '',
        assumptions: '',
      });
    });
  };
  function getNonFunctional() {
    http.get(`${apiUrl}/project/nonfun/${projectId}`).then(({ data }) => {
      console.log("Non Functional Req: ", data);
      setNonFun(
        {
          performance: data.performance,
          safety: data.safety,
          security: data.security,
          quality: data.quality,
          business: data.business,
        }
      );

    }).catch(err => {

      setNonFun({
        performance: '',
        safety: '',
        security: '',
        quality: '',
        business: ''
      });
    });
  };
  function getFeatures() {
    http.get(`${apiUrl}/project/feature/${projectId}`).then(({ data }) => {
      setFeatures(data.features);

    }).catch(err => {
      setFeatures('');
      console.log(err);
    });
  };
  function getOtherReq() {
    http.get(`${apiUrl}/project/other/${projectId}`).then(({ data }) => {
      setOtherRequirements(data.requirements);
    }).catch(err => {
      setOtherRequirements('');
      console.log(err);
    });
  };
  // ------------------------- useEffect --------------------------
  useEffect(() => {
    getIntro();
    getDesc();
    getNonFunctional();
    getFeatures();
    getOtherReq();
  }, []);
  // ------------------------- Schemas --------------------------
  const updateTitleSchema = {
    title: Joi.string().min(5).max(50).required().label("Project Title"),
    author: Joi.string().min(1).max(2000).required().label("Prepared By"),
    organization: Joi.string().min(1).max(26).required().label("organization"),
  }
  const introSchema = {
    purpose: Joi.string().min(5).max(2000).required().label("Purpose"),
    conventions: Joi.string().min(5).max(2000).required().label("Conventions"),
    audience: Joi.string().min(5).max(2000).required().label("Audience"),
    scope: Joi.string().min(5).max(2000).required().label("Scope"),
    references: Joi.string().min(5).max(2000).required().label("References")
  }
  const descSchema = {
    perspective: Joi.string().min(5).max(2000).required().label("Product Perspective"),
    functions: Joi.string().min(5).max(2000).required().label("Product Functions"),
    characteristics: Joi.string().min(5).max(2000).required().label("User Classes and Characteristics"),
    envirnoment: Joi.string().min(5).max(2000).required().label("Operating Environment"),
    implementation: Joi.string().min(5).max(2000).required().label("Design & Implementation Constraints"),
    documentation: Joi.string().min(5).max(2000).required().label("User Documentation"),
    assumptions: Joi.string().min(5).max(2000).required().label("Assumptions & Dependencies")
  }
  const nonFunSchema = {
    performance: Joi.string().min(5).max(2000).required().label("Performance Requirements"),
    safety: Joi.string().min(5).max(2000).required().label("Safety Requirements"),
    security: Joi.string().min(5).max(2000).required().label("Security Requirements"),
    quality: Joi.string().min(5).max(2000).required().label("Software Quality Attributes"),
    business: Joi.string().min(5).max(2000).required().label("Business Rules"),
  }
  // ------------------------- Validations --------------------------

  const introValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(intro, introSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  }
  const descValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(desc, descSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  }
  const validate = () => {
    const options = { abortEarly: false };
    const title = _.pick(projectTitle, ['title', 'author', 'organization']);
    const { error } = Joi.validate(title, updateTitleSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;

  }
  const nonFunValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(nonFun, nonFunSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  }
  // ------------------------- Handle Submit --------------------------
  const handleIntroSubmit = e => {
    e.preventDefault();
    const error = introValidate();
    if (error) {
      setErrors(error);
      return false;
    }
    setErrors({});
    doIntroSubmit();
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
  const handleDescSubmit = e => {
    e.preventDefault();
    const error = descValidate();
    if (error) {
      setErrors(error);
      return false;
    }
    setErrors({});
    doDescSubmit();
  }
  const handleNonFunSubmit = e => {
    e.preventDefault();
    const error = nonFunValidate();
    if (error) {
      setErrors(error);
      return false;
    }
    setErrors({});
    doNonFunSubmit();
  }
  // ------------------------- Submit API CALL --------------------------

  const doSubmit = () => {
    http.post(`${apiUrl}/project/title`, { projectId: projectId, ...projectTitle }).then((res) => {
      console.log(projectTitle);
      if (res.status === 200) {
        console.log("Title: ", res.data);
        toast.success("Successfully Updated.");
      } else {
        toast(res);
      }
    }).catch(err => { toast.error(err.response.data) });
  }
  const doIntroSubmit = () => {
    http.post(`${apiUrl}/project/intro`, { projectId: projectId, ...intro })
      .then(res => {
        if (res.status === 200) {
          toast.success("Successfully Updated.");
        }
      }).catch(err => {
        console.log(err);
        toast.error(err);
      })

  }
  const doDescSubmit = () => {
    http.post(`${apiUrl}/project/desc`, { projectId: projectId, ...desc })
      .then(res => {
        if (res.status === 200) {
          toast.success("Successfully Updated..");
        }
      }).catch(err => {
        console.log(err);
        toast.error(err);
      })
  }
  const doNonFunSubmit = () => {
    // store with new entry  
    http.post(`${apiUrl}/project/nonfun`, { projectId: projectId, ...nonFun })
      .then(res => {
        if (res.status === 200) {
          toast.success("Successfully Updated..");
        }
      }).catch(err => {
        console.log(err);
        toast.error(err);
      })
  }
  const doFeaturSubmit = e => {
    e.preventDefault();
    http.post(`${apiUrl}/project/feature`, { projectId: projectId, features })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Successfully Updated.");
        }
      }).catch(err => {
        console.log(err.response);
        setErrors({ features: err.response.data });
      })

  }
  const doOtherReqSubmit = e => {
    e.preventDefault();
    const requirements = otherRequirements;
    http.post(`${apiUrl}/project/other`, { projectId: projectId, requirements })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Successfully Updated.");
        }
        setErrors({});
      }).catch(err => {
        console.log(err.response);
        setErrors({ otherRequirements: err.response.data });
      })

  }
  const quillRef = useRef();
  const handleQuillChange = (value, field) => {
    setIntro({
      ...intro,
      [field]: value
    });
  }

  const imageHandler = (e) => {
    const editor = quillRef.current.getEditor();
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (/^image\//.test(file.type)) {
        const formData = new FormData();

        formData.append("image", file);
        console.log(formData);
        http.post(`${apiUrl}/project/uploadimg`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        ).then(res => {
          console.log(res);
          let url = `http://localhost:3004${res.url}`;

          url = `http://localhost:3000/backend/public/upload/image-1675100951649.png`;
          console.log(url);
          editor.insertEmbed(editor.getSelection(), "image", url);
        }).catch(err => console.log(err));
      } else {
        toast.info('You could only upload images.');
      }
    };
  }
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['image', "link",],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
      ],
      handlers: {
        image: imageHandler
      }
    },
  }), [])
  return (
    // <div className="page-content">
    //   <div className="dash-container">
    //     <div className="dash-content">
    //       <PageHeader title="SRS Template" />
    //       <div className="row">
    //         <div className="row">
    //           <div className="col-12">
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
                        <a href="#interface" onClick={() => { setActive('External Interface Requirements') }} className={`list-group-item list-group-item-action border-0  ${(active === 'External Interface Requirements') ? 'active' : ""}`}>3. External Interface  Requirements
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#features" onClick={() => { setActive('System Features') }} className={`list-group-item list-group-item-action border-0  ${(active === 'System Features') ? 'active' : ""}`}>4. System Features
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#nonfunctional" onClick={() => { setActive('Other Nonfunctional Requirements') }} className={`list-group-item list-group-item-action border-0  ${(active === 'Other Nonfunctional Requirements') ? 'active' : ""}`}>5. Other Nonfunctional Requirements
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#otherrequirements" onClick={() => { setActive('Other Requirements') }} className={`list-group-item list-group-item-action border-0  ${(active === 'Other Requirements') ? 'active' : ""}`}>6. Other Requirements
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
                    {/* Chapter 1 */}
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
                            <Input tag='textarea' name={'purpose'} value={intro.purpose} label={"1.1 purpose"} error={errors.purpose} onChange={e => setIntro({ ...intro, purpose: e.target.value })} />
                            <Quill name='conventions' label={"1.2 Document Conventions"} value={intro.conventions} error={errors.conventions}  onChange={(content, delta, source, editor) => setIntro({...intro, conventions:editor.getHTML()})}  />
                            <Quill name='audience' label={"1.3 Intended Audience and Reading Suggestions"} value={intro.audience} error={errors.audience} onChange={(content, delta, source, editor) => setIntro({...intro, audience:editor.getHTML()})} />
                            <Quill name='scope' label={"1.4 Product Scope"} value={intro.scope} error={errors.scope} onChange={(content, delta, source, editor) => setIntro({...intro, scope:editor.getHTML()})} />
                            <Quill name='references' label={"1.5 References"} value={intro.references} error={errors.references} onChange={(content, delta, source, editor) => setIntro({...intro, references:editor.getHTML()})} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 2 */}
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
                            <Input tag='textarea' name={'perspective'} value={desc.perspective} label={"2.1 Product Perspective"} error={errors.perspective} onChange={e => setDesc({ ...desc, perspective: e.target.value })} />
                            <Input tag='textarea' name={'functions'} value={desc.functions} label={"2.2 Product Functions"} error={errors.functions} onChange={e => setDesc({ ...desc, functions: e.target.value })} />
                            <Input tag='textarea' name={'characteristics'} value={desc.characteristics} label={"2.3 User Classes and Characteristics"} error={errors.characteristics} onChange={e => setDesc({ ...desc, characteristics: e.target.value })} />
                            <Input tag='textarea' name={'envirnoment'} value={desc.envirnoment} label={"2.4 Operating Environment"} error={errors.envirnoment} onChange={e => setDesc({ ...desc, envirnoment: e.target.value })} />
                            <Input tag='textarea' name={'implementation'} value={desc.implementation} label={"2.5 Design and Implementation Constraints"} error={errors.implementation} onChange={e => setDesc({ ...desc, implementation: e.target.value })} />
                            <Input tag='textarea' name={'documentation'} value={desc.documentation} label={"2.6 User Documentation"} error={errors.documentation} onChange={e => setDesc({ ...desc, documentation: e.target.value })} />
                            <Input tag='textarea' name={'assumption'} value={desc.assumptions} label={"2.7 Assumptions and Dependencies"} error={errors.assumptions} onChange={e => setDesc({ ...desc, assumptions: e.target.value })} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 3 */}
                    <div id="interface" class="card">
                      <form onSubmit={e => e.preventDefault()} >
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
                            <div className={`form-group mb-3 ${''}`}>
                              <ReactQuill theme="snow" ref={quillRef} value={interfaceRequirements || ''} modules={modules} onChange={setInterfaceRequirements} />
                            </div>
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' onClick={e => e.preventDefault()} /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 4 */}
                    <div id="features" class="card">
                      <form onSubmit={doFeaturSubmit} >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>4. System Features</h5><small className="text-muted"></small>
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
                            <Quill name='features' value={features} error={errors.features} onChange={setFeatures} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="nonfunctional" class="card">
                      <form onSubmit={handleNonFunSubmit}>
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>5. Other Nonfunctional Requirements</h5><small className="text-muted"></small>
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
                            <Input tag='textarea' name={'perfReq'} value={nonFun.performance} label={"5.1 Performance Requirements"} error={errors.performance} onChange={e => setNonFun({ ...nonFun, performance: e.target.value })} />
                            <Input tag='textarea' name={'safeReq'} value={nonFun.safety} label={"5.2 Safety Requirements"} error={errors.safety} onChange={e => setNonFun({ ...nonFun, safety: e.target.value })} />
                            <Input tag='textarea' name={'secReq'} value={nonFun.security} label={"5.3 Security Requirements"} error={errors.security} onChange={e => setNonFun({ ...nonFun, security: e.target.value })} />
                            <Input tag='textarea' name={'qualityReq'} value={nonFun.quality} label={"5.4 Software Quality Attributes"} error={errors.quality} onChange={e => setNonFun({ ...nonFun, quality: e.target.value })} />
                            <Input tag='textarea' name={'business'} value={nonFun.business} label={"5.5 Business Rules"} error={errors.business} onChange={e => setNonFun({ ...nonFun, business: e.target.value })} />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 6 */}
                    <div id="otherrequirements" class="card">
                      <form onSubmit={doOtherReqSubmit}>
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>6. Other Requirements</h5><small className="text-muted"></small>
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
                            <Quill name='requirements' value={otherRequirements} error={errors.otherRequirements} onChange={setOtherRequirements} />

                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div> 
    //   </div>
    // </div>
  );
}
