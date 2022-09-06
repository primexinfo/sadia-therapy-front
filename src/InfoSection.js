import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./infosection.css";
import { Link } from "react-router-dom";
import { api, IMG_BASE_URL } from "./api/api";
const Section = styled.div`
  width: 100%;
  height: 90%;
  background-color: #f5f5f5;
`;
const Conteiner = styled.div`
  // padding: 3rem calc((100vh-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = ({ heading, peragraphOne, reverse, image }) => {
  const [frontBlog, setFrontBlog] = useState([]);

  useEffect(() => {
    axios
      .get(api.frontBlogs)
      .then((res) => {
        setFrontBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Section className="">
      <div className="row">
        <div className="col-md-7">
          <h2 className="text-center my-therapy ">Explore my therapy</h2>
          {frontBlog.map((value) => {
            return (
              <div className="row">
                <div className="col-md-3">
                  <img
                    className="person-img img-fluid"
                    to={"/blogs"}
                    src={`${IMG_BASE_URL}/blogs/${value.photo}`}
                    alt=""
                  />
                </div>
                <div className="col-md-9">
                  <h2>{value.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: value.sub_title }}></p>

                  <Button className="button" to={`/blog/${value.id}`}>
                    Read More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-5">
          <img src={image} alt="" className="img-fluid" />
        </div>
      </div>
    </Section>
  );
};

export default InfoSection;
