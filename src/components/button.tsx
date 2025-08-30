import { cn } from "@/utils/cn";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface IButton extends PropsWithChildren {
  className?: string;
  href?: string;
  isAnchor?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  children,
  className,
  href,
  isAnchor,
  isExternal,
  onClick,
  type = "button",
}: IButton) => {
  if (isAnchor) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? ""}
        className={cn("inline-block px-4 py-3 rounded-lg border border-border", className)}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type ?? "button"}
      className={cn("inline-block px-4 py-3 rounded-lg border border-border", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
