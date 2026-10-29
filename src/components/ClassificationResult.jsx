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
  Sparkles, 
  RotateCcw, 
  Bookmark, 
  BookmarkCheck, 
  Info, 
  AlertCircle, 
  Leaf, 
  Timer,
  ExternalLink
} from 'lucide-react';
import { WASTE_CATEGORIES } from '../utils/wasteCategories';

const ICON_MAP = {
  Package,
  FileText,
  Shield,
  Wine,
  Apple,
  Trash2,
  Cpu
};

export default function ClassificationResult({ 
  result, 
  imageSrc, 
  onReset, 
  onSave, 
  isSaved,
  onManualOverride
}) {
  const [showOverrideMenu, setShowOverrideMenu] = useState(false);

  if (!result || !result.category) return null;

  const category = result.category;
  const IconComponent = ICON_MAP[category.iconName] || Package;
  const confidencePercent = Math.round((result.confidence || 0.85) * 100);

  // Recyclability badge configuration
  const getBadgeConfig = () => {
    switch (category.recyclableStatus) {
      case 'commonly_recyclable':
        return {
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          label: 'Commonly Recyclable',
          dot: 'bg-emerald-500'
        };
      case 'compostable':
        return {
          bg: 'bg-green-100 text-green-800 border-green-200',
          label: '100% Compostable (Wet Biomass)',
          dot: 'bg-green-600'
        };
      case 'hazardous_handling':
        return {
          bg: 'bg-rose-100 text-rose-800 border-rose-200',
          label: 'Requires Special Hazardous Handling',
          dot: 'bg-rose-600'
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-800 border-slate-200',
          label: 'Non-Recyclable / Residual Refuse',
          dot: 'bg-slate-500'
        };
    }
  };

  const badgeConfig = getBadgeConfig();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
      
      {/* Top Banner Accent */}
      <div 
        className="px-6 py-4 text-white flex flex-wrap items-center justify-between gap-3"
        style={{
          background: `linear-gradient(135deg, ${category.color} 0%, #0f172a 120%)`
        }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-bold text-sm tracking-wide uppercase">
            Computer Vision Analysis Complete
          </span>
        </div>

        {/* Engine Transparency Pill */}
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/20">
          <span className={`w-2 h-2 rounded-full ${result.isRealAi ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
          <span>{result.engine || 'Vision Engine'}</span>
          {result.latencyMs && (
            <span className="text-white/70 border-l border-white/20 pl-2 flex items-center gap-1">
              <Timer className="w-3 h-3" />
              {result.latencyMs}ms
            </span>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Main Header Result with Thumbnail & Detected Category */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-100">
          
          {/* Image Thumbnail */}
          {imageSrc && (
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-md shrink-0 bg-slate-100 relative group">
              <img 
                src={imageSrc} 
                alt="Classified waste item" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-emerald-950/20 group-hover:opacity-0 transition-opacity" />
            </div>
          )}

          {/* Classification Title & Confidence */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${badgeConfig.bg}`}>
                <span className={`w-2 h-2 rounded-full ${badgeConfig.dot}`} />
                {badgeConfig.label}
              </span>

              {result.rawLabel && (
                <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  Detected: <strong className="text-slate-800">{result.rawLabel}</strong>
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                style={{ backgroundColor: category.color }}
              >
                <IconComponent className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {category.name}
              </h2>
            </div>

            {/* Confidence Bar */}
            <div className="space-y-1 pt-1 max-w-md">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500">Model Confidence</span>
                <span className="text-emerald-700 font-bold">{confidencePercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ 
                    width: `${confidencePercent}%`,
                    backgroundColor: category.color
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* 2-Column Grid: Bin Recommendation & Preparation Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Bin Recommendation Box */}
          <div 
            className="rounded-2xl p-5 border flex flex-col justify-between space-y-4"
            style={{ 
              backgroundColor: category.lightColor, 
              borderColor: category.borderColor 
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="w-4 h-4 rounded-full shadow-xs" 
                  style={{ backgroundColor: category.binHex }} 
                />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Recommended Disposal Bin
                </span>
              </div>
              <div className="text-xl font-extrabold text-slate-900">
                {category.binColorName}
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Deposit this item into the designated dry/wet segregated bin.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xs rounded-xl p-3 border border-slate-200/50 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-800 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-emerald-600" />
                <span>Municipal Notice</span>
              </div>
              <p className="text-[11px] leading-snug">
                Bin color codes can vary across municipalities (e.g. India Swachh Bharat vs EU). Always follow local community guidelines.
              </p>
            </div>
          </div>

          {/* Step-by-Step Disposal Action Plan */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Recommended Action Steps</span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {category.preparationSteps.slice(0, 3).map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Environmental Tip Card */}
        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Leaf className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              EVS Environmental Insight
            </h4>
            <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed">
              {category.environmentalTip}
            </p>
          </div>
        </div>

        {/* Optional Manual Correction Drawer for Viva / Demonstration */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Result not what you expected?</span>
            <button
              onClick={() => setShowOverrideMenu(!showOverrideMenu)}
              className="text-emerald-700 font-bold hover:underline"
            >
              {showOverrideMenu ? 'Hide correction options' : 'Manually adjust category'}
            </button>
          </div>

          {result.reasoning && (
            <span className="italic text-slate-500 text-center sm:text-right">
              {result.reasoning}
            </span>
          )}
        </div>

        {showOverrideMenu && (
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 animate-in fade-in duration-200">
            <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Select correct category for demonstration:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.values(WASTE_CATEGORIES).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (onManualOverride) onManualOverride(cat.id);
                    setShowOverrideMenu(false);
                  }}
                  className={`text-xs font-medium p-2 rounded-xl border text-left flex items-center gap-2 transition-all ${
                    cat.id === category.id 
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                      : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="truncate">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons: Save & Scan Another */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={onReset}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>Scan Another Item</span>
          </button>

          <button
            onClick={onSave}
            disabled={isSaved}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
              isSaved
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-none cursor-default'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25 active:scale-95'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-emerald-700" />
                <span>Saved to Dashboard</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-white" />
                <span>Save to Scan History</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
