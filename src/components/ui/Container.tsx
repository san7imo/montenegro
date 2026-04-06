import type { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export function Container({ className = "", children }: ContainerProps) {
  return <div className={["container", className].filter(Boolean).join(" ")}>{children}</div>;
}

