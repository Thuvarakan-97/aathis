import Link from "next/link";

export default function WinterdienstPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Winterdienst
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Winterdienst – sicher durch die kalte Jahreszeit
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Mit dem Winterdienst von AATHIS sorgen Sie dafür, dass Wege, Einfahrten
          und Parkflächen in Trossingen und Baden-Württemberg auch bei Schnee und
          Eis sicher begeh- und befahrbar bleiben.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserem Winterdienst
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Mehr Sicherheit für Bewohner, Mitarbeitende und Besucher</li>
              <li>• Planbare Einsätze und definierte Bereitschaftszeiten</li>
              <li>• Zuverlässiger Service je nach Witterungslage</li>
              <li>• Entlastung bei Ihrer Verkehrssicherungspflicht</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang des Winterdienstes
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Räumen von Gehwegen, Zugängen und Treppen</li>
              <li>• Räumen von Hof- und Parkflächen</li>
              <li>• Streuen mit geeigneten Streumitteln</li>
              <li>• Wiederholte Einsätze bei anhaltendem Schneefall</li>
              <li>• Dokumentation der Einsätze nach Vereinbarung</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Hausverwaltungen und Eigentümergemeinschaften</li>
            <li>• Gewerbeimmobilien und Bürostandorte</li>
            <li>• Einzelhandelsflächen mit Kundenverkehr</li>
            <li>• Privatkunden mit größeren Flächen</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum AATHIS für Ihren Winterdienst?
            </p>
            <p className="mt-2">
              Als regionaler Dienstleister kennen wir die Witterungsbedingungen in
              Baden-Württemberg und planen unseren Winterdienst entsprechend – mit
              Fokus auf Sicherheit und Zuverlässigkeit.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-emerald-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Winterdienst mit AATHIS sichern
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Sichern Sie sich rechtzeitig Kapazitäten für die Wintersaison – wir
              erstellen gern ein individuelles Angebot.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-slate-100"
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}

