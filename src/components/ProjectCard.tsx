// ProjectCard.tsx

import React from 'react';
import Image from 'next/image';
import '../style/projectcard.css';

interface ProjectCardProps {
  title: string;
  main: string;
  demoLink: string;
  sourceCodeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, main, demoLink, sourceCodeLink }) => {
  return (
    <div className="project-card">
      <Image 
  src="/coding.image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
  layout="intrinsic"
/>
      <h3 className="project-title">
        {title}
      </h3>
      <p className="project-description">
        {main}
      </p>
      <div className="project-buttons">
        {/* Demo Button */}
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="project-button">
            Demo
          </button>
        </a>
        {/* Source Code Button */}
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="project-button">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
