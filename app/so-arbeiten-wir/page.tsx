export default function SoArbeitenWirPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Ablauf
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          So arbeiten wir bei AATHIS
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Ein klarer, transparenter Ablauf ist die Basis für eine gute
          Zusammenarbeit. Mit AATHIS wissen Sie von Anfang an, wie wir vorgehen –
          von der ersten Anfrage bis zur laufenden Betreuung Ihrer
          Reinigungsleistungen.
        </p>
      </section>

      <section className="space-y-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Unser 4-Schritte-Prozess
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Schritt 1
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Anfrage senden
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sie kontaktieren uns per Telefon, E-Mail oder über das
              Kontaktformular und schildern kurz Ihr Objekt sowie die gewünschten
              Leistungen (z.B. Büroreinigung, Unterhaltsreinigung, Winterdienst).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Schritt 2
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Persönliche Beratung oder Besichtigung
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Wir melden uns zeitnah bei Ihnen, klären offene Fragen und – falls
              sinnvoll – vereinbaren wir einen Besichtigungstermin vor Ort in
              Trossingen oder der umliegenden Region in Baden-Württemberg.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Schritt 3
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Individuelles Angebot
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Auf Basis Ihrer Anforderungen erstellen wir ein transparentes,
              schriftliches Angebot. Darin sehen Sie genau, welche Leistungen in
              welchem Umfang enthalten sind und zu welchen Konditionen.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Schritt 4
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Zuverlässige Durchführung
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Nach Ihrer Freigabe starten wir pünktlich mit der Durchführung.
              Unsere Teams arbeiten nach klaren Reinigungsplänen und sorgen für
              dauerhaft überzeugende Sauberkeit.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Einfache Kommunikation, transparente Abläufe, flexible Planung
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Einfache Erreichbarkeit
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sie erreichen uns über klare Kontaktwege. Änderungswünsche,
              Zusatzleistungen oder Rückfragen können unkompliziert abgestimmt
              werden.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Transparente Leistungen
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Unsere Angebote und Reinigungspläne sind klar strukturiert. Sie
              wissen jederzeit, welche Leistungen in welchem Umfang erbracht
              werden.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Flexible Anpassungen
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Wenn sich Ihr Bedarf ändert, passen wir Intervalle, Leistungsumfang
              oder zusätzliche Services wie Grundreinigung, Winterdienst oder
              Gartenpflege flexibel an.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

