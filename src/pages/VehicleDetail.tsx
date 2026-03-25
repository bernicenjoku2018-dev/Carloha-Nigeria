import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { VEHICLES } from '@/src/constants';
import { CheckCircle2, ArrowLeft, Info, Settings, Fuel, Cpu } from 'lucide-react';

export default function VehicleDetail() {
  const { id } = useParams();
  const car = VEHICLES.find(v => v.id === id);

  if (!car) return <Navigate to="/" />;

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-red mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to All Vehicles
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img src={`https://picsum.photos/seed/${car.id}${i}/400/400`} alt={`${car.name} interior`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl md:text-6xl mb-4">{car.name}</h1>
              <p className="text-2xl text-brand-red font-bold">{car.tagline}</p>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {car.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-3xl flex items-center gap-4">
                <Settings className="text-brand-red" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Engine</p>
                  <p className="font-bold">{car.specs.engine}</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl flex items-center gap-4">
                <Cpu className="text-brand-red" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Transmission</p>
                  <p className="font-bold">{car.specs.transmission}</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl flex items-center gap-4">
                <Fuel className="text-brand-red" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Fuel Type</p>
                  <p className="font-bold">{car.specs.fuel}</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl flex items-center gap-4">
                <Info className="text-brand-red" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Tech</p>
                  <p className="font-bold">{car.specs.tech}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 p-4 border border-gray-100 rounded-2xl">
                    <CheckCircle2 className="text-brand-red" size={20} />
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-xl flex-1 py-5">
                Book Test Drive
              </Link>
              <a href={`https://wa.me/2348000000000?text=I'm interested in the ${car.name}`} className="btn-outline text-xl flex-1 py-5">
                WhatsApp Now
              </a>
            </div>
            
            <p className="text-center text-sm text-gray-500 font-bold uppercase tracking-widest">
              Limited Units Available – Book Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
