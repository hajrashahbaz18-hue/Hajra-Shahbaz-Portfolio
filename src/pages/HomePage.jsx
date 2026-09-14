import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Terminal, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  Cpu, 
  Palette, 
  Compass, 
  Briefcase, 
  Users, 
  Download,
  Mail
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function HomePage({ onOpenContact }) {
  const { personal, education, skills, projects, experience, leadership } = portfolioData;

  // Typewriter effect rotating between actual roles/technologies from CV
  const titles = [
    'SoftwareDeveloper()',
    'SoftwareEngineer()',
    'ReactDeveloper()',
    'C++Programmer()',
    'AlgorithmSolver()'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && currentText === fullText) {
      // Pause at full word
      const pauseTimer = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <div className="hero-left">
              {/* Availability Status Pill with pulsating green radar */}
              <div className="hero-status-pill animate-slide-up">
                <span className="status-green-dot"></span>
                <span>Available for Software Projects</span>
              </div>

              {/* Bold Dual-Tone Name with Neon Aurora & Interactive Letter Waves */}
              <div className="animate-slide-up delay-1" style={{ marginBottom: '0.65rem' }}>
                <h1 className="hero-name-bold">
                  {/* First Name: Crystal Crisp Gradient */}
                  <span className="hero-name-first">
                    {'Hajra'.split('').map((char, index) => (
                      <span key={index} className="animated-letter">
                        {char}
                      </span>
                    ))}
                  </span>

                  {/* Last Name: Neon Aurora Electric Gradient */}
                  <span className="hero-name-last">
                    {'Shahbaz'.split('').map((char, index) => (
                      <span key={index} className="animated-letter">
                        {char}
                      </span>
                    ))}
                  </span>

                  {/* Dev Terminal Badge */}
                  <span className="name-decor-badge">
                    <code>&lt;/&gt;</code>
                  </span>
                </h1>
              </div>

              {/* Typewriter Line matching: function SoftwareArchitect | */}
              <div className="typewriter-container animate-slide-up delay-2">
                <span className="typewriter-keyword">function</span>
                <span className="typewriter-text">{currentText}</span>
                <span className="typewriter-cursor"></span>
              </div>

              <p className="hero-description animate-slide-up delay-3">{personal.summary}</p>

              <div className="hero-actions animate-slide-up delay-4">
                <button className="btn-primary" onClick={onOpenContact}>
                  <span>Get in Touch</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={personal.cvPath}
                  download="Hajra_Shahbaz_CV.docx"
                  className="btn-secondary"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Terminal Preview Card with 3D float physics */}
            <div className="hero-right animate-slide-up delay-2">
              <div className="terminal-window terminal-float">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                  </div>
                  <span className="terminal-title">developer@hajrashahbaz: ~/profile.json</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-row">
                    <span className="terminal-comment">// Hajra Shahbaz - Academic & Engineering Profile</span>
                  </div>
                  <div className="terminal-row">
                    <span className="t-key">const</span> developer = &#123;
                  </div>
                  <div className="terminal-row" style={{ paddingLeft: '1.25rem' }}>
                    <span className="t-key">name:</span> <span className="t-str">"{personal.name}"</span>,
                  </div>
                  <div className="terminal-row" style={{ paddingLeft: '1.25rem' }}>
                    <span className="t-key">institution:</span> <span className="t-str">"COMSATS Lahore"</span>,
                  </div>
                  <div className="terminal-row" style={{ paddingLeft: '1.25rem' }}>
                    <span className="t-key">degree:</span> <span className="t-str">"BS Software Engineering"</span>,
                  </div>
                  <div className="terminal-row" style={{ paddingLeft: '1.25rem' }}>
                    <span className="t-key">cgpa:</span> <span className="t-num">{education.cgpa.split(' ')[0]}</span>,
                  </div>
                  <div className="terminal-row" style={{ paddingLeft: '1.25rem' }}>
                    <span className="t-key">coreFocus:</span> <span className="t-arr">["DSA", "React.js", "C++", "DBMS"]</span>,
                  </div>
                  <div className="terminal-row" style={{ paddingLeft: '1.25rem' }}>
                    <span className="t-key">status:</span> <span className="t-str">"Ready for impact"</span><span className="typing-cursor"></span>
                  </div>
                  <div className="terminal-row">&#125;;</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle animated mouse scroll indicator */}
        <a href="#about" className="scroll-indicator animate-fade-in delay-5">
          <div className="mouse-wheel"></div>
          <span>EXPLORE</span>
        </a>
      </section>

      {/* 2. ABOUT & ACADEMIC BACKGROUND */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Background</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Combining engineering discipline, algorithmic thinking, and user-centric problem-solving.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card hover-lift">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF', marginBottom: '1.25rem' }}>
                Engineering Mindset & Ambition
              </h3>
              <p className="about-text">
                I am an undergraduate software engineering student at COMSATS University Islamabad, Lahore Campus. 
                My focus centers on developing dependable software systems, modeling graph simulations with Data Structures & Algorithms, and building clean web interfaces with modern frameworks like React.js.
              </p>
              <p className="about-text" style={{ marginBottom: '2rem' }}>
                With a strong academic foundation (CGPA 3.66) complemented by active leadership in the university's Computer Science Society and digital communication experience, I enjoy working at the intersection of technical excellence and collaborative problem solving.
              </p>

              <div className="about-meta-list">
                <div className="about-meta-item">
                  <GraduationCap size={18} />
                  <span>BS Software Engineering &bull; COMSATS Lahore (Graduating 2029)</span>
                </div>
                <div className="about-meta-item">
                  <Mail size={18} />
                  <span>{personal.email} &bull; {personal.location}</span>
                </div>
              </div>
            </div>

            <div className="education-highlight-card hover-lift">
              <div>
                <span className="edu-badge">Academic Achievement</span>
                <h3 className="edu-degree">{education.degree}</h3>
                <p className="edu-inst">{education.institution}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {education.description}
                </p>
              </div>

              <div>
                <div className="edu-metrics">
                  <div className="edu-metric-item">
                    <h4>3.66</h4>
                    <p>Current CGPA / 4.0</p>
                  </div>
                  <div className="edu-metric-item">
                    <h4>2029</h4>
                    <p>Expected Graduation</p>
                  </div>
                  <div className="edu-metric-item">
                    <h4>Lahore</h4>
                    <p>Campus Location</p>
                  </div>
                </div>

                <button
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={onOpenContact}
                >
                  <span>Connect with Hajra</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS & EXPERTISE */}
      <section id="skills" className="section" style={{ background: 'rgba(22, 23, 46, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
              Core programming competencies, software frameworks, and problem-solving concepts from my coursework and projects.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-category-card hover-lift">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  <Code2 size={22} />
                </div>
                <h3 className="skill-cat-title">Programming</h3>
              </div>
              <div className="skill-items-list">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category-card hover-lift">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  <Layers size={22} />
                </div>
                <h3 className="skill-cat-title">Frameworks & UI</h3>
              </div>
              <div className="skill-items-list">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category-card hover-lift">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  <Cpu size={22} />
                </div>
                <h3 className="skill-cat-title">Core CS Concepts</h3>
              </div>
              <div className="skill-items-list">
                {skills.coreConcepts.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category-card hover-lift">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  <Palette size={22} />
                </div>
                <h3 className="skill-cat-title">Design & Tools</h3>
              </div>
              <div className="skill-items-list">
                {skills.designAndTools.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category-card hover-lift">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  <Compass size={22} />
                </div>
                <h3 className="skill-cat-title">Digital & Marketing</h3>
              </div>
              <div className="skill-items-list">
                {skills.otherCompetencies.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category-card hover-lift">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  <Sparkles size={22} />
                </div>
                <h3 className="skill-cat-title">Professional Strengths</h3>
              </div>
              <div className="skill-items-list">
                {skills.softSkills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Hands-on engineering projects covering algorithmic simulations, web applications, database management, and interactive GUI systems.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/projects" className="btn-secondary">
              <span>View All Project Details</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE & LEADERSHIP */}
      <section id="experience" className="section" style={{ background: 'rgba(22, 23, 46, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Track Record</span>
            <h2 className="section-title">Experience & Leadership</h2>
            <p className="section-subtitle">
              Practical industry and university society leadership experience extracted from my CV.
            </p>
          </div>

          <div className="timeline-list">
            {leadership.map((item, idx) => (
              <div key={idx} className="timeline-item hover-lift">
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.organization}</p>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}

            {experience.map((item, idx) => (
              <div key={idx} className="timeline-item hover-lift">
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GET IN TOUCH CTA BANNER */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #1A1C3A 0%, #16172E 100%)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem 2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Interested in Collaborating?
            </h2>
            <p
              style={{
                color: 'var(--text-muted)',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                fontSize: '1.05rem',
                lineHeight: '1.6'
              }}
            >
              I am open to software development internships, undergraduate opportunities, and collaborative technical projects.
            </p>
            <button className="btn-primary" onClick={onOpenContact}>
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
