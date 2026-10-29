import Image from "next/image";

export function BlendPhoto({
  src,
  alt,
  className = "",
  variant = "sky",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  variant?: "beige" | "sky" | "none";
  sizes?: string;
  priority?: boolean;
}) {
  const blend =
    variant === "none" ? "" : variant === "beige" ? "photo-blend photo-blend-surface" : "photo-blend";

  return (
    <div className={`relative overflow-hidden ${blend} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}
