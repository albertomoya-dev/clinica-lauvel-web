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
