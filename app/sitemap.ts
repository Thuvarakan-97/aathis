import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes: string[] = [
  "/",
  "/ueber-uns",
  "/leistungen",
  "/leistungen/unterhaltsreinigung",
  "/leistungen/bueroreinigung",
  "/leistungen/gebaeudereinigung",
  "/leistungen/glasreinigung",
  "/leistungen/treppenhausreinigung",
  "/leistungen/industriereinigung",
  "/leistungen/grundreinigung",
  "/leistungen/winterdienst",
  "/leistungen/gartenpflege",
  "/leistungen/entruempelung",
  "/so-arbeiten-wir",
  "/qualitaet-umwelt",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/leistungen/") ? 0.8 : 0.7,
  }));
}
