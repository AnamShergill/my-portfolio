import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGithub } from "react-icons/fa";
import "../style/skills.css";

const Skills = () => {
  return (
    <div id="Skills" className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-content">
        {/* Icons Section */}
        <div className="skills-icons">
          <span className="icon-item">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="icon-item">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="icon-item">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="icon-item">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="icon-item">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="icon-item">
            <FaGithub color="#FFFFFF" size={50} />
          </span>
        </div>

        {/* Paragraph Section */}
        <div className="skills-info">
          
          <ul className="skills-list">
          <h2 className="info-heading">Technologies & Tools I&apos;m Learning</h2>
          <br/>
            <li><span className="list-item-title">Front-End:</span> HTML, CSS, JavaScript, React</li>
            <li><span className="list-item-title">Back-End:</span> Node.js (exploring)</li>
            <li><span className="list-item-title">Version Control:</span> Git, GitHub</li>
            <li><span className="list-item-title">Other Tools:</span> VS Code, Figma (UI/UX Design)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
