import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectDetailPage({ onOpenContact }) {
  const { projectId } = useParams();

  const project = portfolioData.projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2 className="section-title">Project Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          The requested project does not exist.
        </p>
        <Link to="/projects" className="btn-primary">
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  const relatedProjects = portfolioData.projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="project-detail-wrapper">
      <div className="container">
        <div className="project-detail-container">
          <div className="project-breadcrumb">
            <Link to="/projects" className="breadcrumb-back">
              <ArrowLeft size={16} />
              <span>&larr; All Projects</span>
            </Link>
          </div>

          <div className="detail-header">
            <span className="detail-category">{project.category}</span>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-summary">{project.shortDescription}</p>
          </div>

          <div className="detail-content-card">
            <div className="detail-body-text">
              {project.fullDescription}
            </div>

            {project.highlights && (
              <div>
                <h3 className="detail-highlights-title">Engineering Highlights & Features</h3>
                <ul className="detail-highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>
                      <CheckCircle2 size={18} className="bullet-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.deliverables && (
              <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                <h3 className="detail-highlights-title">Key Architectural Modules</h3>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {project.deliverables.map((mod, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(37, 99, 235, 0.12)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.88rem',
                        color: 'var(--cyan-light)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <Sparkles size={14} />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-tags-section">
              <div className="detail-tags-label">Technologies & Concepts Applied</div>
              <div className="detail-tags-wrapper">
                {project.tags.map((tag, index) => (
                  <span key={index} className="detail-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="related-section">
            <h2 className="related-section-title">
              <span>Related Projects</span>
            </h2>
            <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </div>
          </div>

          <div className="detail-context-links">
            <Link to="/projects" className="context-link-btn">
              <span>Explore All Projects</span>
            </Link>
            <a href="/#skills" className="context-link-btn">
              <span>Technical Skills</span>
            </a>
            <a href="/#about" className="context-link-btn">
              <span>Academic Background</span>
            </a>
            <button className="context-link-btn" onClick={onOpenContact}>
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
