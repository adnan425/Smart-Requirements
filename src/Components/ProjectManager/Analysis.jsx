import React, { useEffect, useState } from "react";
import PageHeader from "../Utllils/PageHeader";
import { projectRequirements } from "../Store/Projects/projects";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../Utllils/PageTitle";
import { Link } from "react-router-dom";
import SentimentAnalyze from "../NLP/Sentiment";
import { toast } from 'react-toastify';
import Compromise from "../NLP/Compromise";
import Phase2 from "./Phase2";
import DonutChart from "../Utllils/DonutChart";
const moment = require("moment");

export default function Analysis() {

    // ===== Requirements Redux Call =====
    const projectId = useSelector((c) => c.projects.selectedProject._id);
    const requirements = useSelector((c) => c.projects.requirements);
    if (!projectId) {
        window.location = "../manager";
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(projectRequirements(projectId));
    }, [dispatch, projectId]);
    // === x == Requirements Redux Call == X ===


    // ===== Sentiment Analysis =====
    const [negative, setNegative] = useState(0);
    const [positive, setPositive] = useState(0);
    const [score, setScore] = useState(0); 

    const Sentiment = () => {
        let totalScore = 0;
        let negativeWords = 0;
        let positiveWords = 0; 

        requirements && requirements.forEach(element => {
            const result = SentimentAnalyze(element.description);
            totalScore += result.score;
            if (result.negative !== '') { negativeWords++ };
            if (result.positive !== '') { positiveWords++ }; 
        });
 
        setScore(totalScore / requirements.length);
        setNegative(negativeWords / requirements.length);
        setPositive(positiveWords / requirements.length); 
    }
    useEffect(() => {
        Sentiment();
    }, [])
    // === X == Sentiment Analysis == X ===

    
    return (
        <>
            <div className="page-content">
                <div className="dash-container">
                    <div className="dash-content">
                        <PageHeader title="Requirement Analysis" />
                        <div className="row">
                            <div className="row">
                                <div className="col-sm-12">
                                    <PageTitle
                                        title="Requirements"
                                        description="This step helps to determine the quality of the requirements. It involves identifying whether the requirements are unclear, incomplete, ambiguous, and contradictory."
                                    />
                                    <div className="row">
                                        <div className="card">
                                            <div className="card-body">
                                                <ul
                                                    className="nav nav-pills "
                                                    id="pills-tab"
                                                    role="tablist"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link active"
                                                            id="pills-Dashboard-tab"
                                                            data-bs-toggle="pill"
                                                            href="#sentiment_analysis"
                                                            role="tab"
                                                            aria-controls="pills-home"
                                                            aria-selected="true"
                                                        >
                                                            Sentiment Analysis
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            href="#ner"
                                                            role="tab"
                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            Named Entity Recognition (NER)
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            href="#srs_template"
                                                            role="tab"
                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            SRS Template
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade active show"
                                                id="sentiment_analysis"
                                                role="tabpanel"
                                                aria-labelledby="pills-home-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-xxl-7">
                                                        <div className="card ">
                                                            <div className="card-header">
                                                                <div className="row">
                                                                    <div className="col-9">
                                                                        <h5 className="">Requirements</h5>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <div className="float-end">
                                                                            <button className="btn btn-sm btn-primary mx-2" onClick={e => {
                                                                                e.preventDefault();
                                                                                toast.info('1.1 Purpose: Identify the product whose software requirements are specified in this document, including the revision or release number. Describe the scope of the product that is covered by this SRS, particularly if this SRS describes only part of the system or a single subsystem.>')
                                                                            }} title="Lock It.">
                                                                                <i className="ti ti-help"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body ">
                                                                <div className="table-responsive">
                                                                    <table className="table table-centered table-hover mb-0 animated">
                                                                        <thead>
                                                                            <tr>
                                                                                <th style={{ width: "6.1724%" }}>
                                                                                    <Link>Type</Link>
                                                                                </th>
                                                                                <th style={{ width: "12.54991%" }}>
                                                                                    <Link>Written By</Link>
                                                                                </th>
                                                                                <th style={{ width: "15.0307%" }}>
                                                                                    <Link>Title</Link>
                                                                                </th>
                                                                                {/* <th style={{ width: "15.0307%" }}>
                                                                                    <Link>Description</Link>
                                                                                </th> */}
                                                                                <th style={{ width: "15.3629%" }}>
                                                                                    <Link>Written On</Link>
                                                                                </th>

                                                                                <th style={{ width: "17.1068%" }}>
                                                                                    <Link>Score</Link>
                                                                                </th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {requirements &&
                                                                                requirements.map((requirement, index) => {
                                                                                    const {
                                                                                        _id,
                                                                                        title,
                                                                                        description,
                                                                                        type,
                                                                                        name,
                                                                                    } = requirement;
                                                                                    const date = moment(
                                                                                        requirement.date
                                                                                    ).format("MMM Do YYYY");

                                                                                    return (
                                                                                        <tr key={_id}>
                                                                                            <td className="Id">
                                                                                                <Link
                                                                                                    className="btn btn-outline-primary"
                                                                                                >
                                                                                                    {type === "Functional"
                                                                                                        ? "#FR"
                                                                                                        : "#NF"}
                                                                                                </Link>
                                                                                            </td>
                                                                                            <td>{name}</td>
                                                                                            <td>{title}</td>
                                                                                            {/* <td>
                                                                                                {description.slice(0, 40) + "..."}
                                                                                            </td> */}
                                                                                            <td>{date}</td>
                                                                                            <td title="Sentiment Analysis Score">
                                                                                                <i className="fas fa-circle text-success"></i> {SentimentAnalyze(description).score}
                                                                                            </td>
                                                                                        </tr>
                                                                                    );
                                                                                })}
                                                                            {requirements.length === 0 && (
                                                                                <tr>
                                                                                    <td> Requirements List is Empty</td>{" "}
                                                                                </tr>
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-5">
                                                        <div className="card ">
                                                            <div className="card-header">
                                                            <div className="row">
                                                                    <div className="col-9">
                                                                    <h5>Sentiment Analysis</h5>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <div className="float-end">
                                                                            <button className="btn btn-sm btn-primary mx-2" onClick={e => {
                                                                                e.preventDefault();
                                                                                toast.info('Sentiment Analysis of all requirements.')
                                                                            }} title="Lock It.">
                                                                                <i className="ti ti-help"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                            <div className="card-body">
                                                               <DonutChart label={['Score', 'Positive Words', 'Negative Words']} series={[score, positive, negative]} />

                                                                {/* <div className="project-details" style={{ marginTop: "15px;" }}>
                                                                    <div className="row">
                                                                        <div className="col text-center">
                                                                            <div className="tx-gray-500 small">Score</div>
                                                                            <div className="font-weight-bold">{  Math.floor(score) || 'N/A'}</div>
                                                                        </div>
                                                                        <div className="col text-center">
                                                                            <div className="tx-gray-500 small">Negative Words</div>
                                                                            <div className="font-weight-bold">{negative || 'N/A'}</div>
                                                                        </div>
                                                                        <div className="col text-center">
                                                                            <div className="tx-gray-500 small">Positive Words</div>
                                                                            <div className="font-weight-bold">{positive || 'N/A'}</div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                role="tabpanel"
                                                id="ner"
                                                aria-labelledby="pills-profile-tab"
                                            >
                                                 <div className="card">
                                                    <div className="card-header">
                                                        <Compromise/>
                                                    </div>
                                                 </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                role="tabpanel"
                                                id="srs_template"
                                                aria-labelledby="pills-profile-tab"
                                            >
                                                <Phase2/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
