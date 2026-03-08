import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./components/Slide";
import HeartField from "./components/HeartField";

const imagesGlob = import.meta.glob("/img/*.{png,jpg,jpeg,svg}", { eager: true });
const IMAGES = Object.values(imagesGlob).map((m) => m.default || m);

const PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'>
<defs>
<linearGradient id='g' x1='0' x2='1'>
<stop offset='0' stop-color='#FFE9B8'/>
<stop offset='1' stop-color='#FFD1E0'/>
</linearGradient>
</defs>
<rect width='100%' height='100%' fill='url(#g)' rx='24'/>
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
font-family='Dancing Script, cursive' font-size='36' fill='#FF6F91'>
Tu foto aquí
</text>
</svg>
`)}`;

export default function App() {
  const photos = IMAGES;

  const slides = useMemo(() => [
    {
      title: "Para mi chaparrita",
      text: (
        <>
          <p>Mi amor, estos tres meses a tu lado han sido un sueño dulce.</p>
          <p className="mt-2">Gracias por tu risa, tus abrazos y por ser mi compañera.</p>
        </>
      ),
      photo: photos[0] || PLACEHOLDER
    },
    {
      title: "Gracias",
      text: (
        <>
          <p>Gracias por cada detalle, por cada momento que sumamos.</p>
          <p className="mt-2">Me haces más feliz cada día, chaparrita.</p>
        </>
      ),
      photo: photos[1] || PLACEHOLDER
    },
    {
      title: "Recuerdos",
      text: (
        <>
          <p>Hicimos recuerdos hermosos en estos meses.</p>
          <p className="mt-2">Quiero muchos más contigo.</p>
        </>
      ),
      photo: photos[2] || PLACEHOLDER
    },
    {
      title: "Promesa",
      text: <p>Prometo cuidarte, escucharte y reír contigo siempre.</p>,
      photo: photos[3] || PLACEHOLDER
    },
    {
      title: "3 Meses",
      text: (
        <>
          <p className="decorative text-2xl">¡Feliz tercer mes, mi amor!</p>
          <p className="mt-2">Te quiero muchísimo, chaparrita. Gracias por todo.</p>
        </>
      ),
      photo: photos[4] || PLACEHOLDER
    },
    {
      title: "Nuestros momentos",
      text: (
        <>
          <p>Cada día contigo es un recuerdo que guardo con cuidado en mi pecho.</p>
          <p className="mt-2">Tus besos y tus manos me hacen sentir en casa.</p>
        </>
      ),
      photo: photos[5] || PLACEHOLDER
    },
    {
      title: "Eres mi fuerza",
      text: (
        <>
          <p>Cuando estoy contigo todo parece más fácil. Tu apoyo es mi refugio.</p>
          <p className="mt-2">Gracias por ser luz en mis días.</p>
        </>
      ),
      photo: photos[6] || PLACEHOLDER
    },
    {
      title: "Pequeños detalles",
      text: (
        <>
          <p>Me encantan tus pequeñas manías, tu risa, cómo me miras cuando no me doy cuenta.</p>
          <p className="mt-2">Esos detalles hacen que te ame más cada día.</p>
        </>
      ),
      photo: photos[7] || PLACEHOLDER
    },
    {
      title: "Siempre tú",
      text: (
        <>
          <p className="decorative text-2xl">Quiero caminar a tu lado por siempre.</p>
          <p className="mt-2">Eres mi persona favorita, mi sueño y mi realidad.</p>
        </>
      ),
      photo: photos[8] || PLACEHOLDER
    },
    {
      title: "Mi lugar favorito",
      text: (
        <>
          <p>Contigo cualquier lugar es mi sitio favorito — me basta tu compañía.</p>
          <p className="mt-2">Tu voz, tu olor, tu risa: todo me hace volver a ti.</p>
        </>
      ),
      photo: photos[9] || PLACEHOLDER
    },
    {
      title: "Risas y abrazos",
      text: (
        <>
          <p>Las risas que compartimos y los abrazos que me das son mi mejor medicina.</p>
          <p className="mt-2">Gracias por hacer que incluso los días grises brillen.</p>
        </>
      ),
      photo: photos[10] || PLACEHOLDER
    },
    {
      title: "Por siempre",
      text: (
        <>
          <p className="decorative text-2xl">Prometo seguir eligiéndote, hoy y todos los días.</p>
          <p className="mt-2">Te amo más de lo que las palabras pueden decir.</p>
        </>
      ),
      photo: photos[11] || PLACEHOLDER
    }
  ], [photos]);

  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative py-12 px-6">
      <HeartField count={14} />

      <div className="card relative w-full max-w-4xl">

        <div className="flex items-center justify-between mb-6">
          <h1 className="decorative text-3xl text-mrosa">
            Nuestro pequeño regalo
          </h1>
          <div className="text-sm text-gray-500">
            3 meses juntos 💖
          </div>
        </div>

        <div className="w-full h-96 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Slide title={slides[index].title} photo={slides[index].photo}>
                {slides[index].text}
              </Slide>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">

          <button onClick={prev} className="btn bg-rose-200 text-mrosa">
            Anterior
          </button>

          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-mrosa" : "bg-rose-200"
                }`}
              />
            ))}
          </div>

          <button onClick={next} className="btn bg-sunny text-yellow-800">
            Siguiente
          </button>

        </div>

      </div>
    </div>
  );
}