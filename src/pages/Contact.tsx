import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { GeoCoverage } from '../shared/GeoCoverage'

export default function Contact() {
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'|'unconfigured'>('idle')
  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const endpoint=import.meta.env.VITE_CONTACT_ENDPOINT || import.meta.env.VITE_FORM_ENDPOINT
    if(!endpoint){setStatus('unconfigured');return}
    setStatus('sending')
    try {
      const response=await fetch(endpoint,{method:'POST',body:new FormData(event.currentTarget),headers:{Accept:'application/json'}})
      if(!response.ok) throw new Error()
      event.currentTarget.reset(); setStatus('success')
    } catch { setStatus('error') }
  }
  return <main id="main-content" className="min-h-screen bg-[#f3f5fb] px-4 pb-24 pt-28 text-[#0a1130] md:px-8 md:pt-36"><div className="mx-auto max-w-[1100px]"><div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><section className="glass rounded-[36px] bg-[#4da8ff]/55 p-8 md:p-12"><p className="eyebrow">Kontakt</p><h1 className="mt-5 text-5xl font-black leading-[.9] tracking-tight">Wir sind persönlich für Sie da.</h1><p className="mt-7 leading-relaxed text-[#454e70]">Schreiben Sie uns Ihre Frage. Ihr Ansprechpartner in der Schweiz meldet sich direkt bei Ihnen.</p><div className="mt-16 space-y-6 border-t border-[#0a1130]/15 pt-8"><div><p className="text-xs font-black uppercase tracking-wider opacity-50">Antwortzeit</p><p className="mt-1 font-black">In der Regel innerhalb von 24 Stunden</p></div><div><p className="text-xs font-black uppercase tracking-wider opacity-50">Sprachen</p><p className="mt-1 font-black">Deutsch · English · Français · Italiano</p></div></div></section><form onSubmit={submitContact} className="glass rounded-[36px] p-8 md:p-12"><input type="hidden" name="_subject" value="Neue Kontaktanfrage – Smilevia Website"/><div className="grid gap-6"><label className="field"><span>Vor- und Nachname *</span><input name="name" autoComplete="name" required placeholder="Ihr Name"/></label><label className="field"><span>E-Mail *</span><input name="email" autoComplete="email" required type="email" placeholder="name@beispiel.ch"/></label><label className="field"><span>Telefon / WhatsApp</span><input name="phone" autoComplete="tel" type="tel" placeholder="+41 ..."/></label><label className="field"><span>Ihre Nachricht *</span><textarea name="message" required rows={6} placeholder="Wie können wir Ihnen helfen?"/></label></div>{status==='success'&&<div role="status" className="mt-7 rounded-2xl bg-[#4da8ff] p-4 text-center font-bold">Vielen Dank. Ihre Nachricht wurde übermittelt.</div>}{status==='error'&&<div role="alert" className="mt-7 rounded-2xl bg-red-50 p-4 text-center font-bold text-red-800">Die Übermittlung ist fehlgeschlagen.</div>}{status==='unconfigured'&&<div role="alert" className="mt-7 rounded-2xl bg-[#fff4d8] p-4 text-center text-sm font-bold text-[#68552b]">Das Kontaktformular muss vor der Veröffentlichung technisch verbunden werden.</div>}{status!=='success'&&<button type="submit" disabled={status==='sending'} className="mt-7 w-full rounded-full bg-[#15265e] p-4 font-bold text-white disabled:opacity-60">{status==='sending'?'Wird gesendet …':'Nachricht senden ↗'}</button>}<p className="mt-5 text-center text-xs text-[#707a90]">Für eine Behandlungsanfrage mit medizinischen Angaben nutzen Sie bitte die <Link to="/randevu-al" className="font-bold underline">Ersteinschätzung</Link>.</p></form></div></div><GeoCoverage/></main>
}
