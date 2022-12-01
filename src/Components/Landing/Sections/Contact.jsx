import React from "react";

export default function Contact() {
  return (
    <section className="contact_sec" id="contact_us">
      <div className="container">
        <div className="section_title_wrapper">
          <h1 className="main_title">Contact Us</h1>
          <div className="description">
            <p>
              We give a helping hand to make sure you start with the right foot.{" "}
            </p>
          </div>
        </div>
        <div className="contact_form">
          <form
            action=""
            method="post"
            className="contact"
            id="contact"
            enctype="multipart/form-data"
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstname"
                  required
                />
              </div>
              <input type="hidden" name="type" value="contact_us" />

              <div className="col-lg-6 col-md-6 col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastname"
                  required
                />
              </div>

              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Type your email address"
                  name="email"
                />
              </div>

           
              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="submit_btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
