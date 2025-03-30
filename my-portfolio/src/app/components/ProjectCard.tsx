// app/components/ProjectCard.tsx
"use client";
import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, imageUrl, link } = project;
  
  return (
    <div className="work">
      <img src={imageUrl} alt={title} />
      <div className="layer">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} title={title} target="_blank" rel="noopener noreferrer">
          {/* Your icon svg */}
          <svg className="external-link" viewBox="0 0 512 512">
            {/* etc. */}
          </svg>
        </a>
      </div>
    </div>
  );
}
