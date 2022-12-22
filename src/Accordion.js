import React, { useState } from "react";
import { Adata } from "./Adata";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import image from "./image/am1.JPG";
import ScrollToTop from "./ScrollToTop";
import './accordion.css'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")} h1 {
    margin-bottom: 1rem;
    font-size: calc(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
padding: 0rem 0rem;
order: ${({ reverse }) => (reverse ? "1" : "2")};
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width:768px){
    order: ${({ reverse }) => (reverse ? "2" : "1")};
}
img{
width: 100%;
height: 100%;
object-fit: cover;
@media screen and (max-width:768px){
    width:90%;
    height:90%
}`;
const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #f5f5f5;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h3 {
    display: flex;
    padding-top: 15px;
    margin-left: 1.5rem;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: rgb(22, 22, 22);
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #f5f5f5;
  color: rgb(22, 22, 22);
  width: 100%;
  height: 50px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #b97fb8;
  border-top: 2px solid #b97fb8;
  transition: 0.3s ease-in-out;
  p {
    font-size: 1rem;
    transition: 0.3s ease-in-out;
    text-align: justify;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      <ScrollToTop />{" "}
      <div className="section anim faq-section ">
        <div className="my-5">
          <h2 className=" pt-5 text-center faqs"> Frequently Asked Question</h2>
          <h5 className=" text-center">the most common question</h5>
        </div>
        <div className="descSection" >
          <div className="hypno-img">
            <p className="mx-5  ">
            <h3>
              <b>What is Hypnosis?</b>
            </h3>{" "}
            <img className=" mx-5 person-img float-start" src="https://images.unsplash.com/photo-1600778321438-4785de7fb702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            The public perception of hypnosis is one that is concerned with
            stage shows and mysticism—think Derren Brown, for instance. In the
            past, recipients of hypnosis have claimed that they felt various
            changes in their behaviour, thoughts, feelings, and time perception;
            they might have even hallucinated. While this all may be
            entertaining to watch, performance hypnosis is nothing like
            therapeutic hypnosis. In fact, hypnosis is not at all mystical when
            you strip away the fantastical elements of a magic show. Its effects
            are oftentimes exaggerated and can seem frightening to people, but
            it is important to remember that hypnosis has never hurt anyone. It
            is not mind-control and you cannot get stuck in it. It is a
            medically approved 1 , legitimate therapy, and has
            scientifically-backed health benefits.
            <br /> <br />
            The term hypnosis comes from the Greek word ‘hypnos,’ meaning sleep.
            However, while sleep is a state of unconsciousness, hypnosis allows
            you to control and focus your subconsciousness. Unlike many other
            therapies, it contrives situations in which people respond to
            imaginative suggestions 2 and can be doubly effective because of
            this. Hypnosis is a very powerful tool that can be used to boost the
            effects of psychotherapy and can be used as complementary and/or an
            alternative to medicinal treatment.
            <br />
            <br />
            <sup>1</sup>The American Medical Association approved hypnosis as a
            therapy in 1958.
            <br />
            <br />
            <sup>2</sup>From the Oxford Handbook of Hypnosis, chapter 5.{" "}
          </p>
         
          <br /> <br /> <br />
          </div>
          
          <h3 className="mx-5">
            <b>what is Conscious and subconscious mind?</b>
          </h3>{" "}
          <img className="mx-5 person-img float-end " src="https://images.unsplash.com/photo-1605902394069-ff2ae2430e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" />
          <p className="mx-5">
            The Conscious Mind is where we spend most of our time, but it is
            actually the weakest part of our mind. It is the rational,
            analytical part of the mind. It controls our thinking, judging, and
            decision-making, and functions on the idea that humans must have a
            reason for everything. There are four parts to the Conscious Mind –
            rational, analytical, willpower, and temporary memory. The
            Subconscious Mind is the most powerful part of our mind. This is the
            part of our mind that we need to access to help us achieve our
            goals. The Subconscious Mind is the part of the mind that
            hypnotherapists work on with hypnosis; this is where our imagination
            is stored. Imagination, permanent memory, habits, feelings and
            emotions, beliefs, and Autonomic Nervous System all are parts of the
            subconscious mind.
          </p>{" "}
          <br /> <br />
          <h3 className="mx-5">
            <b>How Hypnotherapy work?</b>{" "}
          </h3>
          <p className="mx-5">
            {" "}
            Hypnotherapy generally refers to the therapeutic use of hypnosis, to
            help people to change habits, lessen symptoms, or treat a variety of
            conditions. Hypnotherapy aims to reprogramme the patterns of
            behaviour within the mind to facilitate the overcoming of irrational
            fears, phobias, negative thoughts and suppressed emotions. As the
            body is released from conscious control during hypnosis, it works in
            such a way that the analytical left-hand side of the brain is turned
            off, while the creative (non-analytical) right-hand side is made
            more alert. The conscious control of the mind is inhibited, and the
            subconscious mind is awoken. Since the subconscious mind is a
            deeper-seated, more instinctive force than the conscious mind, this
            is the part that has to change for the patient&#39;s behaviour and
            physical state to alter. Progress can only be made by reprogramming
            the subconscious so that deep- seated instincts and beliefs are
            abolished or altered.{" "}
          </p>{" "}
          <br /> <br />
          <h3 className="mx-5">
            {" "}
            <b>What is Solution-Focused Hypnotherapy?</b>
          </h3>
          <p className="mx-5">
            {" "}
            Solution-Focused Hypnotherapy involves a facilitating role where the
            client reconnoitres their way of solving the problems or issues they
            are going through. Hence, clients are using their own competence to
            the greatest extent possible. The idea is that the development of a
            solution is not necessarily related to the problem and that the
            client is the expert. If the client thinks it is not broken, then
            there’s no need to fix it. If something works for the client, it is
            advisable to continue with it, and if something does not work, do
            something else. Solution-Focused Hypnotherapy emphasises taking
            small steps and identifying and amplifying changes made.{" "}
          </p>{" "}
          <br /> <br />
          <h3 className="mx-5">
            <b>What is therapy with me like?</b>
          </h3>
          <p className="mx-5">
            Our first session involves gathering information and explaining how
            the mind works. While taking the time to know and understand you, I
            will focus on your strengths and resilience, and build a
            relationship with you. Consequent sessions are focused on looking
            for solutions and applying hypnosis. I try to make each session
            engaging and productive so you can walk away with a sense of relief,
            peace, and the knowledge that you are supported. You will have a
            confidential space to explore the thoughts, feelings, and challenges
            in your life. My goal is to help you find confidence, happiness, and
            peace by equipping you with the tools you need to manage your
            emotions and better understand yourself. I use creative techniques,
            based on your needs and personality, with a focus on the following
            things: <br /> <br />
            <ul>
              <li>Understanding the brain function.</li>
              <li> Concentrating on the positive things.</li>
              <li>Thinking of alternative ways.</li>
              <li>Exploration of the future you want.</li>
              <li>Discovery of the strength that is already within you.</li>
              <li> Taking suggestions while using hypnosis.</li>
            </ul>{" "}
            <br />
            Clients describe me as approachable and supportive, someone who they
            can open up to and share things they haven’t with others. My
            sessions will help you see you’re worthy of love and healthy
            friendships, and teach you how to be present and attentive to
            yourself and your needs. Parents are sometimes surprised when their
            teens, who were hesitant about therapy, end up looking forward to
            their sessions, talking about our conversations, and even bragging
            about some of the skills they are using! <br />
            <br /> <br /> <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
