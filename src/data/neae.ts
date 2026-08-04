export interface NeaeBlock {
  heading: string;
  paragraphs: string[];
  closing?: string;
}

export const neaeHome: NeaeBlock = {
  heading: 'Centro de intervención para alumnado con Beca NEAE',
  paragraphs: [
    'Realizamos tratamientos para el alumnado beneficiario de las <strong>Becas de Necesidades Específicas de Apoyo Educativo (NEAE)</strong> del Ministerio de Educación.',
    'Te asesoramos sobre la ayuda y diseñamos el plan de intervención que exige la convocatoria.',
  ],
  closing: '¡Consúltanos sin compromiso!',
};

export const neaeLogopedia: NeaeBlock = {
  heading: 'Becas NEAE: intervención logopédica subvencionada',
  paragraphs: [
    'En LAUVEL realizamos tratamientos para el alumnado beneficiario de las <strong>Becas de Necesidades Específicas de Apoyo Educativo (NEAE)</strong> del Ministerio de Educación.',
    'Si tu hijo/a necesita apoyo logopédico, te asesoramos sobre la ayuda y diseñamos el plan de intervención que exige la convocatoria. Contacta con nosotros a través del formulario, estaremos encantados de informarte.',
  ],
};

export const neaePedagogia: NeaeBlock = {
  heading: 'Becas NEAE: reeducación pedagógica subvencionada',
  paragraphs: [
    'Somos un centro que realiza tratamientos para el alumnado beneficiario de las <strong>Becas NEAE del Ministerio de Educación</strong>.',
    'Si tu hijo/a necesita reeducación pedagógica o apoyo escolar especializado, te asesoramos en todo el proceso y diseñamos el plan de intervención según la convocatoria.',
  ],
};

export const neaePsicologia: NeaeBlock = {
  heading: 'Becas NEAE: apoyo psicológico subvencionado',
  paragraphs: [
    'Realizamos intervenciones para el alumnado beneficiario de las <strong>Becas NEAE del Ministerio de Educación</strong> que requiera apoyo psicológico (TDAH, TEA, dificultades emocionales o de conducta…).',
    'Te asesoramos en todo el proceso para solicitar la ayuda y comenzar la intervención cuanto antes.',
  ],
};
