import React, { useState, useEffect } from "react";
import "./mega.css";
import axios from "axios";
import { api, IMG_BASE_URL } from "./api/api";
import { Button } from "./Button";
import "./pricesection.css";
import "./infosection.css";
import { BiChevronDown } from "react-icons/bi";
const MegaServiceMenu = () => {
  const [program, setAllProgram] = useState([]);
  const [navbar, setNavbar] = useState(false);
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
  return (
    <>
      <div class="ruby-menu-demo-header">
        <ul class="ruby-menu">
          <li class="ruby-menu-mega-blog package">
            <li className="nav-link" href="#">
              SERVICES
              <BiChevronDown />
            </li>

            <div
              style={{ height: "220px", width: "670px", marginLeft: "-200px" }}
              class=""
            >
              <ul class="ruby-menu-mega-blog-nav">
                {program.map((val, ind) => {
                  return (
                    <>
                      <li class="ruby-active-menu-item">
                        <a href="#">{val.title}</a>
                        <div
                          class="ruby-grid ruby-grid-lined"
                          style={{ height: "220px", width: "700px" }}
                        >
                          <div class="ruby-row">
                            <div class="ruby-col-4">
                              <img
                                src={`${IMG_BASE_URL}/services/${val.photo}`}
                                style={{ marginBottom: "50px" }}
                              />
                            </div>
                            <div class="ruby-col-4">
                              <span class="ruby-c-title ruby-margin-10">
                                <p>{val.sub_title}</p>
                              </span>
                              <span class="ruby-c-content">
                                <Button
                                  to={`/program/${val.id}`}
                                  className="home-button"
                                  style={{ marginTop: "10px" }}
                                >
                                  Read more
                                </Button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <span class="ruby-dropdown-toggle"></span>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <span class="ruby-dropdown-toggle"></span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MegaServiceMenu;
