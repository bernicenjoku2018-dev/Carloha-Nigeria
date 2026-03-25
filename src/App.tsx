/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VehicleDetail from './pages/VehicleDetail';
import Financing from './pages/Financing';
import TradeIn from './pages/TradeIn';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatAssistant from './components/AIChatAssistant';
import ExitIntentPopup from './components/ExitIntentPopup';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/trade-in" element={<TradeIn />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <AIChatAssistant />
        <ExitIntentPopup />
      </div>
    </Router>
  );
}
