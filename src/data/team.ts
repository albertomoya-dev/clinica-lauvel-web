import type { ImageMetadata } from 'astro';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: ImageMetadata;
  photoAlt: string;
}

import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';

export const team: TeamMember[] = [
  {
    name: 'Laura Velasco Zambrano',
    role: 'Logopeda y directora de Clínica LAUVEL',
    bio: 'Laura Velasco Zambrano es logopeda y directora de Clínica LAUVEL. Su vocación por el desarrollo, la comunicación y el lenguaje la ha llevado a especializarse y mantener una formación continua en diferentes áreas de la logopedia.\n\nCuenta con un Máster en Atención Temprana y formación especializada en terapia miofuncional, además de diferentes formaciones relacionadas con el lenguaje, el habla, la comunicación, las funciones orofaciales y la intervención en población infantil y adulta.\n\nA lo largo de su trayectoria profesional ha trabajado con niños, adolescentes y adultos, realizando intervenciones adaptadas a las necesidades individuales de cada paciente. Su forma de trabajar se basa en una atención cercana y personalizada.\n\nComo directora de LAUVEL, Laura apuesta por un modelo de intervención multidisciplinar, coordinado con las familias, los centros educativos y otros profesionales, con el objetivo de ofrecer una atención integral y favorecer el desarrollo y bienestar de cada paciente.\n\nSu principal objetivo es acompañar a cada persona y a su familia durante el proceso terapéutico, proporcionando herramientas que permitan avanzar, mejorar la comunicación y potenciar al máximo sus capacidades.',
    photo: team1,
    photoAlt: 'Laura Velasco Zambrano, logopeda y directora de Clínica LAUVEL',
  },
  {
    name: 'Daniel Suárez Bejines',
    role: 'Pedagogo',
    bio: 'Daniel Suárez Bejines es Graduado en Pedagogía y forma parte del equipo de Clínica LAUVEL. Su labor se centra en acompañar y apoyar a niños y adolescentes en sus procesos de aprendizaje, adaptando la intervención a las necesidades y características individuales de cada persona.\n\nSu objetivo es favorecer el desarrollo de las capacidades de cada paciente, proporcionando estrategias y herramientas que permitan mejorar su autonomía, aprendizaje y rendimiento académico. Para ello, trabaja de manera individualizada y coordinada con las familias y otros profesionales, buscando siempre una intervención cercana y adaptada.\n\nEn LAUVEL apuesta por una atención personalizada, creando un entorno de confianza en el que cada niño pueda avanzar a su propio ritmo y desarrollar al máximo sus capacidades.',
    photo: team2,
    photoAlt: 'Daniel Suárez Bejines, pedagogo en Clínica LAUVEL',
  },
  {
    name: 'Lucía Cabezas',
    role: 'Psicóloga General Sanitaria',
    bio: 'Lucía Cabezas es psicóloga general sanitaria, especializada en intervención psicológica y familiar. Cuenta con un Máster en Psicología General Sanitaria y un Máster en Intervención y Mediación Familiar, formación que le permite abordar el bienestar psicológico teniendo en cuenta tanto las necesidades individuales como la influencia de las relaciones y el contexto familiar.\n\nSu trayectoria profesional combina la intervención psicológica, la investigación y la divulgación, con experiencia en el ámbito clínico y en proyectos de investigación vinculados al desarrollo, las relaciones familiares y el bienestar psicológico.\n\nAdemás complementa su formación con un Experto en Terapia Sistémica Breve, desde el que profundiza en una perspectiva centrada en las relaciones, los patrones de interacción y los recursos de cada persona y sistema familiar.\n\nSu forma de trabajar parte de una atención cercana, individualizada y basada en la evidencia, adaptando la intervención a las necesidades, circunstancias y objetivos de cada persona. Entiende el proceso terapéutico como un espacio de acompañamiento en el que comprender lo que está ocurriendo, desarrollar nuevas herramientas y favorecer cambios que puedan mantenerse en el tiempo.\n\nEn su intervención presta especial atención a aspectos como las relaciones interpersonales, la familia, la comunicación, la gestión emocional y las dificultades que pueden aparecer en las diferentes etapas de la vida.\n\nSu objetivo es acompañar a cada persona desde una mirada integradora y respetuosa, ayudándola a comprender mejor lo que necesita, identificar sus propios recursos y construir formas más saludables de relacionarse consigo misma y con los demás.',
    photo: team3,
    photoAlt: 'Lucía Cabezas, psicóloga general sanitaria en Clínica LAUVEL',
  },
];
