import React from 'react';
import { 
  Sparkles, 
  ScanLine, 
  ArrowRight, 
  CheckCircle2, 
  Recycle, 
  ShieldCheck, 
  TrendingUp, 
  Leaf, 
  Cpu, 
  Layers, 
  Clock, 
  ChevronRight,
  Info
} from 'lucide-react';
import { WASTE_CATEGORIES } from '../utils/wasteCategories';

export default function Home({ setActivePage, onSelectCategoryForTesting }) {
  const categoriesList = Object.values(WASTE_CATEGORIES);

  return (
    <div className="space-y-20 pb-12 animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24">
        {/* Soft emerald radial glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/50 via-mint-50/30 to-transparent pointer-events-none rounded-b-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold border border-emerald-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>College Environmental Studies (EVS) Academic Project</span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Intelligent Waste Segregation <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-forest-700 to-teal-700">
                Using Computer Vision
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-800 font-medium">
              “Smarter Sorting. Cleaner Tomorrow.”
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Empowering communities with automated waste classification, immediate recycling guidance, and accurate municipal disposal rules powered by deep learning vision algorithms.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setActivePage('scanner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
            >
              <ScanLine className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Scan Your Waste</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                setActivePage('categories');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-xs hover:border-slate-400 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-5 h-5 text-emerald-600" />
              <span>Explore Waste Categories</span>
            </button>
          </div>

          {/* Trust & EVS Highlights */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-2xl font-extrabold text-emerald-700">7 Streams</div>
              <div className="text-xs text-slate-500 font-medium">Standard Waste Classes</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-2xl font-extrabold text-emerald-700">In-Browser</div>
              <div className="text-xs text-slate-500 font-medium">Real-Time CV Inference</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-2xl font-extrabold text-emerald-700">100% Private</div>
              <div className="text-xs text-slate-500 font-medium">Zero Image Upload to Cloud</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-2xl font-extrabold text-emerald-700">Academic</div>
              <div className="text-xs text-slate-500 font-medium">EVS Presentation Ready</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3-Step Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Three Steps to Smarter Segregation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Combining optical pattern recognition with environmental science to eliminate landfill contamination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative group hover:border-emerald-300 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-extrabold text-xl mb-6 shadow-inner">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Upload or Snap Image</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Take a photo of any discarded item—bottle, paper carton, food peel, or electronic cable—or choose from our interactive preloaded test gallery.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>Supports JPG, PNG, WEBP & 1-Click Samples</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-md relative group hover:border-emerald-400 transition-all ring-1 ring-emerald-500/10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-md shadow-emerald-600/30">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">AI Visual Classification</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Convolutional neural networks extract geometric and material features directly inside your browser to predict item category with high precision.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Cpu className="w-4 h-4" />
              <span>MobileNet v2 Deep Learning Architecture</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative group hover:border-emerald-300 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-extrabold text-xl mb-6 shadow-inner">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Dispose Responsibly</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Receive instant preparation advice (rinse, crush, dismantle caps) and identify the right color-coded municipal bin to maximize circular recycling.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Recycle className="w-4 h-4" />
              <span>Aligned with Swachh Bharat & EU Standards</span>
            </div>
          </div>

        </div>
      </section>

      {/* Waste Category Explorer Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Material Taxonomy
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Recognized Waste Streams
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Click any stream to review preparation rules or test sample items.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('categories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>View All Detailed Guidelines</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.slice(0, 4).map((category) => (
            <div
              key={category.id}
              onClick={() => {
                setActivePage('categories');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer group hover:border-emerald-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: category.color }}
                  >
                    <Recycle className="w-5 h-5" />
                  </div>
                  <span 
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ 
                      backgroundColor: category.lightColor, 
                      color: category.textColor,
                      borderColor: category.borderColor
                    }}
                  >
                    {category.recyclableType}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {category.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{category.binColorName}</span>
                <span className="text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental Awareness & EVS Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-forest-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Leaf className="w-3.5 h-3.5" />
              <span>Why Waste Segregation Matters</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Unsegregated Waste is the #1 Barrier to a Circular Economy
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When food scraps touch dry paper or cardboard, the cellulose fibers degrade and become unrecyclable. When batteries end up in general trash, dangerous lead and cadmium leach into our groundwater. Segregating waste at source rescues up to 80% of urban refuse from open landfills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="text-emerald-400 font-extrabold text-2xl">Methane Control</div>
                <p className="text-xs text-slate-300 mt-1">
                  Organic composting eliminates anaerobic landfill fermentation, cutting powerful methane emissions.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="text-emerald-400 font-extrabold text-2xl">Resource Conservation</div>
                <p className="text-xs text-slate-300 mt-1">
                  Recycling 1 ton of aluminum saves 95% of electrical energy compared to primary bauxite mining.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => {
                  setActivePage('scanner');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>Try the Waste Scanner Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
