import React from "react";
import { useState } from "react";
import {
  HeroContainer,
  ImgBg,
  HeroH1,
  SocialIcon,
  LinkedInIcon,
  EmailIcon,
  HeroBtnWarpper,
  ArrowDown,
  ResumeDoc,
  Intro,
  Contact,
  HeroH2,
} from "./HeroElements";

import { Button } from "../ButtonElement";
import img from "../../images/Work_from_home.svg";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover((preHover) => !preHover);
  };

  return (
    <HeroContainer id='home'>
      <Intro>
        <div>
          <HeroH1>Hi I'm Abraham Wilson</HeroH1>
          <HeroH2>I'm a Web Developer</HeroH2>
        </div>

        <Contact>
          <SocialIcon href='mailto:a.wilson.1397@gmail.com'>
            <EmailIcon />
          </SocialIcon>

          <SocialIcon href='https://www.linkedin.com/in/abraham-wilson-aba231192/'>
            <LinkedInIcon />
          </SocialIcon>

          <HeroBtnWarpper>
            <Button
              primary='true'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Resume {hover ? <ArrowDown /> : <ResumeDoc />}
            </Button>
          </HeroBtnWarpper>
        </Contact>

      </Intro>
      <ImgBg src={img} />
    </HeroContainer>
  );
};

export default Hero;
