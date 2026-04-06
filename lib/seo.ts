import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, getSiteUrl } from "@/lib/site";

export function defineHomeMetadata(): Metadata {
  const description =
    "Athi's Service (ATHIS): Reinigungsfirma in Trossingen, Baden-Württemberg. Schwerpunkt Industriereinigung – zudem Gebäudereinigung, Büroreinigung, Unterhaltsreinigung, Glas-/Fensterreinigung, Winterdienst, Entrümpelung und mehr.";

  return {
    title: {
      absolute: `${SITE_NAME} – Industriereinigung & Reinigungsfirma Trossingen | Baden-Württemberg`,
    },
    description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: getSiteUrl(),
      siteName: SITE_NAME,
      title: `${SITE_NAME} – Industriereinigung & Reinigung Trossingen`,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: `${SITE_NAME} – Reinigung und Industriereinigung in Trossingen`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} – Reinigung in Trossingen & Baden-Württemberg`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function definePageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${getSiteUrl()}${input.path === "/" ? "" : input.path}`;
  const ogTitle = `${input.title} | ${SITE_NAME}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description: input.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: input.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
