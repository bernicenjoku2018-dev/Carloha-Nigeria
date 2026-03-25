import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-[40px] overflow-hidden max-w-lg w-full shadow-2xl relative"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="relative h-48 bg-brand-red flex items-center justify-center overflow-hidden">
            <Gift size={80} className="text-white/20 absolute -bottom-4 -right-4 rotate-12" />
            <Gift size={120} className="text-white" />
          </div>

          <div className="p-10 text-center">
            <h2 className="text-3xl mb-4 leading-tight">Wait! Get <span className="text-brand-red font-black">₦500,000</span> Discount</h2>
            <p className="text-gray-600 mb-8">Don't leave yet! Book a test drive today and get an exclusive discount on your purchase.</p>
            
            <form className="space-y-4">
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full bg-gray-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red"
              />
              <button 
                type="submit" 
                className="btn-primary w-full py-4 text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setIsVisible(false);
                  alert("Thank you! Our team will contact you shortly with your discount code.");
                }}
              >
                Claim My Discount <ArrowRight size={20} />
              </button>
            </form>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="mt-6 text-sm text-gray-400 font-bold uppercase tracking-widest hover:text-brand-dark transition-colors"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
