// Waste Category Knowledge Base for EVS Intelligent Waste Segregation System

export const WASTE_CATEGORIES = {
  plastic: {
    id: 'plastic',
    name: 'Plastic',
    tagline: 'Synthetic polymers & packaging',
    iconName: 'Package',
    color: '#0284c7', // Sky Blue / Blue
    lightColor: '#f0f9ff',
    borderColor: '#bae6fd',
    textColor: '#0369a1',
    binColorName: 'Blue / Yellow Bin',
    binHex: '#0284c7',
    recyclableType: 'Recyclable',
    recyclableStatus: 'commonly_recyclable',
    ricCodes: 'RIC 1 (PET), RIC 2 (HDPE), RIC 5 (PP)',
    decompositionTime: '450 - 1000 years',
    examples: [
      'PET Water & Soda Bottles',
      'Milk Jugs & Shampoo Containers (HDPE)',
      'Food Containers & Bottle Caps (PP)',
      'Clean Plastic Crates & Trays',
      'Detergent & Cosmetic Bottles'
    ],
    preparationSteps: [
      'Empty all liquid or food residue completely.',
      'Rinse lightly with graywater if oily or sticky.',
      'Crush or compress plastic bottles to save bin volume.',
      'Leave plastic caps on (most modern MRFs can recycle them together).'
    ],
    commonMistakes: [
      'Do not recycle greasy takeaway plastic containers without washing.',
      'Avoid placing plastic shopping bags in standard curbside bins; they jam sorting machinery.',
      'Black plastic items are often invisible to optical sorting sensors at recycling plants.'
    ],
    environmentalTip: 'Plastic takes centuries to break down into microplastics. Switching to a reusable stainless steel water bottle eliminates hundreds of single-use bottles per year.',
    co2FactorPerKg: 1.5, // kg CO2 eq saved per kg recycled (illustrative)
    sampleImage: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=600&q=80',
    description: 'Petroleum-based synthetic polymers. Highly durable and widely recyclable when clean, but disastrous to marine and terrestrial ecosystems when dumped in landfills.'
  },

  paper: {
    id: 'paper',
    name: 'Paper & Cardboard',
    tagline: 'Cellulose fibers & dry packaging',
    iconName: 'FileText',
    color: '#2563eb', // Royal Blue
    lightColor: '#eff6ff',
    borderColor: '#bfdbfe',
    textColor: '#1d4ed8',
    binColorName: 'Blue Bin',
    binHex: '#2563eb',
    recyclableType: 'Recyclable',
    recyclableStatus: 'commonly_recyclable',
    ricCodes: 'PAP 20 (Corrugated), PAP 21 (Non-corrugated), PAP 22 (Paper)',
    decompositionTime: '2 - 6 weeks (dry)',
    examples: [
      'Corrugated Shipping & Delivery Boxes',
      'Office Paper, Notebooks & Envelopes',
      'Newspapers, Magazines & Pamphlets',
      'Cereal Boxes & Egg Cartons',
      'Clean Paper Bags'
    ],
    preparationSteps: [
      'Flatten all cardboard boxes to conserve bin space.',
      'Remove packing tape, plastic bubble wrap, and styrofoam inserts.',
      'Keep paper completely dry; wet fibers degrade and cannot be processed.',
      'Remove metallic spiral bindings from notebooks.'
    ],
    commonMistakes: [
      'Never put greasy pizza box bottoms into paper recycling; oil contaminates the pulp.',
      'Thermal receipts (coated with BPA) and wax-coated papers are non-recyclable.',
      'Paper cups with polyethylene plastic linings cannot be processed in normal paper mills.'
    ],
    environmentalTip: 'Recycling 1 ton of paper saves approximately 17 mature trees, 26,000 liters of water, and 4,000 kilowatt-hours of electrical energy.',
    co2FactorPerKg: 0.9,
    sampleImage: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
    description: 'Cellulose fiber products made from wood pulp. Paper can be recycled 5 to 7 times before the fibers become too short to form new sheets.'
  },

  metal: {
    id: 'metal',
    name: 'Metal & Cans',
    tagline: 'Ferrous & non-ferrous metals',
    iconName: 'Shield',
    color: '#d97706', // Amber / Gold
    lightColor: '#fffbeb',
    borderColor: '#fde68a',
    textColor: '#b45309',
    binColorName: 'Yellow / Gray Bin',
    binHex: '#d97706',
    recyclableType: 'Recyclable',
    recyclableStatus: 'commonly_recyclable',
    ricCodes: 'ALU 41 (Aluminum), FE 40 (Steel/Tin)',
    decompositionTime: '50 - 500 years',
    examples: [
      'Aluminum Beverage & Soda Cans',
      'Tin & Steel Food Cans (soup, beans)',
      'Clean Aluminum Foil & Pie Trays',
      'Metal Jar Lids & Bottle Caps',
      'Empty Aerosol Cans (fully depressurized)'
    ],
    preparationSteps: [
      'Empty and rinse out food remnants.',
      'Aluminum cans can be lightly crushed.',
      'Place loose metal jar caps inside steel cans and crimp the opening slightly.',
      'Ensure aerosol cans are completely discharged before disposal.'
    ],
    commonMistakes: [
      'Do not include paint cans with dried toxic oil-based paint.',
      'Pots, pans, knives, and wire hangers require scrap metal drop-off, not standard curbside cans.',
      'Propane canisters and pressurized cylinders must never enter domestic recycling.'
    ],
    environmentalTip: 'Recycling aluminum consumes 95% less energy than extracting primary aluminum from bauxite ore. A recycled can can be back on store shelves within 60 days.',
    co2FactorPerKg: 2.1,
    sampleImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    description: 'Non-ferrous and ferrous metals have infinite recyclability without structural loss of properties, making metal recovery highly economically and environmentally profitable.'
  },

  glass: {
    id: 'glass',
    name: 'Glass',
    tagline: 'Inert vitreous containers',
    iconName: 'Wine',
    color: '#059669', // Emerald
    lightColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    textColor: '#047857',
    binColorName: 'Green Bin',
    binHex: '#059669',
    recyclableType: 'Recyclable',
    recyclableStatus: 'commonly_recyclable',
    ricCodes: 'GL 70 (Clear), GL 71 (Green), GL 72 (Brown)',
    decompositionTime: 'Over 1,000,000 years',
    examples: [
      'Clear, Green & Amber Beverage Bottles',
      'Food Sauce & Condiment Jars',
      'Baby Food Jars',
      'Perfume & Cosmetic Glass Bottles (rinsed)'
    ],
    preparationSteps: [
      'Empty and gently rinse containers.',
      'Remove metal or plastic lids (recycle separately).',
      'Labels and neck rings do not need to be peeled off; they burn off in the glass furnace.',
      'Avoid breaking bottles prior to drop-off.'
    ],
    commonMistakes: [
      'Do not mix window panes, mirrors, pyrex cookware, or drinking glasses into bottle bins.',
      'Ceramics, porcelain, and light bulbs have higher melting points and ruin an entire batch of recycled glass.',
      'Broken glass should be safely wrapped in newspaper before disposal to protect sanitation workers.'
    ],
    environmentalTip: 'Glass is 100% recyclable indefinitely with zero loss in purity or quality. Over a ton of natural resources are saved for every ton of recycled cullet melted.',
    co2FactorPerKg: 0.3,
    sampleImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
    description: 'Inert silicate materials that never decompose naturally. Glass recycling creates no secondary byproducts and lowers furnace temperatures, conserving energy.'
  },

  organic: {
    id: 'organic',
    name: 'Organic & Food Waste',
    tagline: 'Biodegradable wet biomass',
    iconName: 'Apple',
    color: '#16a34a', // Forest Green
    lightColor: '#f0fdf4',
    borderColor: '#bbf7d0',
    textColor: '#15803d',
    binColorName: 'Green / Brown Bin (Wet Waste)',
    binHex: '#16a34a',
    recyclableType: 'Compostable',
    recyclableStatus: 'compostable',
    ricCodes: 'Biodegradable Biomass',
    decompositionTime: '2 weeks - 6 months',
    examples: [
      'Fruit & Vegetable Peels and Cores',
      'Leftover Cooked Food & Rice',
      'Coffee Grounds, Filters & Tea Leaves',
      'Eggshells & Nut Shells',
      'Dry Leaves, Grass Clippings & Garden Trimmings'
    ],
    preparationSteps: [
      'Keep separate from all dry recyclable materials.',
      'Do not pack organic waste in regular plastic carry bags; use compostable liners or newspaper.',
      'Drain excess gravies or liquids to avoid foul odours and leakage.',
      'Add to an aerobic home composting bin or city wet-waste collection.'
    ],
    commonMistakes: [
      'Never mix plastic wrappers, rubber bands, or produce stickers into wet waste.',
      'Avoid large quantities of animal bones or heavy cooking oils in small home compost pits.',
      'Do not throw dog/cat waste into vegetable compost due to harmful pathogens.'
    ],
    environmentalTip: 'When organic waste rots in oxygen-starved landfills, it produces methane gas—a greenhouse gas 28 times more potent than CO2. Composting turns it into nutrient-rich soil humus.',
    co2FactorPerKg: 0.7,
    sampleImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80',
    description: 'Decomposable biological matter. Segregating wet waste is the single most vital step to keep other recyclables dry and uncontaminated.'
  },

  residual: {
    id: 'residual',
    name: 'General / Residual Waste',
    tagline: 'Non-recyclable domestic refuse',
    iconName: 'Trash2',
    color: '#64748b', // Slate Gray
    lightColor: '#f8fafc',
    borderColor: '#cbd5e1',
    textColor: '#475569',
    binColorName: 'Black / Gray Bin',
    binHex: '#64748b',
    recyclableType: 'Non-Recyclable',
    recyclableStatus: 'residual_disposal',
    ricCodes: 'Landfill / Waste-to-Energy',
    decompositionTime: 'Indefinite / Decades',
    examples: [
      'Multi-layer Metallized Potato Chip & Snack Pouches',
      'Used Soiled Tissues, Wet Wipes & Paper Napkins',
      'Sanitary Pads, Diapers & Hygiene Products',
      'Ceramic Mugs, Porcelain Shards & Broken Mirror Glass',
      'Worn-out Toothbrushes, Razors & Chewing Gum'
    ],
    preparationSteps: [
      'Wrap sanitary waste securely in newspaper and mark with a red dot if mandated locally.',
      'Keep residual waste as dry as possible to facilitate incineration or waste-to-energy recovery.',
      'Ensure no hazardous e-waste or batteries are dumped into general trash.'
    ],
    commonMistakes: [
      'Tossing recyclable clean plastic or cans into residual waste out of convenience.',
      'Throwing batteries or spray cans into residual bins, which risk fires in garbage trucks.',
      'Burning mixed garbage at home, releasing carcinogenic dioxins and furan fumes.'
    ],
    environmentalTip: 'Residual waste should be minimized following the 5 R’s: Refuse, Reduce, Reuse, Repurpose, Recycle. Single-use non-recyclable multi-layer sachets are the primary culprit in landfill growth.',
    co2FactorPerKg: 0.0,
    sampleImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
    description: 'Material that currently has no practical economic recycling stream. Managed through modern sanitary engineered landfills or high-temperature waste-to-energy incineration.'
  },

  ewaste: {
    id: 'ewaste',
    name: 'Electronic Waste (E-Waste)',
    tagline: 'Obsolete electricals & hazardous gadgets',
    iconName: 'Cpu',
    color: '#dc2626', // Crimson / Red
    lightColor: '#fef2f2',
    borderColor: '#fecaca',
    textColor: '#b91c1c',
    binColorName: 'Red Bin / Authorized E-Waste Drop-off',
    binHex: '#dc2626',
    recyclableType: 'Special Handling',
    recyclableStatus: 'hazardous_handling',
    ricCodes: 'WEEE Directive / E-Waste Rules',
    decompositionTime: 'Never decomposes / Leaches toxins',
    examples: [
      'Old Smartphones, Tablets & Laptops',
      'Rechargeable Lithium-ion & Alkaline Batteries',
      'Power Adapters, Cables, Chargers & Earphones',
      'Printed Circuit Boards (PCBs) & Computer Mice',
      'Fluorescent CFL Bulbs & LED Lamps'
    ],
    preparationSteps: [
      'Never dismantle electronic devices or smash cathode tubes yourself.',
      'Tape battery terminals with masking tape to prevent accidental short circuits.',
      'Wipe personal data from digital storage before handing over.',
      'Deposit only at authorized manufacturer take-back centers or registered e-waste collection kiosks.'
    ],
    commonMistakes: [
      'Never discard batteries or mobile phones in domestic general waste bins; lithium fires are severe.',
      'Do not hand over e-waste to unorganized scrap collectors who use crude acid-leaching methods.',
      'Never break mercury-containing CFL tubes indoors.'
    ],
    environmentalTip: 'E-waste represents only 2% of total landfill volume but contributes over 70% of toxic heavy metals (lead, cadmium, mercury) that poison underground aquifers.',
    co2FactorPerKg: 3.8,
    sampleImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80',
    description: 'Discarded electronics contain precious metals (gold, copper, silver) alongside hazardous neurotoxins. Requires formal disassembly under international WEEE standards.'
  }
};

// Curated interactive test items with realistic photos so students & examiners can test immediately without external downloads
export const SAMPLE_TEST_ITEMS = [
  {
    id: 'sample-plastic-bottle',
    label: 'Plastic Water Bottle',
    category: 'plastic',
    confidence: 0.94,
    imageUrl: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=600&q=80',
    notes: 'Clean PET bottle with screw cap. Highly recyclable.',
    source: 'Demonstration Test Sample'
  },
  {
    id: 'sample-cardboard-box',
    label: 'Cardboard Delivery Box',
    category: 'paper',
    confidence: 0.96,
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
    notes: 'Brown corrugated shipping cardboard. Clean and dry.',
    source: 'Demonstration Test Sample'
  },
  {
    id: 'sample-aluminum-can',
    label: 'Crushed Beverage Can',
    category: 'metal',
    confidence: 0.92,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    notes: 'Standard aluminum soda can. Aluminum has 100% recycling efficiency.',
    source: 'Demonstration Test Sample'
  },
  {
    id: 'sample-glass-bottle',
    label: 'Glass Beverage Bottle',
    category: 'glass',
    confidence: 0.89,
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
    notes: 'Intact glass jar. Wash and place in dedicated glass container.',
    source: 'Demonstration Test Sample'
  },
  {
    id: 'sample-apple-core',
    label: 'Fresh Apple Core & Peels',
    category: 'organic',
    confidence: 0.97,
    imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80',
    notes: 'Raw fruit waste. Ideal for home or community composting.',
    source: 'Demonstration Test Sample'
  },
  {
    id: 'sample-chip-sachet',
    label: 'Multi-layer Snack Wrapper',
    category: 'residual',
    confidence: 0.88,
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
    notes: 'Foil-lined plastic composite sachet. Non-recyclable in curbside bins.',
    source: 'Demonstration Test Sample'
  },
  {
    id: 'sample-old-smartphone',
    label: 'Discarded Smartphone & Cable',
    category: 'ewaste',
    confidence: 0.95,
    imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80',
    notes: 'Electronic device containing lithium cell. Needs dedicated e-waste channel.',
    source: 'Demonstration Test Sample'
  }
];

// Municipal Bin Standard Guide
export const MUNICIPAL_STANDARDS = [
  {
    region: 'India (Swachh Bharat Mission)',
    description: '3-Stream Color Coding mandated for households and commercial spaces.',
    streams: [
      { color: 'Green', code: '#16a34a', type: 'Wet Waste (Biodegradable / Kitchen / Organic)' },
      { color: 'Blue', code: '#2563eb', type: 'Dry Waste (Plastic, Paper, Metal, Glass, Clean Dry packaging)' },
      { color: 'Red / Black', code: '#dc2626', type: 'Domestic Hazardous / Sanitary & E-Waste' }
    ]
  },
  {
    region: 'European Union & United Kingdom',
    description: 'Multi-stream segregated bins with specialized material collection.',
    streams: [
      { color: 'Blue / Red', code: '#2563eb', type: 'Paper, Cardboard & Print media' },
      { color: 'Yellow / Orange', code: '#d97706', type: 'Plastics, Drink cartons & Metal packaging' },
      { color: 'Green', code: '#059669', type: 'Glass Bottles & Jars (Clear / Colored)' },
      { color: 'Brown', code: '#78350f', type: 'Bio-waste, Organic scraps & Garden cuttings' },
      { color: 'Grey / Black', code: '#475569', type: 'Residual / Non-recyclable general refuse' }
    ]
  },
  {
    region: 'North America (Single-Stream Curbside)',
    description: 'Single-stream commingled dry recyclables separated at a Materials Recovery Facility (MRF).',
    streams: [
      { color: 'Blue Cart', code: '#0284c7', type: 'Commingled Recyclables (Paper, Cans, Clean Plastic, Glass in select cities)' },
      { color: 'Green Cart', code: '#16a34a', type: 'Yard Trimmings & Organics / Food Scraps' },
      { color: 'Black / Gray Cart', code: '#334155', type: 'Landfill Trash / Non-recyclable residual' }
    ]
  }
];
