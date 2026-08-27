import { MotionBackground } from './MotionBackground'

const faqs = [
  {
    q: 'Wer übernimmt die medizinische Verantwortung?',
    a: 'Diagnose, Aufklärung, Behandlungsplanung und Behandlung erfolgen ausschliesslich durch die vorab offengelegte Partnerklinik in Antalya. Smilevia erbringt selbst keine medizinischen Leistungen.',
  },
  {
    q: 'Wie läuft eine Anfrage ab?',
    a: 'Sie senden uns eine unverbindliche Ersteinschätzung. Nach Rückmeldung erstellt die Partnerklinik einen individuellen Behandlungsplan – bevor irgendetwas verbindlich wird.',
  },
  {
    q: 'Was kostet die Koordination durch Smilevia?',
    a: 'Die Behandlungskosten werden direkt mit der Partnerklinik abgerechnet. Eine allfällige Koordinationsgebühr wird Ihnen vorab schriftlich und transparent mitgeteilt.',
  },
  {
    q: 'In welchen Sprachen werden wir betreut?',
    a: 'Wir begleiten Sie auf Deutsch, Englisch, Französisch und Italienisch – mit einem festen, persönlichen Ansprechpartner.',
  },
  {
    q: 'Wie werden meine Gesundheitsdaten übermittelt?',
    a: 'Gesundheitsbezogene Angaben geben wir erst nach ausdrücklicher Abstimmung mit Ihnen über einen sicheren Übermittlungsweg an die Partnerklinik weiter.',
  },
  {
    q: 'Muss ich Reise und Unterkunft selbst organisieren?',
    a: 'Nein. Wir koordinieren Flughafentransfer und Unterkunft über unser Partnernetzwerk und begleiten Sie während des gesamten Aufenthalts.',
  },
  {
    q: 'Betreuen Sie auch Patienten aus der ganzen Deutschschweiz?',
    a: 'Ja. Wir begleiten Anfragen aus Zürich, Bern, Basel, Luzern, St. Gallen, Winterthur, Aarau, Zug, Schaffhausen, Chur und allen weiteren Kantonen der Deutschschweiz.',
  },
  {
    q: 'Betreuen Sie auch Patienten aus der Suisse romande und dem Tessin?',
    a: 'Ja. Auch Anfragen aus Genf, Lausanne, Fribourg, Neuenburg, Sion und weiteren Orten der Suisse romande sowie aus Lugano, Bellinzona und dem übrigen Tessin sind bei uns willkommen.',
  },
]

export function Faq() {
  return <section className="relative overflow-hidden bg-[#2c4956] px-4 py-20 text-white md:px-8 md:py-28">
    <MotionBackground/>
    <div className="relative mx-auto max-w-[900px]">
      <p className="eyebrow text-[#a3c2ff]">Häufige Fragen</p>
      <h2 className="section-title mt-5">Gut zu<br/><span className="hero-script font-normal italic text-[#4da8ff]">wissen.</span></h2>
      <div className="mt-12 space-y-3">
        {faqs.map(f => <details key={f.q} className="glass-dark group rounded-[24px] px-6 py-5 open:bg-white/[.1]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold marker:content-none">
            {f.q}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-lg font-normal leading-none transition duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">{f.a}</p>
        </details>)}
      </div>
    </div>
  </section>
}
