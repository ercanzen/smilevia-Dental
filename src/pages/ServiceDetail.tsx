import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { serviceData } from '../shared/serviceData'
import { translate, useI18n } from '../shared/i18n'

export default function ServiceDetail() {
  const { slug } = useParams()
  const item = serviceData.find(service => service.slug === slug)
  const { language } = useI18n()
  useEffect(() => {
    if (!item) return
    document.title = `${translate(item.title, language)} in Antalya | Smilevia`
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = translate(item.summary, language)
  }, [item, language])
  if (!item) return <Navigate to="/hizmetlerimiz" replace />
  return (
    <main id="main-content" className="min-h-screen bg-[#f3f5fb] px-4 pb-24 pt-28 text-[#0a1130] md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1120px]">
        <Link to="/hizmetlerimiz" className="text-sm font-black text-[#596988]">← Alle Behandlungen</Link>
        <div className="relative mt-8 h-[380px] overflow-hidden rounded-[38px] md:h-[520px]"><img src={item.image} alt={item.title} className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#0a1130]/75 via-transparent"/><div className="absolute inset-x-7 bottom-7 text-white md:inset-x-12 md:bottom-10"><p className="eyebrow !text-white/65">{item.category}</p><h1 className="mt-3 text-[clamp(2rem,9vw,6.5rem)] font-black leading-[.95] tracking-[-.04em] md:leading-[.85] md:tracking-[-.055em]">{item.title}</h1></div></div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <section className="glass rounded-[38px] p-8 md:p-14"><p className="text-lg leading-relaxed text-[#596378]">{item.intro}</p><div className="mt-12 grid gap-3 sm:grid-cols-2">{item.points.map((point,i)=><div key={point} className="rounded-[22px] border border-white/50 bg-white/40 p-5 backdrop-blur-xl"><span className="text-[10px] font-black text-[#4f6fd6]">0{i+1}</span><p className="mt-3 text-sm font-bold">{point}</p></div>)}</div></section>
          <aside className="glass-dark flex h-fit flex-col rounded-[38px] bg-[#15265e]/55 p-8 text-white lg:sticky lg:top-32"><span className="grid h-14 w-14 place-items-center rounded-full bg-[#4da8ff] text-xl text-[#0a1130]">✦</span><h2 className="mt-20 text-3xl font-black">Persönliche Ersteinschätzung</h2><p className="mt-4 text-sm leading-relaxed text-white/60">Beschreiben Sie Ihre Situation. Wir koordinieren eine unverbindliche Einschätzung durch die Partnerklinik.</p><Link to="/randevu-al" className="mt-8 rounded-full bg-[#4da8ff] px-6 py-4 text-center font-bold text-[#0a1130]">Anfrage starten ↗</Link><p className="mt-5 text-[11px] leading-relaxed text-white/40">Die endgültige Diagnose und Behandlungsempfehlung erfolgen erst nach Untersuchung durch den behandelnden Zahnarzt.</p></aside>
        </div>
      </div>
    </main>
  )
}
