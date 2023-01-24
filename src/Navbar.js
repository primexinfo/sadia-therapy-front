import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { api, IMG_BASE_URL } from "./api/api";
import "./navbar.css";
import { NavDropdown } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import logo from '../src/image/sadia-logo.png'
import PackageMenu from "./PackageMenu";

function Navbar() {
  const [program, setAllProgram] = useState([]);
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    axios
      .get(api.allProgramm)
      .then((res) => {

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
            <nav className={navbar?"navbar sticky-top navbar-expand-lg navbar-light p-md-2 active":"navbar  navbar-expand-lg navbar-light p-md-2 "}>
              <div className="container-fluid ">
                <NavLink className="navbar-brand"  aria-current="page" to="/">
                 <img src={logo} alt="" />
                 {/* Sadia Therapy */}
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
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item mr-2">
                      <NavLink className="nav-link" to="/About">
                        ABOUT ME
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="/Programs"> */}

                      <NavDropdown
                     
                        title="SERVICES"
                        id="collasible-nav-dropdown nav-link"
                        show={show}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                      >
                        {program.map((val, ind) => {
                          return (
                            <>
                              <NavDropdown.Item className="prog" href={`/program/${val.id}`}><i class="fa-solid fa-angles-right navicon"></i> 
                                {val.title} 
                                <NavDropdown.Divider />
                              </NavDropdown.Item>
                              
                            </>
                          );
                        })}
                      </NavDropdown>

                      {/* </NavLink> */}
                    </li>
                    {/* <li className="nav-item mr-2 ">
                      <NavLink className="nav-link" to="/blogs">
                        Blog
                      </NavLink>
                    </li> */}
                    
                    
                    <li className="nav-item mr-2 ">
                      <PackageMenu/>
                    </li>
                    <li className="nav-item mr-2">
                      <NavLink className="nav-link" to="/appointment">
                        APPOINTMENT
                      </NavLink>
                    </li>
                    <li className="nav-item mr-2">
                      <NavLink className="nav-link" to="/faq">
                       FAQ
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        CONTACT
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
