import React from 'react';
import { 
  Info, 
  Leaf, 
  Cpu, 
  Recycle, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function About({ setActivePage }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>EVS Academic Project Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Intelligent Waste Segregation Using Computer Vision
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive project report detailing the environmental crisis, the role of optical machine learning, system architecture, and academic defense guidelines.
        </p>
      </div>

      {/* 1. The Environmental Problem */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              1. The Environmental Problem Being Addressed
            </h2>
            <p className="text-xs text-slate-500">
              Municipal Solid Waste (MSW) crisis and cross-contamination
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Global municipal solid waste generation currently exceeds <strong>2.01 billion tonnes annually</strong>, with at least 33 percent not managed in an environmentally safe manner. In urban areas, municipal authorities face overflowing landfills, soil degradation, and toxic groundwater contamination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-4 space-y-1.5">
              <h4 className="font-bold text-rose-900 text-xs uppercase tracking-wider">
                Cross-Contamination
              </h4>
              <p className="text-xs text-rose-950/80">
                When wet organic food waste mixes with clean paper or cardboard, oily residues saturate cellulose fibers, turning tons of recyclable paper into unrecoverable garbage.
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-4 space-y-1.5">
              <h4 className="font-bold text-amber-900 text-xs uppercase tracking-wider">
                Methane Emissions
              </h4>
              <p className="text-xs text-amber-950/80">
                Organic matter packed tightly in oxygen-deprived landfills undergoes anaerobic decomposition, releasing methane—a greenhouse gas with 28x the global warming potential of CO₂.
              </p>
            </div>

            <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-4 space-y-1.5">
              <h4 className="font-bold text-purple-900 text-xs uppercase tracking-wider">
                Heavy Metal Poisoning
              </h4>
              <p className="text-xs text-purple-950/80">
                Discarded electronics and lithium batteries crushed in regular trash trucks leach neurotoxins like lead, mercury, and cadmium into nearby soil and drinking water aquifers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. What Waste Segregation Means */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Recycle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              2. What Waste Segregation Means
            </h2>
            <p className="text-xs text-slate-500">
              Separation at source vs centralized recovery
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>Source Segregation</strong> refers to separating waste at the point of generation (homes, university campuses, offices, hospitals) into distinct categories before it is collected by municipal services.
          </p>

          <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-2">
            <div className="font-bold text-emerald-900 text-xs uppercase tracking-wider">
              The 5 R's Environmental Hierarchy
            </div>
            <p className="text-xs text-emerald-900/80">
              <strong>Refuse</strong> unnecessary single-use packaging → <strong>Reduce</strong> overall consumption → <strong>Reuse</strong> durable items → <strong>Repurpose</strong> discarded containers → <strong>Recycle</strong> segregated high-purity streams.
            </p>
          </div>
        </div>
      </div>

      {/* 3. How Computer Vision Helps */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              3. The Role of Computer Vision in Waste Segregation
            </h2>
            <p className="text-xs text-slate-500">
              Edge visual inference and optical material identification
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Human error and confusion about bin color codes are the primary bottlenecks in domestic waste segregation. Computer vision bridges this gap by providing an instant, automated second opinion:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-2xl p-4 space-y-2">
              <span className="font-bold text-slate-900 text-xs block">
                Visual Feature Extraction
              </span>
              <p className="text-xs text-slate-600">
                Deep Convolutional Neural Networks (CNNs) analyze patterns, edges, textures, transparency, and specular highlights (e.g. metal shine, plastic reflectivity, corrugated cardboard grain).
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-4 space-y-2">
              <span className="font-bold text-slate-900 text-xs block">
                Edge In-Browser Inference
              </span>
              <p className="text-xs text-slate-600">
                Running lightweight architectures like MobileNet directly on the client machine guarantees user privacy, zero server egress costs, and real-time response times without bandwidth lag.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Application Architecture Workflow */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              4. System Architecture & Workflow
            </h2>
            <p className="text-xs text-slate-500">
              End-to-end data processing pipeline
            </p>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex-1 w-full">
              <div className="font-bold text-xs text-emerald-700 uppercase">Input</div>
              <div className="font-semibold text-slate-800 text-sm mt-1">Image Capture</div>
              <div className="text-[11px] text-slate-500">Photo / Drag-drop file</div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 md:rotate-0" />

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex-1 w-full">
              <div className="font-bold text-xs text-emerald-700 uppercase">Preprocessing</div>
              <div className="font-semibold text-slate-800 text-sm mt-1">Canvas Tensor</div>
              <div className="text-[11px] text-slate-500">224x224 RGB Normalization</div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 md:rotate-0" />

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex-1 w-full">
              <div className="font-bold text-xs text-emerald-700 uppercase">Inference</div>
              <div className="font-semibold text-slate-800 text-sm mt-1">MobileNet v2</div>
              <div className="text-[11px] text-slate-500">TensorFlow.js Engine</div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 md:rotate-0" />

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex-1 w-full">
              <div className="font-bold text-xs text-emerald-700 uppercase">Policy Dispatch</div>
              <div className="font-semibold text-slate-800 text-sm mt-1">7 Waste Streams</div>
              <div className="text-[11px] text-slate-500">Bin Guide + LocalStorage</div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. Limitations & Ethical AI Principles */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              5. Scientific Scope & Technical Limitations
            </h2>
            <p className="text-xs text-slate-500">
              Academic honesty and computer vision challenges
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong>Composite Materials:</strong> Multi-layer pouches (e.g. aluminum foil bonded with plastic film) present deceptive optical textures that can confuse purely external optical models.
            </li>
            <li>
              <strong>Contamination Occlusion:</strong> Items covered with dirt, mud, or grease may have obscured surface textures, lowering confidence scores.
            </li>
            <li>
              <strong>Lighting and Camera Angle:</strong> Transparent plastics (PET bottles) photographed against complex backgrounds can produce refraction artifacts.
            </li>
            <li>
              <strong>Regulatory Diversity:</strong> Because bin colors differ by municipality, recommendations must be adapted to local municipal bylaws.
            </li>
          </ul>
        </div>
      </div>

      {/* 6. Viva Presentation Guide for Students */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex items-center gap-3 pb-3 border-b border-emerald-200">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-emerald-950">
              6. Student Presentation & Viva Defense Quick Guide
            </h2>
            <p className="text-xs text-emerald-800">
              Common questions external examiners ask and how to answer them
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-2xs space-y-1">
            <h4 className="font-bold text-xs text-emerald-900">
              Q: "Why use Computer Vision instead of barcode scanners or RFID tags?"
            </h4>
            <p className="text-xs text-slate-600">
              <strong>Answer:</strong> Barcodes and RFID require pre-tagged industrial packaging and become unreadable when crumpled, torn, or wet. Computer vision inspects organic food scraps, crushed cans, and untagged bulk items seamlessly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-2xs space-y-1">
            <h4 className="font-bold text-xs text-emerald-900">
              Q: "How does this application handle private user images?"
            </h4>
            <p className="text-xs text-slate-600">
              <strong>Answer:</strong> Image classification executes entirely on the user's browser device through client-side TensorFlow.js MobileNet weights. No user photos are ever stored on a remote server.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-2xs space-y-1">
            <h4 className="font-bold text-xs text-emerald-900">
              Q: "How can this project be scaled into a smart city infrastructure?"
            </h4>
            <p className="text-xs text-slate-600">
              <strong>Answer:</strong> The vision pipeline can be integrated into Raspberry Pi cameras fitted on smart municipal trash bins that automatically open the correct compartment chute upon optical detection.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
