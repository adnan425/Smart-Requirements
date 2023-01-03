import React from 'react'
import Theme from './../../Utllils/Theme';
import PageHeader from './../Utllils/PageHeader';

export default function Settings() {
  return (
    <div className="page-content">
    <div className="dash-container">
      <div className="dash-content">
        <PageHeader title='Settings' /> 
        <div className="row">
          <div className="row">
            <div className="col-sm-12">
             <Theme/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
