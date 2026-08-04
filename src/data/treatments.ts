export interface Treatment {
  title: string;
  description?: string;
  items: string[];
  featured?: boolean;
  anchor?: string;
}

export const logopediaTreatments: Treatment[] = [
  {
    title: 'Terapia de Motricidad Orofacial',
    items: [
      'Deglución disfuncional o deglución atípica',
      'Respiración oral',
      'Sellado labial',
      'Fortalecimiento de labios, lengua y musculatura orofacial',
      'Hipotonía orofacial',
      'Alteraciones de la masticación',
      'Interposición lingual',
      'Frenillo lingual',
      'Rehabilitación post frenectomía',
      'Preparación y seguimiento de tratamientos de ortodoncia',
      'Hábitos orales nocivos',
    ],
    featured: true,
    anchor: 'motricidad-orofacial',
  },
  {
    title: 'Desarrollo del lenguaje',
    items: [
      'Retraso del desarrollo del lenguaje',
      'Trastorno del Desarrollo del Lenguaje (TDL)',
      'Dificultades de comprensión y expresión',
      'Estimulación temprana del lenguaje',
      'Retrasos madurativos',
    ],
  },
  {
    title: 'Habla y pronunciación',
    items: [
      'Dislalias',
      'Disfemia',
      'Trastornos fonológicos',
      'Apraxia del habla',
      'Disartria',
      'Alteraciones articulatorias',
    ],
  },
  {
    title: 'Comunicación',
    items: [
      'Trastornos de la comunicación',
      'Trastorno del Espectro Autista (TEA)',
      'Sistemas Aumentativos y Alternativos de Comunicación (SAAC)',
      'Comunicación funcional',
    ],
  },
  {
    title: 'Alimentación y deglución',
    items: [
      'Disfagia',
      'Dificultades en la alimentación infantil',
      'Alteraciones de la masticación',
      'Selectividad alimentaria',
    ],
  },
  {
    title: 'Voz',
    items: ['Disfonías', 'Fatiga vocal', 'Rehabilitación vocal', 'Higiene vocal'],
  },
  {
    title: 'Logopedia neurológica',
    items: ['Afasia', 'Disartria', 'Parkinson', 'Ictus', 'Esclerosis múltiple', 'Demencias'],
  },
];

export const pedagogiaTreatments: Treatment[] = [
  {
    title: 'Reeducación pedagógica',
    items: [
      'Refuerzo educativo individualizado',
      'Apoyo escolar especializado',
      'Desarrollo de hábitos de estudio',
      'Motivación académica',
    ],
    featured: true,
  },
  {
    title: 'Dificultades de aprendizaje',
    items: [
      'Dislexia',
      'Discalculia',
      'Disgrafía',
      'Dificultades en comprensión lectora',
      'Expresión escrita',
    ],
  },
  {
    title: 'Atención y funciones ejecutivas',
    items: [
      'Déficit de atención',
      'TDAH',
      'Organización',
      'Planificación',
      'Memoria de trabajo',
      'Control inhibitorio',
      'Flexibilidad cognitiva',
    ],
  },
  {
    title: 'Técnicas de estudio',
    items: [
      'Organización del estudio',
      'Planificación del tiempo',
      'Estrategias de aprendizaje',
      'Comprensión y síntesis',
      'Preparación de exámenes',
    ],
  },
  {
    title: 'Altas capacidades',
    items: ['Enriquecimiento educativo', 'Orientación familiar', 'Estrategias de aprendizaje'],
  },
  {
    title: 'Orientación familiar',
    items: [
      'Asesoramiento a familias',
      'Pautas para casa',
      'Coordinación con centros escolares',
    ],
  },
];

export const psicologiaTreatments: Treatment[] = [
  {
    title: 'Psicología infantil',
    items: [
      'Ansiedad',
      'Miedos',
      'Gestión emocional',
      'Rabietas',
      'Autoestima',
      'Problemas de conducta',
      'Habilidades sociales',
      'Adaptación escolar',
      'Separación de los padres',
    ],
    featured: true,
  },
  {
    title: 'Psicología para adolescentes',
    items: [
      'Ansiedad',
      'Estrés',
      'Baja autoestima',
      'Gestión emocional',
      'Relaciones sociales',
      'Orientación personal',
      'Acoso escolar',
      'Motivación académica',
    ],
  },
  {
    title: 'Psicología para adultos',
    items: [
      'Ansiedad',
      'Estrés',
      'Depresión',
      'Autoestima',
      'Duelo',
      'Dependencia emocional',
      'Gestión emocional',
      'Desarrollo personal',
    ],
  },
  {
    title: 'Neurodesarrollo',
    items: [
      'Trastorno por Déficit de Atención e Hiperactividad (TDAH)',
      'Trastorno del Espectro Autista (TEA)',
      'Evaluación psicológica',
      'Intervención individualizada',
    ],
  },
  {
    title: 'Terapia familiar',
    items: [
      'Orientación familiar',
      'Dificultades de convivencia',
      'Pautas educativas',
      'Comunicación familiar',
    ],
  },
];

export const fisioterapiaTreatments: Treatment[] = [
  {
    title: 'Fisioterapia traumatológica y musculoesquelética',
    items: [
      'Dolor cervical',
      'Dolor lumbar',
      'Contracturas',
      'Tendinopatías',
      'Lesiones musculares',
      'Esguinces',
      'Recuperación postquirúrgica',
    ],
    featured: true,
  },
  {
    title: 'Fisioterapia deportiva',
    items: [
      'Prevención de lesiones',
      'Recuperación funcional',
      'Readaptación deportiva',
      'Sobrecargas musculares',
    ],
  },
  {
    title: 'Fisioterapia pediátrica',
    items: [
      'Retrasos del desarrollo motor',
      'Tortícolis congénita',
      'Plagiocefalia',
      'Alteraciones posturales',
    ],
  },
  {
    title: 'Articulación temporomandibular (ATM)',
    items: [
      'Dolor mandibular',
      'Bruxismo',
      'Chasquidos',
      'Limitación de apertura bucal',
      'Cefaleas asociadas',
    ],
  },
  {
    title: 'Suelo pélvico',
    items: [
      'Embarazo',
      'Preparación al parto',
      'Recuperación postparto',
      'Incontinencia urinaria',
      'Dolor pélvico',
    ],
  },
  {
    title: 'Ejercicio terapéutico',
    items: [
      'Reeducación del movimiento',
      'Fortalecimiento muscular',
      'Mejora del equilibrio',
      'Prevención de recaídas',
    ],
  },
];
