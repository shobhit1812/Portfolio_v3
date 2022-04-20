import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "../Contact/ContactElement";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Contact</div>
        <div className="BigCard">
          <Email>
            <span>Get In Touch </span>
            <a
              className="btn PrimaryBtn"
              href="mailto:shobhit.nautiyal99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say Hello
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
