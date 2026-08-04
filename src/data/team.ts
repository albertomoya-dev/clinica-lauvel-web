import type { ImageMetadata } from 'astro';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: ImageMetadata;
  photoAlt: string;
}

import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';

export const team: TeamMember[] = [
  {
    name: 'PENDIENTE_NOMBRE_1',
    role: 'Logopeda',
    bio: 'PENDIENTE_BIO — La información del equipo se incorporará cuando el cliente la confirme (spec §15).',
    photo: team1,
    photoAlt: 'Logopeda de Clínica LAUVEL',
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
  {
    name: 'PENDIENTE_NOMBRE_4',
    role: 'Fisioterapeuta',
    bio: 'PENDIENTE_BIO — La información del equipo se incorporará cuando el cliente la confirme (spec §15).',
    photo: team4,
    photoAlt: 'Fisioterapeuta de Clínica LAUVEL',
  },
];
