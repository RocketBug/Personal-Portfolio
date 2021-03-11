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
              I'm a B.Tech graduate in Computer Sciences from MRIT Hyderabad,
              technology is where my passion lies. I'm highly organized and
              detail oriented. I find great enthusiasm in exploring new ideas
              and experementing new solution.
            </AboutMeP>
            <br />
            <AboutMeP>
              I'm fuled by a desire to take on challenging problems and come up
              creative solutions.
            </AboutMeP>
          </AboutMeContent>
        </ContentContainer>
      </AboutContainer>
    </>
  );
};

export default About;
