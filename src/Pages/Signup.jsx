import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pic1 from "./../assets/banners/svg/login1.svg";
import pic2 from "./../assets/banners/svg/login2.svg";
import pic3 from "./../assets/banners/svg/login3.svg";
import { Link } from "react-router-dom";
import Joi from "joi-browser"; 
import Input from "../Components/Utllils/Input"; 
import React, { Component } from 'react'

export default class Signup extends Component {
  state  = {
    account: { firstname: "", lastname:"", email:"", password:""},
    errors : {}
  }
  schema = {
    firstname: Joi.string().required().label("First Name"),
    lastname: Joi.string().required().label("Last Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  }
  handleChange = ({currentTarget : input}) =>{
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account});
  } 
  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(error);

    // if no errors
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return false;

    // call server
    console.log("handle submit");
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
    const { account, errors , handleChange } = this.state;
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
                  <Link class="navbar-bran" to="/">
                    <img
                      src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png"
                      class="mx-2 my-3 auth-logo navbar-logo"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div
                  class="row d-flex justify-content-center align-items-center"
                  style={{
                    height: "80%",
                  }}
                >
                  <div className="col-md-7 my-4">
                    <div class="text-center">
                      <h2 class="mb-3 f-w-600">Sign up to Smart Requirement</h2>
                      <p className="lead text-center">
                        Sent, spend and save smarter
                      </p>
                    </div>
                    {/* <div class="row ">
                      <div class="col-6">
                        <div class="d-grid">
                          <a href="#" class="btn btn-danger btn-block mt-2">
                            <i class="mx-3 fa fa-google"></i>{" "}
                            <span
                              className="d-none 
                             d-lg-inline-block d-xl-inline-block"
                            >
                              Sign in with <b>Google</b>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="d-grid">
                          <a href="#" class="btn btn-danger btn-block mt-2">
                            <i class="mx-3 fa fa-google"></i>{" "}
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
                    <hr data-content="AND" class="hr-text" />
                    <form
                      method="POST"
                      accept-charset="UTF-8"
                      id="loginForm"
                      class="login-form"
                    >
                      <div class="">
                      <Input name={"firstname"} value={account.firstname} label={"First Name"} onChange={handleChange}   error={errors.firstname} />
                      <Input name={"lastname"} value={account.lasttname} label={"Last Name"}   error={errors.lastname} />
                      <Input name={"email"} value={account.email} label={"Email"} type={"email"}   error={errors.email} />
                      <Input name={"password"} value={account.password} label={"Password"} type={"password"} error={errors.password}
                          />  
  
                        <div class="d-grid">
                          <button
                            class="btn btn-primary btn-block mt-2"
                            onClick={this.handleSubmit}
                          >Sign in</button>
                        </div>
                      </div>
                    </form>
                    <p class="">Copyright © 2022 </p>
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
                            <img src={point.pic} alt="banner" class="img-fluid" />
                            <div className="text-center">
                              <h3 class="text-white mb-2 mt-5">
                                “{point.heading}”
                              </h3>
                              <p class="text-white text-center">{point.text}</p>
                              <div class="d-grid mb-4">
                                <Link
                                  class="btn btn-primary btn-block mt-2 mb-4"
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
