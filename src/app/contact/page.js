"use client";

import { Mail, Phone, Instagram, User } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-100 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-3xl font-bold mb-6">Yuk, Terhubung!</h2>
        <p className="text-gray-400 mb-12">
          Jangan sungkan untuk menghubungi saya lewat salah satu cara di bawah
          ini.
        </p>

        {/* Card Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Nama */}
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <User className="w-6 h-6 text-purple-400" />
            <span className="font-medium">Raditiya Bagas Santoso</span>
          </div>

          {/* Telepon */}
          <a
            href="https://wa.me/6285939457853"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-green-600 transition"
          >
            <Phone className="w-6 h-6 text-green-400" />
            <span className="font-medium">0859-3945-7853</span>
          </a>

          {/* Email */}
          <a
            href="mailto:raditjal717@email.com"
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-purple-600 transition"
          >
            <Mail className="w-6 h-6 text-purple-400" />
            <span className="font-medium">raditjal717@email.com</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/raditiya_717"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-pink-600 transition"
          >
            <Instagram className="w-6 h-6 text-pink-400" />
            <span className="font-medium">@raditiya_717</span>
          </a>
        </div>
      </div>
    </section>
  );
}
