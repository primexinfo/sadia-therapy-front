import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { api, IMG_BASE_URL } from "./api/api";
import "./navbar.css";
import { NavDropdown } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
function Navbar() {
  const [program, setAllProgram] = useState([]);
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    axios
      .get(api.allProgramm)
      .then((res) => {
        console.log(res.data.data);
        setAllProgram(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const changeBackground= ()=>{
if(window.scrollY>= 20){
  setNavbar(true)
}
else{
  setNavbar(false)
}
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className={navbar?"navbar sticky-top navbar-expand-lg navbar-light p-md-3 active":"navbar  navbar-expand-lg navbar-light p-md-3 "}>
              <div className="container-fluid ">
                <NavLink className="navbar-brand" to="/">
                  Sadia Afrin
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu-line-height">
                    <li className="nav-item mr-2">
                      <NavLink className="nav-link" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mr-2">
                      <NavLink className="nav-link" to="/About">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="/Programs"> */}

                      <NavDropdown
                     
                        title="Programs"
                        id="collasible-nav-dropdown nav-link"
                        show={show}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                      >
                        {program.map((val, ind) => {
                          return (
                            <>
                              <NavDropdown.Item className="prog" href={`/program/${val.id}`}>
                                {val.title}
                                <NavDropdown.Divider />
                              </NavDropdown.Item>
                              
                            </>
                          );
                        })}
                      </NavDropdown>

                      {/* </NavLink> */}
                    </li>
                    <li className="nav-item mr-2 ">
                      <NavLink className="nav-link" to="/blogs">
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item mr-5">
                      <NavLink className="nav-link" to="/faq">
                        Faq's
                      </NavLink>
                    </li>
                    <li className="nav-item mr-2">
                      <NavLink className="nav-link" to="/appointment">
                        Appoinment
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <a href="tel:01775970162" className="contact-button"><FaPhone/></a> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
