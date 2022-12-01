import React from 'react'

export default function About() {
  return (
    <section className="pm_features">
    <div className="container">
        <div className="section_title_wrapper">
            <h1 className="main_title">
                RUN A <span>SMOOTH</span> AND <span>PROFITABLE</span> BUSINESS WITH THE
                <span>ULTIMATE</span> MAINTENANCE SYSTEM
            </h1>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 left_side">
                <div className="main_content_wrap">
                    <div className="col_title">
                        <h2 className="title">
                            Everything You Need To Handle Your Whole Business Maintenance
                        </h2>
                    </div>
                    <div className="description">
                        <p>
                            With CMSSGo, you can create and manage your assets, parts, staff details, and so
                            much more without stress. The intuitive dashboard gives you all the information
                            you need to maintain your business on autopilot.
                        </p>
                    </div>
                    <div className="btn_wrapper">
                        <a target="_blank" href="https://demo.rajodiya.com/cmmsgo/login"
                            className="custome_btn">Start Using CMMSGo For Free!</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 right_side">

                <div className="contact_cards">
                    <div className="main_card main_card_erp">
                        <h3 className="title">
                            Achieve more while doing less work and spending less money.
                        </h3>
                        <p className="description">
                            CMMSGo saves you time, and more importantly, it saves you a whole lot of money.
                            Effectively monitor your operations without hiring extra labor. Update tasks,
                            assign roles, and manage staff details with the click of a single button.
                        </p>
                    </div>
                    <div className="sub_card main_card_erp">
                        <h3 className="sub_title">
                            Go digital and raise your productivity to the roof
                        </h3>
                        <p className="description">
                            Save countless hours and keep your table clean by employing a paperless method
                            of maintenance. CMMSGo uses a hassle-free method to effectively organize work
                            orders, plan management, arrange work requests, prioritize tasks, and get things
                            done quickly and cleanly.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}
