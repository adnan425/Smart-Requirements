import React from 'react'
import Card from '../common/Card'

export default function operations() {
    const operationsList = [
        {
            id: 1,
            heading: 'Report Generation',
            description: 'Based on the finalized requirements, this features will generate an SRS document for the system.'
        },
        {
            id: 2,
            heading: 'Add different users',
            description: 'Only the project managers or the Admin will be allowed to add or remove different users(Developers, Stakeholders, Requirement Analysists etc) '
        },
        {
            id: 3,
            heading: 'Perform Requirement Engineering ',
            description: 'Use a simple, yet sophisticated system to create and control assets. Track your equipment, compare costs, monitor parts availability, and filter staff by location- automatically, quickly, and with one tool.'
        }
    ]
    return (
        <section className="features_card_sec pb-76px">
            <div className="container">
                <div className="section_title_wrapper extra_section_title_wrapper">
                    <h1 className="main_title extra_features">
                        Major Functionalities
                    </h1>
                </div>
                <div className="row">
                   <Card lists={operationsList} />
                </div>
                <div className="btn_wrapper d-flex justify-content-center">
                    <a target="_blank" href="h" className="demo-btn">
                        <span>TRY SR FOR FREE!</span></a>
                </div>
            </div>
        </section>
    )
}
