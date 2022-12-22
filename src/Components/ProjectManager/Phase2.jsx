import React from 'react';
import PageHeader from "../Utllils/PageHeader";
import PageTitle from "./../Utllils/PageTitle";


export default function Phase2() {


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
                        <a href="#brand-settings" className="list-group-item list-group-item-action border-0 active">Brand Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#system-settings" className="list-group-item list-group-item-action border-0">System Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#company-settings" className="list-group-item list-group-item-action border-0">Company Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#payment-settings" className="list-group-item list-group-item-action border-0">Payment Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#zoom-settings" className="list-group-item list-group-item-action border-0">Zoom Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#slack-settings" className="list-group-item list-group-item-action border-0">Slack Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#telegram-settings" className="list-group-item list-group-item-action border-0">Telegram Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#twilio-settings" className="list-group-item list-group-item-action border-0">Twilio Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#email-notification-settings" className="list-group-item list-group-item-action border-0">Email Notification Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>

                        <a href="#offer-letter-settings" className="list-group-item list-group-item-action border-0">Offer Letter Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>

                        <a href="#joining-letter-settings" className="list-group-item list-group-item-action border-0">Joining Letter Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>

                        <a href="#experience-certificate-settings" className="list-group-item list-group-item-action border-0">Experience Certificate Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>

                        <a href="#noc-settings" className="list-group-item list-group-item-action border-0">NOC Settings
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>

                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">

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
