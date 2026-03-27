import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Athi‘s Service – Ihre zuverlässige Reinigungsfirma in Baden-Württemberg",
  description:
    "Athi‘s Service ist Ihre professionelle Reinigungsfirma aus Trossingen für Gebäudereinigung, Büroreinigung, Unterhaltsreinigung, Glasreinigung, Winterdienst und mehr.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

const navServices = [
  { href: "/leistungen/unterhaltsreinigung", label: "Unterhaltsreinigung" },
  { href: "/leistungen/bueroreinigung", label: "Büroreinigung" },
  { href: "/leistungen/gebaeudereinigung", label: "Gebäudereinigung" },
  { href: "/leistungen/glasreinigung", label: "Glas/Fenster Reinigung" },
  { href: "/leistungen/treppenhausreinigung", label: "Treppenhausreinigung" },
  { href: "/leistungen/industriereinigung", label: "Industriereinigung" },
  { href: "/leistungen/grundreinigung", label: "Grundreinigung" },
  { href: "/leistungen/winterdienst", label: "Winterdienst" },
  { href: "/leistungen/gartenpflege", label: "Gartenpflege" },
  { href: "/leistungen/entruempelung", label: "Entrümpelung" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sky-50 text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
              <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Logo Athi‘s Service"
                    width={170}
                    height={48}
                    className="h-10 w-auto sm:h-12"
                  />
                  <div className="hidden flex-col leading-tight sm:flex">
                    <span className="text-sm font-semibold tracking-tight sm:text-base">
                      Athi‘s Service
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                      Reinigungsfirma in Trossingen
                    </span>
                  </div>
                </Link>
              </div>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
                <Link href="/" className="hover:text-slate-900">
                  Startseite
                </Link>
                <Link href="/ueber-uns" className="hover:text-slate-900">
                  Über uns
                </Link>
                <div className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 hover:text-slate-900"
                  >
                    Leistungen
                    <span className="text-xs">▾</span>
                  </button>
                  <div className="invisible absolute right-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white py-2 text-sm shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                    {navServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-1.5 text-slate-700 hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/so-arbeiten-wir" className="hover:text-slate-900">
                  So arbeiten wir
                </Link>
                <Link href="/qualitaet-umwelt" className="hover:text-slate-900">
                  Qualität &amp; Umwelt
                </Link>
                <Link href="/kontakt" className="hover:text-slate-900">
                  Kontakt
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
                >
                  Angebot anfordern
                </Link>
              </nav>
              <div className="flex items-center gap-2 md:hidden">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-700"
                >
                  Angebot anfordern
                </Link>
              </div>
            </div>
            {/* Mobile Navigation (ohne Dropdown-Logik, klar strukturiert) */}
            <nav className="border-t border-slate-200 bg-white md:hidden">
              <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-3 text-xs font-medium text-slate-700">
                <Link href="/" className="whitespace-nowrap hover:text-slate-900">
                  Startseite
                </Link>
                <Link
                  href="/ueber-uns"
                  className="whitespace-nowrap hover:text-slate-900"
                >
                  Über uns
                </Link>
                <Link
                  href="/leistungen"
                  className="whitespace-nowrap hover:text-slate-900"
                >
                  Leistungen
                </Link>
                <Link
                  href="/so-arbeiten-wir"
                  className="whitespace-nowrap hover:text-slate-900"
                >
                  So arbeiten wir
                </Link>
                <Link
                  href="/qualitaet-umwelt"
                  className="whitespace-nowrap hover:text-slate-900"
                >
                  Qualität &amp; Umwelt
                </Link>
                <Link
                  href="/kontakt"
                  className="whitespace-nowrap hover:text-slate-900"
                >
                  Kontakt
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
              {children}
            </div>
          </main>
          <footer className="mt-8 border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
              <div className="grid gap-8 md:grid-cols-4">
                <div>
                  <h2 className="text-lg font-semibold">Athi‘s Service</h2>
                  <p className="mt-3 text-sm text-slate-600">
                    Professionelle Reinigungsfirma aus Trossingen, Baden-Württemberg.
                    Zuverlässige Gebäudereinigung, Büroreinigung und Objektservice
                    für Unternehmen, Hausverwaltungen und Privatkunden.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Schnellzugriff
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>
                      <Link href="/">Startseite</Link>
                    </li>
                    <li>
                      <Link href="/ueber-uns">Über uns</Link>
                    </li>
                    <li>
                      <Link href="/leistungen">Leistungen</Link>
                    </li>
                    <li>
                      <Link href="/so-arbeiten-wir">So arbeiten wir</Link>
                    </li>
                    <li>
                      <Link href="/qualitaet-umwelt">Qualität &amp; Umwelt</Link>
                    </li>
                    <li>
                      <Link href="/kontakt">Kontakt</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Leistungen
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {navServices.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Kontakt
                  </h3>
                  <p className="mt-3 text-sm text-slate-700">
                    Athi‘s Service
                    <br />
                    Augusta Straße 14
                    <br />
                    78647 Trossingen
                  </p>
                  <p className="mt-3 text-sm text-slate-700">
                    Telefon: <span className="text-slate-600">01789 777750</span>
                    <br />
                    E-Mail:{" "}
                    <span className="text-slate-600">
                      Athis-Dienstleistungen@hotmail.com
                    </span>
                  </p>
                  <div className="mt-3 text-sm text-slate-700">
                    <Link href="/impressum" className="hover:underline">
                      Impressum
                    </Link>
                    <span className="mx-2 text-slate-400">•</span>
                    <Link href="/datenschutz" className="hover:underline">
                      Datenschutzerklärung
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-4 text-xs text-slate-500">
                © {new Date().getFullYear()} ATHIS – Reinigungsfirma in
                Baden-Württemberg. Alle Rechte vorbehalten.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
