import React from "react";
import {
  ContactContainer,
  PhoneIcon,
  SocialIcon,
  LinkedInIcon,
  EmailIcon,
} from "./ContactElements";

const ContactMe = () => {
  return (
    <>
      <ContactContainer id='contact'>
        <h1>Contact Me</h1>
        <SocialIcon>
          <PhoneIcon />
          <p>+91 8142-888-659</p>
        </SocialIcon>

        <SocialIcon href='mailto:a.wilson.1397@gmail.com'>
          <EmailIcon />
        </SocialIcon>

        <SocialIcon href='https://www.linkedin.com/in/abraham-wilson-aba231192/'>
          <LinkedInIcon />
        </SocialIcon>
      </ContactContainer>
    </>
  );
};

export default ContactMe;
