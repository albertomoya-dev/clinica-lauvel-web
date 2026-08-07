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

export const psicologiaInfantilTreatments: Treatment[] = [
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
    anchor: 'psicologia-infantil',
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
    anchor: 'psicologia-adolescentes',
  },
  {
    title: 'Neurodesarrollo',
    items: [
      'Trastorno por Déficit de Atención e Hiperactividad (TDAH)',
      'Trastorno del Espectro Autista (TEA)',
      'Evaluación psicológica',
      'Intervención individualizada',
    ],
    anchor: 'neurodesarrollo',
  },
  {
    title: 'Terapia familiar',
    items: [
      'Orientación familiar',
      'Dificultades de convivencia',
      'Pautas educativas',
      'Comunicación familiar',
    ],
    anchor: 'terapia-familiar',
  },
];

export const psicologiaAdultosTreatments: Treatment[] = [
  {
    title: 'Ansiedad',
    description:
      '¿Sientes que la ansiedad se apodera de tu día a día? Trabajamos las preocupaciones constantes, la agitación, el nerviosismo, las dificultades de concentración, la irritabilidad y los problemas de sueño, dándote herramientas prácticas para recuperar la calma.',
    items: [
      'Preocupaciones constantes',
      'Agitación y nerviosismo',
      'Dificultades de concentración',
      'Irritabilidad',
      'Trastornos del sueño',
    ],
    anchor: 'ansiedad',
  },
  {
    title: 'Depresión y bajo estado de ánimo',
    description:
      'Acompañamos los procesos de tristeza intensa y duradera que interfieren en la vida diaria: apatía, llanto, falta de energía, escasa concentración o alteraciones del sueño. Con un plan personalizado, te ayudamos a recuperar la ilusión y el impulso vital.',
    items: [
      'Apatía y falta de energía',
      'Llanto frecuente',
      'Escasa concentración',
      'Alteraciones del sueño',
      'Recuperación del impulso vital',
    ],
    anchor: 'depresion',
  },
  {
    title: 'Autoestima y crecimiento personal',
    description:
      'Trabajamos la relación contigo mismo/a: aprender a valorarte, superar miedos e inseguridades y proyectar tu mejor versión. Un proceso de crecimiento personal que mejora todas las áreas de tu vida.',
    items: [
      'Valoración personal',
      'Superación de miedos',
      'Reducción de inseguridades',
      'Proyección de la mejor versión',
      'Desarrollo personal',
    ],
    anchor: 'autoestima-crecimiento',
  },
  {
    title: 'Perfeccionismo y autoexigencia',
    description:
      'La búsqueda constante de la perfección puede convertirse en el principal motivo de insatisfacción. Te ayudamos a gestionar la autoexigencia para que deje de ser un lastre y mejore tu salud y tu bienestar.',
    items: [
      'Insatisfacción crónica',
      'Autocrítica excesiva',
      'Gestión de expectativas',
      'Equilibrio entre esfuerzo y descanso',
      'Mejora del bienestar',
    ],
    anchor: 'perfeccionismo',
  },
  {
    title: 'Psicosomática',
    description:
      'Mente y cuerpo están estrechamente relacionados: las emociones repercuten en el cuerpo y lo físico afecta a la mente. Abordamos los síntomas psicosomáticos desde un enfoque integral, en coordinación con el resto de disciplinas del centro.',
    items: [
      'Repercusión emocional en el cuerpo',
      'Síntomas sin causa médica aparente',
      'Abordaje integral',
      'Coordinación con fisioterapia',
      'Recuperación del equilibrio',
    ],
    anchor: 'psicosomatica',
  },
  {
    title: 'Dependencia emocional y relaciones',
    description:
      'La dependencia emocional es la necesidad excesiva de cariño y atención constante hacia una persona con la que se mantiene un vínculo afectivo. Trabajamos para recuperar la autonomía y construir relaciones más sanas y equilibradas.',
    items: [
      'Necesidad excesiva de atención',
      'Vínculos afectivos desequilibrados',
      'Recuperación de la autonomía',
      'Relaciones más sanas',
      'Ansiedad social y timidez',
    ],
    anchor: 'dependencia-emocional',
  },
  {
    title: 'Duelo',
    description:
      'Acompañamos los procesos de duelo y pérdida con respeto a tus tiempos, ayudándote a elaborar la experiencia y a rehacer tu día a día.',
    items: [
      'Procesos de pérdida',
      'Elaboración del duelo',
      'Respeto a tus tiempos',
      'Rehacer el día a día',
      'Recuperación emocional',
    ],
    anchor: 'duelo',
  },
  {
    title: 'Terapia de pareja y familiar',
    description:
      'Un espacio de confianza donde mejorar la comunicación, resolver conflictos y fortalecer el vínculo como pareja; también trabajamos con la familia como sistema para mejorar la convivencia.',
    items: [
      'Mejora de la comunicación',
      'Resolución de conflictos',
      'Fortalecimiento del vínculo',
      'Dinámica familiar',
      'Convivencia más sana',
    ],
    anchor: 'pareja-familiar',
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
