import Link from "next/link";

export default function EntruempelungPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Entrümpelung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Entrümpelung – schnell, diskret und fachgerecht
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Ob Wohnung, Keller, Garage oder Gewerbefläche – mit der Entrümpelung
          durch AATHIS schaffen Sie schnell wieder Platz und Ordnung. Wir kümmern
          uns um Räumung und fachgerechte Entsorgung in Trossingen und
          Baden-Württemberg.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Entrümpelung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Kompletter Service aus einer Hand</li>
              <li>• Diskrete Abwicklung, besonders bei Haushaltsauflösungen</li>
              <li>• Deutliche Zeitersparnis und weniger Organisationsaufwand</li>
              <li>• Transparente Kosten auf Basis des tatsächlichen Aufwands</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Entrümpelung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Räumung von Wohnungen, Kellern, Dachböden, Garagen</li>
              <li>• Entrümpelung von Büroräumen und Gewerbeflächen</li>
              <li>• Sortierung nach verwertbaren und zu entsorgenden Gegenständen</li>
              <li>• Fachgerechte Entsorgung nach geltenden Vorschriften</li>
              <li>• Besenreine Übergabe der geräumten Flächen</li>
              <li>• Auf Wunsch: anschließende Grundreinigung der Räume</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Privatpersonen (z.B. bei Umzug oder Haushaltsauflösung)</li>
            <li>• Erbengemeinschaften</li>
            <li>• Hausverwaltungen und Eigentümer</li>
            <li>• Gewerbetreibende mit Lager- oder Büroflächen</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum AATHIS für Ihre Entrümpelung?
            </p>
            <p className="mt-2">
              Wir arbeiten strukturiert, zügig und mit Fingerspitzengefühl – und
              verbinden die Entrümpelung auf Wunsch direkt mit passenden
              Reinigungsleistungen.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Entrümpelung mit AATHIS anfragen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Beschreiben Sie uns kurz Umfang, Objektart und Standort – wir melden
              uns mit einem klaren Vorschlag und Angebot.
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

