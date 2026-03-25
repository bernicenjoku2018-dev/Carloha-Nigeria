import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Upload, Camera, CheckCircle2, Sparkles } from 'lucide-react';

export default function TradeIn() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-4">Trade-In Your Car</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Upgrade to a brand new Chery. Get a fair, AI-powered valuation for your current vehicle in minutes.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10" />
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= i ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'}`}
              >
                {i}
              </div>
            ))}
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-100">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <h2 className="text-3xl">Vehicle Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Make (e.g. Toyota)" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" />
                  <input type="text" placeholder="Model (e.g. Corolla)" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" />
                  <input type="number" placeholder="Year" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" />
                  <input type="number" placeholder="Mileage (km)" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red" />
                </div>
                <button onClick={() => setStep(2)} className="btn-primary w-full py-5 text-xl">
                  Next Step
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <h2 className="text-3xl">Upload Photos</h2>
                <p className="text-gray-500">Our AI uses these photos to assess the condition of your vehicle.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-2 hover:border-brand-red hover:bg-red-50 transition-all cursor-pointer">
                      <Camera className="text-gray-400" />
                      <span className="text-xs font-bold text-gray-400">Photo {i}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="btn-outline flex-1 py-5">Back</button>
                  <button onClick={() => setStep(3)} className="btn-primary flex-1 py-5">Get Valuation</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-8">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles size={48} />
                </div>
                <h2 className="text-4xl">Estimated Value</h2>
                <p className="text-6xl font-black text-brand-red">₦12,500,000</p>
                <p className="text-gray-500 max-w-md mx-auto">This is an AI-powered estimate based on current market trends in Nigeria. Visit our showroom for a final inspection.</p>
                <div className="pt-8 space-y-4">
                  <button className="btn-primary w-full py-5 text-xl">Apply Towards New Chery</button>
                  <button onClick={() => setStep(1)} className="text-gray-500 font-bold hover:text-brand-red transition-colors">Start Over</button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
