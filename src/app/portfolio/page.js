"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const projects = [
  {
    title: "Website Rental Mobil",
    desc: "Platform untuk sewa mobil online dengan sistem booking & pembayaran digital.",
    youtubeId: "Dz-diURREEs",
    tech: ["Next.js", "Tailwind", "Firebase"],
  },
  {
    title: "Website Wedding Organizer",
    desc: "Website manajemen acara pernikahan, mulai dari jadwal, undangan digital, hingga galeri.",
    youtubeId: "leaWf2Qykw0",
    tech: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    title: "Aplikasi Android Pengaduan Masyarakat",
    desc: "Aplikasi Android untuk melaporkan masalah di lingkungan, terhubung dengan admin & pihak berwenang.",
    youtubeId: "4lzewqP0moY",
    tech: ["Flutter", "Firebase"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Section Projects */}
      <section className="py-20 px-6 bg-gray-900 text-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-4"
          >
            Portfolio Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-400 mb-12"
          >
            Beberapa project yang pernah saya kerjakan. Klik card untuk melihat
            demo di YouTube.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={`https://youtube.com/watch?v=${project.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group hover:shadow-purple-500/40 transition relative"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <Image
                    src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition"
                  />
                  <span className="absolute top-3 left-3 bg-black/60 text-xs px-2 py-1 rounded-md text-gray-200">
                    Demo YouTube
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gradient-to-r from-blue-600/30 to-blue-800/30 text-blue-300 px-2 py-1 rounded-md border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-24 px-6 bg-gray-950 text-gray-100 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Hubungi Saya
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-10 leading-relaxed"
          >
            Saya sedang mencari kesempatan kerja untuk menambah pengalaman di
            industri ini. Jika kamu punya pertanyaan atau sekadar ingin menyapa,
            jangan ragu untuk menghubungi saya. Saya akan berusaha membalas
            secepat mungkin! 🚀
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition"
          >
            <Mail size={20} />
            Say Hello
          </motion.a>
        </div>

        {/* Efek Background Lingkaran */}
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-blue-950-600/20 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
