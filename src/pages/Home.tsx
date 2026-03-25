import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Headphones, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '@/src/constants';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/cheryhero/1920/1080" 
            alt="Chery Tiggo 8 Pro" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Now Available in Nigeria
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Drive the Future with <span className="text-brand-red">Chery</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Experience luxury, performance, and affordability. Join thousands of Nigerians who have upgraded to the Tiggo series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-lg px-10">
                Book Test Drive <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/2348069443611" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark text-lg px-10">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="vehicles" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Premium Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the perfect vehicle for your lifestyle. From urban commuting to family adventures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VEHICLES.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2">{car.name}</h3>
                  <p className="text-brand-red font-semibold mb-4">{car.tagline}</p>
                  <ul className="space-y-2 mb-8">
                    {car.features.slice(0, 3).map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-green-500" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{car.price}</span>
                    <Link to={`/vehicle/${car.id}`} className="btn-secondary py-2 px-4 text-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Carloha */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">Why Choose Carloha Nigeria?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-red-100 p-4 rounded-2xl h-fit">
                    <Shield className="text-brand-red" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Unmatched Warranty</h4>
                    <p className="text-gray-600">6 Years or 200,000km warranty on all Chery vehicles. We stand by our quality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-4 rounded-2xl h-fit">
                    <Zap className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Fuel Efficiency</h4>
                    <p className="text-gray-600">Engineered for the Nigerian road, our engines offer class-leading fuel economy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-100 p-4 rounded-2xl h-fit">
                    <Headphones className="text-purple-600" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">24/7 After-Sales Support</h4>
                    <p className="text-gray-600">Our service centers at ICM and Palms Mall are always ready to keep you moving.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/showroom/800/1000" 
                alt="Carloha Showroom" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-red text-white p-10 rounded-[40px] shadow-xl hidden md:block">
                <p className="text-4xl font-black mb-1">100%</p>
                <p className="text-sm font-semibold uppercase tracking-wider">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Happy Chery Owners</h2>
            <p className="text-gray-400">Join the growing community of Chery enthusiasts in Nigeria.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-brand-red text-brand-red" />)}
                </div>
                <p className="text-lg italic mb-6">"The Tiggo 8 Pro is a game changer. The luxury features for this price point are unbelievable. Best decision I've made for my family."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-600" />
                  <div>
                    <p className="font-bold">Olawale J.</p>
                    <p className="text-xs text-gray-500">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Lead Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl mb-4">Get an Exclusive Offer</h2>
              <p className="text-gray-600">Fill out the form below and our sales team will contact you within 5 minutes.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" placeholder="+234..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Interested Model</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red">
                  {VEHICLES.map(car => (
                    <option key={car.id}>{car.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn-primary w-full py-5 text-xl">
                Claim My Offer Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Visit Our Showrooms</h2>
            <p className="text-gray-600">Experience Chery luxury in person at our prime locations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-3xl flex items-start gap-6">
              <div className="bg-brand-red p-4 rounded-2xl text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-2xl mb-2">ICM Mall, Ikeja</h4>
                <p className="text-gray-600 mb-4">Ikeja City Mall, Obafemi Awolowo Way, Ikeja, Lagos.</p>
                <p className="font-bold">Mon - Sat: 10:00am - 08:00pm</p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl flex items-start gap-6">
              <div className="bg-brand-red p-4 rounded-2xl text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-2xl mb-2">Palms Mall, Lekki</h4>
                <p className="text-gray-600 mb-4">The Palms Shopping Mall, Bisway St, Lekki, Lagos.</p>
                <p className="font-bold">Mon - Sat: 10:00am - 08:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
