import Link from "next/link";
import { definePageMetadata } from "@/lib/seo";

export const metadata = definePageMetadata({
  title: "Unterhaltsreinigung",
  description:
    "Unterhaltsreinigung in Trossingen und Baden-Württemberg von Athi's Service: regelmäßige, zuverlässige Reinigung von Büros, Praxen, Treppenhäusern und Gewerbeflächen.",
  path: "/leistungen/unterhaltsreinigung",
});

export default function UnterhaltsreinigungPage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Unterhaltsreinigung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Unterhaltsreinigung mit ATHIS – zuverlässig und gründlich
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Mit der Unterhaltsreinigung von ATHIS sorgen Sie dafür, dass Büros,
          Praxen, Treppenhäuser und Gewerbeflächen in Trossingen und ganz
          Baden-Württemberg dauerhaft sauber und gepflegt bleiben. Wir
          übernehmen die regelmäßige Reinigung in den Intervallen, die zu Ihrem
          Objekt und Ihrem Alltag passen.
        </p>
      </section>

      {/* Vorteile & Umfang */}
      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Unterhaltsreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>
                • <span className="font-medium">Sauberkeit im Alltag:</span>{" "}
                Gepflegtes Umfeld für Mitarbeitende, Kundschaft und Bewohner.
              </li>
              <li>
                •{" "}
                <span className="font-medium">Individuelle Reinigungspläne:</span>{" "}
                Intervalle und Leistungsumfang nach Ihrem Bedarf.
              </li>
              <li>
                • <span className="font-medium">Verlässliches Personal:</span>{" "}
                Feste Teams und klare Ansprechpartner.
              </li>
              <li>
                •{" "}
                <span className="font-medium">Konstante Qualität:</span>{" "}
                Strukturierte Abläufe und Kontrollen.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Was ist in der Unterhaltsreinigung enthalten?
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Reinigung von Böden (Saugen, Wischen)</li>
              <li>• Reinigung von Sanitärbereichen und Küchen</li>
              <li>• Abwischen von Tischen, Arbeitsflächen und Möbeln</li>
              <li>• Entleerung von Papierkörben und Abfallbehältern</li>
              <li>• Reinigung von Türen, Griffen und Lichtschaltern</li>
              <li>• Pflege von Eingangsbereichen und Fluren</li>
              <li>• Optional: Fenster- und Glasreinigung in fixen Intervallen</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Unternehmen und Büros</li>
            <li>• Praxen und Kanzleien</li>
            <li>• Hausverwaltungen und Eigentümergemeinschaften</li>
            <li>• Einzelhandelsflächen und kleine Gewerbebetriebe</li>
            <li>• Öffentliche Einrichtungen in Baden-Württemberg</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum ATHIS für Ihre Unterhaltsreinigung?
            </p>
            <p className="mt-2">
              ATHIS steht für Zuverlässigkeit, Transparenz und sorgfältige
              Arbeit. Wir stimmen die Unterhaltsreinigung auf Ihre
              Öffnungszeiten ab, arbeiten diskret und achten auf Details.
            </p>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Unterhaltsreinigung mit ATHIS anfragen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Beschreiben Sie uns kurz Ihr Objekt und die gewünschten Intervalle
              – wir erstellen Ihnen ein transparentes Angebot.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
          >
            Angebot anfordern
          </Link>
        </div>
      </section>
    </div>
  );
}

