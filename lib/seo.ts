import type { Metadata } from "next";
import { keywords, site } from "./content";

const titleTemplate = `%s | ${site.name}`;

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = absolute ? title : `${title} | ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path === "/" ? site.url : url },
    openGraph: {
      title: fullTitle,
      description,
      url: path === "/" ? site.url : url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { titleTemplate };
