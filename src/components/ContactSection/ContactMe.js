import React from "react";
import {
  ContactContainer,
  SocialIcon,
  LinkedInIcon,
  EmailIcon,
} from "./ContactElements";

const ContactMe = () => {
  return (
    <>
      <ContactContainer id="contact">
        <h1>Contact Me</h1>
        <SocialIcon href="mailto:a.wilson.1397@gmail.com">
          <EmailIcon />
        </SocialIcon>

        <SocialIcon href="https://www.linkedin.com/in/abraham-wilson-aba231192/">
          <LinkedInIcon />
        </SocialIcon>
      </ContactContainer>
    </>
  );
};

export default ContactMe;
