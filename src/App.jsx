import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Mic2, Music2, Martini, MessageCircle, Clock, MapPin, Mail } from 'lucide-react'
import BannerCarousel from './components/BannerCarousel'

const CONTACT_EMAIL = 'annydao3333@gmail.com'
const WHATSAPP_NUMBER = '41796161006'

// -- Auto-load all images from fixed literal patterns (Vite requirement)
const neonModules = import.meta.glob('./assets/gallery/neon_set/*.{jpg,jpeg,png,webp,svg}', { eager: true })
const bkkModules  = import.meta.glob('./assets/gallery/bangkok_set/*.{jpg,jpeg,png,webp,svg}', { eager: true })
const neonImages = Object.keys(neonModules).sort().map(k => neonModules[k].default)
const bkkImages  = Object.keys(bkkModules).sort().map(k => bkkModules[k].default)
const GALLERY_SET = 'bangkok' // 'neon' | 'bangkok'
const images = GALLERY_SET === 'neon' ? neonImages : bkkImages

export default function App() {
  const contactRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = form.elements.namedItem('email')?.value || ''
    const message = form.elements.namedItem('message')?.value || ''
    const subject = encodeURIComponent('Kontaktanfrage – Bangkok Thai Karaoke Website')
    const body = encodeURIComponent(`Von: ${email}\n\nNachricht:\n${message}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (<div className='relative min-h-screen text-white overflow-x-hidden'>
    <div aria-hidden className='pointer-events-none absolute inset-0 -z-10' style={{
      background: 'radial-gradient(1200px 600px at 70% -10%, rgba(255,20,147,.25), transparent 70%),' +
                  'radial-gradient(800px 400px at 0% 110%, rgba(0,255,255,.2), transparent 70%),' +
                  'linear-gradient(135deg,#11051f,#1b0b3a,#2a0f4f)'
    }}/>

    <header className='relative flex items-center min-h-[90vh]'>
      <div className='w-[92vw] max-w-[1200px] mx-auto py-16'>
        <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className='inline-block mb-3 px-3 py-1 border-2 border-pink-500 rounded-full uppercase tracking-[0.15em] text-yellow-200 text-sm shadow-[0_0_12px_#ff1493,0_0_32px_#ff1493]'>Winterthur • Thai Vibes • Karaoke</motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className='neon-brand text-5xl sm:text-7xl md:text-8xl font-black uppercase text-cyan-300 drop-shadow-[0_0_10px_#00ffff,0_0_40px_#00ffff]'
          style={{ WebkitTextStroke: '3px #07050b', letterSpacing: '1px' }}
        >
          Bangkok Thai Karaoke
        </motion.h1>

        <div className='mt-5'><BannerCarousel images={images} /></div>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className='mt-5 max-w-[65ch] text-lg leading-relaxed text-white/95'>
          Willkommen im <strong>Bangkok Thai Karaoke</strong> – deiner bunten Neon-Oase in Winti.
          Asia Pop, Old but Gold‑Klassiker, Schweizermundart bis hin zu den neusten Chart Hits – alles dabei, solange es kein Alphorn-Solo vom Grossvater ist 😄.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className='mt-5 flex flex-wrap gap-3'>
          <button onClick={scrollToContact} className='rounded-2xl px-5 py-3 font-extrabold uppercase tracking-wide bg-gradient-to-r from-pink-500 to-pink-400 text-zinc-900 shadow-[0_0_14px_#ff1493,0_0_42px_#ff1493]'>Kontakt aufnehmen</button>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target='_blank' rel='noreferrer noopener'
             className='rounded-2xl px-5 py-3 font-bold border-2 border-yellow-300 text-yellow-200 shadow-[0_0_10px_#ffd34d] hover:bg-white/5'>WhatsApp</a>
</motion.div>

        {/* Floating decorative icons — hidden on mobile */}
        
        {/* Mobile: static, semi-transparent decorative icons */}
        <div aria-hidden='true' className='pointer-events-none select-none block md:hidden opacity-30'>
          <div className='absolute left-[6%] top-[18%]'>
            <Mic2 className='w-16 h-16 text-yellow-200 drop-shadow-[0_0_12px_#ffd34d]' />
          </div>
          <div className='absolute right-[10%] top-[34%]'>
            <Music2 className='w-20 h-20 text-yellow-200 drop-shadow-[0_0_12px_#ffd34d]' />
          </div>
          <div className='absolute left-[14%] bottom-[10%]'>
            <Martini className='w-16 h-16 text-yellow-200 drop-shadow-[0_0_12px_#ffd34d]' />
          </div>
        </div>

        <div aria-hidden='true' className='pointer-events-none select-none hidden md:block'>
          <motion.div className='absolute left-[6%] top-[18%]' animate={{ y: [0, -14, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
            <Mic2 className='w-16 h-16 text-yellow-200 drop-shadow-[0_0_12px_#ffd34d]' /></motion.div>
          <motion.div className='absolute right-[10%] top-[34%]' animate={{ y: [0, -14, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}>
            <Music2 className='w-20 h-20 text-yellow-200 drop-shadow-[0_0_12px_#ffd34d]' /></motion.div>
          <motion.div className='absolute left-[14%] bottom-[10%]' animate={{ y: [0, -14, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
            <Martini className='w-16 h-16 text-yellow-200 drop-shadow-[0_0_12px_#ffd34d]' /></motion.div>
        </div>
      </div>
    </header>

    <main className='w-[92vw] max-w-[1200px] mx-auto grid md:grid-cols-[2fr_1fr] gap-4 -mt-10'>
      <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className='rounded-3xl border border-white/15 bg-[#120c1c]/75 backdrop-blur-md p-5 shadow-[0_8px_40px_rgba(0,0,0,.6)]'>
        <h2 className='text-2xl font-extrabold mb-2'>Grosse Leinwand & Grosser Floor</h2>
        <p className='text-white/90 leading-relaxed'>
          Eine grosse Leinwand, ein grosser Floor und Platz für jede Menge Stimmung – perfekt für gemeinsames Singen und Tanzen.
          Jede und jeder darf mal ans Mikro: Einfach Interpret und Liedtitel auf einen Zettel schreiben und beim DJ-Pult abgeben – dann bist du dran!
        </p>
        <div className='mt-4 grid sm:grid-cols-2 gap-3'>
          <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
            
                <li>Freitag: 22:00–05:00</li>
                <li>Samstag: 22:00–05:00</li>
                <li>Sonntag: Geschlossen</li>
                <li>Montag: Geschlossen</li>
                <li>Dienstag: Geschlossen</li>
                <li>Mittwoch: Geschlossen</li>
                <li>Donnerstag: Geschlossen</li>
              
          </div>
          <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
            <div className='flex items-center gap-2 font-semibold'><MapPin className='w-5 h-5'/> Adresse</div>
            <p className='mt-2 text-white/90'>General-Guisan-Strasse 31, 8400 Winterthur</p>
          </div>
        </div>
        <div className='mt-4 rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-4 text-yellow-200 font-semibold shadow-[0_0_10px_#ffd34d]'>
          Eintritt CHF 10.– pro Person – ein Drink inklusive!
        </div>
      </motion.section>

      <motion.aside initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
        className='rounded-3xl border border-white/15 bg-[#120c1c]/75 backdrop-blur-md p-5 shadow-[0_8px_40px_rgba(0,0,0,.6)]'>
        <h3 className='text-xl font-extrabold mb-2'>Snacks & Drinks</h3>
        <ul className='space-y-1 text-white/90'>
          <li>Bangkok Mule · CHF 12</li>
          <li>Pink TukTuk · CHF 13</li>
          <li>Thai Iced Tea · CHF 6</li>
        </ul>
      </motion.aside>
    </main>

    <section ref={contactRef} id='contact' className='w-[92vw] max-w-[1200px] mx-auto mt-4'>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className='rounded-3xl border border-white/15 bg-[#120c1c]/75 backdrop-blur-md p-5 shadow-[0_8px_40px_rgba(0,0,0,.6)]'>
        <h2 className='text-2xl font-extrabold'>Kontakt</h2>
        <p className='text-white/90 mt-1'>Schreib uns per E-Mail oder direkt auf WhatsApp. Wir melden uns fix.</p>
        <form onSubmit={handleSubmit} className='mt-3 grid gap-3'>
          <label className='grid gap-2'>
            <span className='text-sm font-semibold flex items-center gap-2'><Mail className='w-4 h-4'/> Kontaktemail</span>
            <input required type='email' name='email' placeholder='you@example.com'
              className='w-full rounded-xl border border-white/20 bg-[#0f0f16] px-3 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-300'/>
          </label>
          <label className='grid gap-2'>
            <span className='text-sm font-semibold'>Nachricht</span>
            <textarea required name='message' rows={5} placeholder='Deine Nachricht...'
              className='w-full rounded-xl border border-white/20 bg-[#0f0f16] px-3 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-300'/>
          </label>
          <div className='flex flex-wrap gap-3 pt-1'>
            <button type='submit' className='rounded-2xl px-5 py-3 font-extrabold uppercase tracking-wide bg-gradient-to-r from-pink-500 to-pink-400 text-zinc-900 shadow-[0_0_14px_#ff1493,0_0_42px_#ff1493]'>Nachricht senden</button>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target='_blank' rel='noreferrer noopener'
               className='rounded-2xl px-5 py-3 font-bold border-2 border-yellow-300 text-yellow-200 shadow-[0_0_10px_#ffd34d] hover:bg-white/5 flex items-center gap-2'><MessageCircle className='w-5 h-5'/> WhatsApp schreiben</a>
</div>
        </form>
      </motion.div>
    </section>

    <footer className='text-center text-white/90 py-8'>© 2025 Bangkok Thai Karaoke, Winterthur – All rights reserved.</footer>
  </div>)
}
