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
import lightLogo from '../../src/assets/logos/blue.png';
import darkLogo from '../../src/assets/logos/dark.png';

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
    const themeMode = localStorage.getItem('themeMode');

    return (
      <>
        <div className="auth-wrapper auth-v3">
          <div className="bg-auth-side bg-primary"></div>
          <div className="auth-content">
            <nav className="navbar navbar-expand-md navbar-light default">
              <div className="container-fluid pe-2">
                <a className="navbar-brand" href="/">
                  {
                    !themeMode && <img src={lightLogo}
                      className="auth-logo navbar-logo" alt="logo" />
                  }
                  {
                    themeMode && <img src={darkLogo}
                      className="auth-logo navbar-logo" alt="logo" />
                  }
                </a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={{ flexGrow: "0" }}>
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <div className="btn-group align-items-center">
                        <select name="language" id="language"
                          className="btn  btn-primary dropdown-toggle" >
                          <option className="login_lang" selected="" >EN</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
            </nav>

            <div className="card">
              <div className="row align-items-center text-start">
                <div className="col-xl-6">
                  <div className="card-body">
                    <div className="">
                      <h2 className="mb-3 f-w-600">Register</h2>
                    </div>
                    <form
                      onSubmit={this.handleSubmit}
                    // id="loginForm"
                    // className="login-form"
                    >
                      <div className="">
                        {this.renderInput("name", "Name")}
                        {this.renderInput("email", "Email", "email")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderButton("Sign up")}
                        <p className="mb-2 my-4 text-center">Already have an account?
                          <Link to={"/login"} className="f-w-400 text-primary">Login</Link></p>
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
    );
  }
}
