import type { ImageMetadata } from 'astro';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: ImageMetadata;
  photoAlt: string;
}

import team1 from '../assets/images/team-1.jpeg';
import team2 from '../assets/images/team-2.jpeg';
import team3 from '../assets/images/team-3.jpeg';
import team4 from '../assets/images/team-4.jpeg';

export const team: TeamMember[] = [
  {
    name: 'Laura Velasco',
    role: 'Logopeda y directora de Clínica LAUVEL',
    bio: 'Laura Velasco es logopeda y directora de Clínica LAUVEL. Su vocación por el desarrollo, la comunicación y el lenguaje la ha llevado a mantener una formación continua: cuenta con un Máster en Atención Temprana y formación especializada en terapia miofuncional, lenguaje, habla, comunicación y funciones orofaciales, tanto en población infantil como adulta.\n\nA lo largo de su trayectoria ha trabajado con niños, adolescentes y adultos, realizando intervenciones adaptadas a las necesidades individuales de cada paciente, desde una atención cercana y personalizada.\n\nComo directora de LAUVEL apuesta por un modelo de intervención multidisciplinar, coordinado con las familias, los centros educativos y otros profesionales, con el objetivo de acompañar a cada persona y a su familia durante el proceso terapéutico y potenciar al máximo sus capacidades.',
    photo: team1,
    photoAlt: 'Laura Velasco, logopeda y directora de Clínica LAUVEL',
  },
  {
    name: 'Daniel Suárez',
    role: 'Pedagogo',
    bio: 'Daniel Suárez es Graduado en Pedagogía y forma parte del equipo de Clínica LAUVEL. Su labor se centra en acompañar y apoyar a niños y adolescentes en sus procesos de aprendizaje, adaptando la intervención a las necesidades y características individuales de cada persona.\n\nSu objetivo es favorecer el desarrollo de las capacidades de cada paciente, proporcionando estrategias y herramientas que permitan mejorar su autonomía, aprendizaje y rendimiento académico. Para ello, trabaja de manera individualizada y coordinada con las familias y otros profesionales, buscando siempre una intervención cercana y adaptada.\n\nEn LAUVEL apuesta por una atención personalizada, creando un entorno de confianza en el que cada niño pueda avanzar a su propio ritmo y desarrollar al máximo sus capacidades.',
    photo: team2,
    photoAlt: 'Daniel Suárez, pedagogo en Clínica LAUVEL',
  },
  {
    name: 'Lucía Cabezas',
    role: 'Psicóloga General Sanitaria',
    bio: 'Lucía Cabezas es psicóloga general sanitaria, especializada en intervención psicológica y familiar. Cuenta con un Máster en Psicología General Sanitaria, un Máster en Intervención y Mediación Familiar y un Experto en Terapia Sistémica Breve, formación que le permite abordar el bienestar psicológico atendiendo tanto a cada persona como a sus relaciones y su contexto familiar.\n\nSu trayectoria combina la intervención clínica, la investigación y la divulgación. Trabaja desde una atención cercana, individualizada y basada en la evidencia, con especial atención a las relaciones interpersonales, la familia, la comunicación, la gestión emocional y las dificultades de cada etapa de la vida.\n\nEntiende el proceso terapéutico como un espacio de acompañamiento, desde una mirada integradora y respetuosa, en el que comprender lo que ocurre, identificar los recursos de cada persona y construir formas más saludables de relacionarse con uno mismo y con los demás.',
    photo: team3,
    photoAlt: 'Lucía Cabezas, psicóloga general sanitaria en Clínica LAUVEL',
  },
  {
    name: 'Pablo Sierra',
    role: 'Fisioterapeuta',
    bio: 'Pablo Sierra es fisioterapeuta y forma parte del equipo de Clínica LAUVEL. Desde que comenzó su camino en la fisioterapia tuvo claro que quería dedicarse a una profesión en la que pudiera ayudar a las personas, acompañarlas en sus procesos y seguir aprendiendo cada día.\n\nPara él, cada paciente es diferente, por lo que considera fundamental escuchar, entender las necesidades de cada persona y adaptar el tratamiento de manera individualizada.\n\nEn LAUVEL afronta esta etapa con ilusión, ganas de seguir creciendo y de aportar todo lo que pueda al bienestar de cada paciente.',
    photo: team4,
    photoAlt: 'Pablo Sierra, fisioterapeuta en Clínica LAUVEL',
  },
];
