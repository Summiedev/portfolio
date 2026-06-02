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
} from './data/portfolioData';

function App() {
  return (
    <div className="site-shell">
      <nav>
        <div className="wrap">
          <a href="#" className="nav-logo">Sumayyah</a>
          <div className="site-nav">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#featured">Deep Dive</a>
            <a href="#learning">Reflection</a>
            <a href="#contact">Contact</a>
          </div>
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

      <section className="section" id="skills">
        <div className="wrap">
          <SectionHeader index="02" title="Backend Skills" />
          <table className="skills-table">
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.name}>
                  <td className="skill-name">{skill.name}</td>
                  <td className="skill-detail">{skill.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <div className="flow-diagram">{featured.flowDiagram}</div>
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
          <div className="contact-grid">
            {contactLinks.map((contact) => (
              <ContactCard key={contact.label} {...contact} />
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>Built with React · HNG Internship review · 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
