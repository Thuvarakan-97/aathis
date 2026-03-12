import Image from "next/image";

export default function UeberUnsPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Über Athi‘s Service
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Athi‘s Service – Ihre Reinigungsfirma aus Trossingen
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Athi‘s Service steht für professionelle Reinigung, klare Abläufe und
            persönliche Betreuung. Als Reinigungsfirma mit Sitz in Trossingen,
            Baden-Württemberg, verbinden wir regionale Nähe mit hohen
            Qualitätsansprüchen.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            Unsere Kundinnen und Kunden schätzen die zuverlässige Ausführung,
            die sorgfältige Arbeitsweise und die transparente Kommunikation – ob
            bei Büroreinigung, Gebäudereinigung, Unterhaltsreinigung oder
            Spezialservices.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/90">
            <Image
              src="/images/team-cleaning.svg"
              alt="Stilisiertes Reinigungsteam in moderner Darstellung"
              width={900}
              height={700}
              className="h-64 w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
          </div>
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-xs shadow-lg backdrop-blur-sm">
            <p className="font-semibold text-slate-900">
              Regionale Reinigungsfirma aus Trossingen
            </p>
            <p className="mt-1 text-slate-600">
              Für Unternehmen, Hausverwaltungen und Privatkunden in
              Baden-Württemberg.
            </p>
          </div>
        </div>
      </section>

      {/* Werte & Mission */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Unsere Mission: Sauberkeit, auf die Sie sich verlassen können
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            Unser Ziel ist es, langfristige Partnerschaften aufzubauen – mit
            Unternehmen, Hausverwaltungen und Privatkunden. Wir möchten, dass
            Sie sich jederzeit auf ein sauberes, gepflegtes Umfeld verlassen
            können. Dafür orientieren wir uns konsequent an unseren
            Kernwerten.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Zuverlässigkeit &amp; Pünktlichkeit
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Wir halten Termine ein, arbeiten nach festen Plänen und stehen als
              verlässlicher Partner an Ihrer Seite.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Sauberkeit &amp; Qualität
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sorgfältige Reinigungsleistungen, moderne Methoden und
              Qualitätskontrollen sorgen für konstant hohe Ergebnisse.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Transparenz &amp; Kundenzufriedenheit
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Verständliche Angebote, offene Kommunikation und echtes Interesse
              an Ihrem Feedback sind für uns selbstverständlich.
            </p>
          </div>
        </div>
      </section>

      {/* Warum AATHIS */}
      <section className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Warum sich Kundinnen und Kunden für AATHIS entscheiden
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Erfahrung und Fachwissen
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Unser Team kennt die Anforderungen der Gebäudereinigung – von
              Büros über Treppenhäuser bis hin zu Außenanlagen. Wir setzen
              passgenaue Methoden und abgestimmte Reinigungspläne ein.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Individuelle Betreuung
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Jeder Kunde erhält einen festen Ansprechpartner, der alle Einsätze
              koordiniert und für Rückfragen zur Verfügung steht. So bleibt die
              Zusammenarbeit persönlich, schnell und effizient.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Flexible Leistungsbausteine
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sie wählen genau die Leistungen, die Sie benötigen – von
              regelmäßiger Unterhaltsreinigung über Büroreinigung bis zu
              Winterdienst, Gartenpflege und Entrümpelung.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Regionale Verwurzelung
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Als lokales Unternehmen aus Trossingen sind wir schnell bei Ihnen
              in der Region Baden-Württemberg und können flexibel auf
              kurzfristige Anforderungen reagieren.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Unternehmen */}
      <section className="space-y-6">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Unser Team – engagiert, geschult, verantwortungsbewusst
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Hinter AATHIS steht ein Team aus sorgfältig ausgewählten und
              geschulten Mitarbeitenden. Wir legen großen Wert auf
              Zuverlässigkeit, respektvollen Umgang und fachgerechten Einsatz
              von Reinigungsmitteln und -techniken.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Hier können Sie bei Bedarf Fotos und Kurzvorstellungen Ihres Teams
              einbinden – etwa zur Geschäftsführung, zu Objektleitungen oder den
              Reinigungsteams, die täglich vor Ort für Sauberkeit sorgen.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/90">
              <Image
                src="/images/team-office.svg"
                alt="Stilisierte Büroszene mit Team in Besprechung"
                width={800}
                height={600}
                className="h-64 w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

