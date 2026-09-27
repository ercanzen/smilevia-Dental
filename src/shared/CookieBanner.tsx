import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { analyticsEnabled, clearConsent, loadAnalytics, readConsent, saveConsent, type Consent } from './analytics'

const OPEN_EVENT = 'open-cookie-settings'

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function CookieBanner() {
  const [open, setOpen] = useState(() => analyticsEnabled && readConsent() === null)

  useEffect(() => {
    if (readConsent() === 'granted') loadAnalytics()
    const reopen = () => { clearConsent(); setOpen(true) }
    window.addEventListener(OPEN_EVENT, reopen)
    return () => window.removeEventListener(OPEN_EVENT, reopen)
  }, [])

  if (!analyticsEnabled || !open) return null

  const choose = (consent: Consent) => { saveConsent(consent); setOpen(false) }

  return <div role="dialog" aria-label="Cookie-Einstellungen" className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-[560px] rounded-[24px] border border-[#dfe6f5] bg-white p-5 text-sm text-[#596378] shadow-[0_20px_60px_rgba(10,17,48,0.18)] md:p-6">
    <p className="text-base font-bold text-[#0a1130]">Cookies für Besucherstatistik</p>
    <p className="mt-2">Mit Ihrer Einwilligung verwenden wir Google Analytics, um anonym zu messen, wie viele Personen unsere Website besuchen. Ihre Wahl können Sie jederzeit in der Fusszeile ändern.</p>
    <Link to="/datenschutz" className="mt-2 inline-block font-bold text-[#15265e] underline">Datenschutz</Link>
    <div className="mt-4 flex flex-wrap gap-3">
      <button type="button" onClick={() => choose('granted')} className="rounded-full bg-[#15265e] px-5 py-3 font-bold text-white">Akzeptieren</button>
      <button type="button" onClick={() => choose('denied')} className="rounded-full border border-[#15265e] px-5 py-3 font-bold text-[#15265e]">Ablehnen</button>
    </div>
  </div>
}
