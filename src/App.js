import React from "react";
import Nav from "./components/Nav";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutMe from "./pages/AboutMe";


function App() {
  return (
    <div className="App">
      
      <GlobalStyle/>
      <Nav/>
      <AboutMe/>
    </div>
  );
}

export default App;
