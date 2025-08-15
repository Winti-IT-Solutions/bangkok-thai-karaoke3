# Bangkok Thai Karaoke – React + Vite + Tailwind
- Auto-Load Galerie (bangkok_set als Standard)
- Banner mit Autoplay, Thumbnails, Lazy-Loading
- Neon-Flackern
- Floating-Icons **mobil ausgeblendet**

## Start
npm install
npm run dev

## Bilder
Lege deine Fotos in:
- src/assets/gallery/neon_set/
- src/assets/gallery/bangkok_set/

Umschalten in `src/App.jsx`:
```js
const GALLERY_SET = 'bangkok' // 'neon' | 'bangkok'
```
