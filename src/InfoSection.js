import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./infosection.css";
import "./home.css";
import { Link } from "react-router-dom";
import { api, IMG_BASE_URL } from "./api/api";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedText from 'react-animated-text-content';
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
    Aos.init({ dureation: 2000 });
  }, []);

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
    <section data-aos="fade-up" className="section-info">
      <div className="row">
        <div className="col-md-6">
          <h2
            data-aos="fade-right"
            className="text-center my-therapy hero-title"
          >
            Explore my therapy
          </h2>
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: '200px',
              y: '-20px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >  
                    My sessions are online therefore during any restrictions, and/or clients who have chronic pain and mobility issues can have full benefits where the treatment is essential to their quality of life.
          </AnimatedText>
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: '200px',
              y: '-20px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph explore-text"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          > 
                My dream is to live in a world where mental health does not hinder people's abilities to live vigorous and fulfilling lives, and I am ready to fully dedicate my efforts to make that happen. Are you?

          </AnimatedText>

          <Button data-aos="fade-right" data-aos-duration="7000"  className="home-button mt-4" to={"/contact"}>
            Free Discovery Call
          </Button>

        </div>

        <div className="col-md-6 pr-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
