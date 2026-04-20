import { Link } from "react-router-dom";

interface ButtonLinkProps {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
  to?: string;
  href?: string;
}

function getClassName(variant: NonNullable<ButtonLinkProps["variant"]>, className: string) {
  return ["button-link", `button-link--${variant}`, className].filter(Boolean).join(" ");
}

export function ButtonLink({
  label,
  variant = "primary",
  className = "",
  to,
  href,
}: ButtonLinkProps) {
  if (to) {
    return (
      <Link className={getClassName(variant, className)} to={to}>
        {label}
      </Link>
    );
  }

  return (
    <a className={getClassName(variant, className)} href={href}>
      {label}
    </a>
  );
}
