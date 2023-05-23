import React from "react";
import image from "../src/image/Torso.jpeg";

import "./about.css";
function About() {
  return (
    <div className="container anim">
      <div className="title">
        <h1 className="hero-title">About Me</h1>
      </div>
      <div className="content row">
        <div className="col-md-12 col-sm-12">
          <p className="text-justify">
          <img className="img-fluid float-start wd" src={image} alt="" />
            <strong>
              {" "}
              Hello, I am Sadia Afrin, a qualified Clinical Solution Focused
              Hypnotherapist based in the UK. I pride myself on being passionate
              about making positive changes in people’s lives. From childhood, I
              have wanted to soothe the troubles of the people around me,
              whether it be my siblings, friends, or others.
            </strong>
            <br />
            <br />
            Interestingly enough, I had never planned to go into Hypnotherapy as
            a career. Prior, I had a successful career in customer service in
            financial institutions for eight years, but I always felt as though
            there was something missing. My soul was not connected to the job I
            was doing. A few years back I had some severe issues in my personal
            life and I needed help to manage my anxiety and depression. Not all
            therapies are for everyone and thus the conventional therapies did
            not work for me. Eventually, through my own research, I discovered
            hypnosis as an option. By utilising the wonderful experience of
            self-hypnosis to help me manage my emotions, I was able to gain
            control of my life again. I was completely fascinated by the power
            of hypnosis and the connection between it and the subconscious mind.
            From then, I decided to learn about Hypnotherapy and learn about the
            mechanisms behind it. That was the turning point of my career. I
            chose to chase a passion that, for me, provided more purpose,
            self-fulfilment, and job satisfaction.
            <br />
            <br />
            Neuroscience research continues to support the theory behind the use
            of hypnotherapy as a way of changing the brain and moving clients
            forward in their lives. Solution-Focused Hypnotherapy in particular
            appealed to me due to its basis in science, and the focus on the way
            the brain can create new pathways to facilitate novel ways of
            thinking. Therefore, my supportive client-led therapy sessions
            barely focus on past problems and negative experiences which allows
            for less fear-driven stagnation and more motivation-driven
            solutions. That is the beauty of Solution-Focused Hypnotherapy. I
            find the most interesting and significant aspect of what I do is
            enabling clients to realise their inner gifts and positive
            attributes, which may have been unnoticed for a long time. My dream
            is to live in a world where mental health does not hinder people’s
            abilities to live vigorous and fulfilling lives, and I am ready to
            fully dedicate my efforts to make that happen.
            <br />
            <br />
            <strong> My qualification and training:</strong>
            <br />
            I have been awarded a Professional Hypnotherapy Diploma by the esteemed Jacquin Hypnosis Academy. I trained with the prestigious Clifton Practice Hypnotherapy Training school in Manchester where I received my Diploma in Solution Focused Hypnotherapy (DSFH). I have achieved NCFE Level 2 Certificate in Counselling Skills at Trafford College. I am also a registered member of The Association for Solution-Focused Hypnotherapy (AfSFH). As a registered and accredited Clinical Hypnotherapist, I am required to participate in Continuing Professional Development (CPD) through workshops, courses, supervision and personal development. I have an enhanced DBS certificate for working with vulnerable adults and children. And I’m professionally insured by Holistic Services Insurance. I am committed to the highest standards of service therefore, I learn every day and update my skills regularly.

          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
