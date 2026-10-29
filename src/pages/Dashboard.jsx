import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  getScanHistory, 
  getDashboardMetrics, 
  clearScanHistory, 
  deleteScanRecord 
} from '../utils/storage';
import { WASTE_CATEGORIES } from '../utils/wasteCategories';
import { 
  BarChart3, 
  Recycle, 
  Trash2, 
  Leaf, 
  Cpu, 
  Download, 
  Clock, 
  Eye, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  ArrowUpRight,
  Sparkles,
  Info
} from 'lucide-react';

export default function Dashboard({ setActivePage }) {
  const [history, setHistory] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [selectedScanModal, setSelectedScanModal] = useState(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Load history & calculate metrics
  const refreshData = () => {
    const scans = getScanHistory();
    setHistory(scans);
    setMetrics(getDashboardMetrics(scans));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleClear = () => {
    clearScanHistory();
    setShowClearConfirm(false);
    refreshData();
  };

  const handleDeleteItem = (id, e) => {
    e.stopPropagation();
    deleteScanRecord(id);
    refreshData();
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(history, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `waste_segregation_history_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!metrics) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Segregation Analytics & History</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Waste Segregation Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Real-time breakdown of logged waste items, recyclability rates, and illustrated environmental impacts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {history.length > 0 && (
            <>
              <button
                onClick={handleExportJson}
                className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
                title="Export scan logs as JSON"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Export JSON</span>
              </button>

              <button
                onClick={() => setShowClearConfirm(true)}
                className="px-3.5 py-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                <span>Clear History</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Confirmation Modal for Clear History */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl border border-slate-200 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Clear Scan History?</h3>
              <p className="text-xs text-slate-500 mt-1">
                This will delete all saved scan records from your browser's LocalStorage. This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs"
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Key Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Total Scanned */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Total Scanned</span>
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">
            {metrics.totalScans}
          </div>
          <p className="text-xs text-slate-500">
            Items processed through vision classifier
          </p>
        </div>

        {/* Recyclables Diverted */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-emerald-200/90 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-emerald-600">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Recyclable Items</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Recycle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-emerald-700">
            {metrics.recyclableCount}
          </div>
          <p className="text-xs text-emerald-800 font-medium">
            Dry plastic, paper, metal & glass items
          </p>
        </div>

        {/* Compostable Wet Biomass */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Compostable</span>
            <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">
            {metrics.compostableCount}
          </div>
          <p className="text-xs text-slate-500">
            Biodegradable organic & kitchen scraps
          </p>
        </div>

        {/* Landfill Diversion Rate */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Diversion Rate</span>
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-teal-700">
            {metrics.diversionRate}%
          </div>
          <p className="text-xs text-slate-500">
            Saved from general municipal landfill
          </p>
        </div>

      </div>

      {/* Recharts Analytics Section */}
      {history.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Donut Chart: Stream Distribution */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Material Stream Distribution
              </h3>
              <p className="text-xs text-slate-500">
                Relative proportion of identified waste categories in LocalStorage history
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={metrics.distribution.filter((d) => d.count > 0)}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="count"
                  >
                    {metrics.distribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name, props) => [`${value} item(s)`, props.payload.name]}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="circle"
                    wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart: Counts by Category */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Category Item Frequency
              </h3>
              <p className="text-xs text-slate-500">
                Count of scanned items per individual waste classification stream
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metrics.distribution}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 10, fill: '#64748b' }} 
                    interval={0}
                    angle={-25}
                    textAnchor="end"
                    height={45}
                  />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip 
                    formatter={(val) => [`${val} items`, 'Scanned']}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                    {metrics.distribution.map((entry, index) => (
                      <Cell key={`bar-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      ) : null}

      {/* Illustrative Academic Environmental Impact Metrics Card */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-mint-50 rounded-3xl border border-emerald-200/80 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-emerald-700" />
            <h3 className="text-lg font-bold text-emerald-950">
              Estimated Environmental Benefits
            </h3>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider bg-white/80 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300">
            Illustrative EVS Model Only
          </span>
        </div>

        <p className="text-xs text-emerald-900/80 leading-relaxed max-w-3xl">
          {metrics.impact.modelNote} In accordance with scientific integrity guidelines, these values reflect hypothetical reductions based on average material recovery factors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-emerald-200">
            <div className="text-xs font-semibold text-slate-500 uppercase">
              Illustrative Landfill Space Saved
            </div>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">
              ~{metrics.impact.estimatedLandfillSavedLiters} Liters
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Estimated volume diverted through proper compaction & sorting
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-emerald-200">
            <div className="text-xs font-semibold text-slate-500 uppercase">
              Illustrative CO₂ Reduction
            </div>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">
              ~{metrics.impact.estimatedCo2SavedKg} kg CO₂e
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Equivalent emissions avoided vs raw extraction & landfill rot
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-emerald-200">
            <div className="text-xs font-semibold text-slate-500 uppercase">
              Estimated Waste Mass Segregated
            </div>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">
              ~{metrics.impact.estimatedWeightKg} kg
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Calculated at average baseline weight of 150g per item
            </p>
          </div>
        </div>
      </div>

      {/* Recent Scan History Feed & Empty State */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Scan History Records ({history.length})
          </h3>
          <span className="text-xs text-slate-500">
            Persisted securely in browser LocalStorage
          </span>
        </div>

        {history.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Recycle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-slate-800">No Waste Scans Recorded Yet</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Scan your first discarded object or load a sample test item to view your segregation statistics here.
              </p>
            </div>
            <div>
              <button
                onClick={() => setActivePage('scanner')}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
              >
                Launch Waste Scanner
              </button>
            </div>
          </div>
        ) : (
          /* History Table / Grid */
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {history.map((item) => {
                const cat = WASTE_CATEGORIES[item.categoryId] || WASTE_CATEGORIES.residual;
                const formattedTime = new Date(item.timestamp).toLocaleString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                });

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedScanModal(item)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Thumbnail */}
                      <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                        {item.thumbnail ? (
                          <img 
                            src={item.thumbnail} 
                            alt={item.rawLabel} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <Recycle className="w-5 h-5" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 truncate">
                            {item.rawLabel || cat.name}
                          </h4>
                          <span 
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full border hidden sm:inline"
                            style={{ 
                              backgroundColor: cat.lightColor, 
                              borderColor: cat.borderColor, 
                              color: cat.textColor 
                            }}
                          >
                            {cat.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formattedTime}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:inline">
                            Confidence: {Math.round(item.confidence * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span 
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg border hidden md:inline"
                        style={{ 
                          backgroundColor: cat.lightColor, 
                          color: cat.textColor,
                          borderColor: cat.borderColor
                        }}
                      >
                        {item.binRecommendation || cat.binColorName}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => handleDeleteItem(item.id, e)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Delete this record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <Eye className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Item Details View Modal */}
      {selectedScanModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95">
            <div className="relative h-48 bg-slate-900">
              {selectedScanModal.thumbnail && (
                <img 
                  src={selectedScanModal.thumbnail} 
                  alt={selectedScanModal.rawLabel} 
                  className="w-full h-full object-cover" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedScanModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {selectedScanModal.categoryName}
                </span>
                <h3 className="text-xl font-bold">{selectedScanModal.rawLabel}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 text-xs block">Model Confidence</span>
                  <span className="font-bold text-slate-900 text-sm">
                    {Math.round(selectedScanModal.confidence * 100)}%
                  </span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 text-xs block">Recommended Bin</span>
                  <span className="font-bold text-slate-900 text-sm">
                    {selectedScanModal.binRecommendation || 'General'}
                  </span>
                </div>
              </div>

              {selectedScanModal.notes && (
                <div className="bg-emerald-50/70 border border-emerald-200 p-3 rounded-xl text-emerald-950">
                  <span className="font-bold block mb-1">Disposal Notes:</span>
                  <p>{selectedScanModal.notes}</p>
                </div>
              )}

              <div className="text-slate-400 text-xs flex items-center justify-between pt-2 border-t border-slate-100">
                <span>Engine: {selectedScanModal.engine}</span>
                <span>ID: {selectedScanModal.id}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedScanModal(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-900"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
