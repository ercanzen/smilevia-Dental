import { Link } from 'react-router-dom'
import { MotionBackground } from './MotionBackground'

export function PremiumHero() {
  return <section className="premium-hero px-3 pb-16 pt-24 md:px-6 md:pb-24 md:pt-28">
    <div className="relative mx-auto min-h-[760px] max-w-[1480px] overflow-hidden rounded-[32px] bg-[#2c4956] md:rounded-[48px]">
      <video autoPlay muted loop playsInline preload="auto" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-top opacity-80 motion-reduce:hidden"><source src="/smilevia-media/smilevia-hero-loop-v2.mp4" type="video/mp4"/></video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(44,73,86,.95)_0%,rgba(44,73,86,.78)_45%,rgba(44,73,86,.4)_78%,rgba(44,73,86,.25)_100%)]"/>
      <MotionBackground/>
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(77,168,255,.28),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(79,111,214,.22),transparent_22%)]"/>

      <div className="relative z-10 flex min-h-[760px] max-w-[790px] flex-col justify-center px-7 py-28 text-white md:px-16 lg:px-20">
        <h1 className="text-[clamp(2.25rem,10vw,8.3rem)] font-black leading-[.9] tracking-[-.04em] md:leading-[.79] md:tracking-[-.072em]">Ein schöneres Lächeln,<br/><span className="hero-script font-normal italic text-[#4da8ff]">persönlich</span><br/>koordiniert.</h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-white/85 md:text-lg">Persönliche Begleitung für Ihre Zahnbehandlung in Antalya – von der ersten Anfrage bis zur Rückreise, mit einem festen Ansprechpartner aus der Schweiz.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link to="/randevu-al" className="premium-button bg-[#4da8ff] text-[#0a1130]">Kostenlose Anfrage <span>↗</span></Link><Link to="/hakkimizda" className="premium-button border border-white/20 bg-white/10 text-white backdrop-blur-xl">So begleiten wir Sie</Link></div>
      </div>

    </div>
  </section>
}
