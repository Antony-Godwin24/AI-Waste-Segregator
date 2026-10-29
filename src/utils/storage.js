// LocalStorage Management & Environmental Dashboard Metrics

import { WASTE_CATEGORIES } from './wasteCategories';

const STORAGE_KEY = 'intelligent_waste_scans_v1';

// Initial starter seed data so the dashboard is immediately demonstrative
const SEED_HISTORY = [
  {
    id: 'seed-1',
    timestamp: new Date(Date.now() - 3600000 * 48).toISOString(),
    categoryId: 'plastic',
    categoryName: 'Plastic',
    rawLabel: 'PET Water Bottle',
    confidence: 0.94,
    recyclableStatus: 'commonly_recyclable',
    recyclableType: 'Recyclable',
    engine: 'MobileNet v2 (TensorFlow.js Real Vision)',
    thumbnail: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=300&q=80',
    notes: 'Rinsed and caps attached for curbside dry recycling.'
  },
  {
    id: 'seed-2',
    timestamp: new Date(Date.now() - 3600000 * 30).toISOString(),
    categoryId: 'paper',
    categoryName: 'Paper & Cardboard',
    rawLabel: 'Amazon Delivery Box',
    confidence: 0.96,
    recyclableStatus: 'commonly_recyclable',
    recyclableType: 'Recyclable',
    engine: 'Verified Demo Sample (Curated Dataset)',
    thumbnail: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=300&q=80',
    notes: 'Flattened corrugated box, packing tape removed.'
  },
  {
    id: 'seed-3',
    timestamp: new Date(Date.now() - 3600000 * 22).toISOString(),
    categoryId: 'metal',
    categoryName: 'Metal & Cans',
    rawLabel: 'Aluminum Soda Can',
    confidence: 0.92,
    recyclableStatus: 'commonly_recyclable',
    recyclableType: 'Recyclable',
    engine: 'Verified Demo Sample (Curated Dataset)',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80',
    notes: 'Emptied and crushed to save bin capacity.'
  },
  {
    id: 'seed-4',
    timestamp: new Date(Date.now() - 3600000 * 14).toISOString(),
    categoryId: 'organic',
    categoryName: 'Organic & Food Waste',
    rawLabel: 'Apple Core & Citrus Peels',
    confidence: 0.98,
    recyclableStatus: 'compostable',
    recyclableType: 'Compostable',
    engine: 'MobileNet v2 (TensorFlow.js Real Vision)',
    thumbnail: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&q=80',
    notes: 'Added to household organic wet waste compost bin.'
  },
  {
    id: 'seed-5',
    timestamp: new Date(Date.now() - 3600000 * 6).toISOString(),
    categoryId: 'ewaste',
    categoryName: 'Electronic Waste (E-Waste)',
    rawLabel: 'Broken Phone Charger & Cable',
    confidence: 0.93,
    recyclableStatus: 'hazardous_handling',
    recyclableType: 'Special Handling',
    engine: 'Verified Demo Sample (Curated Dataset)',
    thumbnail: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=300&q=80',
    notes: 'Kept aside for campus e-waste collection bin.'
  },
  {
    id: 'seed-6',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    categoryId: 'residual',
    categoryName: 'General / Residual Waste',
    rawLabel: 'Metallized Chip Foil Sachet',
    confidence: 0.89,
    recyclableStatus: 'residual_disposal',
    recyclableType: 'Non-Recyclable',
    engine: 'MobileNet v2 (TensorFlow.js Real Vision)',
    thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=300&q=80',
    notes: 'Multi-layer composite sachet disposed in black residual bin.'
  }
];

// Create compressed thumbnail to preserve LocalStorage space
export async function createThumbnail(imageSrc, maxWidth = 160, maxHeight = 160) {
  if (!imageSrc) return null;
  if (imageSrc.startsWith('http')) return imageSrc;

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.onerror = () => resolve(imageSrc);
    img.src = imageSrc;
  });
}

// Retrieve scans from LocalStorage
export function getScanHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // First time initialization with educational demo records
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_HISTORY));
      return SEED_HISTORY;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed reading scan history from localStorage:', err);
    return SEED_HISTORY;
  }
}

// Save a new scan item
export async function saveScanRecord(scanData) {
  try {
    const current = getScanHistory();
    const thumbnail = await createThumbnail(scanData.imageUrl);

    const record = {
      id: `scan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      categoryId: scanData.categoryId,
      categoryName: WASTE_CATEGORIES[scanData.categoryId]?.name || scanData.categoryId,
      rawLabel: scanData.rawLabel || 'Waste Item',
      confidence: scanData.confidence || 0.85,
      recyclableStatus: WASTE_CATEGORIES[scanData.categoryId]?.recyclableStatus || 'residual_disposal',
      recyclableType: WASTE_CATEGORIES[scanData.categoryId]?.recyclableType || 'General Waste',
      engine: scanData.engine || 'Vision Classifier',
      thumbnail: thumbnail,
      notes: scanData.reasoning || '',
      binRecommendation: WASTE_CATEGORIES[scanData.categoryId]?.binColorName || 'General Waste'
    };

    const updated = [record, ...current].slice(0, 50); // limit to 50 records
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return record;
  } catch (err) {
    console.error('Failed saving scan record:', err);
    return null;
  }
}

// Clear all history
export function clearScanHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed clearing history:', err);
  }
}

// Delete single scan
export function deleteScanRecord(id) {
  try {
    const current = getScanHistory();
    const filtered = current.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (err) {
    console.error('Failed deleting scan:', err);
    return getScanHistory();
  }
}

// Compute aggregate dashboard statistics and illustrative EVS metrics
export function getDashboardMetrics(history = null) {
  const scans = history || getScanHistory();
  const totalScans = scans.length;

  let recyclableCount = 0;
  let compostableCount = 0;
  let hazardousCount = 0;
  let residualCount = 0;

  // Category distribution map
  const distributionMap = {
    plastic: 0,
    paper: 0,
    metal: 0,
    glass: 0,
    organic: 0,
    residual: 0,
    ewaste: 0
  };

  scans.forEach((scan) => {
    const cat = scan.categoryId || 'residual';
    if (distributionMap[cat] !== undefined) {
      distributionMap[cat] += 1;
    } else {
      distributionMap.residual += 1;
    }

    if (scan.recyclableStatus === 'commonly_recyclable') {
      recyclableCount += 1;
    } else if (scan.recyclableStatus === 'compostable') {
      compostableCount += 1;
    } else if (scan.recyclableStatus === 'hazardous_handling') {
      hazardousCount += 1;
    } else {
      residualCount += 1;
    }
  });

  const chartData = Object.entries(distributionMap).map(([key, count]) => {
    const cat = WASTE_CATEGORIES[key];
    return {
      id: key,
      name: cat ? cat.name : key,
      count: count,
      color: cat ? cat.color : '#94a3b8',
      percentage: totalScans > 0 ? Math.round((count / totalScans) * 100) : 0
    };
  });

  // Diverted rate (%)
  const divertedCount = recyclableCount + compostableCount;
  const diversionRate = totalScans > 0 ? Math.round((divertedCount / totalScans) * 100) : 0;

  // Illustrative academic environmental impact estimates (clearly labeled as illustrative)
  // Assuming average item weight of 0.15 kg
  const estimatedWeightKg = totalScans * 0.15;
  const estimatedCo2SavedKg = Math.round(
    (distributionMap.plastic * 0.22 +
      distributionMap.paper * 0.14 +
      distributionMap.metal * 0.35 +
      distributionMap.glass * 0.05 +
      distributionMap.organic * 0.10) * 10
  ) / 10;

  const estimatedLandfillSavedLiters = Math.round(totalScans * 2.4);

  return {
    totalScans,
    recyclableCount,
    compostableCount,
    hazardousCount,
    residualCount,
    divertedCount,
    diversionRate,
    distribution: chartData,
    impact: {
      estimatedWeightKg: Math.round(estimatedWeightKg * 10) / 10,
      estimatedCo2SavedKg,
      estimatedLandfillSavedLiters,
      isIllustrative: true,
      modelNote: 'Estimates computed from EVS academic benchmark factors (0.15kg avg waste item basis).'
    }
  };
}
