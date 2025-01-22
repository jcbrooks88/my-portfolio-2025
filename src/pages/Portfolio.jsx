//import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Project 2', description: 'Description of project 2', imageUrl: 'https://via.placeholder.com/150' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project 
            key={index} 
            title={project.title} 
            description={project.description} 
            imageUrl={project.imageUrl} 
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;