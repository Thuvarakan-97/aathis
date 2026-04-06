import Link from "next/link";
import { definePageMetadata } from "@/lib/seo";

export const metadata = definePageMetadata({
  title: "Grundreinigung",
  description:
    "Grundreinigung und intensive Tiefenreinigung von Böden und Flächen: Ergänzung zur Unterhaltsreinigung durch Athi's Service in Trossingen und der Region.",
  path: "/leistungen/grundreinigung",
});

export default function GrundreinigungPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Grundreinigung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Grundreinigung – tiefenreine Pflege für Böden und Flächen
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Mit einer Grundreinigung werden tief sitzende Verschmutzungen entfernt,
          die in der regelmäßigen Unterhaltsreinigung nicht vollständig erreicht
          werden. ATHIS bietet Grundreinigungen für Büros, Gebäude und private
          Objekte in Trossingen und Baden-Württemberg.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Grundreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Tiefenreine Ergebnisse</li>
              <li>• Verlängerte Lebensdauer Ihrer Bodenbeläge</li>
              <li>• Ideale Ergänzung zur Unterhaltsreinigung</li>
              <li>• Durchführung außerhalb der Nutzungszeiten möglich</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Grundreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Intensive Reinigung von Hartböden (PVC, Linoleum, Fliesen)</li>
              <li>• Grundreinigung von Teppichböden nach Absprache</li>
              <li>• Reinigung von Sockelleisten und schwer zugänglichen Bereichen</li>
              <li>• Entfernen alter Pflegefilme und Schichten</li>
              <li>• Ggf. Neuversiegelung und Einpflege nach Vereinbarung</li>
              <li>• Intensivreinigung stark frequentierter Zonen</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Unternehmen und Büros</li>
            <li>• Schulen und Kindertagesstätten (nach Absprache)</li>
            <li>• Hausverwaltungen und Eigentümer</li>
            <li>• Privatkunden (z.B. vor Einzug oder nach Umbau)</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum ATHIS für Ihre Grundreinigung?
            </p>
            <p className="mt-2">
              Wir analysieren Ihre Bodenbeläge und wählen passende Methoden und
              Mittel, damit die Grundreinigung gründlich und gleichzeitig
              materialschonend erfolgt.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Grundreinigung mit ATHIS anfragen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Teilen Sie uns Belagsarten, Flächengrößen und gewünschte Termine
              mit – wir planen die passende Grundreinigung.
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

