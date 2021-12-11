import React from "react";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Wave from "./Wave";

const ProjectsAndSkills = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Skills>
      <Wave />
        <Description>
          <h2>
            Projects <span>and</span> skills
          </h2>
          <Cards>
            <Card>
              <a href="https://asafmusicplayer.netlify.app/">
                <h3>Music Player</h3>
              </a>
              <p>
                Designed and deploy a web app music player that plays a songs.
                built a dynamic song logo that animate and circle when the song
                is playing.
                <a href="https://github.com/Asaf240796/MusicPlayer">
                  <span>Github code HERE</span>{" "}
                </a>
              </p>
            </Card>

            <Card>
              <a href="https://asafgamesportal.netlify.app/">
                <h3>GamesPortal</h3>
              </a>
              <p>
                Designed and deploy a Web App that show the 12 Upcoming, Best
                and Newest games according to RWAG api. built A dynamic stats
                that changes according to the gamers rating. In this project I
                used react redux, react Route and styled components.
                <a href="https://github.com/Asaf240796/GamesPortal">
                  <span>Github code HERE</span>{" "}
                </a>
              </p>
            </Card>
            {/* <Card>
              <h3>NearMe</h3>
              <p>like easy... click here to see the code on GitHub</p>
            </Card> */}
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
    </motion.div>
  );
};

const Skills = styled(About)`
  background-color: rgb(30, 30, 30);
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 1.5rem;
  }
  @media (max-width: 1300px) {
    margin: 2rem 0rem 5rem 0rem;
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
  span {
    color: purple;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  h3 {
    /* text-align: center; */
    width: 550px;
    /* background: white; */
    font-size: 35px;
    font-style: oblique;
    color: #23d997;
    padding: 0.7rem;
    padding-bottom: 0rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #ababab;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    p {
      text-align: center;
      padding-right: 5rem;
    }
    h3 {
      text-align: center;
      padding-right: 20rem;
    }
  }
`;

export default ProjectsAndSkills;
