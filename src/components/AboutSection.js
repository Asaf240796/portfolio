import React from "react";
import winkAvatar from "../img/winkAvatar.svg";
import defaultavtar from "../img/defaultAvatar.svg";
//Framer motion
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
//Animations
import { pageAnimation } from "../animation";

import Wave from "./Wave";

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <About>
        <Description>
          <div>
            <Hide>
              <motion.h2
                variants={titleAnimation}
                initial="hidden"
                animate="show"
              >
                Asaf <span>Elazar</span>
              </motion.h2>
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
          <a href="https://drive.google.com/file/d/1d4XgCCiYh0FM3teyZtwz79jmKzX0mLT6/view?usp=sharing">
            <button>Resume</button>
          </a>
        </Description>
        <Image>
          <img
            src={defaultavtar}
            alt="defaultAv"
            onMouseOver={(e) => (e.currentTarget.src = winkAvatar)}
            onMouseOut={(e) => (e.currentTarget.src = defaultavtar)}
          />
        </Image>
        <Wave/>
      </About>
    </motion.div>
  );
};

//Styled Components

export default AboutSection;
