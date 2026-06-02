export default function ContactCard({ label, value, href }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper className="contact-card" href={href} target={href ? '_blank' : undefined} rel={href ? 'noreferrer' : undefined}>
      <div className="contact-main">
        <div className="contact-label">{label}</div>
      </div>
      <div className="contact-details">
        <div className="contact-label">{label}</div>
        <div className="contact-value">{value}</div>
      </div>
    </Wrapper>
  );
}
