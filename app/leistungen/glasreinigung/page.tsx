import Link from "next/link";
import { definePageMetadata } from "@/lib/seo";

export const metadata = definePageMetadata({
  title: "Glas- und Fensterreinigung",
  description:
    "Glas- und Fensterreinigung in Trossingen & Umgebung: streifenfreie Fenster, Schaufenster und Glasflächen durch Athi's Service – professionell und sorgfältig.",
  path: "/leistungen/glasreinigung",
});

export default function GlasreinigungPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Glasreinigung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Glasreinigung – klare Sicht, starker Eindruck
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Saubere Fenster und Glasflächen prägen den ersten Eindruck Ihres
          Gebäudes. ATHIS bietet professionelle Glasreinigung für Fenster,
          Glasfassaden und Schaufenster in Trossingen und ganz
          Baden-Württemberg.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Glasreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Streifenfreie Ergebnisse innen und außen</li>
              <li>• Sicheres Arbeiten mit passender Ausrüstung</li>
              <li>• Flexible Reinigungsintervalle</li>
              <li>• Schonende Reinigungsmittel für Glas und Rahmen</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Glasreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Reinigung von Fenstern innen und außen</li>
              <li>• Reinigung von Glasfassaden und Glastüren</li>
              <li>• Reinigung von Schaufenstern und Vitrinen</li>
              <li>• Reinigung von Glasabtrennungen im Innenbereich</li>
              <li>
                • Entfernung von leichten Verschmutzungen wie Fingerabdrücken,
                Staub und Regenstreifen
              </li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Ladengeschäfte und Schaufensterflächen</li>
            <li>• Bürogebäude und Praxen</li>
            <li>• Wohnanlagen mit großen Glasflächen</li>
            <li>• Gewerbeobjekte und Industriegebäude</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum ATHIS für Ihre Glasreinigung?
            </p>
            <p className="mt-2">
              Wir kombinieren professionelle Glasreinigung mit sorgfältiger
              Ausführung und Rücksicht auf Ihr Tagesgeschäft – für einen
              dauerhaft gepflegten Eindruck.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Angebot für Glasreinigung einholen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Ob Schaufenster, Bürogebäude oder Wohnanlage – wir erstellen ein
              passendes Konzept für Ihre Glasflächen.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}

