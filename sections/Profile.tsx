import React from 'react';
import { ABOUT } from '../data/aboutMe';
import { PORTFOLIO_PROJECTS } from '../data/portfolioProjects';
import './Profile.css';

const Profile: React.FC = () => (
  <section id="experience" className="about-section" aria-labelledby="about-title">
    <div className="about-inner">
      <header className="about-header">
        <div>
          <p className="about-eyebrow">ABOUT ME</p>
          <h1 id="about-title">YUYAN XI</h1>
        </div>
        <p className="about-introduction">Digital Media Art<br />Interaction & Product Design</p>
      </header>
      <div className="about-layout">
        <aside className="about-identity">
          <img className="about-portrait" src={ABOUT.portrait} alt={ABOUT.name} width="750" height="1000" decoding="async" />
          <h3>{ABOUT.name}</h3>
          <p className="about-degree">Digital Media Art</p>
          <address>
            <a href={`mailto:${ABOUT.email}`}>{ABOUT.email}</a>
          </address>
          <div className="about-award-marks" aria-label="Award marks">
            {ABOUT.awardImages.map(image => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" decoding="async" />)}
          </div>
          <div className="about-project-peek" aria-label="Selected projects">
            {PORTFOLIO_PROJECTS.map(project => (
              <a key={project.id} href="#projects-deck" aria-label={`Explore ${project.title}`}>
                <img src={project.pages[0].src} alt={`${project.title} cover`} width={2400} height={1200} decoding="async" />
              </a>
            ))}
          </div>
          <a className="about-project-link" href="#projects-deck">Explore projects ↗</a>
        </aside>
        <div className="about-resume">
          <section className="about-block" aria-labelledby="about-education">
            <h3 id="about-education">Education</h3>
            <h4>{ABOUT.education.school}</h4>
            <div className="about-row"><p>{ABOUT.education.degree}</p><span>{ABOUT.education.dates}</span></div>
            <div className="about-scores"><span>GPA <strong>{ABOUT.education.gpa}</strong></span><span>IELTS <strong>{ABOUT.education.ielts}</strong></span></div>
          </section>
          <section className="about-block" aria-labelledby="about-patents">
            <h3 id="about-patents">Patents</h3>
            <h4>{ABOUT.patentTitle}</h4>
            <ul>{ABOUT.patents.map(patent => <li key={patent}>{patent}</li>)}</ul>
          </section>
          <section className="about-block" aria-labelledby="about-awards">
            <h3 id="about-awards">Awards</h3>
            <ul>{ABOUT.awards.map(award => <li key={award}>{award}</li>)}</ul>
          </section>
          <section className="about-block" aria-labelledby="about-internships">
            <h3 id="about-internships">Internship Experience</h3>
            {ABOUT.internships.map(internship => (
              <article className="about-internship" key={internship.company}>
                <h4>{internship.company}</h4>
                <div className="about-row"><p>{internship.role}</p><span>{internship.dates}</span></div>
                <ul>{internship.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;
