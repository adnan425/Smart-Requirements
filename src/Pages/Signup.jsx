import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pic1 from "./../assets/banners/svg/login1.svg";
import pic2 from "./../assets/banners/svg/login2.svg";
import pic3 from "./../assets/banners/svg/login3.svg";
import { Link } from "react-router-dom";

export default function Signup() {
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
                <a class="navbar-bran" dhref="#">
                  <img
                    src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png"
                    class="mx-2 my-3 auth-logo navbar-logo"
                  />
                </a>
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
                      <div class="form-group mb-3">
                        <label class="form-label">First Name</label>
                        <input
                          type="text"
                          class="form-control "
                          placeholder="First Name"
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label class="form-label">Last Name</label>
                        <input
                          type="text"
                          class="form-control "
                          placeholder="Last Name"
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control "
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control  "
                          placeholder="Password"
                        />
                        <div class="mb-2 mt-2">
                          <a
                            href="https://demo.rajodiya.com/cmmsgo/forgot-password"
                            class="small text-muted text-underline--dashed border-primar"
                          >
                            Forgot Your Password?
                          </a>
                        </div>
                      </div>

                      <div class="d-grid">
                        <input
                          class="btn btn-primary btn-block mt-2 login-do-btn"
                          id="saveBtn"
                          type="submit"
                          value="Sign in"
                        />
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
                          <img src={point.pic} alt="" class="img-fluid" />
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
