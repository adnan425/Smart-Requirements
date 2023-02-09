import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Joi from "joi-browser";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';

import pic1 from "./../assets/banners/svg/login1.svg";
import pic2 from "./../assets/banners/svg/login2.svg";
import pic3 from "./../assets/banners/svg/login3.svg";
import Form from "../Components/Utllils/Form";
import darkLogo from './../assets/logos/dark.png';
import lightLogo from '../../src/assets/logos/blue.png';



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
    loading: false
  };

  doSubmit = async () => {
    // call server
    // await auth.login(this.state.data.email, this.state.data.password);
    this.setState({ loading: true });
    axios
      .post(
        "http://localhost:3004/api/auth",
        this.state.data,
      )

      .then((response) => {
        this.setState({ loading: false });

        if (response?.status === 200) {
          toast.success('Welcome Back');
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
        this.setState({ loading: false });
        Swal.fire("Error!", response?.response?.data, "error");
      });
  };

  render() {
    const themeMode = localStorage.getItem('themeMode');
    return (
      <>
        {this.state.stakeholder && (
          <Navigate to="/stakeholder" replace={true} />
        )}
        {this.state.manager && <Navigate to="/manager" replace={true} />}
        {this.state.admin && <Navigate to="/admin" replace={true} />}
        {!this.state.admin && !this.state.manager && !this.state.stakeholder && (
          <>
            <div className="auth-wrapper auth-v3">
              <div className="bg-auth-side bg-primary"></div>
              <div className="auth-content">
                <nav className="navbar navbar-expand-md navbar-light default">
                  <div className="container-fluid pe-2">
                    <a className="navbar-brand" href="/">
                      {
                        !themeMode && <img src={lightLogo}
                          className="auth-logo navbar-logo" style={{ "height": '' }} alt="logo" />
                      }
                      {
                        themeMode && <img src={darkLogo}
                          className="auth-logo navbar-logo" style={{ "height": '' }} alt="logo" />
                      }
                    </a>
                 </div>
                </nav>

                <div className="card">
                  <div className="row align-items-center text-start">
                    <div className="col-xl-6">
                      <div className="card-body">
                        <div className="">
                          <h2 className="mb-3 f-w-600">Login</h2>
                        </div>
                        <form
                          onSubmit={this.handleSubmit}
                          acceptCharset="UTF-8"
                        >
                          <div className="">
                            {this.renderInput("email", "Email", "email")}
                            {this.renderInput(
                              "password",
                              "Password",
                              "password"
                            )}
                            <div className="mb-2 mt-2">
                              <Link to={"/forget-password"}
                                className="small text-muted text-underline--dashed border-primar">Forgot Your Password?</Link>
                            </div>
                            
                            {
                              this.state.loading ? (<div className="d-grid">
                                <button disabled
                                  className="btn btn-primary btn-block mt-2"
                                >Sign In</button>
                              </div>) : (<>{this.renderButton("Sign In")}</>)
                            }
                            <p className="my-4 text-center">Don't have an account?
                              <Link to={"/signup"}
                                className="my-4 text-primary">Register</Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 img-card-side">
                      <Carousel showArrows={false} showThumbs={false}>
                        {this.keyPoints && this.keyPoints.map((point) => {
                          return (
                            <div className="auth-img-content" key={point.id}>

                              <img src={point.pic}
                                alt="" className="img-fluid" />
                              <h3 className="text-white mb-4 mt-5">{point.heading}</h3>
                              <p className="text-white">{point.text}</p>
                            </div>

                          )
                        })
                        }
                      </Carousel>
                    </div>
                  </div>
                </div>


                <div className="auth-footer">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6">
                        <p className="">Copyright ©  2022 </p>
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
