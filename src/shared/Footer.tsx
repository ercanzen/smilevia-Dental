import { Link } from 'react-router-dom'

export function Footer() {
  return <footer className="px-6 py-10"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 border-t border-[#dfe6f5] pt-8 text-sm text-[#596378] md:flex-row">
    <div className="flex items-center gap-2.5">
      <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white/60"><video autoPlay muted loop playsInline preload="auto" aria-hidden="true" className="h-full w-full object-cover"><source src="/smilevia-media/smilevia-hero-loop.mp4" type="video/mp4"/></video></span>
      <b className="text-base text-[#0a1130]"><span className="text-[#0a1130]">SMILE</span><span className="text-[#4f6fd6]">VIA</span></b>
    </div>
    <p>© 2026 · Unabhängige Patientenkoordination</p>
    <div className="flex gap-5"><Link to="/datenschutz">Datenschutz</Link><Link to="/impressum">Impressum</Link><Link to="/iletisim">Kontakt</Link></div>
  </div></footer>
}
