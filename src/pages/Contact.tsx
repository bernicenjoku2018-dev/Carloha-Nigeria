import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have questions? Our team is here to help you find your dream Chery.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-brand-red p-4 rounded-2xl text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-bold">+234 806 944 3611</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-green-500 p-4 rounded-2xl text-white">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">WhatsApp</p>
                  <p className="text-xl font-bold">+234 806 944 3611</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-blue-500 p-4 rounded-2xl text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-xl font-bold">sales@carloha.com.ng</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-brand-dark p-4 rounded-2xl text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Business Hours</p>
                  <p className="text-xl font-bold">Mon - Sat: 10:00am - 08:00pm</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-red text-white p-10 rounded-[40px] shadow-xl">
              <h3 className="text-2xl mb-4">Visit Showroom</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={20} className="shrink-0" />
                  <p>Ikeja City Mall, Obafemi Awolowo Way, Ikeja, Lagos.</p>
                </div>
                <div className="flex gap-4">
                  <MapPin size={20} className="shrink-0" />
                  <p>The Palms Shopping Mall, Bisway St, Lekki, Lagos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-100 h-full">
              <h2 className="text-3xl mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Subject</label>
                  <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red">
                    <option>Book a Test Drive</option>
                    <option>Request a Quote</option>
                    <option>Financing Inquiry</option>
                    <option>Trade-In Valuation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-xl">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
