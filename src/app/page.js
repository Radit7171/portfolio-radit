"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Wrapper Component
function RevealOnScroll({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // ✅ hanya animasi sekali
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
      });
    }
  }, [inView, controls, delay]); // ❌ tidak perlu else untuk reset

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls}>
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4 sm:px-6 relative"
      >
        <RevealOnScroll>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-snug">
            Halo, Saya <span className="text-blue-500">Radit</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-2xl mb-8 leading-relaxed">
            Saya seorang{" "}
            <span className="text-blue-400">Junior Web Developer</span> yang
            fokus pada membangun website modern dengan desain menarik,
            responsif, dan performa tinggi.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
            <a
              href="/portfolio"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition text-center"
            >
              Lihat Portfolio
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-xl transition text-center"
            >
              Hubungi Saya
            </a>
          </div>
        </RevealOnScroll>
      </section>

      {/* SECTION 2: About */}
      <section
        id="about"
        className="py-20 bg-gray-950 text-gray-200 px-6 sm:px-12"
      >
        <div className="max-w-5xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Tentang Saya
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
              Saya adalah seorang{" "}
              <span className="text-blue-400">Junior Web Developer </span>
              dengan minat besar pada teknologi web modern. Fokus saya adalah
              menciptakan website yang tidak hanya{" "}
              <span className="text-blue-400">menarik secara visual</span>,
              tetapi juga{" "}
              <span className="text-blue-400">
                responsif, cepat, dan ramah pengguna
              </span>
              . Saya senang belajar hal baru dan terus berkembang untuk menjadi
              developer yang lebih baik.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
