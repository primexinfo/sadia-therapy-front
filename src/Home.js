import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import styled, { css } from "styled-components/macro";
import "./home.css";
import { Button } from "./Button";
import Services from "./Program";
import Accordion from "./Accordion";
import Contact from "./Contact";
import InfoSection from "./InfoSection";
import { InfoData } from "./InfoData";
import View from "./viewSection/View";
import ClientReview from "./ClientReview";
import ScrollToTop from "./ScrollToTop";
import AudioSection from "./AudioSection";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const Slide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
// const Image = styled.video`
//   position: absolute;
//   top: 0px;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   object-fit: cover;
//   opacity: 0.8;
// `;
const Content = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 155px;
`;
const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd5f38;
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
function Home({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeOut = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeOut.current = setTimeout(nextSlide, 5000)
    return function () {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <ScrollToTop/>
      <section id="header" className="d-flex align-items-center">
        <Wrapper>
          {slides.map((slide, index) => {
            return (
              <Slide key={index}>
                {index === current && (
                  <div className="slider">
                    {/* <Image src={slide.video} alt={slide.alt}  /> */}
                    <video autoPlay loop muted className="video-back">
                      <source
                        src={slide.video}
                        alt={slide.alt}
                        type="video/mp4"
                      />
                    </video>
                    <Content>
                      <h1 className="homePage-title common">{slide.common}</h1>
                      <h3 className="homePage-title">{slide.title}</h3>
                      <Button className="home-button" to={'/contact'}>
                        {slide.lavel}
                      </Button>
                    </Content>
                  </div>
                )}
              </Slide>
            );
          })}
          {/* <SliderButton>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButton> */}
        </Wrapper>
      </section>
      
      <InfoSection {...InfoData} />
      <AudioSection/>
      <View/>
      <Services />
      {/* <ClientReview/> */}
      {/* <Accordion /> */}
      <Contact />
    </>
  );
}

export default Home;
