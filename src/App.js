import React from "react";
import Nav from "./components/Nav";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
// import AboutMe from "./pages/AboutMe";

import AboutSection from "./components/AboutSection";
import ContactMeSection from "./components/ContactMeSection";
import ProjectsAndSkills from "./components/ProjectsAndSkills";
import { Switch, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"

function App() {
const location= useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* <AboutMe/> */}
      <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutSection />
        </Route>
        <Route path="/projects">
          <ProjectsAndSkills />
        </Route>
        <Route path="/contact">
          <ContactMeSection />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
