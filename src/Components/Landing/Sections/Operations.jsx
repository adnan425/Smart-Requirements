import React from 'react'
import Card from '../common/Card'

export default function operations() {
    const operationsList = [
        {
            id: 1,
            heading: 'Assign Roles To Members Of Staff',
            description: 'Easily share roles and duties to all your team members. Manage permissions and restrict your staff from accessing certain areas. Update duty description, track staff performance, and more!'
        },
        {
            id: 2,
            heading: 'Get All Essential Information In One Place',
            description: 'Make your work easier by controlling every single detail from one place. Manage locations and get an overview of work, orders, assets, PMs, and so much more  all from a single tab.'
        },
        {
            id: 3,
            heading: 'Automate Your Maintenance Process',
            description: 'Use a simple, yet sophisticated system to create and control assets. Track your equipment, compare costs, monitor parts availability, and filter staff by location- automatically, quickly, and with one tool.'
        }
    ]
    return (
        <section class="features_card_sec pb-76px">
            <div class="container">
                <div class="section_title_wrapper extra_section_title_wrapper">
                    <h1 class="main_title extra_features">
                        Take Control Of All Maintenance Management Operations
                    </h1>
                </div>
                <div class="row">
                   <Card lists={operationsList} />
                </div>
                <div class="btn_wrapper d-flex justify-content-center">
                    <a target="_blank" href="h" class="demo-btn">
                        <span>TRY SR FOR FREE!</span></a>
                </div>
            </div>
        </section>
    )
}
