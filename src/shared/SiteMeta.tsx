import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaKeywordsFor, serviceLocationKeywords, treatmentTerms } from './seoKeywords'
import { swissLocations } from './swissLocations'
import { translate, useI18n } from './i18n'

const pages: Record<string, { title: string; description: string; keywords: string }> = {
  '/': { title: 'Zahnbehandlung in Antalya, Türkei für Patienten aus der Schweiz | Smilevia', description: 'Persönliche Koordination für Zahnimplantate, Veneers und Zahnersatz in Antalya, Türkei – für Patientinnen und Patienten aus der Schweiz.', keywords: [...treatmentTerms, ...serviceLocationKeywords].join(', ') },
  '/hakkimizda': { title: 'Über Smilevia | Persönliche Patientenkoordination', description: 'Wie Smilevia Patienten aus der Schweiz bei der Organisation einer Zahnbehandlung in Antalya begleitet.', keywords: metaKeywordsFor(['Smilevia', 'Patientenkoordination Schweiz', ...swissLocations]) },
  '/hizmetlerimiz': { title: 'Zahnbehandlungen in Antalya | Smilevia', description: 'Informationen zu Zahnimplantaten, Veneers, Zahnaufhellung, Kieferorthopädie und weiteren Zahnbehandlungen in Antalya.', keywords: metaKeywordsFor(['Zahnbehandlungen Antalya', ...swissLocations]) },
  '/dis-hekimligi': { title: 'Medizinisches Netzwerk in Antalya | Smilevia', description: 'Informationen zur Partnerklinik, medizinischen Verantwortung und Begleitung durch Smilevia.', keywords: metaKeywordsFor(['Partnerklinik Antalya', 'Zahnärzte Antalya']) },
  '/dis-hekimlerimiz': { title: 'Medizinisches Netzwerk in Antalya | Smilevia', description: 'Informationen zur Partnerklinik, medizinischen Verantwortung und Begleitung durch Smilevia.', keywords: metaKeywordsFor(['Partnerklinik Antalya', 'Zahnärzte Antalya']) },
  '/blog': { title: 'Ratgeber zur Zahnbehandlung in der Türkei | Smilevia', description: 'Informationen zu Zahnimplantaten, Veneers, Kosten, Reiseplanung und Nachsorge für Patienten aus der Schweiz.', keywords: metaKeywordsFor(['Ratgeber Zahnbehandlung Türkei', 'Zahntourismus Schweiz', ...swissLocations]) },
  '/iletisim': { title: 'Kontakt | Smilevia', description: 'Kontaktieren Sie Smilevia für Fragen zur Organisation Ihrer Zahnbehandlung in Antalya.', keywords: metaKeywordsFor(['Kontakt Smilevia', ...swissLocations]) },
  '/randevu-al': { title: 'Kostenlose Erstanfrage | Smilevia', description: 'Stellen Sie eine unverbindliche Anfrage zur Koordination einer Zahnbehandlung in Antalya.', keywords: metaKeywordsFor(['Kostenlose Erstanfrage', 'Zahnbehandlung Antalya Anfrage', ...swissLocations]) },
  '/datenschutz': { title: 'Datenschutz | Smilevia', description: 'Informationen zum Datenschutz und zur Bearbeitung Ihrer Anfrage bei Smilevia.', keywords: 'Datenschutz Smilevia' },
  '/impressum': { title: 'Impressum | Smilevia', description: 'Anbieter- und Verantwortlichkeitsinformationen von Smilevia.', keywords: 'Impressum Smilevia' },
}

export function SiteMeta() {
  const { pathname } = useLocation()
  const { language } = useI18n()
  useEffect(() => {
    const key = pathname.startsWith('/hizmetlerimiz/') ? '/hizmetlerimiz' : pathname.startsWith('/blog/') ? '/blog' : pathname
    const page = pages[key] || { title: 'Seite nicht gefunden | Smilevia', description: 'Die angeforderte Seite wurde nicht gefunden.', keywords: '' }
    document.title = translate(page.title, language)
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = translate(page.description, language)
    let keywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]')
    if (!keywords) { keywords = document.createElement('meta'); keywords.name = 'keywords'; document.head.appendChild(keywords) }
    keywords.content = page.keywords
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${window.location.origin}${pathname}`
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, language])
  return null
}
