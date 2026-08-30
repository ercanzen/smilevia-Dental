import { Link } from 'react-router-dom'
import { MotionBackground } from './MotionBackground'

const steps = [
  ['01','Anfrage','Sie teilen uns Ihre Wünsche mit – unverbindlich und persönlich.'],
  ['02','Einschätzung','Die Partnerklinik prüft die verfügbaren Angaben und erstellt eine erste Orientierung.'],
  ['03','Koordination','Smilevia stimmt Termine, Kommunikation und auf Wunsch die Reiseorganisation ab.'],
  ['04','Begleitung','Ein fester Ansprechpartner begleitet Sie vor, während und nach dem Aufenthalt.'],
]

export function PremiumProcess() {
  return <section className="relative overflow-hidden bg-[#2c4956] px-4 py-20 text-white md:px-8 md:py-32">
    <img src="/smilevia-media/tooth-blueprint-bg.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-80"/>
    <div className="absolute inset-0 bg-gradient-to-r from-[#2c4956] via-[#2c4956]/70 to-[#2c4956]/20"/>
    <MotionBackground/><div className="relative mx-auto max-w-[1320px]"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div className="lg:sticky lg:top-32 lg:h-fit"><p className="eyebrow !text-[#a3c2ff]">The Smilevia way</p><h2 className="section-title mt-5">Klarer Ablauf.<br/><span className="hero-script font-normal italic text-[#4da8ff]">Persönlich</span> begleitet.</h2><p className="mt-7 max-w-md leading-7 text-white/70">Keine anonyme Vermittlungsplattform: Sie behalten einen persönlichen Ansprechpartner, während medizinische Entscheidungen transparent bei der Partnerklinik bleiben.</p><Link to="/randevu-al" className="premium-button mt-9 inline-flex bg-[#4da8ff] text-[#0a1130]">Erste Anfrage ↗</Link></div><div className="space-y-3">{steps.map(([n,title,text],index)=><article key={n} className="glass-dark group grid gap-5 rounded-[30px] p-6 transition duration-500 hover:border-white/25 hover:bg-white/[.12] md:grid-cols-[80px_1fr_40px] md:items-center md:p-8"><span className="text-sm font-black text-[#a3c2ff]">{n}</span><div><h3 className="text-2xl font-black">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/70">{text}</p></div>{index<steps.length-1&&<span className="hidden text-2xl text-white/20 transition group-hover:translate-x-1 group-hover:text-[#4da8ff] md:block">→</span>}</article>)}</div></div></div></section>
}
