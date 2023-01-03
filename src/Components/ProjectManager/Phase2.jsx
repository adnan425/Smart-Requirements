import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Utllils/Button';
import Input from '../Utllils/Input';
import PageHeader from "../Utllils/PageHeader";
import Joi from 'joi-browser';
import { useSelector } from 'react-redux';
import http from '../Services/httpService';
import { useEffect } from 'react';
import Quill from '../Utllils/Quill';
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
  const [otherRequirements, setOtherRequirements] = useState('');
  const [isIntro, setIsIntro] = useState(false); // check that intro is already in db
  const [introId, setIntroId] = useState(false); // setIntroId for update

  const [isDesc, setIsDesc] = useState(false); // setIsDesc for update
  const [descId, setDesId] = useState(false); // descId for update

  const [isNonFunctional, setIsNonFunctional] = useState(false); // setIsDesc for update
  const [nonFunId, setNonFunId] = useState(false); // descId for update

 

  // ------------------------- Get Data From API --------------------------
  function getIntro() {
    http.get(`${apiUrl}/project/intro/${projectId}`).then(({ data }) => {
      console.log("Introduction: ", data);
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
  function getDesc() {
    http.get(`${apiUrl}/project/desc/${projectId}`).then(({ data }) => {
      console.log("Description: ", data);
      setIsDesc(true);
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
      setDesId(data._id);

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
      setIsDesc(false);
    });
  };
  function getNonFunctional() {
    http.get(`${apiUrl}/project/nonfun/${projectId}`).then(({ data }) => {
      console.log("Non Functional Req: ", data);
      setIsNonFunctional(true);
      setNonFun(
        {
          performance: data.performance,
          safety: data.safety,
          security: data.security,
          quality: data.quality,
          business: data.business,
        }
      );
      setNonFunId(data._id);

    }).catch(err => {

      setNonFun({
        performance: '',
        safety: '',
        security: '',
        quality: '',
        business: ''
      });
      setNonFunId(false);
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
    const { error } = Joi.validate(projectTitle, updateTitleSchema, options);
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
    toast('handleDescSubmit');

    setErrors({});
    toast("reched");
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
  const handleFeaturesSubmit = e => {
    e.preventDefault(); 
    doFeaturSubmit();
  }

  // ------------------------- Submit API CALL --------------------------
  
  const doSubmit = () => {
    toast(projectId);
    http.put(`${apiUrl}/projects/${projectId}`, setProjectTitle).then(({ status }) => {
      if (status === 200) {
        toast.success("Successfully Updated.");
      } else {
        toast(status);
      }
    }).catch(err => { toast.error(err.response.data) });
  }
  const doIntroSubmit = () => {
    if (!isIntro) {
      // store with new entry  
      http.post(`${apiUrl}/project/intro`, { projectId: projectId, ...intro })
        .then(res => {
          if (res.status === 200) {
            toast.success("Successfully Updated.");
          }
        }).catch(err => {
          console.log("Submit error: ", err);
          toast.error(err);
        })

    } else {
      // update with existing recorde 
      http.put(`${apiUrl}/project/intro`, { '_id': introId, 'projectId': projectId, ...intro })
        .then(res => {
          toast(res);
        }).catch(err => {
          console.log(err);
          toast.error(err);
        })
    }

  }
  const doDescSubmit = () => {
    if (!isDesc) {
      // store with new entry  
      http.post(`${apiUrl}/project/desc`, { projectId: projectId, ...desc })
        .then(res => {
          if (res.status === 200) {
            toast.success("Successfully Updated..");
          }
        }).catch(err => {
          console.log(err);
          toast.error(err);
        })

    } else {
      // update with existing recorde
      toast("update entry", descId);
      http.put(`${apiUrl}/project/desc`, { '_id': descId, 'projectId': projectId, ...desc })
        .then(res => {
          toast(res);
        }).catch(err => {
          console.log(err);
          toast.error(err);
        })
    }

  }
  const doNonFunSubmit = () => { 
      // store with new entry  
      http.post(`${apiUrl}/project/nonfun`, { projectId: projectId, ...nonFun })
        .then(res => {
          if (res.status === 200) {
            toast.success("Successfully Updated..");
            setIsNonFunctional(true);
          }
        }).catch(err => {
          console.log(err);
          toast.error(err);
        })
  }
  const doFeaturSubmit = () => {  
      http.post(`${apiUrl}/project/feature`, { projectId: projectId, features })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            toast.success("Successfully Updated."); 
          }
        }).catch(err => {
          console.log(err.response);
          setErrors({features: err.response.data});
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
        setErrors({otherRequirements: err.response.data});
      })

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
                            <Input tag='textarea' name={'conventions'} value={intro.conventions} label={"1.2 Document Conventions"} error={errors.conventions} onChange={e => setIntro({ ...intro, conventions: e.target.value })} />
                            <Input tag='textarea' name={'audience'} value={intro.audience} label={"1.3 Intended Audience and Reading Suggestions"} error={errors.audience} onChange={e => setIntro({ ...intro, audience: e.target.value })} />
                            <Input tag='textarea' name={'scope'} value={intro.scope} label={"1.4 Product Scope"} error={errors.scope} onChange={e => setIntro({ ...intro, scope: e.target.value })} />
                            <Input tag='textarea' name={'references'} value={intro.references} label={"1.5 References"} error={errors.references} onChange={e => setIntro({ ...intro, references: e.target.value })} />
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
                    {/* Chapter 4 */}
                    <div id="features" class="card">
                      <form onSubmit={handleFeaturesSubmit} >
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
              </div>
            </div>
          </div>
        </div>
        {/* <!-- [ Main Content ] end --> */}
      </div>
    </div>
  );
}
