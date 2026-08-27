import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Privacy() {
  return <LegalPage title="Datenschutz"><h2>Bearbeitung von Anfragen</h2><p>Wir verwenden Ihre Kontaktdaten ausschliesslich zur Bearbeitung Ihrer Anfrage. Gesundheitsbezogene Angaben werden erst nach ausdrücklicher Abstimmung und über einen sicheren Übermittlungsweg an den offengelegten medizinischen Leistungserbringer weitergegeben.</p><h2>Verantwortlichkeiten</h2><p>Smilevia ist für die organisatorische Kommunikation verantwortlich. Die Partnerklinik verarbeitet medizinische Daten in eigener Verantwortung, sobald sie offengelegt wurde und Sie der Übermittlung zugestimmt haben.</p><h2>Ihre Rechte</h2><p>Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen und eine Einwilligung für die Zukunft widerrufen.</p><p className="notice">Vor dem öffentlichen Start müssen verantwortliche Person, Anschrift, Kontaktadresse, Hosting- und Formulardienste sowie Aufbewahrungsfristen ergänzt und rechtlich geprüft werden.</p></LegalPage>
}

export function Imprint() {
  return <LegalPage title="Impressum"><h2>Anbieter</h2><p><strong>Smilevia</strong><br/>Unabhängige Patienten- und Reisekoordination mit Sitz in der Schweiz.</p><h2>Rollenverteilung</h2><p>Smilevia ist keine Zahnarztpraxis und erbringt keine medizinischen Leistungen. Diagnose, Aufklärung, Planung und Behandlung erfolgen ausschliesslich durch die vorab offengelegte Partnerklinik.</p><h2>Pflichtangaben</h2><p className="notice">Vor der Veröffentlichung müssen Rechtsform, vollständiger Name, ladungsfähige Schweizer Anschrift, E-Mail-Adresse, Telefonnummer und gegebenenfalls Handelsregisternummer ergänzt werden.</p></LegalPage>
}

function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <main id="main-content" className="min-h-screen bg-[#f3f5fb] px-4 pb-24 pt-28 text-[#0a1130] md:px-8 md:pt-36"><article className="legal-content mx-auto max-w-[850px] glass rounded-[36px] p-7 md:p-12"><p className="eyebrow">Smilevia</p><h1 className="section-title mt-5">{title}</h1><div className="mt-10 space-y-7">{children}</div><Link to="/iletisim" className="mt-10 inline-block rounded-full bg-[#15265e] px-6 py-4 font-bold text-white">Kontakt ↗</Link></article></main>
}

export function NotFound() {
  return <main id="main-content" className="grid min-h-screen place-items-center bg-[#f3f5fb] px-6 text-center text-[#0a1130]"><div><p className="eyebrow">404</p><h1 className="mt-5 text-5xl font-black">Seite nicht gefunden</h1><Link to="/" className="mt-8 inline-block rounded-full bg-[#15265e] px-6 py-4 font-bold text-white">Zur Startseite</Link></div></main>
}
