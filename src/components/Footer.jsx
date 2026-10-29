import React from 'react';
import { Recycle, Heart, ShieldCheck, ExternalLink, Leaf } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Recycle className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                EcoSort<span className="text-emerald-400">CV</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An Environmental Studies (EVS) academic project demonstrating how Convolutional Computer Vision assists in household and institutional waste segregation, circular resource recovery, and landfill diversion.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-lg px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Academic EVS Project Demonstration | Zero Commercial Tracking</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Application
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => { setActivePage('scanner'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Waste Scanner
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('categories'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Waste Categories Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Segregation Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Project Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* EVS Principles */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Core EVS Principles
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Source Segregation</span>
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Landfill Methane Reduction</span>
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Circular Economy & Recycling</span>
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hazardous E-Waste Isolation</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Intelligent Waste Segregation Using Computer Vision. Developed for College EVS Curriculum.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Smarter Sorting. Cleaner Tomorrow.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
