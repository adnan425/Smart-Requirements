import React, { useState } from 'react'
import Theme from '../Utllils/Theme';
import PageHeader from './../Utllils/PageHeader';

export default function Settings() {
  const [active, setActive] = useState('Profile');
  return (
    <div className="page-content">
      <div className="dash-container">
        <div className="dash-content">
          <PageHeader title='Settings' />
          <div className="row">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-3">
                    <div className="card sticky-top" style={{ top: '30px' }}>
                      <div className="list-group list-group-flush" id="useradd-sidenav">
                        <a href="#profile" onClick={() => { setActive('Profile') }} className={`list-group-item list-group-item-action border-0 ${(active === 'Profile') ? 'active' : ""}`}>Profile
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#theme" onClick={() => { setActive('Theme') }} className={`list-group-item list-group-item-action border-0 ${(active === 'Theme') ? 'active' : ""}`}>Theme
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div id="profile"  >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card gridBox rounded-25 hover-shadow-lg p-0 card_height">
                            <div className="card-body text-center">
                              <div className="card_img">
                                <a href="#/" className="hover-translate-y-n3 ">
                                  <img src="https://demo.rajodiya.com/cmmsgo/storage/vendors/5c3864a09d374c75f029c3aa20c3d647_user.jpg" alt="William" avatar="William" className="img-fluid" width="10" />
                                </a>
                                <div className="my-2 choose-file">
                                  <input type="file" className="form-control" name="image" id="image" data-filename="image" accept="image/*,.jpeg,.jpg,.png" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="card">
                            <div className="card-body">
                              <h5>Details</h5>
                              <div className="row mt-4">
                                <dt className="col-lg-4 h6 text-lg">Name</dt>
                                <dd className="col-lg-8 text-lg">
                                  William
                                </dd>
                                <dt className="col-lg-4 h6 text-lg">Contact</dt>
                                <dd className="col-lg-8 text-lg">
                                  9876302145
                                </dd>
                                <dt className="col-lg-4 h6 text-lg">Email</dt>
                                <dd className="col-lg-8 text-lg">
                                  nibefa6957@chimpad.com
                                </dd>
                                <dt className="col-lg-4 h6 text-lg">Phone</dt>
                                <dd className="col-lg-8 text-lg">
                                  9876320145
                                </dd>
                                <dt className="col-lg-4 h6 text-lg">Address</dt>
                                <dd className="col-lg-8 text-lg">
                                  55 Old Drive
                                </dd>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="theme" >
                      <Theme />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
