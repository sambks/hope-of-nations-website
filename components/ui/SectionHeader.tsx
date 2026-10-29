export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  index: _index,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  index?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
            light ? "text-white/70" : "text-globe"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold tracking-[-0.03em] leading-[1.15] sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-white/70" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
