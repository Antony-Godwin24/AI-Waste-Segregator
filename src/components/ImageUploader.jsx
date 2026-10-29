import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  X, 
  Sparkles, 
  AlertCircle, 
  CheckCircle, 
  Cpu, 
  HelpCircle,
  Eye,
  RefreshCw,
  Camera
} from 'lucide-react';
import { SAMPLE_TEST_ITEMS, WASTE_CATEGORIES } from '../utils/wasteCategories';

export default function ImageUploader({ 
  onAnalyze, 
  isAnalyzing, 
  activeEngine, 
  setActiveEngine 
}) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedSampleId, setSelectedSampleId] = useState(null);
  const [manualCategory, setManualCategory] = useState('plastic');
  const [analysisStep, setAnalysisStep] = useState(0);

  const fileInputRef = useRef(null);
  const imageElementRef = useRef(null);

  // Analysis step progress simulation during analysis
  useEffect(() => {
    let interval;
    if (isAnalyzing) {
      setAnalysisStep(1);
      interval = setInterval(() => {
        setAnalysisStep((prev) => (prev < 4 ? prev + 1 : prev));
      }, 350);
    } else {
      setAnalysisStep(0);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  // Handle file validation and loading
  const processFile = (file) => {
    setErrorMessage('');
    if (!file) return;

    // Validate type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setErrorMessage('Please upload a valid image file (JPG, PNG, or WEBP).');
      return;
    }

    // Validate size (10 MB limit)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrorMessage('Image size exceeds 10MB limit. Please choose a smaller photo.');
      return;
    }

    setImageFile(file);
    setSelectedSampleId(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Drag handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleSelectSample = (sample) => {
    setErrorMessage('');
    setSelectedSampleId(sample.id);
    setSelectedImage(sample.imageUrl);
    setImageFile(null);
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setImageFile(null);
    setSelectedSampleId(null);
    setErrorMessage('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleTriggerAnalysis = () => {
    if (!selectedImage) return;

    onAnalyze({
      imageElement: imageElementRef.current,
      imageSrc: selectedImage,
      sampleItemId: selectedSampleId,
      manualCategory: activeEngine === 'manual' ? manualCategory : null,
      activeEngine
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-6">
      
      {/* Mode Switcher Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Waste Scanner & Analysis Engine
          </h3>
          <p className="text-xs text-slate-500">
            Upload or pick a test item to classify material and get municipal disposal instructions.
          </p>
        </div>

        {/* Engine selector tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold self-stretch sm:self-auto overflow-x-auto">
          <button
            onClick={() => setActiveEngine('auto')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeEngine === 'auto'
                ? 'bg-white text-emerald-800 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI Real Vision (MobileNet)</span>
          </button>

          <button
            onClick={() => setActiveEngine('sample')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeEngine === 'sample'
                ? 'bg-white text-emerald-800 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Demo Test Samples</span>
          </button>

          <button
            onClick={() => setActiveEngine('manual')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeEngine === 'manual'
                ? 'bg-white text-emerald-800 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>Manual Test</span>
          </button>
        </div>
      </div>

      {/* Manual Mode Category Selector (Visible when Manual mode is picked) */}
      {activeEngine === 'manual' && (
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Classroom Manual Inspection Mode Active</span>
          </div>
          <p className="text-xs text-amber-900/80">
            Demonstrate rules for specific waste streams without relying on model inference:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            {Object.values(WASTE_CATEGORIES).map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setManualCategory(cat.id)}
                className={`text-xs p-2 rounded-xl border flex items-center gap-2 transition-all ${
                  manualCategory === cat.id
                    ? 'border-emerald-600 bg-white text-emerald-950 font-bold shadow-xs'
                    : 'border-amber-200/80 bg-white/60 text-slate-700 hover:bg-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <span className="truncate">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Test Samples Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-400">
            Quick Test Samples (Instant 1-Click Test)
          </span>
          <span className="text-slate-400">Click any item to load photo</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {SAMPLE_TEST_ITEMS.map((sample) => (
            <button
              key={sample.id}
              type="button"
              onClick={() => handleSelectSample(sample)}
              className={`p-2 rounded-xl border text-left flex flex-col items-center gap-1.5 transition-all group ${
                selectedSampleId === sample.id
                  ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <img 
                src={sample.imageUrl} 
                alt={sample.label}
                className="w-12 h-12 object-cover rounded-lg group-hover:scale-105 transition-transform" 
              />
              <span className="text-[11px] font-semibold text-slate-700 text-center leading-tight line-clamp-2">
                {sample.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Drag & Drop / Preview Zone */}
      <div className="space-y-4">
        {!selectedImage ? (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-4 ${
              dragActive 
                ? 'border-emerald-600 bg-emerald-50/50 scale-[0.99]' 
                : 'border-slate-300 hover:border-emerald-500 bg-slate-50/50 hover:bg-emerald-50/20'
            }`}
          >
            <input 
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/jpg"
              className="hidden"
              onChange={handleFileInputChange}
            />

            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <p className="text-base font-bold text-slate-800">
                Drag & drop your waste image here, or <span className="text-emerald-700 underline">browse files</span>
              </p>
              <p className="text-xs text-slate-500">
                Supports JPG, PNG, WEBP up to 10MB • Clear lighting gives highest accuracy
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-200/60">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Zero Cloud Uploads
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Private In-Browser Vision
              </span>
            </div>
          </div>
        ) : (
          /* Image Preview Card */
          <div className="relative rounded-3xl border-2 border-slate-200 overflow-hidden bg-slate-900 group">
            
            {/* Visual Scanline Animation during analysis */}
            {isAnalyzing && (
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 shadow-[0_0_15px_#10b981] animate-scanline" />
                <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-[1px]" />
              </div>
            )}

            {/* Hidden image element used by MobileNet to classify pixels directly */}
            <img 
              ref={imageElementRef}
              src={selectedImage} 
              alt="Waste preview"
              crossOrigin="anonymous"
              className="w-full max-h-[380px] object-contain mx-auto transition-transform duration-300"
            />

            {/* Top Toolbar overlay */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all"
                title="Change Image"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Change</span>
              </button>
              <input 
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/jpg"
                className="hidden"
                onChange={handleFileInputChange}
              />

              <button
                type="button"
                onClick={handleClearImage}
                className="bg-black/60 hover:bg-rose-600 backdrop-blur-md text-white p-2 rounded-xl transition-all"
                title="Remove Image"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom info badge */}
            <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>Image loaded & ready for vision inference</span>
            </div>
          </div>
        )}

        {/* Error message alert */}
        {errorMessage && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs flex items-center gap-2 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      {/* Multi-step progress indicator when analyzing */}
      {isAnalyzing && (
        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
            <span>Vision Classification Pipeline</span>
            <span>Step {analysisStep} of 4</span>
          </div>
          <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-600 h-full transition-all duration-300 ease-out" 
              style={{ width: `${(analysisStep / 4) * 100}%` }}
            />
          </div>
          <p className="text-xs text-emerald-800 italic">
            {analysisStep === 1 && '1. Preprocessing input tensor & normalizing resolution...'}
            {analysisStep === 2 && '2. Extracting deep convolutional feature maps...'}
            {analysisStep === 3 && '3. Matching ImageNet probability vector to waste taxonomy...'}
            {analysisStep >= 4 && '4. Formulating municipal disposal & recycling instructions...'}
          </p>
        </div>
      )}

      {/* Prominent Analyze Waste Action Button */}
      <div className="pt-2">
        <button
          type="button"
          disabled={!selectedImage || isAnalyzing}
          onClick={handleTriggerAnalysis}
          className={`w-full py-4 px-6 rounded-2xl font-extrabold text-base flex items-center justify-center gap-3 transition-all shadow-lg ${
            !selectedImage
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              : isAnalyzing
              ? 'bg-emerald-700 text-white cursor-wait opacity-90'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30 hover:shadow-emerald-600/40 active:scale-[0.99]'
          }`}
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin text-emerald-200" />
              <span>Analyzing Waste Features...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-emerald-200" />
              <span>Analyze Waste with Computer Vision</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
