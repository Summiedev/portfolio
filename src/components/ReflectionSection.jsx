import SectionHeader from "./SectionHeader";

export default function ReflectionSection({ reflection }) {
  return (
    <section className="section" id="learning">
      <div className="wrap">
        <SectionHeader index="04" title="Learning Reflection" />
        <div className="reflection-text">
          {reflection.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}