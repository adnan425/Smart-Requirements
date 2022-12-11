import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Joi from "joi-browser";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2"; 

import pic1 from "./../../assets/banners/svg/login1.svg";
import pic2 from "./../../assets/banners/svg/login2.svg";
import pic3 from "./../../assets/banners/svg/login3.svg";
import Form from "../../Components/Utllils/Form";
import { toast } from 'react-toastify';
 

class Login extends Form {
  keyPoints = [
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

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };
  state = {
    data: { email: "", password: "" },
    errors: {},
    admin: false,
    manager: false,
    stakeholder: false,
  };

  doSubmit = async () => {
    // call server
    // await auth.login(this.state.data.email, this.state.data.password);
    axios
      .post(
        "http://localhost:3004/api/auth",
        this.state.data, 
      )

      .then((response) => {
        if (response?.status === 200) { 
          toast.success('Login Successfull...!');
            localStorage.setItem("token", response?.data);
            // redirect according to their role
            const user = jwtDecode(response?.data); 
  
            if (user.role === "manager") {
  
              this.setState({ manager: true });
            } else if (user.role === "admin") {
              this.setState({ admin: true });
            } else if (user.role === "stakeholder") {
              this.setState({ stakeholder: true });
            }
           

        }
      })
      .catch((response) => {
        Swal.fire("Error!", response?.response?.data, "error");
      });
  };
  render() {
    return (
      <>
        {this.state.stakeholder && (
          <Navigate to="/stakeholder" replace={true} />
        )}
        {this.state.manager && <Navigate to="/manager" replace={true} />}
        {this.state.admin && <Navigate to="/admin" replace={true} />}
        {!this.state.admin && !this.state.manager && !this.state.stakeholder && (
          <>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <div>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-md-4 bg-primary m-sm-0 mt-3 mt-lg-3 mt-xl-3 "
                    style={{ borderRadius: "13px" }}
                  >
                    <div className="row justify-content-center ">
                      <div className="col-12 ">
                        <Link className="navbar-brand" to="/">
                          {/* <img
                            // src={Logo} style={{'height': '100px'}}
                            className="mx-2 my-3 auth-logo navbar-logo"
                            alt="logo"
                          /> */}
                        </Link>
                      </div>
                      <div className="col-9 d-flex d-none d-md-block d-lg-block d-xl-block">
                        <Carousel showArrows={false} showThumbs={false}>
                          {this.keyPoints.map((point) => {
                            return (
                              <div key={point.id}>
                                <img
                                  src={point.pic}
                                  alt=""
                                  className="img-fluid"
                                />
                                <div className="text-center">
                                  <h3 className="text-white mb-2 mt-5">
                                    “{point.heading}”
                                  </h3>
                                  <p className="text-white text-center">
                                    {point.text}
                                  </p>
                                  <div className="d-grid mb-4">
                                    <Link
                                      className="btn btn-primary btn-block mt-2 mb-4"
                                      to={"/signup"}
                                    >
                                      Sign Up
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
                  {/* Form */}
                  <div className="col-md-7">
                    <div
                      className="row d-flex justify-content-center align-items-center"
                      style={{
                        height: "100%",
                      }}
                    >
                      <div className="col-md-7 my-4">
                        <div className="text-center">
                          <h2 className="mb-3 f-w-600">
                            Sign in to Smart Requirement
                          </h2>
                          <p className="lead text-center">
                            Sent, spend and save smarter
                          </p>
                        </div>
                        {/* <div className="row ">
                      <div className="col-6">
                        <div className="d-grid">
                          <a href="#" className="btn btn-danger btn-block mt-2">
                            <i className="mx-3 fa fa-google"></i>{" "}
                            <span
                              className="d-none 
                           d-lg-inline-block d-xl-inline-block"
                            >
                              Sign in with <b>Google</b>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-grid">
                          <a href="#" className="btn btn-danger btn-block mt-2">
                            <i className="mx-3 fa fa-google"></i>{" "}
                            <span
                              className="d-none 
                           d-lg-inline-block d-xl-inline-block"
                            >
                              Sign in with <b>Google</b>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div> */}
                        <hr data-content="AND" className="hr-text" />
                        <form
                          onSubmit={this.handleSubmit}
                          method="POST"
                          acceptCharset="UTF-8"
                          id="loginForm"
                          className="login-form"
                        >
                          <div className="">
                            {this.renderInput("email", "Email", "email")}
                            {this.renderInput(
                              "password",
                              "Password",
                              "password"
                            )}
                            {this.renderButton("Sign In")}
                          </div>
                        </form>
                        <p className="">Copyright © 2022 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Login;
