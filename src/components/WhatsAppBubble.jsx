"use client";
import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      name: "Sales",
      number: "6281314875702",
      message: "Halo, saya mau tanya tentang layanan FotoSpace.",
    },
    {
      name: "Support",
      number: "62895330931423",
      message: "Hai, saya butuh bantuan teknis FotoSpace.",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bubble utama */}
      <button onClick={() => setOpen(!open)} className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center">
        {open ? <FaTimes size={22} /> : <FaWhatsapp size={28} />}
      </button>

      {/* Menu muncul */}
      {open && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl border w-56 p-3 animate-fade-in">
          <p className="text-sm font-semibold text-gray-700 mb-2 border-b pb-1">Hubungi Kami</p>
          <div className="flex flex-col gap-2">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={`https://wa.me/${c.number}?text=${encodeURIComponent(c.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition"
              >
                💬 Chat {c.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
