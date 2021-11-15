import React from 'react';
import styled from 'styled-components';

const ContactMeSection = () => {
    return (
        <ContactMe>
            <h2>Contact <span>Me</span> </h2>
            <nav>
                <ul>
                    <li><a href="www.linkedin.com/in/asaf-elazar"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/Asaf240796"> <i class="fab fa-github"></i></a></li>
                    <li><a href="mailto:asaf240796@gmail.com"><i class="fas fa-at"></i></a></li>
                </ul>
            </nav>
        </ContactMe>
    );
};

//Style components
const ContactMe = styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;
`

export default ContactMeSection;