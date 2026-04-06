import Link from "next/link";
import { definePageMetadata } from "@/lib/seo";

export const metadata = definePageMetadata({
  title: "Büroreinigung",
  description:
    "Professionelle Büroreinigung in Trossingen und der Region: saubere Arbeitsplätze, Sanitär- und Sozialräume durch Athi's Service (ATHIS) in Baden-Württemberg.",
  path: "/leistungen/bueroreinigung",
});

export default function BueroreinigungPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Büroreinigung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Büroreinigung für ein professionelles Arbeitsumfeld
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Saubere Büros tragen zu einem professionellen Auftritt und zum
          Wohlbefinden Ihrer Mitarbeitenden bei. ATHIS übernimmt die
          Büroreinigung in Trossingen und der Region Baden-Württemberg –
          zuverlässig, planbar und in hoher Qualität.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Büroreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Gepflegte Arbeitsplätze und Konferenzräume</li>
              <li>• Saubere Sanitär- und Aufenthaltsbereiche</li>
              <li>• Reinigung vor oder nach Ihren Bürozeiten</li>
              <li>• Diskrete und vertrauenswürdige Teams</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Büroreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>
                • Reinigung von Böden in Büroräumen, Fluren und
                Besprechungsräumen
              </li>
              <li>
                • Reinigung und Desinfektion von Sanitär- und Küchenbereichen
              </li>
              <li>• Staubwischen von Schreibtischen, Regalen, Fensterbänken</li>
              <li>• Reinigung von Türen, Griffen und Lichtschaltern</li>
              <li>• Entleerung und Entsorgung von Abfällen</li>
              <li>• Auf Wunsch: Reinigung von IT-Equipment nach Absprache</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Kleine und mittelständische Unternehmen</li>
            <li>• Agenturen und Dienstleister</li>
            <li>• Kanzleien, Praxen, Coworking-Spaces</li>
            <li>• Verwaltungs- und Dienstleistungsstandorte</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum ATHIS als Partner?
            </p>
            <p className="mt-2">
              Wir verstehen die Anforderungen moderner Büros. Pünktlichkeit,
              Verlässlichkeit und eine diskrete Arbeitsweise sind für uns
              selbstverständlich – auch außerhalb Ihrer Öffnungszeiten.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Angebot für Büroreinigung anfordern
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Nennen Sie uns Mitarbeiterzahl, Flächengröße und Reinigungsumfang
              – wir kalkulieren ein faires, transparentes Angebot.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
          >
            Jetzt Anfrage senden
          </Link>
        </div>
      </section>
    </div>
  );
}

