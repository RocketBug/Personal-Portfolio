import styled from "styled-components";

import { FiArrowDown } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 95vh;
  background: #0c0c0c;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  max-width: 1200px;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 50vh;
    height: 50vh;
  }
`;

export const Intro = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Contact = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;

  /* display: flex;
  flex-direction: row; */

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const HeroBtnWarpper = styled.div``;

export const ArrowDown = styled(FiArrowDown)`
  margin-left: 8px;
  font-size: 1.25rem;
`;

export const ResumeDoc = styled(HiOutlineDocumentText)`
  margin-left: 8px;
  font-size: 1.25rem;
`;

export const SocialIcon = styled.a`
  background: transparent;
  cursor: pointer;
  outline: none;
`;

export const LinkedInIcon = styled(SiLinkedin)`
  padding-right: 10px;
  font-size: 3rem;
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #4d61fc;
  }
`;

export const EmailIcon = styled(FiMail)`
  padding-right: 10px;
  font-size: 3.5rem;
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #4d61fc;
  }
`;
