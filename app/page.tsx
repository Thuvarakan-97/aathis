import Link from "next/link";
import Image from "next/image";
import { defineHomeMetadata } from "@/lib/seo";

export const metadata = defineHomeMetadata();

const heroImages = ["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg"];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-sky-900/10 px-4 py-10 md:px-8 md:py-14">
        {/* Vollflächige Background-Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Reinigung bei Athi‘s Service"
              fill
              sizes="100vw"
              className="hero-slide object-cover"
              style={{ animationDelay: `${index * 5}s` }}
            />
          ))}
          {/* Leichter, nur unten stärkerer Verlauf für bessere Lesbarkeit */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/10 via-sky-900/25 to-sky-900/40" />
        </div>

        <div className="relative grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
              Reinigungsfirma · Trossingen · Baden-Württemberg
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ihre zuverlässige Reinigungsfirma in Baden-Württemberg
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sky-100 md:text-lg">
              Athi‘s Service ist Ihre professionelle Reinigungsfirma aus
              Trossingen – für saubere Büros, Gebäude und private Objekte, auf
              die Sie sich jeden Tag verlassen können.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm hover:bg-sky-200"
              >
                Angebot anfordern
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border border-sky-100/80 px-6 py-3 text-sm font-semibold text-sky-50 hover:border-sky-50 hover:bg-sky-900/40"
              >
                Kontakt aufnehmen
              </Link>
            </div>
            <dl className="mt-8 grid gap-4 text-sm text-sky-100/90 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <dt className="font-semibold text-white">Zuverlässig</dt>
                <dd className="mt-1">
                  Feste Ansprechpartner und planbare Einsätze ohne
                  Überraschungen.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Professionell</dt>
                <dd className="mt-1">
                  Geschulte Teams, klare Prozesse und hochwertige
                  Reinigungsmittel.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Sorgfältig</dt>
                <dd className="mt-1">
                  Gründliche Gebäudereinigung bis ins Detail – innen und außen.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Transparent</dt>
                <dd className="mt-1">
                  Verständliche Angebote ohne versteckte Kosten oder
                  Kleingedrucktes.
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-sky-100/80 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:p-5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Schnell-Anfrage
              </h2>
              <p className="mt-1.5 text-xs text-slate-600">
                Beschreiben Sie kurz Ihr Objekt und Ihre Wünsche – wir melden
                uns mit einem passenden Vorschlag.
              </p>
              <form
                className="mt-3 space-y-2"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="8b6be077-970d-4ef4-a4f0-f418007a5b72"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Neue Schnell-Anfrage von der Startseite"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name / Firma"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                />
                <textarea
                  rows={2}
                  name="message"
                  placeholder="Kurz Ihr Anliegen (z.B. Büroreinigung in Trossingen)"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-500"
                >
                  Unverbindliche Anfrage senden
                </button>
                <p className="text-[10px] text-slate-500">
                  Mit dem Absenden Ihrer Anfrage erklären Sie sich mit der
                  Verarbeitung Ihrer Angaben gemäß unserer{" "}
                  <Link
                    href="/datenschutz"
                    className="underline underline-offset-2 hover:text-slate-700"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  einverstanden.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            ATHIS – Sauberkeit mit System und Verantwortung
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Athi‘s Service ist eine professionelle Reinigungsfirma mit Sitz in
            Trossingen, Baden-Württemberg. Wir unterstützen Unternehmen,
            Hausverwaltungen und
            Privathaushalte mit zuverlässiger Gebäudereinigung, Büroreinigung,
            Unterhaltsreinigung und weiteren Services rund um Ihre Immobilie.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            Mit klaren Abläufen, geschultem Personal und transparenten Preisen
            sorgen wir dafür, dass Ihre Flächen nicht nur sauber aussehen, sondern
            langfristig gepflegt bleiben.
          </p>
        </div>
        <div className="space-y-3 rounded-3xl bg-sky-900 px-6 py-6 text-slate-100">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Warum ATHIS?
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Reinigungsfirma mit regionaler Nähe in Trossingen</li>
            <li>• Feste Ansprechpartner und klare Kommunikation</li>
            <li>• Flexible Leistungspakete für Gewerbe und Privatkunden</li>
            <li>• Hohe Qualitäts- und Umweltstandards</li>
          </ul>
          <Link
            href="/ueber-uns"
            className="inline-flex items-center text-sm font-semibold text-sky-100 hover:text-sky-50"
          >
            Mehr über ATHIS erfahren →
          </Link>
        </div>
      </section>

      {/* Leistungen */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Unsere Reinigungsleistungen im Überblick
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Ob laufende Unterhaltsreinigung, gründliche Gebäudereinigung oder
              zuverlässiger Winterdienst – ATHIS bietet Ihnen ein komplettes
              Leistungspaket für saubere und gepflegte Objekte in Trossingen und
              ganz Baden-Württemberg.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Dazu gehören unter anderem Industriereinigung, Entrümpelung,
              Winterdienst und Glas/Fenster Reinigung.
            </p>
          </div>
          <Link
            href="/leistungen"
            className="text-sm font-semibold text-slate-900 hover:text-slate-700"
          >
            Alle Leistungen ansehen →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Unterhaltsreinigung
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Regelmäßige Reinigung von Büros, Praxen, Treppenhäusern und
              Gewerbeflächen – sauberer Alltag ohne Aufwand.
            </p>
            <Link
              href="/leistungen/unterhaltsreinigung"
              className="mt-4 text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              Mehr zur Unterhaltsreinigung →
            </Link>
          </div>
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Büroreinigung
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Saubere Arbeitsplätze, Sanitär- und Sozialräume für ein professionelles
              Umfeld und zufriedene Mitarbeitende.
            </p>
            <Link
              href="/leistungen/bueroreinigung"
              className="mt-4 text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              Mehr zur Büroreinigung →
            </Link>
          </div>
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Gebäudereinigung
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Innen- und Außenreinigung für Gebäude und Anlagen – von der
              Grundreinigung bis zur Pflege der Allgemeinflächen.
            </p>
            <Link
              href="/leistungen/gebaeudereinigung"
              className="mt-4 text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              Mehr zur Gebäudereinigung →
            </Link>
          </div>
        </div>
      </section>

      {/* Prozess „So arbeiten wir“ */}
      <section className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              So einfach kommen Sie mit ATHIS zur sauberen Lösung
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Unser klar strukturierter Ablauf macht die Zusammenarbeit für Sie
              einfach, transparent und planbar.
            </p>
          </div>
          <Link
            href="/so-arbeiten-wir"
            className="text-sm font-semibold text-slate-900 hover:text-slate-700"
          >
            Mehr über unseren Ablauf →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              title: "1. Anfrage senden",
              text: "Sie senden uns Ihre Anfrage – bequem per Kontaktformular, E-Mail oder Telefon.",
            },
            {
              title: "2. Beratung / Besichtigung",
              text: "Wir klären Anforderungen und besichtigen bei Bedarf Ihr Objekt vor Ort.",
            },
            {
              title: "3. Individuelles Angebot",
              text: "Sie erhalten ein faires, transparentes Angebot passend zu Ihrem Bedarf.",
            },
            {
              title: "4. Durchführung",
              text: "Unser Team startet pünktlich und sorgt für dauerhaft überzeugende Sauberkeit.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-sky-100 bg-sky-50 p-4"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Schritt {index + 1}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kundenvorteile */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Ihre Vorteile mit ATHIS als Reinigungsfirma
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Zeitersparnis
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sie konzentrieren sich auf Ihr Kerngeschäft – wir kümmern uns um
              Reinigung, Pflege und Ordnung.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Konstante Qualität
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Durch feste Reinigungspläne und Qualitätskontrollen bleibt Ihr Objekt
              dauerhaft in einem gepflegten Zustand.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Individuelle Lösungen
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Ob kleines Büro oder komplettes Gebäude – wir passen unsere Leistungen
              flexibel an Ihre Anforderungen an.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-5 rounded-3xl bg-sky-900 px-6 py-8 text-slate-100 md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Was unsere Kundinnen und Kunden sagen
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <figure>
            <blockquote className="text-sm leading-relaxed text-slate-100">
              „Seit ATHIS unsere Büroreinigung übernimmt, ist die Sauberkeit
              konstant auf einem sehr hohen Niveau. Die Abstimmung läuft
              unkompliziert und zuverlässig.“
            </blockquote>
            <figcaption className="mt-3 text-xs text-slate-300">
              Geschäftsführerin eines mittelständischen Unternehmens aus
              Baden-Württemberg
            </figcaption>
          </figure>
          <figure>
            <blockquote className="text-sm leading-relaxed text-slate-100">
              „Die Hausreinigung und Treppenhauspflege in unseren Mehrfamilienhäusern
              läuft reibungslos. Beschwerden der Mieter sind seitdem deutlich
              zurückgegangen.“
            </blockquote>
            <figcaption className="mt-3 text-xs text-slate-300">
              Hausverwaltung aus der Region Trossingen
            </figcaption>
          </figure>
          <figure>
            <blockquote className="text-sm leading-relaxed text-slate-100">
              „Unsere Glas/Fenster Reinigung durch ATHIS ist immer pünktlich,
              gründlich und absolut empfehlenswert.“
            </blockquote>
            <figcaption className="mt-3 text-xs text-slate-300">
              Privatkunde aus Trossingen
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="rounded-3xl bg-sky-600 px-6 py-8 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Lassen Sie Athi‘s Service für Sie reinigen.
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Schildern Sie uns kurz Ihr Objekt und Ihre Wünsche. Wir melden uns
              zeitnah mit einem klaren Vorschlag.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
            >
              Unverbindliches Angebot erhalten
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-sky-200 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500"
            >
              Direkt Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
