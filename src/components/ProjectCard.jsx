import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link to={'/projects/' + project.id} className="project-card hover-lift">
      <div className="project-card-inner">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>

        <div className="project-tags">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-footer-link">
          <span>Explore Details</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
