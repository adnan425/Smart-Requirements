import React from "react";
import Form from '../Utllils/Form';
import PageHeader from "../Utllils/PageHeader";

import Joi from "joi-browser";
import Toaster from "../Utllils/Toaster";
import Messages from './../Admin/PagesHelp/Messages';

export default class NewProject extends Form {
  schema = {
    title : Joi.string().min(3).max(200).required().label("Title"),
    description : Joi.string().min(3).max(255).required().label("Description")
  }
  state = {
    data: {
      title: '',
    description: ''
    },
    errors : {}

  }
  doSubmit = async ()=>{
    console.log(this.state.data);
    // <Toaster type="success" message={",dfaf"} />
    // <Toaster type="success" message={`${this.state.data.title} added successfully.`} />

  }
  render(){
    return (
      <div className="page-content">
        <div className="dash-container">
          <div className="dash-content">
            {/* <!-- [ breadcrumb ] start --> */}
            <PageHeader   title="Add New Project"/>
            {/* <!-- [ breadcrumb ] end --> */}
            {/* <!-- [ Main Content ] start --> */}
            <div className="row">
              <form 
              onSubmit={this.handleSubmit}
                acceptCharset="UTF-8"
                className="mt-4"
              >
                
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                    {this.renderInput("title", "Title")}
                    {this.renderInput("description", "Description")}
                    {this.renderButton("Add Project")}
 
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- [ Main Content ] end --> */}
          </div>
        </div>
      </div>
    );
  }
}
