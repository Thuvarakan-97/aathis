import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "ATHIS",
    description:
      "Reinigungsfirma in Trossingen mit Schwerpunkt Industriereinigung – Baden-Württemberg.",
    start_url: "/",
    display: "browser",
    background_color: "#f0f9ff",
    theme_color: "#0284c7",
    lang: "de",
    icons: [
      {
        src: "/images/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
