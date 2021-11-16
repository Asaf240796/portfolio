import React from "react";
import styled from "styled-components";
import { About } from "../styles";
//import react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaRegBell } from "react-icons/fa";

const ContactMeSection = () => {
  return (
    <ContactMe>
      <h2>
        Contact <span>Me</span>{" "}
      </h2>
      <IconsList>
        <ul>
          <li>
            <a href="www.linkedin.com/in/asaf-elazar">
              <FaLinkedin size="5em" color="blue" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Asaf240796">
              <FaGithub size="5em" color="white" />
            </a>
          </li>
          <li>
            <a href="mailto:asaf240796@gmail.com">
              <FaEnvelope size="5em" color="#00FFFF" />
            </a>
          </li>
        </ul>
      </IconsList>
    </ContactMe>
  );
};

//Style components
const ContactMe = styled(About)`
  display: block;
`;

const IconsList = styled.div`
  ul {
    display: flex;
    justify-content: center;
  }
  ul li {
    display: inline-block;
    padding: 150px 200px;
    margin: 0 5px;
    cursor: pointer;
  }
  ul li a {
    font-size: 20px;
  }
`;

export default ContactMeSection;
