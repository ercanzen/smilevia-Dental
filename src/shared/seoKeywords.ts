import { serviceData } from './serviceData'
import { swissLocations } from './swissLocations'

// Kombinatorische Abdeckung: Behandlung × Schweizer Kanton/Stadt.
// Wird ausschliesslich in nicht sichtbaren <meta name="keywords">
// verwendet – Google/Bing werten dieses Tag heute nicht mehr für das
// Ranking, daher besteht kein Stuffing-Risiko für sichtbaren Content.
// Die eigentliche geografische Relevanz entsteht durch die sichtbare
// GeoCoverage-Sektion und die strukturierten Daten (JSON-LD).
export const treatmentTerms = serviceData.map(s => s.title)

export const serviceLocationKeywords = treatmentTerms.flatMap(term =>
  swissLocations.map(place => `${term} ${place}`)
)

export function metaKeywordsFor(pageTerms: string[] = [], count = 120): string {
  const sample = serviceLocationKeywords.slice(0, count)
  return Array.from(new Set([...pageTerms, ...treatmentTerms, ...sample])).join(', ')
}
