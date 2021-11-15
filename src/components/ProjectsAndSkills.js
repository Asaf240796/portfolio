import React from 'react';
import MusicPlayerScreenShot from '../img/MusicPlayerScreenshot.png'


const ProjectsAndSkills = () => {
    return (
        <div>
            <div className="projects">
                <div className="description">
                    <h2>Projects and skills</h2>
                    <div className="cards">
                        <div className="card">
                            <h3>Music Player</h3>
                        </div>
                        <p> This is my bla bla project...</p>
                        <div className="card">
                            <h3>portfolio</h3>
                        </div>
                        <p> This is my second bla bla project...</p>   
                    </div>
                </div>
                <img src={MusicPlayerScreenShot} alt="screenshot" />
            </div>
        </div>
    );
};

export default ProjectsAndSkills;