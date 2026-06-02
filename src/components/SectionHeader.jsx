export default function SectionHeader({ index, title }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{index}</span>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-line" />
    </div>
  );
}
