type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  index: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, index, id }: SectionHeadingProps) {
  return (
    <div className="section-heading reveal-up">
      <div className="section-index" aria-hidden="true">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
    </div>
  );
}
