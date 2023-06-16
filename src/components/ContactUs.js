import React, { useState } from "react";
import "../CSS/contact.css";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const submitData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_USER_ID"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="contact-leftside col-12 col-lg-5 mx-5">
              <figure>
                <img
                  src="https://res.cloudinary.com/dofftzsmf/image/upload/v1685014572/Contact_us-amico_xt4gyo.png"
                  alt="contactUsImg"
                  className="img-fluid mt-1 ms-10"
                />
              </figure>
            </div>
            <div className="contact-rightside my-auto col-5 col-lg-5">
              <form onSubmit={submitData}>
                <div className="row">
                  <h1 className="mb-5 contact-heading">Connect with Us</h1>
                  <div className="col-12 contact-input-feild">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control contact-input"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 contact-input-feild">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control contact-input"
                      placeholder="Email ID"
                      value={userData.email}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      rows={6}
                      name="message"
                      id="message"
                      className="form-control contact-textarea"
                      
                      placeholder="Enter Your Message"
                      value={userData.message}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="mt-5 btn btn-style mx-auto my-auto"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
