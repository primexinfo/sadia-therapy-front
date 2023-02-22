import React, { useState } from "react";
import "./mega.css";
// import { NavLink } from "react-router-dom";
// import Dropdown from "react-multilevel-dropdown";
import "./pricesection.css";
import "./infosection.css";
import { Button } from "./Button";
import {RiArrowDropDownFill} from 'react-icons/ri'

const MegaPackageMenu = () => {
  return (
    <>
      <div class="ruby-menu-demo-header">
       
          <ul class="ruby-menu">
            <li class="ruby-menu-mega-blog package">
              <li className="nav-link" href="#">PACKAGES🢓
              
              </li>
              
              <div style={{height: "200px", width: "670px",  }} class="">
                <ul class="ruby-menu-mega-blog-nav">
                  <li class="ruby-active-menu-item">
                    <a href="#">1*30 Minutes Session</a>
                    <div
                      class="ruby-grid ruby-grid-lined"
                      style={{height: "220px", width: "700px"}}
                    >
                      <div class="ruby-row">
                        <div class="ruby-col-4">
                          <img src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
                        </div>
                        <div class="ruby-col-4">
                          <span class="ruby-c-title ruby-margin-10">
                            <a href="#">DEEP RELAXATION SESSION</a>
                          </span>
                          <span class="ruby-c-content">
                          Deep relaxation sessions provide a warm space so that the clients take control of finding a solution while relaxing from the comfort of their couch. Sessions are designed to calm both mind and body.
                            <br />
                            <Button to={"/appointment"} className="home-button">
                              Book now
                            </Button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <span class="ruby-dropdown-toggle"></span>
                  </li>

                  <li class="hidden-md">
                    <a href="#">1*60 Minutes Session</a>
                    <div
                      class="ruby-grid ruby-grid-lined"
                      style={{height: "220px" , width: "700px"}}
                    >
                      <div class="ruby-row">
                        <div class="ruby-col-4">
                          <img src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        </div>
                        <div class="ruby-col-4">
                          <span class="ruby-c-title ruby-margin-10">
                            <a href="#">SINGLE SESSION PACKAGE</a>
                          </span>
                          <span class="ruby-c-content">
                          Single Sessions are ideal for working with stress, limiting beliefs, and anxiety. Time invested mostly to build a rapport by taking personal information and helping the client to understand how our mind works.
                            <br />
                            <Button to={"/appointment"} className="home-button">
                              Book now
                            </Button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <span class="ruby-dropdown-toggle"></span>
                  </li>

                  <li>
                    <a href="#">3*60 Minutes Session</a>
                    <div
                      class="ruby-grid ruby-grid-lined"
                      style={{height: "220px", width: "700px"}}
                    >
                      <div class="ruby-row">
                        <div class="ruby-col-4">
                          <img src="https://images.unsplash.com/photo-1572742850837-6fbb4175e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        </div>
                        <div class="ruby-col-4">
                          <span class="ruby-c-title ruby-margin-10">
                            <a href="#">THREE SESSION PACKAGE</a>
                          </span>
                          <span class="ruby-c-content">
                          This package is suitable for anyone who wants to get in-depth and continuous guidance to overcome the challenges they are facing like relationship issues, depression, chronic pain, etc.
                            <br />
                            <Button to={"/appointment"} className="home-button">
                              Book now
                            </Button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <span class="ruby-dropdown-toggle"></span>
                  </li>

                  <li>
                    <a href="#">5*60 Minutes Session</a>
                    <div
                      class="ruby-grid ruby-grid-lined"
                      style={{height: "220px", width: "700px"}}
                    >
                      <div class="ruby-row">
                        <div class="ruby-col-4">
                          <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.roadtogrowthcounseling.com/wp-content/uploads/2020/08/male-patient-at-psychologist-reception-stress-scaled-700x467.jpg" />
                        </div>
                        <div class="ruby-col-4">
                          <span class="ruby-c-title ruby-margin-10">
                            <a href="#">FIVE SESSION PACKAGE</a>
                          </span>
                          <span class="ruby-c-content">
                          This package is ideal for someone who wants a long-lasting transformation such as weight management, treating insomnia, etc. The first session is involved to build a rapport by taking information .
                            <br />
                            <Button to={"/appointment"} className="home-button">
                              Book now
                            </Button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <span class="ruby-dropdown-toggle"></span>
                  </li>
                </ul>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
          </ul>
        
      </div>
    </>
  );
};

export default MegaPackageMenu;
