import React from 'react';
//Page Components
import AboutSection from '../components/AboutSection';
import ProjectsAndSkills from '../components/ProjectsAndSkills';
import ContactMeSection from '../components/ContactMeSection';

const AboutMe = () => {
    return (
        <>
            <AboutSection/>
            <ProjectsAndSkills/>
            <ContactMeSection/>
        </>
    );
};

export default AboutMe;