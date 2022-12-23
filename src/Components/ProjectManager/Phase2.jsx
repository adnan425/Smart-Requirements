import React, { useState } from 'react';
import Button from '../Utllils/Button';
import Input from '../Utllils/Input';
import PageHeader from "../Utllils/PageHeader";


export default function Phase2() {

  const [active, setActive] = useState('Title Page'); 
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
                        <a href="#title-page" onClick={()=>{setActive('Title Page')}} className={`list-group-item list-group-item-action border-0 ${(active === 'Title Page') ? 'active' : ""}`}>Title Page
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                        <a href="#intro" onClick={()=>{setActive('Introduction')}} className={`list-group-item list-group-item-action border-0  ${(active === 'Introduction') ? 'active' : ""}`}>1. Introduction
                          <div className="float-end"><i className="ti ti-chevron-right"></i></div></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div id="title-page" class="card">
                      <form >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>Title Page</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                            <button className="btn btn-sm btn-primary mx-2" onClick={''} title="Lock It.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={''} title="Lock It.">
                                <i className="ti ti-lock-open"></i></button>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <Input name={'title'} value={''} label={"Project Title"} placeholder="Smart Requirements" error={''} onChange={''} classes="col-md-6" />
                            <Input name={'prepared_by'} value={''} label={"Prepared By"} placeholder="Adnan" error={''} onChange={''} classes="col-md-6" />
                            <Input name={'org'} value={''} label={"Originzation"} placeholder="SZABIST" error={''} onChange={''} classes="col-md-6" />
                            <Input name={'date'} value={'12 Jul 2022'} label={"Date"} error={''} onChange={''} classes="col-md-6" />
                            <div class="card-footer text-end pb-0"><Button label='Save Changes' /> </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="intro" class="card">
                      <form >
                        <div class="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5>1. Introduction</h5><small className="text-muted"></small>
                            </div>
                            <div className="float-end">
                            <button className="btn btn-sm btn-primary mx-2" onClick={''} title="Lock It.">
                                <i className="ti ti-check"></i></button>
                              <button className="btn btn-sm btn-primary" onClick={''} title="Lock It.">
                                <i className="ti ti-lock-open"></i></button>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <Input tag='textarea' name={'purpose'} value={''} label={"1.1 Purpose"} error={''} onChange={''} />
                            <Input tag='textarea' name={'conventions'} value={''} label={"1.2 Document Conventions"} error={''} onChange={''} />
                            <Input tag='textarea' name={'audience'} value={''} label={"1.3 Intended Audience and Reading Suggestions"} error={''} onChange={''} />
                            <Input tag='textarea' name={'scope'} value={''} label={"1.4 Product Scope"} error={''} onChange={''} />
                            <Input tag='textarea' name={'references'} value={''} label={"1.5 References"} error={''} onChange={''} />
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
