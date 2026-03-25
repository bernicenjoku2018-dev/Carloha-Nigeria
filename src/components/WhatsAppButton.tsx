import React from 'react';
import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "2348069443611"; // Carloha Nigeria WhatsApp
  const message = encodeURIComponent("Hi, I'm interested in the Chery Tiggo series. I'd like to learn more about the Tiggo 8 Pro.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <Phone size={24} className="fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-semibold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
