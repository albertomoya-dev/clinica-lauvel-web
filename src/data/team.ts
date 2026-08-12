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
    role: 'Logopeda y directora',
    bio: 'Soy Laura Velasco Zambrano, logopeda y directora de Clínica LAUVEL. Cuento con formación en Atención Temprana y múltiples especializaciones en diferentes áreas de la logopedia, manteniendo una formación continua para ofrecer una atención personalizada y de calidad. Mi objetivo es crear un espacio cercano y profesional donde cada paciente y su familia se sientan acompañados, escuchados y atendidos de forma individualizada.',
    photo: team1,
    photoAlt: 'Laura Velasco Zambrano, logopeda y directora de Clínica LAUVEL',
  },
  {
    name: 'PENDIENTE_NOMBRE_2',
    role: 'Psicóloga',
    bio: 'PENDIENTE_BIO — La información del equipo se incorporará cuando el cliente la confirme (spec §15).',
    photo: team2,
    photoAlt: 'Psicóloga de Clínica LAUVEL',
  },
  {
    name: 'PENDIENTE_NOMBRE_3',
    role: 'Pedagoga',
    bio: 'PENDIENTE_BIO — La información del equipo se incorporará cuando el cliente la confirme (spec §15).',
    photo: team3,
    photoAlt: 'Pedagoga de Clínica LAUVEL',
  },
];
