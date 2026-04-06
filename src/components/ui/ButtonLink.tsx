interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ButtonLink({
  href,
  label,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <a className={["button-link", `button-link--${variant}`, className].join(" ")} href={href}>
      {label}
    </a>
  );
}

