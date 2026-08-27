import { Link } from 'react-router-dom'
import { serviceData } from '../shared/serviceData'

export default function Services() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f3f5fb] px-4 pb-24 pt-28 text-[#0a1130] md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1220px]">
        <p className="eyebrow">Behandlungen in Antalya</p>
        <h1 className="section-title mt-5">Zahnmedizin,<br/><span className="hero-script font-normal italic text-[#4f6fd6]">individuell</span> geplant.</h1>
        <p className="mt-6 max-w-2xl text-[#596378]">Alle Behandlungen werden nach persönlicher Untersuchung durch unsere ausgewählte Partnerklinik geplant. Eine Online-Einschätzung ersetzt keine medizinische Diagnose.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((item,i) => (
            <article key={item.slug} className="glass group overflow-hidden rounded-[30px] transition duration-500 hover:-translate-y-1 hover:bg-white/70 hover:shadow-xl">
              <Link to={`/hizmetlerimiz/${item.slug}`} className="block overflow-hidden">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"/>
              </Link>
              <div className={`flex min-h-[250px] flex-col justify-between p-7 ${i===0?'bg-[#4da8ff]':i===5?'bg-[#15265e] text-white':''}`}>
                <div className="flex items-start justify-between"><span className="text-[10px] font-black uppercase tracking-[.16em] opacity-55">{item.category}</span><span className="text-sm font-black opacity-40">{String(i+1).padStart(2,'0')}</span></div>
                <div><h2 className="text-2xl font-black">{item.title}</h2><p className="mt-3 text-sm leading-relaxed opacity-60">{item.summary}</p><Link to={`/hizmetlerimiz/${item.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-black">Mehr erfahren <span className="transition group-hover:translate-x-1">↗</span></Link></div>
              </div>
            </article>
          ))}
        </div>
        <div className="glass mt-16 rounded-[36px] bg-[#d9e6ff]/50 p-8 md:flex md:items-center md:justify-between md:p-12"><div><h2 className="text-3xl font-black">Welche Behandlung ist passend?</h2><p className="mt-2 text-[#4f5a80]">Senden Sie uns Ihre Fragen für eine kostenlose erste Einschätzung.</p></div><Link to="/randevu-al" className="mt-6 inline-block rounded-full bg-[#15265e] px-7 py-4 font-bold text-white md:mt-0">Anfrage starten ↗</Link></div>
      </div>
    </main>
  )
}
