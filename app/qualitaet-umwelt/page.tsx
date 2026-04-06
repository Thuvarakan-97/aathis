import { definePageMetadata } from "@/lib/seo";

export const metadata = definePageMetadata({
  title: "Qualität & Umwelt",
  description:
    "Qualitätsstandards und umweltbewusste Reinigung bei Athi's Service: geschulte Teams, klare Pläne, sorgfältiger Mittel-Einsatz – für Industrie- und Gebäudereinigung in der Region.",
  path: "/qualitaet-umwelt",
});

export default function QualitaetUmweltPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Qualität &amp; Umwelt
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Qualität und Umwelt bei ATHIS
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Hohe Reinigungsqualität und ein verantwortungsvoller Umgang mit
          Ressourcen gehören bei ATHIS zusammen. Wir möchten nicht nur saubere
          Oberflächen hinterlassen, sondern auch verantwortungsbewusst handeln –
          gegenüber Menschen, Materialien und Umwelt.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Unsere Qualitätsstandards
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
            <li>• Einsatz von geschultem Personal</li>
            <li>• Klare Reinigungspläne und Checklisten</li>
            <li>• Regelmäßige Kontrollen und Feedbackschleifen</li>
            <li>• Feste Ansprechpartner für jedes Objekt</li>
          </ul>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Qualität bedeutet für uns, dass Sie sich jederzeit auf ein
            gleichbleibend hohes Niveau der Gebäudereinigung verlassen können.
            Wir dokumentieren Abläufe, passen Reinigungspläne bei Bedarf an und
            nehmen Rückmeldungen ernst.
          </p>
        </div>
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Strukturierte und sorgfältige Arbeitsweise
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Unsere Teams arbeiten nach definierten Abläufen. Dadurch stellen wir
            sicher, dass keine Bereiche vergessen werden und alle Aufgaben im
            vereinbarten Umfang erledigt werden – von der Unterhaltsreinigung bis
            zur Glasreinigung.
          </p>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Wir nutzen Checklisten, Objektmappen und klare Kommunikationswege,
            um Absprachen transparent zu halten und dauerhaft verlässliche
            Ergebnisse zu erzielen.
          </p>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Verantwortlicher Einsatz von Reinigungsmitteln
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Wo immer möglich setzen wir umweltfreundliche und materialschonende
            Reinigungsmittel ein. Gleichzeitig achten wir darauf, dass
            hygienische Standards eingehalten und Oberflächen fachgerecht
            gepflegt werden.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
            <li>• Dosierung nach klaren Vorgaben</li>
            <li>• Schulung unserer Mitarbeitenden im Umgang mit Mitteln</li>
            <li>• Beachtung von Herstellerempfehlungen</li>
            <li>• Schonender Einsatz auf empfindlichen Oberflächen</li>
          </ul>
        </div>
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Umweltbewusstes Handeln
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Wir achten auf einen ressourcenschonenden Einsatz von Wasser,
            Reinigungsmitteln und Energie – und wo möglich auf die Reduzierung
            von Abfall.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
            <li>• Reduzierung von Verpackungsmüll</li>
            <li>• Effiziente Planung der Fahrten zu Objekten</li>
            <li>• Sparsamer Einsatz von Wasser und Mitteln</li>
            <li>• Fachgerechte Entsorgung von Abfällen und Reststoffen</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Respektvoller Umgang mit Ihrem Eigentum
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          Unsere Mitarbeitenden bewegen sich respektvoll in Ihren
          Räumlichkeiten. Wir achten auf Ihr Inventar, Ihre Büroausstattung und
          Ihre Privatsphäre. Vertraulichkeit und Sorgfalt sind für uns
          selbstverständlich.
        </p>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          ATHIS behandelt Ihr Objekt, als wäre es das eigene – mit Fokus auf
          Sauberkeit, Werterhalt und ein langfristig gepflegtes Umfeld.
        </p>
      </section>
    </div>
  );
}

