import SectionHeader from "./SectionHeader";

export default function FeaturedSection({ featured }) {
  return (
    <section className="section" id="featured">
      <div className="wrap">
        <SectionHeader index="03" title="Featured Project" />
        <div className="featured-block">
          <div className="feat-eyebrow">Deep Dive</div>
          <div className="feat-title">{featured.title}</div>

          <div className="feat-section">
            <h4>The Problem</h4>
            <p>{featured.problem}</p>
          </div>
          <div className="feat-section">
            <h4>Architecture</h4>
            <p>{featured.architecture}</p>
          </div>
          <div className="feat-section">
            <h4>Key Endpoints & Modules</h4>
            <ul>
              {featured.endpoints.map((endpoint) => (
                <li key={endpoint}>{endpoint}</li>
              ))}
            </ul>
          </div>
          <div className="feat-section">
            <h4>Technical Challenge: Missed Event Replay</h4>
            {featured.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}