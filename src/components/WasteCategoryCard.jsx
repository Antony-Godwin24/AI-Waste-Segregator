import React, { useState } from 'react';
import { 
  Package, 
  FileText, 
  Shield, 
  Wine, 
  Apple, 
  Trash2, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Info, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from 'lucide-react';

const ICON_MAP = {
  Package,
  FileText,
  Shield,
  Wine,
  Apple,
  Trash2,
  Cpu
};

export default function WasteCategoryCard({ category, onSelectForTesting }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = ICON_MAP[category.iconName] || Package;

  return (
    <div 
      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:border-emerald-300"
    >
      {/* Category Header Bar with Image Background or Color Accent */}
      <div 
        className="h-36 sm:h-40 w-full relative overflow-hidden flex items-end p-4"
        style={{
          background: `linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%), url(${category.sampleImage}) center/cover no-repeat`
        }}
      >
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md backdrop-blur-md"
            style={{ backgroundColor: category.color }}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <span 
            className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white backdrop-blur-md shadow-xs"
            style={{ backgroundColor: `${category.color}dd` }}
          >
            {category.recyclableType}
          </span>
        </div>

        <div className="relative z-10 text-white">
          <h3 className="text-xl font-bold tracking-tight">{category.name}</h3>
          <p className="text-xs text-slate-200 line-clamp-1">{category.tagline}</p>
        </div>
      </div>

      {/* Body content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Recommended Bin Pill & Decomposition Time */}
        <div className="flex flex-wrap items-center gap-2">
          <span 
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border"
            style={{ 
              backgroundColor: category.lightColor, 
              borderColor: category.borderColor,
              color: category.textColor 
            }}
          >
            <span 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: category.binHex }} 
            />
            {category.binColorName}
          </span>

          <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium px-2 py-1 bg-slate-100 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{category.decompositionTime}</span>
          </span>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {category.description}
        </p>

        {/* Common Items Preview */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Common Items
          </h4>
          <ul className="space-y-1">
            {category.examples.slice(0, 3).map((ex, i) => (
              <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate">{ex}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Deep-Dive Section */}
        {isExpanded && (
          <div className="pt-3 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
            {/* More examples */}
            {category.examples.length > 3 && (
              <div>
                <h5 className="text-xs font-bold text-slate-500 uppercase mb-1">
                  Additional Examples
                </h5>
                <ul className="space-y-1">
                  {category.examples.slice(3).map((ex, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Preparation Steps */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Disposal & Preparation Guidelines</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {category.preparationSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="font-semibold text-emerald-700 shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Mistakes */}
            <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Mistakes to Avoid</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {category.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold shrink-0">•</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Environmental Tip */}
            <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 italic border border-slate-200/60">
              <span className="font-bold not-italic text-slate-800 block mb-1">
                EVS Impact Tip:
              </span>
              "{category.environmentalTip}"
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors py-1.5"
          >
            <span>{isExpanded ? 'Show Less' : 'Full Guidelines'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {onSelectForTesting && (
            <button
              onClick={() => onSelectForTesting(category.id)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg border border-emerald-200 transition-all flex items-center gap-1"
              title="Test this category in Scanner"
            >
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Test Category</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
