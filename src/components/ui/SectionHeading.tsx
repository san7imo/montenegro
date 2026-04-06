interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  return (
    <header
      className={["section-heading", `section-heading--${theme}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

