import React from "react";
import Form from "../Utllils/Form";
import PageHeader from "../Utllils/PageHeader";
import http from "../Services/httpService"; 
import Joi from "joi-browser";
import { toast } from "react-toastify"; 
 
 export default class NewProject extends Form {
  
  schema = {
    title: Joi.string().min(3).max(200).required().label("Title"),
    description: Joi.string().min(3).max(255).required().label("Description"),
  };
  state = {
    data: {
      title: "",
      description: "",
    },
    errors: {},
  };
  doSubmit = async () => {
    const { data } = this.state; 

    http.post(
      "http://localhost:3004/api/projects",
      data
    ).then((data)=>{ 
      if(data.status === 200){
        toast.success("Successfully created your new project.");
        this.setState({
          data : {
            title: "",
            description: "",
          }
        });
        window.location.reload();
      }
    }).catch(({ response })=>{ 
      toast.error(response.data);
    })
 
  };
  render() {
    return (
      <div className="page-content">
        <div className="dash-container">
          <div className="dash-content">
            {/* <!-- [ breadcrumb ] start --> */}
            <PageHeader title="Add New Project" />
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
 