export default function ContactCard({ label, value, href, icon }) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      className="contact-link-item"
      href={href || undefined}
      target={href && !href.startsWith("mailto") ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
    >
      <div className="cli-icon">{icon}</div>
      <div className="cli-text">
        <div className="cli-label">{label}</div>
        <div className="cli-value">{value}</div>
      </div>
      {href && <span className="cli-arrow">-&gt;</span>}
    </Wrapper>
  );
}
