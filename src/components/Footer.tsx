import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <Car className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter">CARLOHA</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Carloha Nigeria is the authorized dealer for Chery vehicles in Nigeria. We bring luxury, technology, and reliability to the Nigerian road.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#vehicles" className="hover:text-white transition-colors">Vehicles</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing</Link></li>
              <li><Link to="/trade-in" className="hover:text-white transition-colors">Trade-In</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <h4 className="text-xl font-bold mb-8">Our Models</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/vehicle/tiggo-8-pro" className="hover:text-white transition-colors">Tiggo 8 Pro</Link></li>
              <li><Link to="/vehicle/arrizo-5" className="hover:text-white transition-colors">Arrizo 5</Link></li>
              <li><Link to="/vehicle/tiggo-4-pro" className="hover:text-white transition-colors">Tiggo 4 Pro</Link></li>
              <li><Link to="/vehicle/tiggo-9" className="hover:text-white transition-colors">Tiggo 9</Link></li>
              <li><Link to="/vehicle/himla" className="hover:text-white transition-colors">Himla</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Subscribe to get the latest offers and news from Carloha.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border-none rounded-xl px-4 py-3 text-sm flex-1 focus:ring-2 focus:ring-brand-red" />
              <button className="bg-brand-red p-3 rounded-xl hover:bg-red-700 transition-colors">
                <Facebook size={20} /> {/* Using FB icon as a placeholder for send */}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 Carloha Nigeria. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
