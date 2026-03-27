import Link from "next/link";

export default function GebaeudereinigungPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Gebäudereinigung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Gebäudereinigung für einen gepflegten Gesamtauftritt
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Die Gebäudereinigung von ATHIS umfasst die umfassende Pflege Ihrer
          Immobilien – von Außenbereichen über Allgemeinflächen bis hin zu
          Treppenhäusern und Nebenräumen. Wir helfen Ihnen, den Wert Ihrer
          Gebäude in Trossingen und Baden-Württemberg langfristig zu erhalten.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Gebäudereinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Ganzheitlicher Ansatz für Innen- und Außenbereiche</li>
              <li>• Werterhalt durch regelmäßige Pflege</li>
              <li>• Kombination verschiedener Reinigungsarten</li>
              <li>• Ein fester Ansprechpartner für alle Aufgaben</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Gebäudereinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Reinigung von Eingangsbereichen, Fluren, Treppenhäusern</li>
              <li>• Pflege von Allgemeinflächen und Nebenräumen</li>
              <li>• Glasreinigung an Fenstern und Fassaden nach Vereinbarung</li>
              <li>• Grundreinigung von Böden in vereinbarten Intervallen</li>
              <li>• Außenreinigung von Wegen, Höfen und Parkplätzen</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Wohn- und Gewerbeimmobilien</li>
            <li>• Mehrfamilienhäuser und Wohnanlagen</li>
            <li>• Büro- und Verwaltungsgebäude</li>
            <li>• Gewerbeeinheiten und Mischobjekte</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum ATHIS für Ihre Gebäudereinigung?
            </p>
            <p className="mt-2">
              Mit ATHIS koordinieren Sie sämtliche Aufgaben der
              Gebäudereinigung über einen verlässlichen Partner – mit
              strukturiertem Vorgehen, klaren Angeboten und regionaler Nähe.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Gebäudereinigung mit ATHIS planen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Ob einzelne Immobilie oder Portfolio – wir entwickeln mit Ihnen ein
              passendes Reinigungskonzept.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
          >
            Beratungstermin anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}

