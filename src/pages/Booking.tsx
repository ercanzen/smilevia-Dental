import { useState, type FormEvent } from 'react'

const treatments = ['Zahnimplantate', 'Zahnkronen / Veneers', 'Smile Makeover', 'Bleaching', 'Andere Behandlung']

export default function Booking() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unconfigured'>('idle')
  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) { setStatus('unconfigured'); return }
    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(event.currentTarget), headers: { Accept: 'application/json' } })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      event.currentTarget.reset(); setStatus('success')
    } catch { setStatus('error') }
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#f3f5fb] px-4 pb-20 pt-28 text-[#0a1130] md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Kostenlose Ersteinschätzung</p>
          <h1 className="section-title mt-5">Erzählen Sie uns von<br/><span className="hero-script font-normal italic text-[#4f6fd6]">Ihrem Wunsch.</span></h1>
          <p className="mt-6 max-w-xl text-[#596378]">Wir melden uns persönlich bei Ihnen, beantworten Ihre Fragen und koordinieren auf Wunsch eine unverbindliche Einschätzung durch unsere ausgewählte Partnerklinik.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <form onSubmit={submitRequest} className="glass rounded-[36px] p-6 md:p-10">
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}/>
            <input type="hidden" name="subject" value="Neue Behandlungsanfrage – Smilevia Website"/>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off"/>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="field"><span>Vor- und Nachname *</span><input name="name" autoComplete="name" required placeholder="Ihr Name" /></label>
              <label className="field"><span>Telefon / WhatsApp *</span><input name="phone" autoComplete="tel" required type="tel" placeholder="+41 ..." /></label>
              <label className="field"><span>E-Mail *</span><input name="email" autoComplete="email" required type="email" placeholder="name@beispiel.ch" /></label>
              <label className="field"><span>Wohnkanton</span><input name="canton" autoComplete="address-level1" placeholder="z. B. Zürich" /></label>
              <label className="field md:col-span-2"><span>Gewünschte Behandlung</span><select name="treatment" defaultValue=""><option value="" disabled>Bitte auswählen</option>{treatments.map(t => <option key={t}>{t}</option>)}</select></label>
              <label className="field md:col-span-2"><span>Was können wir für Sie tun?</span><textarea name="message" rows={5} placeholder="Beschreiben Sie kurz Ihre Situation, Wünsche und offenen Fragen." /></label>
            </div>
            <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-[#596378]"><input required type="checkbox" className="mt-1 accent-[#15265e]"/><span>Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet und – erst nach gesonderter Abstimmung – an die offengelegte Partnerklinik in der Türkei übermittelt werden. *</span></label>
            {status === 'success' && <div role="status" className="mt-7 rounded-2xl bg-[#4da8ff] px-6 py-4 text-center font-bold">Vielen Dank. Ihre Anfrage wurde sicher übermittelt.</div>}
            {status === 'error' && <div role="alert" className="mt-7 rounded-2xl bg-red-50 px-6 py-4 text-center font-bold text-red-800">Die Übermittlung ist fehlgeschlagen. Bitte versuchen Sie es später erneut.</div>}
            {status === 'unconfigured' && <div role="alert" className="mt-7 rounded-2xl bg-[#fff4d8] px-6 py-4 text-center text-sm font-bold text-[#68552b]">Das sichere Anfrageformular muss vor der Veröffentlichung noch technisch verbunden werden.</div>}
            {status !== 'success' && <button type="submit" disabled={status === 'sending'} className="mt-7 w-full rounded-full bg-[#15265e] px-7 py-4 font-bold text-white transition hover:bg-[#1c3480] disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? 'Wird gesendet …' : 'Anfrage unverbindlich senden ↗'}</button>}
            <p className="mt-4 text-center text-[11px] text-[#707a90]">Keine medizinische Diagnose über diese Website. Die Behandlung erfolgt ausschliesslich durch die Partnerklinik.</p>
          </form>

          <aside className="glass-dark flex h-fit flex-col gap-5 rounded-[36px] bg-[#15265e]/60 p-7 text-white lg:sticky lg:top-32">
            <p className="eyebrow !text-[#8fb3ff]">Was passiert danach?</p>
            {[['01','Persönlicher Rückruf','Wir klären Ihre Wünsche auf Deutsch.'],['02','Unterlagen','Bei Bedarf senden Sie Fotos oder ein Röntgenbild.'],['03','Behandlungsplan','Die Partnerklinik erstellt eine erste Einschätzung.'],['04','Organisation','Wir begleiten Termin, Transfer und Aufenthalt.']].map(([n,t,d]) => <div key={n} className="border-t border-white/10 pt-5"><span className="text-[10px] font-black text-[#4da8ff]">{n}</span><h2 className="mt-2 font-black">{t}</h2><p className="mt-1 text-xs leading-relaxed text-white/55">{d}</p></div>)}
            <div className="mt-2 rounded-[24px] border border-white/10 bg-white/[.08] p-5"><p className="text-sm font-black">Direkter Kontakt</p><p className="mt-2 text-xs leading-relaxed text-white/60">Sie kommunizieren während der gesamten Organisation mit Ihrem persönlichen Ansprechpartner in der Schweiz.</p></div>
          </aside>
        </div>
      </div>
    </main>
  )
}
