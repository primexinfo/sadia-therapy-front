import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Accordion from "./Accordion";

function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerRow">
            <div data-aos="fade-up" className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to={"/about"}><a href="">about</a></Link>
                  
                </li>
                {/* <li>
                  <a href="">services</a>
                </li> */}
                <li>
                  <a href="">privacy policy</a>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to={"/faq"}>
                    <a href="">FAQ</a>{" "}
                  </Link>
                </li>
                {/* <li>
                  <Link to={""}>
                    <a href="">programs</a>{" "}
                  </Link>
                </li> */}
                <li>
                  <Link to={""}>
                    <a href="">payment options</a>{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" className="footer-col footer-follow">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/sadia.hyp">
                  <FaFacebook />
                </a>
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsadiaafrinhypnotherapy%2F%3Ffbclid%3DIwAR24aDSoqvqOR5YrIjc4XvB3wPqC4G5jJ26S4KLG256ON7Kz7kAN-u88W4g&h=AT04MmgFqj1AJHKgIH6_jN4sW3uqxaCfH4_0tJWNMVxMw6n-axgxwmvnyBAqSjx_50N7ZGCNbWn8Qu3q0I0SX10cUFNop4QnUGD2r16oQhUD6dFUX2iN9mXlg8natEZvau1LWw">
                  <FaInstagram />
                </a>
                {/* <a href="">
                  <FaGithub />
                </a> */}
                <a href="">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
