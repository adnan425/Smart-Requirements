import Joi from "joi-browser";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import svg from "./file.svg";
import Button from "../Utllils/Button";
import Input from "../Utllils/Input";
import PageHeader from "../Utllils/PageHeader";
import http from "../Services/httpService";
import Quill from "../Utllils/Quill";
import { useSelector, useDispatch } from "react-redux";
import { projectRequirements } from "../Store/Projects/projects";
const moment = require("moment");

const apiUrl = "http://localhost:3004/api";

export default function Phase2() {
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState("Title Page");
  const projectId =
    useSelector((c) => c.projects.selectedProject._id) ||
    localStorage.getItem("id");
  const getTitle = useSelector((state) => state.srs.title);
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const getOriginalPdf = () => {
    http
      .get(`${apiUrl}/project/generatepdf/63d9f3eb9d3284c80d853a30`, {
        responseType: "blob", // had to add this one here
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        setPdfData(URL.createObjectURL(blob));
        setLoading(false);
        console.log(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const getPdf = () => {
    http
      .get(`${apiUrl}/project/generatepdfreview/63d9f3eb9d3284c80d853a30`, {
        responseType: "blob", // had to add this one here
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        setPdfData(URL.createObjectURL(blob));
        setLoading(false);
        console.log(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  // ------------------------- States --------------------------
  const [projectTitle, setProjectTitle] = useState({
    title: getTitle.title,
    author: getTitle.author,
    organization: getTitle.organization,
    date: moment(getTitle.date).format("MMM Do YYYY"),
  });

  const [introReview, setIntroReview] = useState({
    purposeReview: "",
    conventionsReview: "",
    audienceReview: "",
    scopeReview: "",
    referencesReview: "",
  });

  const [desc, setDesc] = useState({
    perspectiveReview: "",
    functionsReview: "",
    characteristicsReview: "",
    envirnomentReview: "",
    implementationReview: "",
    documentationReview: "",
    assumptionsReview: "",
  });
  const [nonFun, setNonFun] = useState({
    performanceReview: "",
    safetyReview: "",
    securityReview: "",
    qualityReview: "",
    businessReview: "",
  });
  const [features, setFeatures] = useState("");
  const [interfaceRequirements, setInterfaceRequirements] = useState("");
  const [otherRequirementsReview, setOtherRequirementsReview] = useState("");
  // ------------------------- Get Data From API --------------------------
  function getIntro() {
    http
      .get(`${apiUrl}/project/intro/${projectId}`)
      .then(({ data }) => {
        console.log("Introduction: ", data);
        setIntroReview({
          purposeReview: data.purposeReview,
          conventionsReview: data.conventionsReview,
          audienceReview: data.audienceReview,
          scopeReview: data.scopeReview,
          referencesReview: data.referencesReview,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        // toast.info('');
        setIntroReview({
          purpose: "",
          conventions: "",
          audience: "",
          scope: "",
          references: "",
        });
      });
  }
  function getDesc() {
    http
      .get(`${apiUrl}/project/desc/${projectId}`)
      .then(({ data }) => {
        console.log("Description: ", data);
        setDesc({
          functionsReview: data.functionsReview,
          perspectiveReview: data.perspectiveReview,
          characteristicsReview: data.characteristicsReview,
          envirnomentReview: data.envirnomentReview,
          implementationReview: data.implementationReview,
          documentationReview: data.implementationReview,
          assumptionsReview: data.assumptionsReview,
        });
      })
      .catch((err) => {
        setDesc({
          functionsReview: "",
          perspectiveReview: "",
          characteristicsReview: "",
          envirnomentReview: "",
          implementationReview: "",
          documentationReview: "",
          assumptionsReview: "",
        });
      });
  }
  function getChap3() {
    http
      .get(`${apiUrl}/project/requi/${projectId}`)
      .then(({ data }) => {
        setInterfaceRequirements(data.requReview);
      })
      .catch((err) => {
        setInterfaceRequirements("");
      });
  }
  function getNonFunctional() {
    http.get(`${apiUrl}/project/nonfun/${projectId}`).then(({ data }) => {
      console.log("Non Functional Req: ", data);
      setNonFun({
        performanceReview: data.performanceReview,
        safetyReview: data.safetyReview,
        securityReview: data.securityReview,
        qualityReview: data.qualityReview,
        businessReview: data.businessReview,
      });
    });
  }
  function getFeatures() {
    http
      .get(`${apiUrl}/project/feature/${projectId}`)
      .then(({ data }) => {
        setFeatures(data.features);
      })
      .catch((err) => {
        setFeatures("");
        console.log(err);
      });
  }
  function getOtherReq() {
    http
      .get(`${apiUrl}/project/other/${projectId}`)
      .then(({ data }) => {
        setOtherRequirementsReview(data.requirementsReview);
      })
      .catch((err) => {
        setOtherRequirementsReview("");
        console.log(err);
      });
  }
  // ------------------------- useEffect --------------------------
  useEffect(() => {
    getIntro();
    getDesc();
    getChap3();
    getNonFunctional();
    getFeatures();
    getOtherReq();
  }, []);
  // ------------------------- Schemas --------------------------

  const descSchema = {
    perspectiveReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Product Perspective Review"),
    functionsReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Product Functions Review"),
    characteristicsReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("User Classes and Characteristics Review"),
    envirnomentReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Operating Environment Review"),
    implementationReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Design & Implementation Constraints Review"),
    documentationReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("User Documentation Review"),
    assumptionsReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Assumptions & Dependencies Review"),
  };
  const nonFunSchema = {
    performanceReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Performance Requirements Review"),
    safetyReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Safety Requirements Review"),
    securityReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Security Requirements Review"),
    qualityReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Software Quality Attributes Review"),
    businessReview: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Business Rules Review"),
  };
  // ------------------------- Validations --------------------------

  const descValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(desc, descSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  };
  const nonFunValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(nonFun, nonFunSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  };
  // ------------------------- Handle Submit --------------------------
  const handleIntroSubmit = (e) => {
    e.preventDefault();
    doIntroSubmit();
  };
  const handleDescSubmit = (e) => {
    e.preventDefault();
    const error = descValidate();
    if (error) {
      setErrors(error);
      return false;
    }
    setErrors({});
    doDescSubmit();
  };
  // Chapt 3
  const handleChap3Submit = (e) => {
    e.preventDefault();
    http
      .post(`${apiUrl}/project/requireview`, {
        projectId: projectId,
        requReview: interfaceRequirements,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully Updated.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };
  const handleNonFunSubmit = (e) => {
    e.preventDefault();
    const error = nonFunValidate();
    if (error) {
      setErrors(error);
      return false;
    }
    setErrors({});
    doNonFunSubmit();
  };
  // ------------------------- Submit API CALL --------------------------

  const doIntroSubmit = () => {
    http
      .post(`${apiUrl}/project/introreview`, {
        projectId: projectId,
        ...introReview,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully Updated.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };
  const doDescSubmit = () => {
    http
      .post(`${apiUrl}/project/descreview`, { projectId: projectId, ...desc })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully Updated..");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };
  const doNonFunSubmit = () => {
    // store with new entry
    http
      .post(`${apiUrl}/project/nonfunreview`, {
        projectId: projectId,
        ...nonFun,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully Updated..");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };
  const [featureReview, setFeatureReview] = useState("");
  const doFeaturSubmit = (e) => {
    e.preventDefault();
    http
      .post(`${apiUrl}/project/featurereview`, {
        projectId: projectId,
        featuresReview: featureReview,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Successfully Added.");
          getFeaturesList();
        }
      })
      .catch((err) => {
        console.log(err.response);
        setErrors({ features: err.response.data });
      });
  };
  const doOtherReqSubmit = (e) => {
    e.preventDefault();
    http
      .post(`${apiUrl}/project/otherreview`, {
        projectId: projectId,
        requirementsReview: otherRequirementsReview,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Successfully Updated.");
        }
        setErrors({});
      })
      .catch((err) => {
        console.log(err.response);
        setErrors({ otherRequirements: err.response.data });
      });
  };
  // Redux Call
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectRequirements(projectId));
  }, [dispatch, projectId]);

  // Features list

  function getFeaturesList() {
    http
      .get(`${apiUrl}/project/feature/${projectId}`)
      .then((res) => {
        setFeatureReview(res.data[0].featuresReview);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getFeaturesList();
  }, [projectId]);

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
                    <div className="card sticky-top" style={{ top: "30px" }}>
                      <div
                        className="list-group list-group-flush"
                        id="useradd-sidenav"
                      >
                        <a
                          href="#title-page"
                          onClick={() => {
                            setActive("Title Page");
                          }}
                          className={`list-group-item list-group-item-action border-0 ${
                            active === "Title Page" ? "active" : ""
                          }`}
                        >
                          Title Page
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                        <a
                          href="#intro"
                          onClick={() => {
                            setActive("Introduction");
                          }}
                          className={`list-group-item list-group-item-action border-0  ${
                            active === "Introduction" ? "active" : ""
                          }`}
                        >
                          1. Introduction
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                        <a
                          href="#description"
                          onClick={() => {
                            setActive("Overall Description");
                          }}
                          className={`list-group-item list-group-item-action border-0  ${
                            active === "Overall Description" ? "active" : ""
                          }`}
                        >
                          2. Overall Description
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                        <a
                          href="#interface"
                          onClick={() => {
                            setActive("External Interface Requirements");
                          }}
                          className={`list-group-item list-group-item-action border-0  ${
                            active === "External Interface Requirements"
                              ? "active"
                              : ""
                          }`}
                        >
                          3. External Interface Requirements
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                        <a
                          href="#features"
                          onClick={() => {
                            setActive("System Features");
                          }}
                          className={`list-group-item list-group-item-action border-0  ${
                            active === "System Features" ? "active" : ""
                          }`}
                        >
                          4. System Features
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                        <a
                          href="#nonfunctional"
                          onClick={() => {
                            setActive("Other Nonfunctional Requirements");
                          }}
                          className={`list-group-item list-group-item-action border-0  ${
                            active === "Other Nonfunctional Requirements"
                              ? "active"
                              : ""
                          }`}
                        >
                          5. Other Nonfunctional Requirements
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                        <a
                          href="#otherrequirements"
                          onClick={() => {
                            setActive("Other Requirements");
                          }}
                          className={`list-group-item list-group-item-action border-0  ${
                            active === "Other Requirements" ? "active" : ""
                          }`}
                        >
                          6. Reviewed Document
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div id="title-page" className="card">
                      <form>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>Title Page</h5>
                              <small className="text-muted"></small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Input
                              name={"title"}
                              value={projectTitle.title}
                              label={"Project Title"}
                              placeholder="Smart Requirements"
                              classes="col-md-6"
                            />
                            <Input
                              name={"prepared_by"}
                              value={projectTitle.author}
                              label={"Prepared By"}
                              placeholder="Adnan"
                              classes="col-md-6"
                            />
                            <Input
                              name={"org"}
                              value={projectTitle.organization}
                              label={"Originzation"}
                              placeholder="SZABIST"
                              classes="col-md-6"
                            />
                            <Input
                              name={"date"}
                              value={projectTitle.date}
                              label={"Date"}
                              error={""}
                              onChange={""}
                              classes="col-md-6"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 1 */}
                    <div id="intro" className="card">
                      <form onSubmit={handleIntroSubmit}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>1. Introduction</h5>
                              <small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toast.info(
                                    "1.1 Purpose: Identify the product whose software requirements are specified in this document, including the revision or release number. Describe the scope of the product that is covered by this SRS, particularly if this SRS describes only part of the system or a single subsystem.>"
                                  );
                                }}
                                title="Info"
                              >
                                <i className="ti ti-help"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Input
                              tag="textarea"
                              name={"purposeReview"}
                              value={introReview.purposeReview}
                              label={"1.1 Purpose Review"}
                              error={errors.purposeReview}
                              onChange={(e) =>
                                setIntroReview({
                                  ...introReview,
                                  purposeReview: e.target.value,
                                })
                              }
                            />

                            <Quill
                              name="conventionsReview"
                              label={"1.2 Document Conventions Review"}
                              value={introReview.conventionsReview}
                              error={errors.conventionsReview}
                              onChange={(content, delta, source, editor) =>
                                setIntroReview({
                                  ...introReview,
                                  conventionsReview: editor.getHTML(),
                                })
                              }
                            />
                            <Quill
                              name="audience Review"
                              label={
                                "1.3 Intended Audience and Reading Suggestions"
                              }
                              value={introReview.audienceReview}
                              error={errors.audienceReview}
                              onChange={(content, delta, source, editor) =>
                                setIntroReview({
                                  ...introReview,
                                  audienceReview: editor.getHTML(),
                                })
                              }
                            />
                            <Quill
                              name="scopeReview"
                              label={"1.4 Product Scope Review"}
                              value={introReview.scopeReview}
                              error={errors.scopeReview}
                              onChange={(content, delta, source, editor) =>
                                setIntroReview({
                                  ...introReview,
                                  scopeReview: editor.getHTML(),
                                })
                              }
                            />
                            <Quill
                              name="referencesReview"
                              label={"1.5 References Review"}
                              value={introReview.referencesReview}
                              error={errors.referencesReview}
                              onChange={(content, delta, source, editor) =>
                                setIntroReview({
                                  ...introReview,
                                  referencesReview: editor.getHTML(),
                                })
                              }
                            />
                            <div className="card-footer text-end pb-0">
                              <Button label="Save Changes" />{" "}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 2 */}
                    <div id="description" className="card">
                      <form onSubmit={handleDescSubmit}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>2. Overall Description</h5>
                              <small className="text-muted"></small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Input
                              tag="textarea"
                              name={"perspectiveReview"}
                              value={desc.perspectiveReview}
                              label={"2.1 Product Perspective Review"}
                              error={errors.perspectiveReview}
                              onChange={(e) =>
                                setDesc({
                                  ...desc,
                                  perspectiveReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"functionsReview"}
                              value={desc.functionsReview}
                              label={"2.2 Product Functions Review"}
                              error={errors.functionsReview}
                              onChange={(e) =>
                                setDesc({
                                  ...desc,
                                  functionsReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"characteristicsReview"}
                              value={desc.characteristicsReview}
                              label={
                                "2.3 User Classes and Characteristics Review"
                              }
                              error={errors.characteristicsReview}
                              onChange={(e) =>
                                setDesc({
                                  ...desc,
                                  characteristicsReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"envirnomentReview"}
                              value={desc.envirnomentReview}
                              label={"2.4 Operating Environment Review"}
                              error={errors.envirnomentReview}
                              onChange={(e) =>
                                setDesc({
                                  ...desc,
                                  envirnomentReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"implementationReview"}
                              value={desc.implementationReview}
                              label={
                                "2.5 Design and Implementation Constraints Review"
                              }
                              error={errors.implementationReview}
                              onChange={(e) =>
                                setDesc({
                                  ...desc,
                                  implementationReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"documentationReview"}
                              value={desc.documentationReview}
                              label={"2.6 User Documentation Review"}
                              error={errors.documentationReview}
                              onChange={(e) =>
                                setDesc({
                                  ...desc,
                                  documentationReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"assumptionsReview"}
                              value={desc.assumptionsReview}
                              label={"2.7 Assumptions and Dependencies"}
                              error={errors.assumptionsReview}
                              onChange={(e) =>
                                setDesc({
                                  ...desc,
                                  assumptionsReview: e.target.value,
                                })
                              }
                            />
                            <div className="card-footer text-end pb-0">
                              <Button label="Save Changes" />{" "}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 3 */}
                    <div id="interface" className="card">
                      <form onSubmit={handleChap3Submit}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>3. External Interface Requirements</h5>
                              <small className="text-muted"></small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className={`form-group mb-3 ${""}`}>
                              <Quill
                                name="interfaceRequirements"
                                label={""}
                                value={interfaceRequirements}
                                onChange={(content, delta, source, editor) =>
                                  setInterfaceRequirements(editor.getHTML())
                                }
                              />
                            </div>
                            <div className="card-footer text-end pb-0">
                              <Button
                                label="Save Changes"
                                onClick={(e) => e.preventDefault()}
                              />{" "}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 4 */}
                    <div id="features" className="card">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5>4. System Features</h5>
                            <small className="text-muted"></small>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <Quill
                          name="featuresReview"
                          value={featureReview}
                          label={""}
                          onChange={(content, delta, source, editor) =>
                            setFeatureReview(editor.getHTML())
                          }
                        />
                        <div className="card-footer text-end pb-0">
                          <button
                            className="btn btn-primary btn-block mt-2"
                            onClick={(e) => doFeaturSubmit(e)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Chapter 5 */}

                    <div id="nonfunctional" className="card">
                      <form onSubmit={handleNonFunSubmit}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>5. Other Nonfunctional Requirements</h5>
                              <small className="text-muted"></small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Input
                              tag="textarea"
                              name={"perfReqReview"}
                              value={nonFun.performanceReview}
                              label={"5.1 Performance Requirements Review"}
                              error={errors.performanceReview}
                              onChange={(e) =>
                                setNonFun({
                                  ...nonFun,
                                  performanceReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"safeReq"}
                              value={nonFun.safetyReview}
                              label={"5.2 Safety Requirements Review"}
                              error={errors.safetyReview}
                              onChange={(e) =>
                                setNonFun({
                                  ...nonFun,
                                  safetyReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"secReq"}
                              value={nonFun.securityReview}
                              label={"5.3 Security Requirements Review"}
                              error={errors.securityReview}
                              onChange={(e) =>
                                setNonFun({
                                  ...nonFun,
                                  securityReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"qualityReq"}
                              value={nonFun.qualityReview}
                              label={"5.4 Software Quality Attributes Review"}
                              error={errors.qualityReview}
                              onChange={(e) =>
                                setNonFun({
                                  ...nonFun,
                                  qualityReview: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"business"}
                              value={nonFun.businessReview}
                              label={"5.5 Business Rules"}
                              error={errors.businessReview}
                              onChange={(e) =>
                                setNonFun({
                                  ...nonFun,
                                  businessReview: e.target.value,
                                })
                              }
                            />
                            <div className="card-footer text-end pb-0">
                              <Button label="Save Changes" />{" "}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Chapter 6 */}
                    <div id="otherrequirements" className="card">
                      <form onSubmit={doOtherReqSubmit}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>6. Other Requirements</h5>
                              <small className="text-muted"></small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Quill
                              name="requirements"
                              value={otherRequirementsReview}
                              error={errors.otherRequirementsReview}
                              onChange={setOtherRequirementsReview}
                            />

                            <div className="card-footer text-end pb-0">
                              <Button label="Save Changes" />{" "}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="download" className="card">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5>Document</h5>
                            <small className="text-muted"></small>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row timeline-wrapper d-flex align-items-center justify-content-center">
                          <div className="col-md-6 col-lg-4 col-xl-4 ">
                            <div className="timeline-icons">
                              <span className="timeline-dots"></span>
                              {pdfData === null ? (
                                <i className="ti ti-file text-info"></i>
                              ) : (
                                <>
                                  <img src={svg} alt="" srcset="" />
                                </>
                              )}{" "}
                            </div>
                            <h6 className="text-info my-3">
                              {pdfData === null ? (
                                <>
                                  {loading ? (
                                    "Generating PDF"
                                  ) : (
                                    <> Generate PDF</>
                                  )}
                                </>
                              ) : (
                                "Generated Pdf"
                              )}{" "}
                            </h6>
                            <p className="text-muted text-sm mb-3">
                              {pdfData === null ? (
                                <>
                                  {loading ? (
                                    <i className="ti ti-clock mr-2">
                                      {" "}
                                      In Progress...{" "}
                                    </i>
                                  ) : (
                                    <i className="ti ti-clock mr-2">
                                      {" "}
                                      Not Started
                                    </i>
                                  )}
                                </>
                              ) : (
                                <i className="ti ti-clock mr-2"> Completed.</i>
                              )}
                            </p>
                            {loading && (
                              <Button variant="primary" size="sm" disabled>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </Button>
                            )}
                            {pdfData === null ? (
                              <></>
                            ) : (
                              <>
                                {" "}
                                {!loading && (
                                  <>
                                    {/* <a
                                      href="#/"
                                      onClick={() => {
                                        getPdf();
                                      }}
                                      className="btn btn-sm btn-secondary mx-2"
                                      title="View Pdf"
                                    >
                                      <i className="ti ti-file mr-3"></i>
                                    </a> */}
                                    <a
                                      href={pdfData}
                                      download={pdfData}
                                      className="btn btn-sm btn-info"
                                      title="Download Pdf"
                                    >
                                      <i className="ti ti-download mr-3"></i>
                                    </a>
                                  </>
                                )}
                              </>
                            )}
                            {pdfData === null ? (
                              <>
                                {!loading && (
                                  <div className="mr-2 d-flex gap-1">
                                    <button
                                      onClick={() => {
                                        console.log("ck");
                                        setLoading(true);
                                        getOriginalPdf();
                                      }}
                                      className="btn  btn-primary"
                                    >
                                      Original
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() => {
                                        console.log("ck");
                                        setLoading(true);
                                        getPdf();
                                      }}
                                      className="btn  btn-primary"
                                    >
                                      Reviewed
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                {" "}
                                <div className="mr-2 d-flex gap-1">
                                  <button
                                    onClick={() => {
                                      console.log("ck");
                                      setLoading(true);
                                      getOriginalPdf();
                                    }}
                                    className="btn  btn-primary"
                                  >
                                    Original
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                      />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={() => {
                                      console.log("ck");
                                      setLoading(true);
                                      getPdf();
                                    }}
                                    className="btn  btn-primary"
                                  >
                                    Reviewed
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                      />
                                    </svg>
                                  </button>
                                </div>{" "}
                              </>
                            )}
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
  );
}
