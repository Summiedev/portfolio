import SectionHeader from "./SectionHeader";

export default function SkillsSection({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHeader index="02" title="Backend Skills" />
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-detail">{skill.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}