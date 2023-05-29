import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { notify } from "react-notify-toast";
import "./infosection.css";
import Aos from "aos";
import logo from "../src/image/contact-img.png";
import "aos/dist/aos.css";
function Contact() {
  document.title = "Sadia Afrin-Solution Focused Hypnotherapist";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_khwc4ig', 'template_2sv3k3h', form.current, 'QIpPgytmPewy2bpyc')
      .then((result) => {
        let myColor = { background: 'green', text: "#FFFFFF" };
        notify.show("Thank you for contacting me. I will get back to you shortly!", "custom", 5000, myColor);
        // console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section className=" section contact-section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center mb-2 mt-5">
              <h2 className="hero-title">Contact with me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5 order-md-last d-flex pl-3 pr-3">
              <div className="contact-wrap w-100">
                <form ref={form} data-aos="fade-left" onSubmit={sendEmail}>
                  <div className="form-group">
                    <span>Full Name</span>
                    <input
                      type="text"
                      className="form-control"
                      name="user_name"
                      required="required"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <span>Email</span>
                    <input
                      type="email"
                      className="form-control"
                      name="user_email"
                      required="required"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <span>Subject</span>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      required="required"
                      placeholder="Enter Subject"
                    />
                  </div>
                  <div className="form-group">
                    <span>Write your message</span>
                    <textarea name="message"
                      required="required"
                      className="form-control"
                      placeholder="Write Your Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn send-button"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-stretch contact-text">
              <div
                data-aos="fade-right "
                className="text-center info-wrap w-100 pl-2"
              >
                <img className="w-75 h-auto mr-8 fluid-img" src={logo} alt="" />{" "}
                <br /> <br />
                <h4 className="contact-tag ">
                  MASTER YOUR MIND WITH <br /> Solution-Focused Hypnotherapy
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
