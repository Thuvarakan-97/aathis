export default function KontaktPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Kontakt
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Kontakt zu ATHIS – wir freuen uns auf Ihre Anfrage
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Sie möchten ein Angebot für Büroreinigung, Gebäudereinigung,
          Unterhaltsreinigung oder eine unserer weiteren Leistungen einholen?
          Kontaktieren Sie uns – wir melden uns zeitnah bei Ihnen.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr,1.2fr]">
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Kontaktinformationen
          </h2>
          <div className="mt-3 space-y-4 text-sm text-slate-700 md:text-base">
            <div>
              <p className="font-semibold text-slate-900">Adresse</p>
              <p className="mt-1">
                Athi‘s Service
                <br />
                Augusta Straße 14
                <br />
                78647 Trossingen
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Telefon</p>
              <p className="mt-1">
                Telefon: <span className="text-slate-700">01789 777750</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">E-Mail</p>
              <p className="mt-1">
                E-Mail:{" "}
                <span className="text-slate-700">
                  Athis-Dienstleistungen@hotmail.com
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Öffnungszeiten</p>
              <p className="mt-1">
                Montag – Freitag: 08:00 – 17:00 Uhr
                <br />
                (oder individuelle Öffnungszeiten anpassen)
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Schreiben Sie uns eine Nachricht
            </h2>
            <form
              className="mt-4 space-y-3 text-sm"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="81c96383-54a8-4b6c-b573-d02c3da367b5"
              />
              <input
                type="hidden"
                name="subject"
                value="Neue Kontaktanfrage von der Kontaktseite"
              />
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                  placeholder="Ihr Name"
                />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                    placeholder="Optional für Rückfragen"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Betreff
                </label>
                <input
                  type="text"
                  name="subject_line"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                  placeholder="z.B. Angebot Büroreinigung in Trossingen"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Nachricht *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                  placeholder="Beschreiben Sie kurz Ihr Objekt und die gewünschten Leistungen."
                />
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs text-slate-600">
                <input
                  id="datenschutz"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900"
                />
                <label htmlFor="datenschutz">
                  Ich habe die{" "}
                  <a
                    href="/datenschutz"
                    className="underline underline-offset-2 hover:text-slate-800"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und akzeptiere diese.
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
            <h2 className="text-sm font-semibold text-slate-900">
              So finden Sie uns
            </h2>
            <p className="mt-2">
              Hier kann eine Karte (z.B. Google Maps) mit der Lage von Trossingen
              in Baden-Württemberg eingebunden werden.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-sky-600 px-6 py-7 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Lassen Sie uns über Ihr Objekt sprechen
            </h2>
            <p className="mt-1 text-sm md:text-base">
              Beschreiben Sie uns kurz Ihre Anforderungen – wir erstellen Ihnen
              gern ein unverbindliches Angebot für Ihre Reinigung in Trossingen
              und Umgebung.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

