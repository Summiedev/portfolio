import { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import ContactCard from './components/ContactCard';
import {
  contactLinks,
  profile,
  projects,
  insightaDeepDive,
  reflection,
  skills,
  submissionNote,
} from './data/portfolioData';

const themeStorageKey = 'sumayyah-portfolio-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const saved = window.localStorage.getItem(themeStorageKey);
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="site-header__mark">SA</span>
          <div>
            <div className="site-header__name">{profile.name}</div>
            <div className="site-header__role">{profile.title}</div>
          </div>
        </div>

        <nav className="site-nav" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#deep-dive">Deep dive</a>
          <a href="#reflection">Reflection</a>
          <a href="#contact">Contact</a>
        </nav>

        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main>
        <section className="hero section-frame">
          <div className="hero__content">
            <div className="eyebrow">Backend Engineer · HNG Stage 8b</div>
            <h1>
              Backend work that reads like a system, not a list of buzzwords.
            </h1>
            <p className="hero__bio">{profile.bio}</p>

            <div className="hero__stats">
              <div className="stat-card">
                <span className="stat-card__label">Location</span>
                <strong>{profile.location}</strong>
                <span>{profile.timezone}</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__label">Primary stack</span>
                <strong>{profile.stack[0]}</strong>
                <span>{profile.stack.slice(1).join(' · ')}</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__label">Goal</span>
                <strong>Reviewable in 3-5 minutes</strong>
                <span>Clear evidence of backend contribution</span>
              </div>
            </div>
          </div>

          <aside className="hero__panel">
            <div className="profile-card">
              <span className="profile-card__eyebrow">Profile</span>
              <h2>{profile.name}</h2>
              <p>{profile.title}</p>
              <div className="profile-card__list">
                <div>
                  <span>Focus</span>
                  <strong>APIs, auth, jobs, storage, real-time delivery</strong>
                </div>
                <div>
                  <span>Timezone</span>
                  <strong>{profile.timezone}</strong>
                </div>
                <div>
                  <span>Contact</span>
                  <strong>{profile.contacts.email}</strong>
                </div>
              </div>
            </div>

            <div className="submission-card">
              <span className="profile-card__eyebrow">Submission note</span>
              <p>{submissionNote.intent}</p>
              <div>
                <span>Stack</span>
                <strong>{submissionNote.stack}</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section-frame" id="projects">
          <SectionHeader
            index="01"
            eyebrow="HNG Projects"
            title="Every significant backend task, with the work I actually owned"
            description="These are the projects a reviewer can scan quickly to see scope, stack, and the parts I personally built."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="section-frame" id="skills">
          <SectionHeader
            index="02"
            eyebrow="Backend Skills"
            title="Skills backed by project evidence"
            description="Each skill points to a specific HNG project so the page stays honest and concrete."
          />
          <div className="skill-grid">
            {skills.map((skill) => (
              <article key={skill.name} className="skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame" id="deep-dive">
          <SectionHeader
            index="03"
            eyebrow="Deep Dive"
            title={insightaDeepDive.title}
            description="A single Insighta Labs+ story: auth, query performance, and the design decisions I made for a backend that serves both web and CLI users."
          />
          <div className="deep-dive">
            <article className="deep-dive__panel">
              <h3>The problem</h3>
              <p>{insightaDeepDive.problem}</p>
            </article>

            <article className="deep-dive__panel">
              <h3>Key endpoints</h3>
              <ul>
                {insightaDeepDive.endpoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="deep-dive__panel deep-dive__panel--wide">
              <h3>Architecture</h3>
              <ul>
                {insightaDeepDive.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="deep-dive__panel deep-dive__panel--wide">
              <h3>Technical challenge</h3>
              <p>{insightaDeepDive.challenge}</p>
            </article>

            <article className="deep-dive__panel">
              <h3>Design decisions</h3>
              <ul>
                {insightaDeepDive.decisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="deep-dive__panel">
              <h3>Trade-offs</h3>
              <ul>
                {insightaDeepDive.tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-frame" id="reflection">
          <SectionHeader
            index="05"
            eyebrow="Learning Reflection"
            title="What HNG changed in how I work"
            description="Short, specific, and honest about the gap I closed during the internship."
          />
          <div className="reflection-stack">
            {reflection.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className="section-frame" id="contact">
          <SectionHeader
            index="06"
            eyebrow="Contact"
            title="Easy to reach, easy to verify"
            description="The contact block is kept visible and simple so a reviewer can get to the next step fast."
          />
          <div className="contact-grid">
            {contactLinks.map((contact) => (
              <ContactCard key={contact.label} {...contact} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Built with React, Vite, and a custom CSS system for HNG Stage 8b.</p>
      </footer>
    </div>
  );
}

export default App;