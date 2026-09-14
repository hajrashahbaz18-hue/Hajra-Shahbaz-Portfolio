import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'DSA & Algorithms', 'Web Development', 'C++ Systems', 'Game Development'];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'DSA & Algorithms') return project.category.includes('DSA');
    if (selectedFilter === 'Web Development') return project.category.includes('React');
    if (selectedFilter === 'C++ Systems') return project.category.includes('C++');
    if (selectedFilter === 'Game Development') return project.category.includes('JavaFX');
    return true;
  });

  return (
    <div className="projects-page-wrapper" style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="projects-header">
          <span className="section-tag">Portfolio Showcase</span>
          <h1 className="section-title">Engineered Projects</h1>
          <p className="header-description">
            A comprehensive showcase of algorithmic simulation, full-stack web applications, database management systems, and interactive desktop software.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(cat)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 500,
                border: '1px solid',
                borderColor: selectedFilter === cat ? 'var(--cyan)' : 'var(--border-color)',
                background: selectedFilter === cat ? 'var(--gradient-bluish)' : 'rgba(255, 255, 255, 0.04)',
                color: selectedFilter === cat ? '#FFFFFF' : 'var(--text-muted)',
                transition: 'var(--transition)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
