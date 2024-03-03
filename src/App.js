import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Import CSS file for styling
import styled from 'styled-components';
import ProjectItem from "./Home";
import About from "./About";
import Skills from "./Skill";
import Footer from "./Footer";

const StyledText = styled.div`
  font-family: 'Madimi One', sans-serif;
`;



const App = () => {
  return (
    <StyledText>
    <ProjectItem/>
    <About/>
    <Skills/>
    <Footer/>
    </StyledText>
  );
};

export default App;
