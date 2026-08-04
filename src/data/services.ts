export type ServiceIcon =
  | 'motricidad'
  | 'logopedia'
  | 'psicologia'
  | 'pedagogia'
  | 'fisioterapia'
  | 'integral';

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: ServiceIcon;
}

export const homeServices: Service[] = [
  {
    title: 'Terapia de Motricidad Orofacial',
    description:
      'Una de nuestras áreas de especialización: tratamos las alteraciones de la musculatura orofacial para mejorar funciones como respirar, masticar, deglutir y hablar.',
    href: '/logopedia/#motricidad-orofacial',
    icon: 'motricidad',
  },
  {
    title: 'Logopedia infantil y de adultos',
    description:
      'Prevención, evaluación e intervención en las alteraciones del lenguaje, el habla, la comunicación, la voz y la deglución, para todas las edades.',
    href: '/logopedia/',
    icon: 'logopedia',
  },
  {
    title: 'Psicología infantil, adolescentes y adultos',
    description:
      'Un espacio de confianza para comprender lo que ocurre y desarrollar herramientas para afrontar el día a día.',
    href: '/psicologia/',
    icon: 'psicologia',
  },
  {
    title: 'Reeducación pedagógica y dificultades de aprendizaje',
    description:
      'Intervención individualizada para potenciar capacidades, mejorar el rendimiento académico y favorecer un aprendizaje autónomo y motivador.',
    href: '/pedagogia/',
    icon: 'pedagogia',
  },
  {
    title: 'Fisioterapia musculoesquelética y deportiva',
    description:
      'Alivio del dolor, recuperación funcional y readaptación mediante técnicas manuales y ejercicio terapéutico personalizado.',
    href: '/fisioterapia/',
    icon: 'fisioterapia',
  },
  {
    title: 'Atención integral infantil',
    description:
      'Trabajo coordinado entre logopedia, psicología, pedagogía y fisioterapia para ofrecer a cada niño una atención completa.',
    href: '/quienes-somos/',
    icon: 'integral',
  },
];

export const disciplines: Service[] = [
  {
    title: 'Logopedia',
    description:
      'Alteraciones del lenguaje, el habla, la comunicación, la voz, la deglución y las funciones orofaciales.',
    href: '/logopedia/',
    icon: 'logopedia',
  },
  {
    title: 'Pedagogía',
    description:
      'Acompañamiento en el proceso de aprendizaje de niños y adolescentes, en coordinación con familias y centros educativos.',
    href: '/pedagogia/',
    icon: 'pedagogia',
  },
  {
    title: 'Psicología',
    description:
      'Espacio de confianza para niños, adolescentes y adultos: gestión emocional, ansiedad, autoestima y desarrollo personal.',
    href: '/psicologia/',
    icon: 'psicologia',
  },
  {
    title: 'Fisioterapia',
    description:
      'Prevención, tratamiento y recuperación de alteraciones del aparato locomotor con técnicas manuales y ejercicio terapéutico.',
    href: '/fisioterapia/',
    icon: 'fisioterapia',
  },
];
