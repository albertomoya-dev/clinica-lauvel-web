export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Valoración inicial exhaustiva',
    description:
      'Cada tratamiento comienza con una valoración completa para conocer las necesidades del paciente y establecer unos objetivos terapéuticos claros.',
  },
  {
    title: 'Plan de intervención individualizado',
    description:
      'A partir de la evaluación diseñamos un plan adaptado a cada persona, sus fortalezas y sus necesidades.',
  },
  {
    title: 'Seguimiento continuo de la evolución',
    description:
      'Revisamos la evolución de forma constante y adaptamos el tratamiento siempre que sea necesario.',
  },
  {
    title: 'Coordinación multidisciplinar',
    description:
      'Trabajamos en coordinación con familias, centros educativos y otros especialistas para ofrecer una atención completa.',
  },
];

export const psicologiaAdultosProcess: ProcessStep[] = [
  {
    title: 'Entrevista de evaluación inicial',
    description:
      'Comenzamos con una entrevista para conocerte, entender tus necesidades y definir juntos los objetivos del proceso.',
  },
  {
    title: 'Plan de intervención personalizado',
    description:
      'Diseñamos una propuesta a tu medida, combinando técnicas cognitivo-conductuales, psicodinámicas y mindfulness según tu caso.',
  },
  {
    title: 'Técnicas basadas en la evidencia',
    description:
      'Aplicamos herramientas contrastadas para trabajar la ansiedad, el estado de ánimo, las relaciones y el crecimiento personal.',
  },
  {
    title: 'Coordinación con otras disciplinas',
    description:
      'Si es necesario, coordinamos tu atención con logopedia, pedagogía o fisioterapia para una intervención verdaderamente integral.',
  },
];
