import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioProjects';
import './Projects.css';

const ProjectDetail: React.FC<{ project: PortfolioProject; onClose: () => void }> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement as HTMLElement | null;
    const scrollY = window.scrollY;
    const bodyStyle = document.body.style.cssText;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    // A fixed body also prevents background scrolling in mobile Safari.
    Object.assign(document.body.style, {
      position: 'fixed', top: `-${scrollY}px`, width: '100%', overflow: 'hidden',
      paddingRight: `${scrollbarWidth}px`,
    });
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.cssText = bodyStyle;
      const scrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      trigger?.focus({ preventScroll: true });
      document.documentElement.style.scrollBehavior = scrollBehavior;
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-detail-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <header className="project-dialog-header">
        <div className="project-dialog-heading">
          <p>{project.label}</p>
          <h2 id="project-detail-title">{project.title}</h2>
        </div>
        <a className="project-pdf-link" href={project.pdfUrl} download>Download PDF ↓</a>
        <button className="project-close" type="button" onClick={onClose} autoFocus aria-label="Close project">✕</button>
      </header>
      <div className="project-reader" tabIndex={0} role="region" aria-label={`${project.title} pages`}>
        <div className="project-reader-intro">
          <p>{project.desc}</p>
          <span>{project.pages.length} pages · Scroll to explore ↓</span>
        </div>
        {project.pages.map((page, index) => (
          <figure className="project-page" key={page.src}>
            <img
              src={page.src}
              width={page.width}
              height={page.height}
              alt={`${project.title} — page ${index + 1} of ${project.pages.length}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <figcaption>{String(index + 1).padStart(2, '0')} / {String(project.pages.length).padStart(2, '0')}</figcaption>
          </figure>
        ))}
        <footer className="project-reader-footer">
          <p>End of {project.title}</p>
          <button type="button" onClick={onClose}>Back to projects ↗</button>
        </footer>
      </div>
    </dialog>,
    document.body,
  );
};

const VinylProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="projects-deck" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-inner">
        <header className="projects-header">
          <h2 id="projects-title">PROJECTS<span> (04)</span></h2>
          <p>Selected work<br />Click a project to explore ↗</p>
        </header>
        <div className="projects-grid">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className="project-card"
              style={{ '--project-color': project.color } as React.CSSProperties}
              onClick={() => setSelectedProject(project)}
              aria-label={`View ${project.title}`}
              aria-haspopup="dialog"
            >
              <div className="project-card-cover">
                <img src={project.pages[0].src} width={project.pages[0].width} height={project.pages[0].height} alt="" decoding="async" />
                <span className="project-card-number">0{index + 1}</span>
              </div>
              <div className="project-card-info">
                <div><p>{project.label}</p><h3>{project.title}</h3></div>
                <span className="project-card-arrow" aria-hidden="true">↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default VinylProjects;
