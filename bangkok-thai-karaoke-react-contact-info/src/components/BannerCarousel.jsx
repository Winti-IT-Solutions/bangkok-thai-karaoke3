import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BannerCarousel({ images = [], interval = 3500, showThumbnails = true }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused || images.length <= 1) return
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), interval)
    return () => clearInterval(timerRef.current)
  }, [paused, images.length, interval])

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  const currentSrc = images[index] || ''

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[42vh] min-h-[260px] overflow-hidden rounded-3xl border border-white/15 bg-black/30 backdrop-blur"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSrc}
            src={currentSrc}
            alt={`Karaoke Bild ${index + 1}`}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Preload next image lazily offscreen */}
        {images.length > 1 && (
          <img
            src={images[(index + 1) % images.length]}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: 1, height: 1, opacity: 0, position: 'absolute', bottom: 0, right: 0 }}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        <button aria-label="Vorheriges Bild" onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 hover:bg-black/60">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button aria-label="Nächstes Bild" onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 hover:bg-black/60">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {showThumbnails && images.length > 1 && (
        <div className="thumb-strip mt-3 flex gap-2 overflow-x-auto">
          {images.map((src, i) => (
            <button key={i} aria-label={`Gehe zu Bild ${i + 1}`} onClick={() => setIndex(i)}
              className={`rounded-xl border ${i === index ? 'border-white' : 'border-white/40'} overflow-hidden flex-shrink-0`}
              style={{ width: 96, height: 54 }} title={`Bild ${i + 1}`}>
              <img src={src} loading="lazy" decoding="async" alt="Thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
