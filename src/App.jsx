import { useEffect, useState } from 'react';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import ContactCard from './components/ContactCard';
import {
  profile,
  projects,
  skills,
  featured,
  reflection,
  contactLinks,
  contactIntro,
} from './data/portfolioData';

function App() {
  const [theme, setTheme] = useState('dark');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="site-shell">
      <nav>
        <div className="wrap nav-wrap">
          <div className="nav-brand">Backend Portfolio</div>

          <button
            className={`menu-toggle ${navOpen ? 'open' : ''}`}
            onClick={() => setNavOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`site-nav ${navOpen ? 'open' : ''}`}>
            <a href="#projects" onClick={() => setNavOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setNavOpen(false)}>Skills</a>
            <a href="#featured" onClick={() => setNavOpen(false)}>Deep Dive</a>
            <a href="#learning" onClick={() => setNavOpen(false)}>Reflection</a>
            <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          </div>

          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? 'Light' : 'Dark'} mode
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="wrap">
          <div className="hero-tag">{profile.heroTag}</div>
          <h1>
            {profile.firstName}
            <br />
            <span className="line-2">{profile.lastName}</span>
          </h1>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="dot"></span>
              {profile.location}
            </div>
            <div className="meta-item">
              <span className="dot" style={{ background: 'var(--accent)' }}></span>
              {profile.stackLabel}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="wrap">
          <SectionHeader index="01" title="HNG Projects" />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="wrap">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">Featured Project</h2>
            <div className="section-line"></div>
          </div>
          <div className="featured-block">
            <div className="featured-subtitle">Deep Dive</div>
            <div className="featured-title">{featured.title}</div>

            <div className="featured-section">
              <h4>The Problem</h4>
              <p>{featured.problem}</p>
            </div>

            <div className="featured-section">
              <h4>Architecture</h4>
              <p>{featured.architecture}</p>
            </div>

            <div className="featured-section">
              <h4>Key Endpoints &amp; Modules</h4>
              <ul>
                {featured.endpoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="featured-section">
              <h4>Technical Challenge: Missed Event Replay</h4>
              {featured.challenge.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="learning">
        <div className="wrap">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2 className="section-title">Learning Reflection</h2>
            <div className="section-line"></div>
          </div>
          <div className="reflection-text">
            {reflection.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2 className="section-title">Contact</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="contact-intro">{contactIntro}</p>
              <div className="contact-hint">Ready to collaborate on secure APIs, reliable auth, and scalable backend systems.</div>
            </div>
            <div className="contact-grid">
              {contactLinks.map((contact) => (
                <ContactCard key={contact.label} {...contact} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>Built with React ❤️ | Credits: HNG Internship | 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
