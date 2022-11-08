import React from "react";

export default function Contact() {
  return (
    <section class="contact_sec" id="contact_us">
      <div class="container">
        <div class="section_title_wrapper">
          <h1 class="main_title">Contact Us</h1>
          <div class="description">
            <p>
              We give a helping hand to make sure you start with the right foot.{" "}
            </p>
          </div>
        </div>
        <div class="contact_form">
          <form
            action=""
            method="post"
            class="contact"
            id="contact"
            enctype="multipart/form-data"
          >
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  name="firstname"
                  required
                />
              </div>
              <input type="hidden" name="type" value="contact_us" />

              <div class="col-lg-6 col-md-6 col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  name="lastname"
                  required
                />
              </div>

              <div class="col-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Type your email address"
                  name="email"
                />
              </div>

           
              <div class="col-12">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>

              <div class="col-12 text-center">
                <button type="submit" class="submit_btn">
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
