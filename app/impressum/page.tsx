export default function ImpressumPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Impressum
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Hinweis: Die folgenden Angaben enthalten Platzhalter und müssen mit den
          tatsächlichen Unternehmensdaten ergänzt werden. Diese Inhalte stellen
          keine Rechtsberatung dar.
        </p>
      </section>

      <section className="space-y-4 text-sm text-slate-700 md:text-base">
        <div>
          <p className="font-semibold text-slate-900">Angaben gemäß § 5 TMG</p>
          <p className="mt-2">
            AATHIS
            <br />
            Trossingen 78647, Baden-Württemberg
            <br />
            Deutschland
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            Inhaber / Geschäftsführer
          </p>
          <p className="mt-1">
            [Platzhalter: Name des Inhabers / Geschäftsführers eintragen]
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">Kontakt</p>
          <p className="mt-1">
            Telefon: [Platzhalter Telefonnummer eintragen]
            <br />
            E-Mail: [Platzhalter E-Mail-Adresse eintragen]
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">Umsatzsteuer-ID</p>
          <p className="mt-1">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [Platzhalter: USt-IdNr. eintragen, falls vorhanden]
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </p>
          <p className="mt-1">
            [Platzhalter: Name und Anschrift der verantwortlichen Person
            eintragen]
          </p>
        </div>
      </section>

      <section className="space-y-4 text-sm text-slate-700 md:text-base">
        <div>
          <p className="font-semibold text-slate-900">Haftung für Inhalte</p>
          <p className="mt-1">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-1">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">Haftung für Links</p>
          <p className="mt-1">
            Unser Angebot kann Links zu externen Websites Dritter enthalten, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p className="mt-1">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">Urheberrecht</p>
          <p className="mt-1">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-1">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </section>
    </div>
  );
}

