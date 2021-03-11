import styled from "styled-components";

import { BsPhone } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export const ContactContainer = styled.div`
  display: flex;
  height: 20vh;
  background: whitesmoke;
  justify-content: center;
  align-items: center;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  background: transparent;
  cursor: pointer;
  outline: none;
  color: black;
`;

export const PhoneIcon = styled(BsPhone)`
  font-size: 3rem;
  color: black;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #4d61fc;
  }
`;

export const LinkedInIcon = styled(SiLinkedin)`
  padding-right: 10px;
  font-size: 3rem;
  color: black;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #4d61fc;
  }
`;

export const EmailIcon = styled(FiMail)`
  padding-right: 10px;
  font-size: 3.5rem;
  color: black;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #4d61fc;
  }
`;
