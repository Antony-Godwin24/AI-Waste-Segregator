import React, { useState } from 'react';
import WasteCategoryCard from '../components/WasteCategoryCard';
import { WASTE_CATEGORIES, MUNICIPAL_STANDARDS } from '../utils/wasteCategories';
import { Layers, Globe, Filter, Sparkles, CheckCircle, Info } from 'lucide-react';

export default function Categories({ onSelectCategoryForTesting }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const allCategories = Object.values(WASTE_CATEGORIES);

  const filteredCategories = allCategories.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'recyclable') return cat.recyclableStatus === 'commonly_recyclable';
    if (activeFilter === 'compostable') return cat.recyclableStatus === 'compostable';
    if (activeFilter === 'hazardous') return cat.recyclableStatus === 'hazardous_handling';
    if (activeFilter === 'residual') return cat.recyclableStatus === 'residual_disposal';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          <span>Waste Stream Taxonomy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Waste Category Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Detailed material properties, preparation steps, common segregation errors, and international recycling identifiers for all 7 standard waste streams.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {[
            { id: 'all', label: 'All Streams (7)' },
            { id: 'recyclable', label: 'Recyclables (4)' },
            { id: 'compostable', label: 'Compostable Wet (1)' },
            { id: 'hazardous', label: 'E-Waste & Hazardous (1)' },
            { id: 'residual', label: 'Residual Non-Recyclable (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCategories.map((category) => (
          <WasteCategoryCard
            key={category.id}
            category={category}
            onSelectForTesting={onSelectCategoryForTesting}
          />
        ))}
      </div>

      {/* Municipal Bin Standards Reference Section */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Comparative Municipal Bin Standards
              </h3>
              <p className="text-xs text-slate-500">
                Bin colors are municipal conventions, not universal physics. Here is how major jurisdictions organize their bins.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 text-amber-900 px-3 py-1.5 rounded-xl text-xs flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Configurable municipal guideline disclaimer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MUNICIPAL_STANDARDS.map((std, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-base">
                  {std.region}
                </h4>
                <p className="text-xs text-slate-600">
                  {std.description}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {std.streams.map((stream, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                    <span 
                      className="w-3.5 h-3.5 rounded-full shrink-0 mt-0.5" 
                      style={{ backgroundColor: stream.code }} 
                    />
                    <div>
                      <span className="font-bold text-slate-800">{stream.color}: </span>
                      <span className="text-slate-600">{stream.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
