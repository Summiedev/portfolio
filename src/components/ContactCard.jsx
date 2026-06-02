export default function ContactCard({ label, value, href }) {
  const content = (
    <>
      <span className="contact-card__label">{label}</span>
      <span className="contact-card__value">{value}</span>
    </>
  );

  if (href) {
    return (
      <a className="contact-card" href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}>
        {content}
      </a>
    );
  }

  return <div className="contact-card">{content}</div>;
}