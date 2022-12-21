import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./infosection.css";
import { Link } from "react-router-dom";
import { api, IMG_BASE_URL } from "./api/api";
import Aos from "aos";
import 'aos/dist/aos.css'

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
useEffect(()=>{
  Aos.init({duration:2000})
},[])
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
    <section data-aos="fade-up"  className="section-info welcome">
      <div className="row">
      <div className="col-md-6">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className=" my-therapy hero-title text-center">know your hero</h2>
            <p className="welcome-text text-align-center"> <strong className="str">W</strong>ell done! As you are on this page you have taken the first step to make a difference in your present life and/or in the lives of the people around you, that matter to you. These changes include anything starting from dealing with overthinking, anxiety, low self-esteem, sleeping difficulties, depression, and many more from the comfort of your couch.
Hypnotherapy can enhance the well-being of individuals diagnosed with medical conditions, along with existing medical treatment and advice. (need to add)
During these sessions with me, you will have a safe and non-judgemental space to formulate your own solutions and to move forward with your lives using evidence-based techniques and a solution-focused approach. Meet with your creative inner heroes and master your mind in bringing the positive emotions to create your expected present and future with me. Together, by using an approach that is combined with clinical hypnotherapy and solution-focused psychotherapy we will break the cycle of negativity.
I help people meet with their creative inner heroes and find ways to bring themselves into the present moment. I can facilitate getting in touch with their inner positive emotional states that are always within them. With my guidance your mind is relaxed, you are fully present and it's far easier to access them.
Sessions are designed to individual requirements. Your sessions will be taken tailoring your needs, combining with hypnosis tools to get extraordinary results.
</p>
        </div>
      </div>
        

        
    </section>
  );
};

export default InfoSection;
