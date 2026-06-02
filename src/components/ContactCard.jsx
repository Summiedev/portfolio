export default function ContactCard({ label, value, href }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper className="contact-card" href={href} target={href ? '_blank' : undefined} rel={href ? 'noreferrer' : undefined}>
      <div className="contact-label">{label}</div>
      <div className="contact-value">{value}</div>
    </Wrapper>
  );
}
