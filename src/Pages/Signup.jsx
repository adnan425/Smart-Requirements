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
  state = {
    data: { name: "", email: "", password: "" },
    errors: {},
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
          Swal.fire("Success!", response?.data, "success").then(() => {
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
    return (
      <>
        <div class="auth-wrapper auth-v3">
          <div class="bg-auth-side bg-primary"></div>
          <div class="auth-content">
            <nav class="navbar navbar-expand-md navbar-light default">
              <div class="container-fluid pe-2">
                <a class="navbar-brand" href="/">
                  <img src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png"
                    class="auth-logo navbar-logo" alt="logo" />
                </a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button> */}
                {/* <div class="collapse navbar-collapse" id="navbarTogglerDemo01" style={{ flexGrow: "0" }}>
                  <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <div class="btn-group align-items-center">
                        <select name="language" id="language"
                          class="btn  btn-primary dropdown-toggle" >
                          <option class="login_lang" selected="" >EN</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
            </nav>

            <div class="card">
              <div class="row align-items-center text-start">
                <div class="col-xl-6">
                  <div class="card-body">
                    <div class="">
                      <h2 class="mb-3 f-w-600">Register</h2>
                    </div>
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
                        <p class="mb-2 my-4 text-center">Already have an account? 
                        <Link to={"/login"}class="f-w-400 text-primary">Login</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
                     <div class="col-xl-6 img-card-side">
                      <Carousel showArrows={false} showThumbs={false}>
                        {this.keyPoints && this.keyPoints.map((point) => {
                          return (
                            <div class="auth-img-content" key={point.id}>

                              <img src={point.pic}
                                alt="" class="img-fluid" />
                              <h3 class="text-white mb-4 mt-5">{point.heading}</h3>
                              <p class="text-white">{point.text}</p>
                            </div>

                          )
                        })
                        }
                      </Carousel>
                    </div>
              </div>
            </div>


            <div class="auth-footer">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-6">
                    <p class="">Copyright ©  2022 </p>
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
