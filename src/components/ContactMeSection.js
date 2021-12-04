import React from "react";
import styled from "styled-components";
import { About } from "../styles";
//import react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactMeSection = () => {
  return (
    <ContactMe
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h2>
        Contact <span>Me</span>{" "}
      </h2>
      <IconsList>
        <ul>
          <li>
            <a href="www.linkedin.com/in/asaf-elazar">
              <FaLinkedin size="5em" color="#0e76a8" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Asaf240796">
              <FaGithub size="5em" color="#0e76a8" />
            </a>
          </li>
          <li>
            <a href="mailto:asaf240796@gmail.com">
              <FaEnvelope size="5em" color="#0e76a8" />
            </a>
          </li>
        </ul>
      </IconsList>
    </ContactMe>
  );
};

//Style components
const ContactMe = styled(motion.nav)`
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  display: block;
  @media (max-width: 1300px){
    text-align: center;
    
  }
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
    font-size: 10px;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul li {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
  }
`;

export default ContactMeSection;
