import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useI18n, type Language } from './i18n'

const links = [
  { label: 'Startseite', to: '/' },
  { label: 'Über uns', to: '/hakkimizda' },
  { label: 'Behandlungen', to: '/hizmetlerimiz' },
  { label: 'Zahnmedizin', to: '/dis-hekimligi' },
  { label: 'Blog', to: '/blog' },
  { label: 'Kontakt', to: '/iletisim' },
]

const languageLabels: Record<Language, string> = { de: 'Deutsch', en: 'English', fr: 'Français', it: 'Italiano' }

function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function onClick(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])
  return (
    <div ref={ref} className="relative">
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)} className="flex items-center gap-1.5 rounded-full border border-white/50 bg-white/40 px-3.5 py-2 text-xs font-black text-[#0a1130] outline-none backdrop-blur-xl transition hover:bg-white/60">
        {language.toUpperCase()}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" className={`transition duration-300 ${open ? 'rotate-180' : ''}`}><path d="M1 1L5 5.5L9 1" stroke="#0a1130" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div role="listbox" className={`absolute right-0 top-[calc(100%+10px)] w-40 origin-top-right overflow-hidden rounded-[20px] border border-white/50 bg-white/80 p-1.5 shadow-[0_20px_50px_rgba(10,17,48,.18)] backdrop-blur-2xl transition duration-200 ${open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'}`}>
        {(['de', 'en', 'fr', 'it'] as Language[]).map(lang => (
          <button key={lang} type="button" role="option" aria-selected={language === lang} onClick={() => { setLanguage(lang); setOpen(false) }} className={`flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-left text-sm font-bold transition ${language === lang ? 'bg-[#15265e] text-white' : 'text-[#0a1130] hover:bg-white/70'}`}>
            {languageLabels[lang]}
            <span className={`text-[10px] font-black opacity-60 ${language === lang ? 'text-[#8fb3ff]' : ''}`}>{lang.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useI18n()
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between rounded-full border border-white/50 bg-white/55 px-4 shadow-[0_10px_40px_rgba(10,17,48,.08)] backdrop-blur-2xl md:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => { setOpen(false); scrollTop() }} aria-label="Smilevia Startseite">
          <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/60 md:h-[52px] md:w-[52px]">
            <video autoPlay muted loop playsInline preload="auto" aria-hidden="true" className="h-full w-full object-cover"><source src="/smilevia-media/smilevia-hero-loop.mp4" type="video/mp4"/></video>
          </span>
          <span className="text-2xl font-black tracking-[-.02em] md:text-[26px]"><span className="text-[#0a1130]">SMILE</span><span className="text-[#4f6fd6]">VIA</span></span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => <NavLink key={link.label} to={link.to} onClick={scrollTop} className={({isActive}) => `text-sm font-semibold transition hover:text-[#0a1130] ${isActive ? 'text-[#0a1130] underline decoration-[#4f6fd6] decoration-2 underline-offset-8' : 'text-[#454e70]'}`}>{link.label}</NavLink>)}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher/>
          <Link to="/randevu-al" onClick={scrollTop} className="rounded-full bg-[#15265e]/90 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#1c3480]">Kostenlose Anfrage <span className="ml-1">↗</span></Link>
        </div>
        <button type="button" aria-label={open ? 'Menü schliessen' : 'Menü öffnen'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-white/40 text-xl backdrop-blur-xl md:hidden">{open ? '×' : '≡'}</button>
      </nav>
      <div id="mobile-navigation" aria-hidden={!open} className={`absolute left-3 right-3 top-20 rounded-[28px] border border-white/15 bg-[#2c4956]/85 p-6 text-white shadow-2xl backdrop-blur-2xl transition-all md:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'}`}>
        <div className="flex flex-col gap-1">
          {links.map((link) => <Link key={link.label} to={link.to} onClick={() => { setOpen(false); scrollTop() }} className="border-b border-white/10 py-4 text-2xl font-bold">{link.label}</Link>)}
          <div className="mt-4 flex gap-2">{(['de','en','fr','it'] as Language[]).map(lang => <button key={lang} type="button" onClick={() => setLanguage(lang)} className={`flex-1 rounded-full py-2 text-xs font-black uppercase ${language === lang ? 'bg-white text-[#15265e]' : 'bg-white/10'}`}>{lang}</button>)}</div>
          <Link to="/randevu-al" onClick={() => { setOpen(false); scrollTop() }} className="mt-3 rounded-full bg-[#4da8ff] px-5 py-4 text-center font-bold text-[#0a1130]">Kostenlose Anfrage</Link>
        </div>
      </div>
    </header>
  )
}
