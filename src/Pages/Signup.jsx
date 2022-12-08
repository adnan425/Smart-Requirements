import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pic1 from "./../assets/banners/svg/login1.svg";
import pic2 from "./../assets/banners/svg/login2.svg";
import pic3 from "./../assets/banners/svg/login3.svg"; 
import { Carousel } from "react-responsive-carousel";
import Joi from "joi-browser";  
import axios from "axios";
import Form from "../Components/Utllils/Form"; 
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Logo from '../Components/Utllils/Logo';  


export default class Signup extends Form {
  state  = {
    data: { name:"", email:"", password:""},
    errors : {},
  }
  schema = {
    name: Joi.string().required().label("Name"), 
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  }
  doSubmit = async () => {
    // call server
    axios.post(
        "http://localhost:3004/api/users", this.state.data
      )
      .then((response) => { 
        if (response?.status === 200) {
          Swal.fire("Success!", response?.data, "success").then(()=>{
          // redirect to login  
          window.location = '/login';
          }); 

        }
      })
      .catch((response) => { 
        Swal.fire("Failed!", response?.response?.data, "info"); 
      });
  };
  render() {
    const keyPoints = [
      {
        id: 1,
        heading: "Attention is the new currency",
        text: "The more effortless the writing looks, the more effort the writer actually put into the process.",
        pic: pic1,
      },
      {
        id: 2,
        heading: "Attention is the new currency",
        text: "The more effortless the writing looks, the more effort the writer actually put into the process.",
        pic: pic2,
      },
      {
        id: 3,
        heading: "Attention is the new currency",
        text: "The more effortless the writing looks, the more effort the writer actually put into the process.",
        pic: pic3,
      },
    ]; 
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
  
        <div>
          <div className="container-fluid">
            <div className="row">
              {/* Form */}
  
              <div className="col-md-7">
                <div className="col-12 pt-4 pl-4">
                  <Logo/>
                </div>
                <div
                  className="row d-flex justify-content-center align-items-center"
                  style={{
                    height: "80%",
                  }}
                >
                  <div className="col-md-7 my-4">
                    <div className="text-center">
                      <h2 className="mb-3 f-w-600">Sign up to Smart Requirement</h2>
                      <p className="lead text-center">
                        Sent, spend and save smarter
                      </p>
                    </div>
                  
                    <hr data-content="AND" className="hr-text" />
                    <form
                    onSubmit={this.handleSubmit}
                      method="POST"
                      acceptCharset="UTF-8"
                      id="loginForm"
                      className="login-form" 
                    >
                      <div className="">
                      {this.renderInput("name", "Name")}
                      {this.renderInput("email", "Email", "email")} 
                      {this.renderInput("password", "Password", "password")}
                      {this.renderButton("Sign up")} 
                      </div>
                    </form>
                    <p className="">Copyright © 2022 </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 bg-primary m-sm-0 mt-3 mt-lg-3 mt-xl-3 "
                style={{ borderRadius: "13px" }}
              >
                <div className="row justify-content-center ">
                  <div className="col-9 d-flex d-none d-md-block d-lg-block d-xl-block">
                    <Carousel showArrows={false} showThumbs={false}>
                      {keyPoints.map((point) => {
                        return (
                          <div key={point.id}>
                            <img src={point.pic} alt="banner" className="img-fluid" />
                            <div className="text-center">
                              <h3 className="text-white mb-2 mt-5">
                                “{point.heading}”
                              </h3>
                              <p className="text-white text-center">{point.text}</p>
                              <div className="d-grid mb-4">
                                <Link
                                  className="btn btn-primary btn-block mt-2 mb-4"
                                  to={"/login"}
                                >
                                  Sign In
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
