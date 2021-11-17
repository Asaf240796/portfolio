import React from "react";
import winkAvatar from "../img/winkAvatar.svg"
import defaultavtar from "../img/defaultAvatar.svg"
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
          HTML5 | CSS | JavaScript | React js
        </p>
        <a href="https://drive.google.com/file/d/1d4XgCCiYh0FM3teyZtwz79jmKzX0mLT6/view?usp=sharing"><button>Resume</button></a>
        
        </Description>
      <Image>
        <img src={defaultavtar} alt="defaultAv" 
        onMouseOver={ e => (e.currentTarget.src = winkAvatar)} 
        onMouseOut={ e => (e.currentTarget.src = defaultavtar)}/>
      </Image>
    </About>
  );
};

//Styled Components



export default AboutSection;
