import Link from "next/link";

export default function EndbaureinigungPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Leistungen · Endbaureinigung
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Endbaureinigung – bezugsfertig nach Bau und Renovierung
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Nach Bau- oder Renovierungsarbeiten bleibt oft Staub, Bauschmutz und
          Materialreste zurück. Mit der Endbaureinigung von AATHIS machen wir Ihr
          Objekt bezugsfertig – ob Neubau, Umbau oder Sanierung in Trossingen und
          Baden-Württemberg.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Ihre Vorteile mit unserer Endbaureinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Schnelle Bezugsfertigkeit nach Bau oder Umbau</li>
              <li>• Gründliche Entfernung von Bau- und Feinstaub</li>
              <li>• Materialschonende Reinigung neuer Oberflächen</li>
              <li>• Flexible Terminabsprachen passend zu Ihrer Übergabe</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Leistungsumfang der Endbaureinigung
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
              <li>• Entfernung von Bauschutt- und Staubresten</li>
              <li>• Reinigung von Böden, Türen, Fenstern und Fensterbänken</li>
              <li>• Reinigung von Sanitärräumen, Küchen und Nebenräumen</li>
              <li>• Entfernung von Schutzfolien, Etiketten und Verpackung</li>
              <li>
                • Feuchtreinigung von Oberflächen, Schaltern und Abdeckungen
              </li>
              <li>• Auf Wunsch: Glas- und Grundreinigung bestimmter Beläge</li>
            </ul>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Für wen ist dieser Service geeignet?
          </h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Bauträger und Bauunternehmen</li>
            <li>• Architekturbüros</li>
            <li>• Eigentümer von Neubauten oder sanierten Objekten</li>
            <li>• Gewerbetreibende nach Umbau ihrer Flächen</li>
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Warum AATHIS für Ihre Endbaureinigung?
            </p>
            <p className="mt-2">
              Wir stimmen uns eng mit Ihnen und beteiligten Gewerken ab, damit
              die Endbaureinigung effizient und termingerecht erfolgt und Ihr
              Objekt im besten Licht übergeben werden kann.
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Endbaureinigung mit AATHIS anfragen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Teilen Sie uns Bauvorhaben, Flächengrößen und Terminwünsche mit –
              wir planen die Reinigung passend zur Übergabe.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
          >
            Jetzt Angebot einholen
          </Link>
        </div>
      </section>
    </div>
  );
}

