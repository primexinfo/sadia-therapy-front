import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import "./infosection.css";
import Aos from "aos";
import logo from "../src/image/contact-img.png";
import "aos/dist/aos.css";
function Contact() {
  document.title = "Sadia Afrin-Solution Focused Hypnotherapist"
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
                <form data-aos="fade-left">
                  <div className="form-group">
                    <span>Full Name</span>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      required="required"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <span>Email</span>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      required="required"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <span>Write your message</span>
                    <textarea
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
