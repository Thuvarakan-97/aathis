import Link from "next/link";

export default function TreppenhausreinigungPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Treppenhausreinigung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Treppenhausreinigung für einen gepflegten ersten Eindruck
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Das Treppenhaus ist die Visitenkarte eines Hauses. AATHIS sorgt mit
          regelmäßiger Treppenhausreinigung dafür, dass Bewohner, Mieter und
          Besucher Ihr Objekt in Trossingen und Baden-Württemberg stets gepflegt
          erleben.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Treppenhausreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Saubere Eingangsbereiche und gepflegte Treppen</li>
              <li>• Weniger Beschwerden und höhere Zufriedenheit</li>
              <li>• Individuelle Reinigungsintervalle</li>
              <li>• Zuverlässiger Service und feste Touren</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Treppenhausreinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Fegen und Wischen von Treppen und Podesten</li>
              <li>• Reinigung von Geländern und Handläufen</li>
              <li>• Reinigung von Eingangstüren und Briefkastenanlagen</li>
              <li>• Reinigung von Aufzugskabinen und -türen (falls vorhanden)</li>
              <li>• Entfernung von Spinnweben und leichten Wandverschmutzungen</li>
              <li>• Reinigung von Fußmatten und Bodenbelägen im Eingangsbereich</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Hausverwaltungen</li>
            <li>• Eigentümergemeinschaften (WEG)</li>
            <li>• Private Hauseigentümer</li>
            <li>• Wohnungsbaugesellschaften</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum AATHIS für Ihre Treppenhäuser?
            </p>
            <p className="mt-2">
              Wir stimmen unsere Einsätze auf die Bedürfnisse von Hausverwaltungen
              und Eigentümern ab – mit klaren Absprachen, Dokumentation und
              festen Ansprechpartnern.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Treppenhausreinigung mit AATHIS anfragen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Teilen Sie uns Anzahl der Eingänge, Etagen und gewünschten
              Intervalle mit – wir kalkulieren ein passendes Angebot.
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

