import Link from "next/link";

const variants = {
  gold: "bg-globe text-white hover:bg-globe-soft",
  navy: "bg-navy text-white hover:bg-navy-soft",
  sky: "bg-surface text-navy hover:bg-sky-mid",
  outline: "border border-white bg-transparent text-white hover:bg-white hover:text-navy",
  outlineNavy: "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-surface",
  ghost: "text-globe hover:text-navy",
};

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "navy",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-sm px-6 text-[13px] font-semibold tracking-[-0.01em] transition-colors ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={classes} onClick={onClick} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
