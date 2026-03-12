import Link from "next/link";
import Image from "next/image";

const services = [
  {
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    description:
      "Laufende Reinigung von Büros, Praxen, Treppenhäusern und Gewerbeflächen – zuverlässig nach Ihrem Wunschintervall.",
    image: "/images/services/unterhaltsreinigung.svg",
    badge: "Regelmäßige Reinigung",
  },
  {
    slug: "bueroreinigung",
    title: "Büroreinigung",
    description:
      "Saubere Arbeitsplätze, Konferenzräume und Sanitärbereiche für ein professionelles Arbeitsumfeld.",
    image: "/images/services/bueroreinigung.svg",
    badge: "Für Büros & Praxen",
  },
  {
    slug: "gebaeudereinigung",
    title: "Gebäudereinigung",
    description:
      "Umfassende Reinigung und Pflege von Gebäuden und Anlagen – innen und außen.",
    image: "/images/services/gebaeudereinigung.svg",
    badge: "Gebäude & Anlagen",
  },
  {
    slug: "glasreinigung",
    title: "Glasreinigung",
    description:
      "Streifenfreie Fenster, Glasfassaden und Schaufenster für einen klaren Auftritt.",
    image: "/images/services/glasreinigung.svg",
    badge: "Fenster & Glas",
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    description:
      "Gepflegte Eingangsbereiche und Treppenhäuser für Wohn- und Gewerbeimmobilien.",
    image: "/images/services/treppenhausreinigung.svg",
    badge: "Haus & Aufgänge",
  },
  {
    slug: "endbaureinigung",
    title: "Endbaureinigung",
    description:
      "Gründliche Reinigung nach Bau- und Renovierungsarbeiten – bezugsfertige Räume ohne Bauschmutz.",
    image: "/images/services/endbaureinigung.svg",
    badge: "Nach Bau & Umbau",
  },
  {
    slug: "grundreinigung",
    title: "Grundreinigung",
    description:
      "Intensive Tiefenreinigung von Böden und Flächen als Ergänzung zur Unterhaltsreinigung.",
    image: "/images/services/grundreinigung.svg",
    badge: "Tiefenreine Pflege",
  },
  {
    slug: "winterdienst",
    title: "Winterdienst",
    description:
      "Räumen und Streuen von Wegen, Einfahrten und Parkflächen – sicher durch die Wintersaison.",
    image: "/images/services/winterdienst.svg",
    badge: "Schnee & Eis",
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege",
    description:
      "Regelmäßige Pflege von Grünanlagen, Rasenflächen und Außenbereichen rund um Ihre Immobilie.",
    image: "/images/services/gartenpflege.svg",
    badge: "Grünanlagen",
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung",
    description:
      "Fachgerechte Räumung und Entsorgung von Wohnungen, Kellern, Gewerbeflächen und Objekten.",
    image: "/images/services/entruempelung.svg",
    badge: "Räumung & Ordnung",
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
          <div className="overflow-hidden rounded-3xl border border-sky-200 bg-sky-900/90">
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
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-32 w-full overflow-hidden bg-sky-900/80">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {service.title}
                  </span>
                  <span className="rounded-full bg-sky-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-50">
                    {service.badge}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-slate-600">{service.description}</p>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-sky-900 group-hover:text-sky-700"
                >
                  Mehr erfahren
                  <span className="ml-1 text-xs">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

