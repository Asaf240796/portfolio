import React from "react";
import image from "../img/20201017_131307.jpg";
//Styled
import styled from "styled-components";

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
        <img src={image} alt="toy's pic" />
      </Image>
    </About>
  );
};

//Styled Components

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  p.explain {
    font-weight: lighter;
    font-size: 2rem;
  }
  p.specipic-knowledge {
    font-size: 1.5rem;
  }
  button {
    /* display: block;
    margin: 10vh; */
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 40vh;
    height: 40vh;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Hide =styled.div`
overflow: hidden;
`

export default AboutSection;
