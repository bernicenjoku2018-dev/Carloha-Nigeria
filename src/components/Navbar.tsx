import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Car, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/#vehicles' },
    { name: 'Financing', path: '/financing' },
    { name: 'Trade-In', path: '/trade-in' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-red p-1.5 rounded-lg">
              <Car className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-brand-dark">CARLOHA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand-red",
                  location.pathname === link.path ? "text-brand-red" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Book Test Drive
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-brand-dark hover:bg-gray-50 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                  Book Test Drive
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
