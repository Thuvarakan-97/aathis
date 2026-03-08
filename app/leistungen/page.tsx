import Link from "next/link";
import Image from "next/image";

const services = [
  {
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    description:
      "Laufende Reinigung von Büros, Praxen, Treppenhäusern und Gewerbeflächen – zuverlässig nach Ihrem Wunschintervall.",
  },
  {
    slug: "bueroreinigung",
    title: "Büroreinigung",
    description:
      "Saubere Arbeitsplätze, Konferenzräume und Sanitärbereiche für ein professionelles Arbeitsumfeld.",
  },
  {
    slug: "gebaeudereinigung",
    title: "Gebäudereinigung",
    description:
      "Umfassende Reinigung und Pflege von Gebäuden und Anlagen – innen und außen.",
  },
  {
    slug: "glasreinigung",
    title: "Glasreinigung",
    description:
      "Streifenfreie Fenster, Glasfassaden und Schaufenster für einen klaren Auftritt.",
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    description:
      "Gepflegte Eingangsbereiche und Treppenhäuser für Wohn- und Gewerbeimmobilien.",
  },
  {
    slug: "endbaureinigung",
    title: "Endbaureinigung",
    description:
      "Gründliche Reinigung nach Bau- und Renovierungsarbeiten – bezugsfertige Räume ohne Bauschmutz.",
  },
  {
    slug: "grundreinigung",
    title: "Grundreinigung",
    description:
      "Intensive Tiefenreinigung von Böden und Flächen als Ergänzung zur Unterhaltsreinigung.",
  },
  {
    slug: "winterdienst",
    title: "Winterdienst",
    description:
      "Räumen und Streuen von Wegen, Einfahrten und Parkflächen – sicher durch die Wintersaison.",
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege",
    description:
      "Regelmäßige Pflege von Grünanlagen, Rasenflächen und Außenbereichen rund um Ihre Immobilie.",
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung",
    description:
      "Fachgerechte Räumung und Entsorgung von Wohnungen, Kellern, Gewerbeflächen und Objekten.",
  },
];

export default function LeistungenPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Leistungen
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Unsere Reinigungsleistungen im Überblick
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            AATHIS bietet Ihnen ein umfassendes Angebot rund um Reinigung, Pflege
            und Werterhalt Ihrer Objekte. Von der regelmäßigen Unterhaltsreinigung
            über spezialisierte Büroreinigung bis hin zu Winterdienst und
            Gartenpflege – wir stellen Ihnen genau das Leistungspaket zusammen,
            das zu Ihrem Bedarf in Trossingen und ganz Baden-Württemberg passt.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/90">
            <Image
              src="/images/services-building.svg"
              alt="Stilisiertes Gebäude als Symbol für Reinigungsleistungen"
              width={900}
              height={700}
              className="h-64 w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Servicekarten */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Alle Reinigungsservices aus einer Hand
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Wählen Sie genau die Leistungen, die zu Ihrem Objekt passen. Auf
              Wunsch kombinieren wir Unterhaltsreinigung, Büroreinigung,
              Gebäudereinigung, Winterdienst, Gartenpflege und mehr zu einem
              durchdachten Gesamtpaket.
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                {service.description}
              </p>
              <Link
                href={`/leistungen/${service.slug}`}
                className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-emerald-700"
              >
                Mehr erfahren
                <span className="ml-1 text-xs">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

