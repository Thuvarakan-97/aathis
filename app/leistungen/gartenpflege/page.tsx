import Link from "next/link";

export default function GartenpflegePage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Gartenpflege
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Gartenpflege und Außenanlagen – gepflegte Grünflächen das ganze Jahr
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Gepflegte Außenbereiche runden das Erscheinungsbild Ihrer Immobilie ab.
          AATHIS übernimmt die regelmäßige Gartenpflege und Pflege von
          Außenanlagen in Trossingen und der Region Baden-Württemberg.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Gartenpflege
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Ansprechendes Erscheinungsbild Ihrer Immobilie</li>
              <li>• Saisonale Pflege nach festem Plan</li>
              <li>• Kombinierbar mit anderen AATHIS-Leistungen</li>
              <li>• Individuelle Pakete je nach Grünfläche</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Gartenpflege
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Rasenmähen und Rasenkantenpflege</li>
              <li>• Hecken- und Strauchschnitt</li>
              <li>• Pflege von Beeten und Pflanzflächen</li>
              <li>• Laubentfernung in Herbst und Frühjahr</li>
              <li>• Beseitigung von Unkraut auf Wegen und Flächen</li>
              <li>• Entsorgung des anfallenden Grünguts</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Wohnanlagen und Mehrfamilienhäuser</li>
            <li>• Gewerbeobjekte mit Grünflächen</li>
            <li>• Private Gärten</li>
            <li>• Kommunale oder halböffentliche Flächen (nach Absprache)</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum AATHIS für Ihre Gartenpflege?
            </p>
            <p className="mt-2">
              Wir kombinieren professionelle Gartenpflege mit einem Verständnis
              für die Anforderungen Ihrer Immobilie – für ein stimmiges
              Gesamtbild von Gebäude und Außenanlage.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-emerald-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Gartenpflege mit AATHIS anfragen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Nennen Sie uns Flächengröße, Pflanzenbestand und gewünschte
              Intervalle – wir erstellen ein individuelles Pflegekonzept.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-slate-100"
          >
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}

