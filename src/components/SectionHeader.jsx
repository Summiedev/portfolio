export default function SectionHeader({ index, title }) {
  return (
    <div className="section-header">
      <span className="section-num">{index}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line"></div>
    </div>
  );
}
