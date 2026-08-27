import { swissLocationGroups } from './swissLocations'

export function GeoCoverage() {
  return <section className="px-4 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-[1320px]">
      <p className="eyebrow">Einzugsgebiet</p>
      <h2 className="section-title mt-5">Aus der ganzen<br/><span className="hero-script font-normal italic text-[#4f6fd6]">Schweiz.</span></h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-[#596378]">Wir begleiten Patientinnen und Patienten aus allen Kantonen sowie aus der Deutschschweiz, der Suisse romande und der Svizzera italiana bei der Organisation ihrer Zahnbehandlung in Antalya.</p>
      <div className="mt-10 space-y-8">
        {swissLocationGroups.map(group => <div key={group.label}>
          <h3 className="text-xs font-black uppercase tracking-[.12em] text-[#4f6fd6]">{group.label}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map(place => <span key={place} className="rounded-full border border-[#e4e9f5] bg-white/60 px-4 py-2 text-xs font-semibold text-[#454e70]">{place}</span>)}
          </div>
        </div>)}
      </div>
      <p className="mt-8 text-xs leading-relaxed text-[#6b7488]">Die Auflistung beschreibt unser übliches Einzugsgebiet und stellt keine Garantie eines bestimmten Angebots für einen einzelnen Ort dar.</p>
    </div>
  </section>
}
