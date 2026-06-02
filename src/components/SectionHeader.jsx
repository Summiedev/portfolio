export default function SectionHeader({ index, eyebrow, title, description }) {
  return (
    <div className="section-header">
      <div className="section-header__meta">
        <span className="section-header__index">{index}</span>
        <span className="section-header__eyebrow">{eyebrow}</span>
      </div>
      <div className="section-header__body">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}