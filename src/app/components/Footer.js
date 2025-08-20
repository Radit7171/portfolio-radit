import { Mail, MessageCircle, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Bagian atas */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand / Nama */}
          <h3 className="text-lg font-semibold text-white tracking-wide">
            Raditiya Bagas Santoso
          </h3>

          {/* Sosial Media */}
          <div className="flex gap-5 text-gray-400 text-xl">
            <a
              href="mailto:raditjal717@email.com"
              className="hover:text-purple-400 transition"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://wa.me/6285939457853"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
            <a
              href="https://instagram.com/raditiya_717"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Garis tipis */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">Radit</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
