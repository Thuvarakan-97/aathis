import Link from "next/link";
import { definePageMetadata } from "@/lib/seo";

export const metadata = definePageMetadata({
  title: "Industriereinigung",
  description:
    "Industriereinigung ist unser Kerngeschäft: Produktions- und Lagerflächen, Hallen und Maschinenumfeld in Trossingen und Baden-Württemberg – sicher, planbar, professionell mit Athi's Service (ATHIS).",
  path: "/leistungen/industriereinigung",
});

export default function IndustriereinigungPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Industriereinigung
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Industriereinigung fuer sichere und saubere Produktionsbereiche
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Mit der Industriereinigung von ATHIS halten Sie Produktionshallen,
          Lagerflaechen und technische Bereiche dauerhaft sauber. Wir arbeiten
          strukturiert, abgestimmt auf Ihre Prozesse und mit Blick auf
          Betriebssicherheit und Hygiene.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">
            Typische Leistungen
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Reinigung von Produktions- und Montageflaechen</li>
            <li>• Hallen- und Lagerreinigung</li>
            <li>• Maschinenumfeld und Arbeitsbereiche</li>
            <li>• Bodenreinigung bei hoher Beanspruchung</li>
            <li>• Flexible Einsatzzeiten fuer den laufenden Betrieb</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">
            Warum ATHIS fuer Industriereinigung?
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Klare Einsatzplanung und feste Ansprechpartner</li>
            <li>• Zuverlaessige Ausfuehrung nach abgestimmten Standards</li>
            <li>• Reinigungskonzepte passend zu Ihrem Objekt</li>
            <li>• Transparente Kommunikation und Dokumentation</li>
          </ul>
          <Link
            href="/kontakt"
            className="mt-5 inline-flex rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Industriereinigung anfragen
          </Link>
        </article>
      </section>
    </div>
  );
}
