import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, Landmark, Wallet } from 'lucide-react';

export default function Financing() {
  const [amount, setAmount] = useState(25000000);
  const [months, setMonths] = useState(36);
  const interestRate = 0.15; // 15% annual interest

  const monthlyPayment = (amount * (1 + interestRate)) / months;

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-4">Flexible Financing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Owning a Chery has never been easier. We offer competitive rates and flexible payment plans tailored to your budget.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Calculator */}
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-brand-red p-3 rounded-2xl text-white">
                <Calculator size={32} />
              </div>
              <h2 className="text-3xl">Payment Calculator</h2>
            </div>

            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-bold">Estimated Loan Amount (₦)</label>
                  <span className="text-brand-red font-black">₦{amount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000000" 
                  max="60000000" 
                  step="1000000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-red"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-bold">Tenure (Months)</label>
                  <span className="text-brand-red font-black">{months} Months</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[12, 24, 36, 48, 60].map(m => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-3 rounded-2xl font-bold transition-all ${months === m ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {m}m
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <p className="text-gray-500 mb-2 font-bold uppercase tracking-widest text-xs">Estimated Monthly Payment</p>
                <p className="text-5xl md:text-6xl font-black text-brand-dark">₦{Math.round(monthlyPayment).toLocaleString()}</p>
                <p className="text-sm text-gray-400 mt-4">*Interest rate estimated at 15% APR. Final rates subject to bank approval.</p>
              </div>
            </div>
          </div>

          {/* Partners & Form */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl mb-8">Our Banking Partners</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Landmark size={40} className="text-brand-red mb-4" />
                  <p className="font-bold">Access Bank</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Wallet size={40} className="text-brand-red mb-4" />
                  <p className="font-bold">Zenith Bank</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark text-white p-10 md:p-16 rounded-[40px] shadow-2xl">
              <h3 className="text-3xl mb-6">Check Eligibility</h3>
              <p className="text-gray-400 mb-10">Submit your details and get a pre-approval in 24 hours.</p>
              <form className="space-y-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red text-white" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red text-white" />
                <select className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red text-white">
                  <option className="text-brand-dark">Employment Type</option>
                  <option className="text-brand-dark">Salaried</option>
                  <option className="text-brand-dark">Self-Employed</option>
                </select>
                <button className="btn-primary w-full py-5 text-xl">
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
