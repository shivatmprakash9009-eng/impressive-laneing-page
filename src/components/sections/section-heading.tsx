type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  index: string;
};

export default function SectionHeading({ eyebrow, title, index }: SectionHeadingProps) {
  return (
    <div className="section-heading reveal-up">
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
