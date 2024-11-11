

import React from 'react';
import ProjectCard from './ProjectCard';
import '../style/projects.css'

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-cards">
        {/* Project Card 1 */}
        <ProjectCard
          title="Project 1: Countdown Timer App"
          main="A Next.js and TypeScript powered App to track time with an interactive countdown feature."
          demoLink="https://countdown-timer-nine-beta.vercel.app/"  
          sourceCodeLink="https://github.com/AnamShergill/countdown-timer"  
        />
        
        {/* Project Card 2 */}
        <ProjectCard
          title="Project 2: ToDo List App"
          main="A Node.js & TypeScript based App for managing and organizing your tasks efficiently."
          demoLink="https://todo-list-omega-blue.vercel.app/"  
          sourceCodeLink="https://github.com/AnamShergill/todo-list" 
        />
        
        {/* Project Card 3 */}
        <ProjectCard
          title="Project 3: Static Resume"
          main="A TypeScript based Static Resume built with HTML & CSS."
          demoLink="https://milestone-1-static-resume-by-anam.vercel.app/"  
          sourceCodeLink="https://github.com/AnamShergill/MILESTONE-1-STATIC-RESUME" 
        />
      </div>
    </div>
  );
}

export default Projects;
