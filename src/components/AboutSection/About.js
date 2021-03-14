import React from "react";
import {
  AboutContainer,
  ContentContainer,
  AboutMeImg,
  AboutMeContent,
  AboutMeH1,
  AboutMeP,
} from "./AboutElements";

import img from "../../images/Coffee_Break.svg";

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <ContentContainer>
          <AboutMeImg src={img} />

          <AboutMeContent>
            <AboutMeH1>About Me</AboutMeH1>
            <AboutMeP>
              Hi, I'm Abraham Wilson. A Full-Stack Web Developer based in
              Hyderabad. I like to work on challenging and and interesting
              problems. I mainly work with the <strong>MERN stack</strong>, and
              <strong> Python</strong>. I'm always open to learn new things.
            </AboutMeP>
            <br />
            <AboutMeP>
              Coming up with creative and innovative solutions that have an
              impact in peoples lives brings me great joy and satisfaction.
            </AboutMeP>
          </AboutMeContent>
        </ContentContainer>
      </AboutContainer>
    </>
  );
};

export default About;
