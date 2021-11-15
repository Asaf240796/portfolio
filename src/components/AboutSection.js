import React from "react";
import image from "../img/20201017_131307.jpg";
import avatar from "../img/avataaars.svg"
//Styled
import styled from "styled-components";
import {About, Description, Image, Hide} from "../styles"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>
              Asaf <span>Elazar</span>
            </h2>
          </Hide>
        </div>
        <p className="explain">
          Passionate and highly motivated developer, enthusiastic about web
          development in particular. A quick learner and a problem-solving
          oriented thinking skill.
        </p>
        <p className="specipic-knowledge">
          HTML5 | CSS | JavaScript | React js{" "}
        </p>
        <button>Resume</button>
        </Description>
      <Image>
        <img src={avatar} alt="toy's pic" />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;
