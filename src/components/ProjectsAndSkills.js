import React from "react";
import styled from "styled-components";
import MusicPlayerScreenShot from "../img/MusicPlayerScreenshot.png";
import { About, Description, Image, Hide } from "../styles";

const ProjectsAndSkills = () => {
  return (
    <Skills>
      <Description>
        <h2>
          Projects <span>and</span> skills
        </h2>
        <Cards>
          <Card>
            <h3>Music Player</h3>
            <p> This is my bla bla project...</p>
            {/* <img src={MusicPlayerScreenShot} alt="screenshot" /> */}
          </Card>
          <Card>
            <h3>portfolio</h3>
            <p> This is my second bla bla project...</p>
          </Card>
          <Card>
            <h3>NearMe</h3>
            <p> Android studio project, like easy</p>
          </Card>
          <Card>
            <h3>B.Sc. degree project</h3>
            <p>
              Frontend team, a react web app that helps coordinate and confirm
              routes on a map
            </p>
          </Card>
        </Cards>
      </Description>
    </Skills>
  );
};

const Skills = styled(About)`
  background-color: #2b1b1b;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  
`;
const Card = styled.div`
  flex-basis: 20rem;
  text-align: left;
  
  /* img {
    float: right;
    padding: 1rem;
    height: 600px;
    border-radius: 5%;
    padding-top: 0px;
  } */
  h3 {
    text-align: center;
    width: 550px;
    background: white;
    font-size: 35px;
    color: black;
    padding: 1rem;
  }
`;

export default ProjectsAndSkills;
