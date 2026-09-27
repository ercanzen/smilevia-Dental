// Google Analytics 4 – wird erst nach ausdrücklicher Einwilligung geladen.
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const CONSENT_KEY = 'analytics-consent'

export type Consent = 'granted' | 'denied'

declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void }
}

export const analyticsEnabled = Boolean(MEASUREMENT_ID)

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch { return null }
}

export function saveConsent(consent: Consent) {
  try { localStorage.setItem(CONSENT_KEY, consent) } catch { /* Speicher blockiert – nur für diese Sitzung */ }
  if (consent === 'granted') loadAnalytics()
  else revokeAnalytics()
}

export function clearConsent() {
  try { localStorage.removeItem(CONSENT_KEY) } catch { /* ignorieren */ }
}

let loaded = false

export function loadAnalytics() {
  if (!MEASUREMENT_ID || loaded) return
  loaded = true
  window[`ga-disable-${MEASUREMENT_ID}` as never] = false as never
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID)
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

function revokeAnalytics() {
  if (!MEASUREMENT_ID) return
  window[`ga-disable-${MEASUREMENT_ID}` as never] = true as never
  // Bereits gesetzte GA-Cookies entfernen
  const domain = location.hostname.replace(/^www\./, '')
  for (const name of document.cookie.split(';').map(c => c.split('=')[0].trim())) {
    if (name === '_ga' || name.startsWith('_ga_')) {
      for (const d of ['', `; domain=${domain}`, `; domain=.${domain}`]) document.cookie = `${name}=; max-age=0; path=/${d}`
    }
  }
}
