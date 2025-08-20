// app/about/page.js
import Img from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Judul */}
        <h2 className="text-3xl font-bold mb-12 text-blue-400">
          <span className="text-gray-400 mr-2">02.</span> Tentang Saya
        </h2>

        {/* Profil + Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              Halo! Saya{" "}
              <span className="text-blue-400 font-semibold">Radit</span>, seorang siswa{" "}
              <span className="font-semibold">PPLG</span> yang sedang belajar
              <span className="font-semibold"> Frontend</span>,
              <span className="font-semibold"> Backend</span>, dan juga
              <span className="font-semibold"> Android Development</span>.
            </p>
            <p className="text-lg leading-relaxed">
              Saat ini saya masih dalam tahap belajar dan bersemangat untuk terus
              mengembangkan keterampilan saya dalam dunia pemrograman dan membangun
              aplikasi yang bermanfaat.
            </p>
            <p className="text-lg leading-relaxed">
              Fokus utama saya sekarang adalah memahami dasar-dasar pengembangan perangkat lunak serta mencoba berbagai teknologi untuk memperluas wawasan saya.
            </p>
          </div>

          <div className="flex justify-center">
            <Img
              src="/profile.jpg"
              alt="Foto Profil"
              width={256}
              height={256}
              className="w-64 h-64 object-cover rounded-2xl shadow-lg border-2 border-gray-700 
                         hover:scale-105 transform duration-300 ring-4 ring-blue-400/40"
            />
          </div>
        </div>

        {/* Pengalaman - Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Pengalaman</h3>
          <div className="relative border-l border-gray-700 pl-6 space-y-10">
            <div>
              <h4 className="text-lg font-semibold text-blue-400">
                Sekolah Menengah Pertama
              </h4>
              <p className="text-gray-400">2020 - 2023</p>
              <p className="mt-2 text-gray-300">
                Mulai mengenal teknologi dan komputer, serta mempelajari
                dasar-dasar digital yang membuat saya tertarik untuk melanjutkan
                ke bidang pengembangan perangkat lunak.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400">
                Sekolah Menengah Kejuruan
              </h4>
              <p className="text-gray-400">2023 - Sekarang</p>
              <p className="mt-2 text-gray-300">
                SMK Negeri 1 Depok Jurusan Pengembangan Perangkat Lunak dan Gim
                (PPLG). Saat ini saya sedang belajar{" "}
                <span className="font-semibold">frontend</span>,
                <span className="font-semibold"> backend</span>, dan juga{" "}
                <span className="font-semibold">pengembangan aplikasi Android</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Teknologi yang Dikuasai</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Bagus" },
              { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Bagus" },
              { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Menengah" },
              { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: "Menengah" },
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Pemula" },
              { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: "Pemula" },
              { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: "Pemula" },
              { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Menengah" },
              { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: "Menengah" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="relative group p-5 border border-gray-700 rounded-xl text-center 
                           bg-gray-800/40 hover:bg-gray-800 hover:border-blue-400 
                           shadow-md hover:shadow-blue-400/20 
                           transition-all cursor-pointer transform hover:scale-105 duration-300"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 mx-auto mb-3"
                />
                <p className="font-medium text-gray-200">{tech.name}</p>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                                hidden group-hover:block opacity-0 group-hover:opacity-100 transition">
                  <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-lg shadow-lg">
                    {tech.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Alat yang Digunakan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", desc: "Version control system" },
              { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Code hosting & collaboration" },
              { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", desc: "Code editor" },
              { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", desc: "UI/UX design tool" },
              { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", desc: "Graphic design tool" },
              { name: "Blender", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", desc: "3D modeling & animation" },
              { name: "NPM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", desc: "Package manager" },
              { name: "Yarn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg", desc: "Fast package manager" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="p-5 border border-gray-700 rounded-xl text-center 
                           bg-gray-800/40 hover:bg-gray-800 hover:border-blue-400 
                           shadow-md hover:shadow-blue-400/20 
                           transition-all cursor-pointer transform hover:scale-105 duration-300"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className={`w-12 h-12 mx-auto mb-2 ${
                    tool.name === "GitHub" ? "bg-white rounded-lg p-1" : ""
                  }`}
                />
                <p className="font-medium text-gray-200">{tool.name}</p>
                <p className="text-sm text-gray-400">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
