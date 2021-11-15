import React from 'react';
import image from '../img/20201017_131307.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className="discription">
                <div className="title">
                    <div className="hide">
                        <h2>Asaf <span>Elazar</span></h2>
                    </div>
                </div>
            </div>
            <p>Passionate and highly motivated developer, enthusiastic about web development in particular.
            A quick learner and a problem-solving oriented thinking skill.</p>
            <p>HTML5 | CSS | JavaScript | React js </p>
            <button>Resume</button>
            <img src={image} alt="toy's pic"/>
        </div>
    );
};

export default AboutSection;