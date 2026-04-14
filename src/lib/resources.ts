// Sample of real, public resources that FIGHT4 will vet.
// Sourced from LLS, Stupid Cancer, The Samfund, and Cactus Cancer public pages.
// These are examples; full library comes with /ask launch.

export type ResourceCategory = 'financial' | 'support' | 'experiences' | 'education';
export type ResourceStage = 'diagnosed' | 'treatment' | 'remission' | 'any';

export type Resource = {
  id: string;
  name: string;
  org: string;
  url: string;
  category: ResourceCategory;
  stage: ResourceStage[];
  countries: string[];
  summary: { en: string; es: string };
  vettedNote: { en: string; es: string };
};

export const sampleResources: Resource[] = [
  {
    id: 'lls-copay',
    name: 'LLS Co-Pay Assistance Program',
    org: 'Leukemia & Lymphoma Society',
    url: 'https://www.lls.org/support-resources/financial-support/co-pay-assistance-program',
    category: 'financial',
    stage: ['diagnosed', 'treatment'],
    countries: ['USA'],
    summary: {
      en: 'Covers insurance co-pays, premiums, and select treatment costs for blood cancer patients. Grants up to $10,000/year depending on diagnosis.',
      es: 'Cubre copagos de seguro, primas y ciertos costos de tratamiento para pacientes con cáncer de sangre. Becas hasta $10,000/año según diagnóstico.',
    },
    vettedNote: {
      en: 'Used this personally. Application takes ~20 minutes; decisions in 1-2 weeks. They renew annually if funds remain.',
      es: 'Lo usé personalmente. La aplicación toma ~20 minutos; decisiones en 1-2 semanas. Renuevan anualmente si quedan fondos.',
    },
  },
  {
    id: 'samfund',
    name: 'The Samfund Grants',
    org: 'The Samfund',
    url: 'https://www.thesamfund.org',
    category: 'financial',
    stage: ['treatment', 'remission'],
    countries: ['USA'],
    summary: {
      en: 'Direct financial grants ($500–$4,000) to young adults 21–39 post-cancer-treatment to help rebuild financially: rent, student loans, fertility, mental health.',
      es: 'Becas financieras directas ($500–$4,000) para jóvenes adultos 21–39 post-tratamiento para reconstruirse: renta, préstamos estudiantiles, fertilidad, salud mental.',
    },
    vettedNote: {
      en: 'YA-specific. Application windows are short — set a calendar reminder. No income verification for smaller grants.',
      es: 'Específico para jóvenes adultos. Las ventanas de aplicación son cortas — pon un recordatorio. No verifica ingresos para becas pequeñas.',
    },
  },
  {
    id: 'stupid-cancer-community',
    name: 'Stupid Cancer Digital Community',
    org: 'Stupid Cancer',
    url: 'https://stupidcancer.org/community',
    category: 'support',
    stage: ['any'],
    countries: ['USA', 'Canada'],
    summary: {
      en: "Online peer community for 15-39 year olds with cancer. Weekly virtual meetups, type-specific channels, and a real team that responds to questions.",
      es: 'Comunidad virtual entre pares para personas de 15-39 años con cáncer. Encuentros virtuales semanales, canales por tipo de cáncer y un equipo real que responde preguntas.',
    },
    vettedNote: {
      en: "The only YA cancer community that actually feels like people your age. Their CancerCon event is worth traveling for.",
      es: 'La única comunidad de cáncer en jóvenes que se siente como personas de tu edad. Su evento CancerCon vale el viaje.',
    },
  },
  {
    id: 'cactus-connect',
    name: 'Cactus Connect Groups',
    org: 'Cactus Cancer Society',
    url: 'https://cactuscancer.org/programs',
    category: 'support',
    stage: ['any'],
    countries: ['USA'],
    summary: {
      en: 'Free, topic-based virtual support groups for young adults with cancer — from just-diagnosed to survivorship to grief. Led by trained facilitators.',
      es: 'Grupos de apoyo virtuales gratuitos por tema para jóvenes adultos con cáncer — desde recién diagnosticados hasta supervivencia y duelo. Liderados por facilitadores capacitados.',
    },
    vettedNote: {
      en: "Smaller and more intimate than Stupid Cancer's. Great for introverts. The writing workshop group in particular is a gem.",
      es: 'Más pequeño e íntimo que el de Stupid Cancer. Ideal para introvertidos. El grupo de taller de escritura en particular es una joya.',
    },
  },
  {
    id: 'first-descents',
    name: 'First Descents Adventure Programs',
    org: 'First Descents',
    url: 'https://firstdescents.org',
    category: 'experiences',
    stage: ['treatment', 'remission'],
    countries: ['USA'],
    summary: {
      en: 'Free weeklong outdoor adventures (rock climbing, kayaking, surfing) for young adults impacted by cancer. Transportation and lodging covered.',
      es: 'Aventuras al aire libre gratuitas de una semana (escalada, kayak, surf) para jóvenes afectados por cáncer. Transporte y alojamiento cubiertos.',
    },
    vettedNote: {
      en: 'The single most healing thing I have seen YA cancer patients do. Apply 6 months out — spots fill fast.',
      es: 'Lo más sanador que he visto hacer a pacientes jóvenes con cáncer. Aplica con 6 meses de anticipación — se llenan rápido.',
    },
  },
  {
    id: 'lls-spanish',
    name: 'LLS Spanish Education Programs',
    org: 'Leukemia & Lymphoma Society',
    url: 'https://www.lls.org/espanol',
    category: 'education',
    stage: ['any'],
    countries: ['USA', 'Global'],
    summary: {
      en: 'Full LLS patient education translated into Spanish, plus bilingual patient navigators and Spanish-language community events.',
      es: 'Educación completa de LLS para pacientes en español, más navegadores bilingües de pacientes y eventos comunitarios en español.',
    },
    vettedNote: {
      en: "I volunteer with Laura Diaz on these programs. The patient navigators are the most underused resource in the entire blood cancer space.",
      es: 'Soy voluntaria con Laura Diaz en estos programas. Los navegadores de pacientes son el recurso más subutilizado en todo el espacio del cáncer de sangre.',
    },
  },
];
