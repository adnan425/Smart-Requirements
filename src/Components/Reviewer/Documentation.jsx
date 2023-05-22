import Joi from "joi-browser";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";

import Button from "../Utllils/Button";
import Input from "../Utllils/Input";
import PageHeader from "../Utllils/PageHeader";
import http from "../Services/httpService";
import Quill from "../Utllils/Quill";
import { useSelector, useDispatch } from "react-redux";
import { projectRequirements } from "../Store/Projects/projects";
const moment = require("moment");

const _ = require("lodash");
const apiUrl = "http://localhost:3004/api";

export default function Phase2() {
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState("Title Page");
  const projectId = useSelector((c) => c.projects.selectedProject._id);
  const getTitle = useSelector((state) => state.srs.title);

  // ------------------------- States --------------------------
  const [projectTitle, setProjectTitle] = useState({
    title: getTitle.title,
    author: getTitle.author,
    organization: getTitle.organization,
    date: moment(getTitle.date).format("MMM Do YYYY"),
  });
  const [intro, setIntro] = useState({
    purpose: "",
    conventions: "",
    audience: "",
    scope: "",
    references: "",
  });
  const [desc, setDesc] = useState({
    perspective: "",
    functions: "",
    characteristics: "",
    envirnoment: "",
    implementation: "",
    documentation: "",
    assumptions: "",
  });
  const [nonFun, setNonFun] = useState({
    performance: "",
    safety: "",
    security: "",
    quality: "",
    business: "",
  });
  const [features, setFeatures] = useState("");
  const [interfaceRequirements, setInterfaceRequirements] = useState("");
  const [otherRequirements, setOtherRequirements] = useState("");
  // ------------------------- Get Data From API --------------------------
  function getIntro() {
    http
      .get(`${apiUrl}/project/intro/${projectId}`)
      .then(({ data }) => {
        console.log("Introduction: ", data);
        setIntro({
          purpose: data.purpose,
          conventions: data.conventions,
          audience: data.audience,
          scope: data.scope,
          references: data.references,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        // toast.info('');
        setIntro({
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
          functions: data.functions,
          perspective: data.perspective,
          characteristics: data.characteristics,
          envirnoment: data.envirnoment,
          implementation: data.implementation,
          documentation: data.implementation,
          assumptions: data.assumptions,
        });
      })
      .catch((err) => {
        setDesc({
          functions: "",
          perspective: "",
          characteristics: "",
          envirnoment: "",
          implementation: "",
          documentation: "",
          assumptions: "",
        });
      });
  }
  function getNonFunctional() {
    http
      .get(`${apiUrl}/project/nonfun/${projectId}`)
      .then(({ data }) => {
        console.log("Non Functional Req: ", data);
        setNonFun({
          performance: data.performance,
          safety: data.safety,
          security: data.security,
          quality: data.quality,
          business: data.business,
        });
      })
      .catch((err) => {
        setNonFun({
          performance: "",
          safety: "",
          security: "",
          quality: "",
          business: "",
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
        setOtherRequirements(data.requirements);
      })
      .catch((err) => {
        setOtherRequirements("");
        console.log(err);
      });
  }
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
  };
  const introSchema = {
    purpose: Joi.string().min(5).max(2000).required().label("Purpose"),
    conventions: Joi.string().min(5).max(2000).required().label("Conventions"),
    audience: Joi.string().min(5).max(2000).required().label("Audience"),
    scope: Joi.string().min(5).max(2000).required().label("Scope"),
    references: Joi.string().min(5).max(2000).required().label("References"),
  };
  const descSchema = {
    perspective: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Product Perspective"),
    functions: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Product Functions"),
    characteristics: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("User Classes and Characteristics"),
    envirnoment: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Operating Environment"),
    implementation: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Design & Implementation Constraints"),
    documentation: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("User Documentation"),
    assumptions: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Assumptions & Dependencies"),
  };
  const nonFunSchema = {
    performance: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Performance Requirements"),
    safety: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Safety Requirements"),
    security: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Security Requirements"),
    quality: Joi.string()
      .min(5)
      .max(2000)
      .required()
      .label("Software Quality Attributes"),
    business: Joi.string().min(5).max(2000).required().label("Business Rules"),
  };
  // ------------------------- Validations --------------------------

  const introValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(intro, introSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  };
  const descValidate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(desc, descSchema, options);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path] = item.message;
    return err;
  };
  const validate = () => {
    const options = { abortEarly: false };
    const title = _.pick(projectTitle, ["title", "author", "organization"]);
    const { error } = Joi.validate(title, updateTitleSchema, options);
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
    const error = introValidate();
    if (error) {
      setErrors(error);
      return false;
    }
    setErrors({});
    doIntroSubmit();
  };
  const handlSubmitTitle = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setErrors(error);
      return false;
    }
    doSubmit();
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

  const doSubmit = () => {
    http
      .post(`${apiUrl}/project/title`, {
        projectId: projectId,
        ...projectTitle,
      })
      .then((res) => {
        console.log(projectTitle);
        if (res.status === 200) {
          console.log("Title: ", res.data);
          toast.success("Successfully Updated.");
        } else {
          toast(res);
        }
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  const doIntroSubmit = () => {
    http
      .post(`${apiUrl}/project/intro`, { projectId: projectId, ...intro })
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
      .post(`${apiUrl}/project/desc`, { projectId: projectId, ...desc })
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
      .post(`${apiUrl}/project/nonfun`, { projectId: projectId, ...nonFun })
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
  const doFeaturSubmit = (e) => {
    e.preventDefault();

    if (featureData.srId === "") {
      toast.info("Select Feature Requirement");
      return false;
    } else if (featureData.features === "") {
      toast.info("Feature description is required.");
      return false;
    } else if (featureData.features.length < 5) {
      toast.info("Feature length must be at least 5 characters long.");
      return false;
    }
    console.log("Feature Data", featureData);
    http
      .post(`${apiUrl}/project/feature`, featureData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Successfully Added.");
          getFeaturesList();
          setFeatureData({
            title: `Feature ${featureList.length + 1}`,
            features: "",
            srId: "",
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        setErrors({ features: err.response.data });
      });
  };
  const doOtherReqSubmit = (e) => {
    e.preventDefault();
    const requirements = otherRequirements;
    http
      .post(`${apiUrl}/project/other`, { projectId: projectId, requirements })
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
  const quillRef = useRef();

  const imageHandler = (e) => {
    if (e && e.preventDefault instanceof Function) {
      e.preventDefault();
    }
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
        http
          .post(`${apiUrl}/project/uploadimg`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            // let url = `http://localhost:3004${res.data.url}`;
            // console.log(url);
            // editor.insertEmbed(editor.getSelection(), "image", url);
          })
          .catch((err) => console.log(err));
      } else {
        toast.info("You could only upload images.");
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  // Redux Call
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectRequirements(projectId));
  }, [dispatch, projectId]);

  const requirements = useSelector((c) => c.projects.requirements);

  // Features list
  const [featureList, setFeatureList] = useState([]);

  function getFeaturesList() {
    http
      .get(`${apiUrl}/project/feature/${projectId}`)
      .then(({ data }) => {
        setFeatureList(data);
        console.log("Feature List", featureList);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getFeaturesList();
  }, [projectId]);

  // Features States for Data Store
  const [featureData, setFeatureData] = useState({
    projectId: projectId,
    title: `Feature ${featureList.length + 1}`,
    features: "",
    srId: "",
  });
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
                          6. Other Requirements
                          <div className="float-end">
                            <i className="ti ti-chevron-right"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div id="title-page" className="card">
                      <form onSubmit={handlSubmitTitle}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>Title Page</h5>
                              <small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button
                                className="btn btn-sm btn-primary mx-2"
                                onClick={(e) => e.preventDefault()}
                                title="Mark it completed."
                              >
                                <i className="ti ti-check"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-lock-open"></i>
                              </button>
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
                              error={errors.title}
                              onChange={(e) =>
                                setProjectTitle({
                                  ...projectTitle,
                                  title: e.target.value,
                                })
                              }
                              classes="col-md-6"
                            />
                            <Input
                              name={"prepared_by"}
                              value={projectTitle.author}
                              label={"Prepared By"}
                              placeholder="Adnan"
                              error={errors.author}
                              onChange={(e) =>
                                setProjectTitle({
                                  ...projectTitle,
                                  author: e.target.value,
                                })
                              }
                              classes="col-md-6"
                            />
                            <Input
                              name={"org"}
                              value={projectTitle.organization}
                              label={"Originzation"}
                              placeholder="SZABIST"
                              error={errors.organization}
                              onChange={(e) =>
                                setProjectTitle({
                                  ...setProjectTitle,
                                  organization: e.target.value,
                                })
                              }
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
                            <div className="card-footer text-end pb-0">
                              <Button label="Save Changes" />{" "}
                            </div>
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
                                onClick={(e) => e.preventDefault()}
                                title="Mark it completed."
                              >
                                <i className="ti ti-check"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-primary mx-2"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-lock-open"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toast.info(
                                    "1.1 Purpose: Identify the product whose software requirements are specified in this document, including the revision or release number. Describe the scope of the product that is covered by this SRS, particularly if this SRS describes only part of the system or a single subsystem.>"
                                  );
                                }}
                                title="Lock It."
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
                              name={"purpose"}
                              value={intro.purpose}
                              label={"1.1 purpose"}
                              error={errors.purpose}
                              //   onChange={(e) =>
                              //     setIntro({ ...intro, purpose: e.target.value })
                              //   }
                            />
                            <Input
                              tag="textarea"
                              name={"purposeReview"}
                              value={intro.purposeReview}
                              label={"1.1 Purpose Review"}
                              error={errors.purposeReview}
                              onChange={(e) =>
                                setIntro({
                                  ...intro,
                                  purposeReview: e.target.value,
                                })
                              }
                            />
                            <Quill
                              name="conventions"
                              label={"1.2 Document Conventions"}
                              value={intro.conventions}
                              error={errors.conventions}
                              //   onChange={(content, delta, source, editor) =>
                              //     setIntro({
                              //       ...intro,
                              //       conventions: editor.getHTML(),
                              //     })
                              //   }
                            />
                            <Quill
                              name="conventionsReview"
                              label={"1.2 Document Conventions Review"}
                              value={intro.conventionsReview}
                              error={errors.conventionsReview}
                              onChange={(content, delta, source, editor) =>
                                setIntro({
                                  ...intro,
                                  conventionsReview: editor.getHTML(),
                                })
                              }
                            />
                            <Quill
                              name="audience"
                              label={
                                "1.3 Intended Audience and Reading Suggestions"
                              }
                              value={intro.audience}
                              error={errors.audience}
                              //   onChange={(content, delta, source, editor) =>
                              //     setIntro({
                              //       ...intro,
                              //       audience: editor.getHTML(),
                              //     })
                              //   }
                            />
                            <Quill
                              name="audience Review"
                              label={
                                "1.3 Intended Audience and Reading Suggestions"
                              }
                              value={intro.audienceReview}
                              error={errors.audienceReview}
                              onChange={(content, delta, source, editor) =>
                                setIntro({
                                  ...intro,
                                  audienceReview: editor.getHTML(),
                                })
                              }
                            />
                            <Quill
                              name="scope"
                              label={"1.4 Product Scope"}
                              value={intro.scope}
                              error={errors.scope}
                              //   onChange={(content, delta, source, editor) =>
                              //     setIntro({ ...intro, scope: editor.getHTML() })
                              //   }
                            />
                            <Quill
                              name="scopeReview"
                              label={"1.4 Product Scope Review"}
                              value={intro.scopeReview}
                              error={errors.scopeReview}
                              onChange={(content, delta, source, editor) =>
                                setIntro({
                                  ...intro,
                                  scopeReview: editor.getHTML(),
                                })
                              }
                            />
                            <Quill
                              name="references"
                              label={"1.5 References"}
                              value={intro.references}
                              error={errors.references}
                              //   onChange={(content, delta, source, editor) =>
                              //     setIntro({
                              //       ...intro,
                              //       references: editor.getHTML(),
                              //     })
                              //   }
                            />
                            <Quill
                              name="referencesReview"
                              label={"1.5 References Review"}
                              value={intro.referencesReview}
                              error={errors.referencesReview}
                              onChange={(content, delta, source, editor) =>
                                setIntro({
                                  ...intro,
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
                            <div className="float-end">
                              <button
                                className="btn btn-sm btn-primary mx-2"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-check"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-lock-open"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Input
                              tag="textarea"
                              name={"perspective"}
                              value={desc.perspective}
                              label={"2.1 Product Perspective"}
                              error={errors.perspective}
                              //   onChange={(e) =>
                              //     setDesc({
                              //       ...desc,
                              //       perspective: e.target.value,
                              //     })
                              //   }
                            />
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
                              name={"functions"}
                              value={desc.functions}
                              label={"2.2 Product Functions"}
                              error={errors.functions}
                              //   onChange={(e) =>
                              //     setDesc({ ...desc, functions: e.target.value })
                              //   }
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
                              name={"characteristics"}
                              value={desc.characteristics}
                              label={"2.3 User Classes and Characteristics"}
                              error={errors.characteristics}
                              //   onChange={(e) =>
                              //     setDesc({
                              //       ...desc,
                              //       characteristics: e.target.value,
                              //     })
                              //   }
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
                              name={"envirnoment"}
                              value={desc.envirnoment}
                              label={"2.4 Operating Environment"}
                              error={errors.envirnoment}
                              //   onChange={(e) =>
                              //     setDesc({
                              //       ...desc,
                              //       envirnoment: e.target.value,
                              //     })
                              //   }
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
                              name={"implementation"}
                              value={desc.implementation}
                              label={
                                "2.5 Design and Implementation Constraints"
                              }
                              error={errors.implementation}
                              //   onChange={(e) =>
                              //     setDesc({
                              //       ...desc,
                              //       implementation: e.target.value,
                              //     })
                              //   }
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
                              name={"documentation"}
                              value={desc.documentation}
                              label={"2.6 User Documentation"}
                              error={errors.documentation}
                              //   onChange={(e) =>
                              //     setDesc({
                              //       ...desc,
                              //       documentation: e.target.value,
                              //     })
                              //   }
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
                              name={"assumption"}
                              value={desc.assumptions}
                              label={"2.7 Assumptions and Dependencies"}
                              error={errors.assumptions}
                              //   onChange={(e) =>
                              //     setDesc({
                              //       ...desc,
                              //       assumptions: e.target.value,
                              //     })
                              //   }
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
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>3. External Interface Requirements</h5>
                              <small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button
                                className="btn btn-sm btn-primary mx-2"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-check"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-lock-open"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className={`form-group mb-3 ${""}`}>
                              <ReactQuill
                                theme="snow"
                                ref={quillRef}
                                value={interfaceRequirements || ""}
                                modules={modules}
                                onChange={setInterfaceRequirements}
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
                          <div className="float-end">
                            <button
                              className="btn btn-sm btn-primary mx-2"
                              onClick={(e) => e.preventDefault()}
                              title="Lock It."
                            >
                              <i className="ti ti-check"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={(e) => e.preventDefault()}
                              title="Lock It."
                            >
                              <i className="ti ti-lock-open"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row"></div>
                        {featureList && featureList.length !== 0 && (
                          <>
                            <h5 className="h6 d-inline-block font-weight-300 mb-2">
                              Features List
                            </h5>
                            <div className="row">
                              <div className="col-12">
                                <div className="card">
                                  <div className="card-body table-border-style table-border-style">
                                    <div className="table-responsive">
                                      <table className="table">
                                        <thead>
                                          <tr>
                                            <th
                                              className="text-dark text-center"
                                              style={{ width: "10%" }}
                                            >
                                              Feature No
                                            </th>
                                            <th
                                              className="text-dark text-center"
                                              style={{ width: "50%" }}
                                            >
                                              Description
                                            </th>
                                            <th
                                              className="text-dark text-center"
                                              style={{ width: "10%" }}
                                            >
                                              Action
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {featureList &&
                                            featureList.map(
                                              (feature, index) => (
                                                <tr>
                                                  <td className="Id text-center">
                                                    <a
                                                      href="#/"
                                                      className="btn btn-outline-primary"
                                                    >
                                                      #{`Feature ${index + 1}`}
                                                    </a>
                                                  </td>
                                                  <td
                                                    className="text-center"
                                                    style={{
                                                      whiteSpace: "pre-wrap",
                                                    }}
                                                  >
                                                    {feature.features}
                                                  </td>
                                                  <td>
                                                    <td className="Action text-center">
                                                      {/* <div className="action-btn bg-warning ms-2"> */}
                                                      {/* <a href="#/"
                                                        className="mx-3 btn btn-sm align-items-center"
                                                        data-bs-toggle="tooltip" title="" data-original-title="Ledger Summary"
                                                        data-bs-original-title="View">
                                                        <i className="ti ti-eye text-white"></i>
                                                      </a> */}
                                                      {/* </div> */}
                                                      <div className="action-btn bg-info ms-2">
                                                        <button className="mx-3 btn btn-sm align-items-center">
                                                          <i className="ti ti-edit text-white"></i>
                                                        </button>
                                                      </div>
                                                      <div className="action-btn bg-danger ms-2">
                                                        <button
                                                          className="mx-3 btn btn-sm align-items-center bs-pass-para"
                                                          onClick={() => {
                                                            http
                                                              .delete(
                                                                `${apiUrl}/project/feature/${feature._id}`
                                                              )
                                                              .then(
                                                                ({ data }) => {
                                                                  toast.success(
                                                                    data
                                                                  );
                                                                  getFeaturesList();
                                                                }
                                                              )
                                                              .catch((err) => {
                                                                console.log(
                                                                  err
                                                                );
                                                              });
                                                          }}
                                                        >
                                                          <i className="ti ti-trash text-white"></i>
                                                        </button>
                                                      </div>
                                                    </td>
                                                  </td>
                                                </tr>
                                              )
                                            )}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <Input
                          tag="Features"
                          name={"featuresReview"}
                          value={intro.featuresReview}
                          label={"4.1 Features Review"}
                          error={errors.featuresReview}
                          onChange={(e) =>
                            setIntro({
                              ...intro,
                              featuresReview: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div id="nonfunctional" className="card">
                      <form onSubmit={handleNonFunSubmit}>
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>5. Other Nonfunctional Requirements</h5>
                              <small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                              <button
                                className="btn btn-sm btn-primary mx-2"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-check"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-lock-open"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Input
                              tag="textarea"
                              name={"perfReq"}
                              value={nonFun.performance}
                              label={"5.1 Performance Requirements"}
                              error={errors.performance}
                              //   onChange={(e) =>
                              //     setNonFun({
                              //       ...nonFun,
                              //       performance: e.target.value,
                              //     })
                              //   }
                            />
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
                              value={nonFun.safety}
                              label={"5.2 Safety Requirements"}
                              error={errors.safety}
                              //   onChange={(e) =>
                              //     setNonFun({ ...nonFun, safety: e.target.value })
                              //   }
                            />
                            <Input
                              tag="textarea"
                              name={"safeReq"}
                              value={nonFun.safetyReview}
                              label={"5.2 Safety Requirements"}
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
                              value={nonFun.security}
                              label={"5.3 Security Requirements"}
                              error={errors.security}
                              //   onChange={(e) =>
                              //     setNonFun({
                              //       ...nonFun,
                              //       security: e.target.value,
                              //     })
                              //   }
                            />
                            <Input
                              tag="textarea"
                              name={"secReq"}
                              value={nonFun.securityReview}
                              label={"5.3 Security Requirements"}
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
                              value={nonFun.quality}
                              label={"5.4 Software Quality Attributes"}
                              error={errors.quality}
                              onChange={(e) =>
                                setNonFun({
                                  ...nonFun,
                                  quality: e.target.value,
                                })
                              }
                            />
                            <Input
                              tag="textarea"
                              name={"qualityReq"}
                              value={nonFun.qualityReview}
                              label={"5.4 Software Quality Attributes"}
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
                              value={nonFun.business}
                              label={"5.5 Business Rules"}
                              error={errors.business}
                              onChange={(e) =>
                                setNonFun({
                                  ...nonFun,
                                  business: e.target.value,
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
                            <div className="float-end">
                              <button
                                className="btn btn-sm btn-primary mx-2"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-check"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={(e) => e.preventDefault()}
                                title="Lock It."
                              >
                                <i className="ti ti-lock-open"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <Quill
                              name="requirements"
                              value={otherRequirements}
                              error={errors.otherRequirements}
                              onChange={setOtherRequirements}
                            />

                            <div className="card-footer text-end pb-0">
                              <Button label="Save Changes" />{" "}
                            </div>
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
      </div>
    </div>
  );
}
