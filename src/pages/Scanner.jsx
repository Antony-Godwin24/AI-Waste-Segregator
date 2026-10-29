import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import ImageUploader from '../components/ImageUploader';
import ClassificationResult from '../components/ClassificationResult';
import { classifyWasteImage } from '../services/classificationService';
import { saveScanRecord } from '../utils/storage';
import { WASTE_CATEGORIES } from '../utils/wasteCategories';
import { Sparkles, Info, ShieldCheck, Zap } from 'lucide-react';

export default function Scanner({ onScanSaved, preselectedCategoryId, onResetPreselected }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [activeEngine, setActiveEngine] = useState('auto'); // 'auto', 'sample', 'manual'

  // If redirected from Categories page with a preselected category
  React.useEffect(() => {
    if (preselectedCategoryId && WASTE_CATEGORIES[preselectedCategoryId]) {
      setActiveEngine('manual');
      if (onResetPreselected) onResetPreselected();
    }
  }, [preselectedCategoryId]);

  // Handle Trigger Analysis from Uploader
  const handleAnalyze = async (uploadPayload) => {
    try {
      setIsAnalyzing(true);
      setCurrentImageSrc(uploadPayload.imageSrc);
      setIsSaved(false);

      const result = await classifyWasteImage(uploadPayload);
      setClassificationResult(result);

      // Trigger eco-confetti celebration if recyclable or compostable
      if (
        result?.category?.recyclableStatus === 'commonly_recyclable' ||
        result?.category?.recyclableStatus === 'compostable'
      ) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#10b981', '#059669', '#34d399', '#6ee7b7']
        });
      }
    } catch (err) {
      console.error('Classification error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Handle Save to LocalStorage
  const handleSaveResult = async () => {
    if (!classificationResult || isSaved) return;

    const savedRecord = await saveScanRecord({
      categoryId: classificationResult.categoryId,
      imageUrl: currentImageSrc,
      rawLabel: classificationResult.rawLabel,
      confidence: classificationResult.confidence,
      engine: classificationResult.engine,
      reasoning: classificationResult.reasoning
    });

    if (savedRecord) {
      setIsSaved(true);
      if (onScanSaved) onScanSaved();
    }
  };

  // Handle Manual Category Override
  const handleManualOverride = (newCategoryId) => {
    const newCat = WASTE_CATEGORIES[newCategoryId];
    if (newCat) {
      setClassificationResult((prev) => ({
        ...prev,
        categoryId: newCategoryId,
        category: newCat,
        rawLabel: `Manual Correction: ${newCat.name}`,
        engine: 'Manual Adjustment Mode',
        engineType: 'manual',
        isRealAi: false,
        reasoning: 'Category manually modified for specific academic policy inspection.'
      }));
      setIsSaved(false);
    }
  };

  // Reset to initial state
  const handleReset = () => {
    setClassificationResult(null);
    setCurrentImageSrc(null);
    setIsSaved(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          <span>Intelligent Optical Waste Classifier</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Segregate Waste in Seconds
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Upload any waste photo or choose a sample item to evaluate material properties, recyclable value, and local bin allocation.
        </p>
      </div>

      {/* Main Flow: Uploader or Result */}
      {!classificationResult ? (
        <ImageUploader 
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
          activeEngine={activeEngine}
          setActiveEngine={setActiveEngine}
        />
      ) : (
        <ClassificationResult 
          result={classificationResult}
          imageSrc={currentImageSrc}
          onReset={handleReset}
          onSave={handleSaveResult}
          isSaved={isSaved}
          onManualOverride={handleManualOverride}
        />
      )}

      {/* EVS Methodological Note */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-4 text-xs text-slate-600">
        <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
          <Info className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
            Academic EVS Project Note on Computer Vision
          </h4>
          <p className="leading-relaxed">
            This application uses a modular vision architecture. When running in <strong>Real-Time AI Vision Mode</strong>, inference occurs via <em>MobileNet v2</em> in the client's browser, extracting deep feature representations without sending images to any remote cloud. For presentation demonstrations, pre-verified test samples and manual stream overrides are also readily available.
          </p>
        </div>
      </div>

    </div>
  );
}
