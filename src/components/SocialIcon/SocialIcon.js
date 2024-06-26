import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

import styled from "styled-components";

export const SocialDiv = styled.div`
  margin-top: 2rem;
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  a {
    font-size: 2.5rem;
    color: #151418;
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }
  .item + .item {
    margin-left: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
        <a
            href="https://www.linkedin.com/in/shobhit-nautiyal-033b711ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
        <a
            href="https://github.com/Shobhit1812"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
        <a
            href="https://twitter.com/shobhitnautiya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="item">
          <a
            href="https://api.whatsapp.com/send?phone=91987654321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp/>
          </a>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
