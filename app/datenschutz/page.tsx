import { definePageMetadata } from "@/lib/seo";

export const metadata = definePageMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Athi's Service Website: Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Der Schutz Ihrer persönlichen Daten ist uns, ATHIS, sehr wichtig. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
          gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-amber-700 md:text-base">
          Hinweis: Diese Datenschutzerklärung ist ein strukturiertes
          Platzhaltermuster. Die finale Version muss vor Veröffentlichung durch
          eine rechtliche Fachperson (z.B. Anwalt oder Datenschutzbeauftragten)
          geprüft und an das tatsächliche Angebot und die eingesetzten Dienste
          angepasst werden.
        </p>
      </section>

      <section className="space-y-4 text-sm text-slate-700 md:text-base">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            1. Verantwortliche Stelle
          </h2>
          <p className="mt-1">
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-1">
            Athi‘s Service
            <br />
            Augusta Straße 14
            <br />
            78647 Trossingen
            <br />
            Deutschland
            <br />
            Telefon: 01789 777750
            <br />
            E-Mail: Athis-Dienstleistungen@hotmail.com
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="mt-1">
            Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies
            gesetzlich erlaubt ist oder Sie eingewilligt haben. Personenbezogene
            Daten sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person beziehen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="mt-2 font-semibold text-slate-900">
            a) Server-Log-Dateien
          </h3>
          <p className="mt-1">
            Beim Aufruf unserer Website werden durch den Provider automatisch
            Informationen erhoben und in sogenannten Server-Log-Dateien
            gespeichert. Dies sind insbesondere:
          </p>
          <ul className="mt-1 list-disc pl-5">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-1">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt
            nicht. Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an einer technisch fehlerfreien
            Darstellung und Optimierung der Website).
          </p>

          <h3 className="mt-3 font-semibold text-slate-900">
            b) Kontaktformular
          </h3>
          <p className="mt-1">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Formular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht
            ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-1">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO (Vertrag/Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an effizienter Kommunikation).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            4. Cookies und Analyse-Tools (Platzhalter)
          </h2>
          <p className="mt-1">
            Unsere Website kann Cookies verwenden. Cookies sind kleine
            Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen
            dazu, das Angebot nutzerfreundlicher, effektiver und sicherer zu
            machen.
          </p>
          <p className="mt-1">
            Sofern Analyse-Tools (z.B. Google Analytics, Matomo) oder
            Marketing-Tools eingesetzt werden, müssen an dieser Stelle die
            jeweiligen Dienste, Zwecke, Rechtsgrundlagen, Speicherdauern und
            Widerspruchsmöglichkeiten konkret beschrieben werden.
          </p>
          <p className="mt-1 text-amber-700">
            Platzhalter: Bitte ergänzen Sie hier die tatsächlich eingesetzten
            Tools und Cookie-Kategorien (z.B. technisch notwendig, Statistik,
            Marketing) sowie ggf. ein Consent-Management.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            5. Ihre Rechte als betroffene Person
          </h2>
          <p className="mt-1">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            insbesondere folgende Rechte:
          </p>
          <ul className="mt-1 list-disc pl-5">
            <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
            <li>Recht auf Berichtigung unrichtiger Daten</li>
            <li>Recht auf Löschung („Recht auf Vergessenwerden“)</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
          </ul>
          <p className="mt-1">
            Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
            können Sie sich jederzeit an uns wenden.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            6. Datensicherheit
          </h2>
          <p className="mt-1">
            Wir treffen geeignete technische und organisatorische Maßnahmen, um
            Ihre Daten vor Verlust, Missbrauch oder unberechtigtem Zugriff zu
            schützen. Zu den Maßnahmen können u.a. verschlüsselte
            Übertragungswege (z.B. SSL/TLS), Zugriffsbeschränkungen und
            regelmäßige Sicherungen gehören.
          </p>
          <p className="mt-1 text-amber-700">
            Platzhalter: Bitte ergänzen Sie hier die konkret eingesetzten
            Sicherheitsmaßnahmen, soweit dies sinnvoll und zulässig ist.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            7. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="mt-1">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            Änderungen unserer Leistungen in der Datenschutzerklärung
            umzusetzen.
          </p>
          <p className="mt-1">
            Die jeweils aktuelle Fassung ist auf dieser Website abrufbar. Die
            letzte Aktualisierung dieser Datenschutzerklärung erfolgte am
            [Platzhalter: Datum eintragen].
          </p>
          <p className="mt-2 text-amber-700">
            Wichtiger Hinweis: Lassen Sie die finale Fassung dieser
            Datenschutzerklärung vor Veröffentlichung rechtlich prüfen und
            individualisieren.
          </p>
        </div>
      </section>
    </div>
  );
}

