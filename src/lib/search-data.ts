export interface SearchEntry {
  chapter: number;
  title: string;
  section: string;
  keywords: string[];
  path: string;
}

export const searchData: SearchEntry[] = [
  // Capítulo 1
  { chapter: 1, title: "Cuídese para poder cuidar", section: "Qué significa ser cuidador", keywords: ["cuidador", "responsabilidad", "sobrecarga", "apoyo", "familiar"], path: "/capitulo-1" },
  { chapter: 1, title: "Cuídese para poder cuidar", section: "Síndrome del cuidador quemado", keywords: ["burnout", "agotamiento", "estrés", "cansancio", "quemado", "señales de alerta"], path: "/capitulo-1" },
  { chapter: 1, title: "Cuídese para poder cuidar", section: "Estrategias de autocuidado", keywords: ["autocuidado", "descanso", "bienestar", "técnicas", "relajación"], path: "/capitulo-1" },
  { chapter: 1, title: "Cuídese para poder cuidar", section: "Recursos disponibles", keywords: ["recursos", "ayuda", "servicios sociales", "económicos", "psicosocial", "apoyo"], path: "/capitulo-1" },
  { chapter: 1, title: "Cuídese para poder cuidar", section: "Proceso de duelo", keywords: ["duelo", "pérdida", "fases", "afrontamiento", "muerte"], path: "/capitulo-1" },

  // Capítulo 2
  { chapter: 2, title: "Qué es envejecer", section: "Ciclo vital y etapas", keywords: ["ciclo vital", "etapas", "vida", "desarrollo"], path: "/capitulo-2" },
  { chapter: 2, title: "Qué es envejecer", section: "Características del envejecimiento", keywords: ["envejecimiento", "OMS", "clasificación", "edades"], path: "/capitulo-2" },
  { chapter: 2, title: "Qué es envejecer", section: "Cambios fisiológicos", keywords: ["visión", "audición", "tacto", "piel", "cardiovascular", "musculoesquelético", "respiratorio", "digestivo", "cambios"], path: "/capitulo-2" },
  { chapter: 2, title: "Qué es envejecer", section: "Rol social del envejecimiento", keywords: ["social", "rol", "participación", "aislamiento"], path: "/capitulo-2" },

  // Capítulo 3
  { chapter: 3, title: "Higiene Personal", section: "Objetivos de la higiene", keywords: ["higiene", "objetivos", "bienestar", "prevención", "infecciones"], path: "/capitulo-3" },
  { chapter: 3, title: "Higiene Personal", section: "Antes de iniciar la higiene", keywords: ["preparación", "intimidad", "autonomía", "lavado manos", "temperatura"], path: "/capitulo-3" },
  { chapter: 3, title: "Higiene Personal", section: "Higiene en cama", keywords: ["cama", "encamado", "procedimiento", "paso a paso", "lavado"], path: "/capitulo-3" },
  { chapter: 3, title: "Higiene Personal", section: "Higiene genital", keywords: ["genital", "íntima", "mujer", "hombre"], path: "/capitulo-3" },
  { chapter: 3, title: "Higiene Personal", section: "Lavado del cabello", keywords: ["cabello", "pelo", "champú", "lavado"], path: "/capitulo-3" },
  { chapter: 3, title: "Higiene Personal", section: "Higiene ocular", keywords: ["ojos", "ocular", "suero", "limpieza"], path: "/capitulo-3" },
  { chapter: 3, title: "Higiene Personal", section: "Cuidado de manos y pies", keywords: ["manos", "pies", "uñas", "diabético"], path: "/capitulo-3" },
  { chapter: 3, title: "Higiene Personal", section: "Lavado de manos del cuidador", keywords: ["lavado manos", "cuidador", "antiséptico", "hidroalcohólico"], path: "/capitulo-3" },

  // Capítulo 4
  { chapter: 4, title: "Vestido", section: "Principios generales del vestido", keywords: ["vestido", "ropa", "autonomía", "principios"], path: "/capitulo-4" },
  { chapter: 4, title: "Vestido", section: "Criterios de elección de ropa", keywords: ["ropa", "elección", "comodidad", "seguridad", "botones", "velcro"], path: "/capitulo-4" },
  { chapter: 4, title: "Vestido", section: "Calzado adecuado", keywords: ["calzado", "zapatos", "zapatillas", "edema", "antideslizante"], path: "/capitulo-4" },
  { chapter: 4, title: "Vestido", section: "Consejos prácticos para vestir", keywords: ["vestir", "desvestir", "técnica", "movilidad reducida"], path: "/capitulo-4" },

  // Capítulo 5
  { chapter: 5, title: "Movilización", section: "Movilizaciones y transferencias", keywords: ["movilización", "transferencia", "traslado", "cama", "silla"], path: "/capitulo-5" },
  { chapter: 5, title: "Movilización", section: "Mecánica corporal del cuidador", keywords: ["mecánica corporal", "espalda", "postura", "lesión", "ergonomía"], path: "/capitulo-5" },
  { chapter: 5, title: "Movilización", section: "Movilizaciones en cama", keywords: ["cama", "cambio postural", "girar", "incorporar", "decúbito"], path: "/capitulo-5" },
  { chapter: 5, title: "Movilización", section: "Transferencias", keywords: ["silla de ruedas", "bipedestación", "sentado", "transferencia"], path: "/capitulo-5" },
  { chapter: 5, title: "Movilización", section: "Ayudas para la marcha", keywords: ["bastón", "muletas", "andador", "marcha", "caminar"], path: "/capitulo-5" },

  // Capítulo 6
  { chapter: 6, title: "Alimentación e Hidratación", section: "Malnutrición en ancianos", keywords: ["malnutrición", "desnutrición", "riesgo", "causas"], path: "/capitulo-6" },
  { chapter: 6, title: "Alimentación e Hidratación", section: "Consejos de nutrición", keywords: ["nutrición", "alimentación", "dieta", "hidratación", "agua", "líquidos"], path: "/capitulo-6" },
  { chapter: 6, title: "Alimentación e Hidratación", section: "Disfagia", keywords: ["disfagia", "tragar", "atragantamiento", "deglución", "espesante"], path: "/capitulo-6" },
  { chapter: 6, title: "Alimentación e Hidratación", section: "Nutrición enteral", keywords: ["enteral", "sonda", "nasogástrica", "PEG", "alimentación"], path: "/capitulo-6" },
  { chapter: 6, title: "Alimentación e Hidratación", section: "Medicación por sonda", keywords: ["medicación", "sonda", "triturar", "administración"], path: "/capitulo-6" },

  // Capítulo 7
  { chapter: 7, title: "Incontinencia Urinaria", section: "Tipos de incontinencia", keywords: ["incontinencia", "urinaria", "tipos", "esfuerzo", "urgencia", "funcional"], path: "/capitulo-7" },
  { chapter: 7, title: "Incontinencia Urinaria", section: "Manejo de la incontinencia", keywords: ["manejo", "absorbentes", "pañales", "productos"], path: "/capitulo-7" },
  { chapter: 7, title: "Incontinencia Urinaria", section: "Sondaje vesical", keywords: ["sonda", "vesical", "catéter", "bolsa", "orina"], path: "/capitulo-7" },
  { chapter: 7, title: "Incontinencia Urinaria", section: "Cuidados de la piel", keywords: ["piel", "dermatitis", "irritación", "protección"], path: "/capitulo-7" },

  // Capítulo 8
  { chapter: 8, title: "Úlceras por Presión", section: "Prevención de UPP", keywords: ["úlcera", "presión", "prevención", "UPP", "escara"], path: "/capitulo-8" },
  { chapter: 8, title: "Úlceras por Presión", section: "Valoración de úlceras", keywords: ["valoración", "grado", "estadio", "clasificación"], path: "/capitulo-8" },
  { chapter: 8, title: "Úlceras por Presión", section: "Cambios posturales", keywords: ["cambios posturales", "posición", "alivio presión", "superficies"], path: "/capitulo-8" },
  { chapter: 8, title: "Úlceras por Presión", section: "Cuidados de la herida", keywords: ["herida", "cura", "apósito", "tratamiento", "cicatrización"], path: "/capitulo-8" },
  { chapter: 8, title: "Úlceras por Presión", section: "Nutrición y UPP", keywords: ["nutrición", "proteínas", "cicatrización", "alimentación"], path: "/capitulo-8" },

  // Capítulo 9
  { chapter: 9, title: "Prevención de Caídas", section: "Factores de riesgo", keywords: ["caídas", "riesgo", "factores", "prevención"], path: "/capitulo-9" },
  { chapter: 9, title: "Prevención de Caídas", section: "Adaptación del hogar", keywords: ["hogar", "domicilio", "adaptación", "barreras", "iluminación", "baño"], path: "/capitulo-9" },
  { chapter: 9, title: "Prevención de Caídas", section: "Actuación ante una caída", keywords: ["caída", "actuación", "protocolo", "suelo", "levantarse"], path: "/capitulo-9" },
  { chapter: 9, title: "Prevención de Caídas", section: "Ejercicios de equilibrio", keywords: ["equilibrio", "ejercicio", "fuerza", "prevención"], path: "/capitulo-9" },

  // Capítulo 10
  { chapter: 10, title: "Medicación", section: "Manejo seguro de medicamentos", keywords: ["medicación", "medicamentos", "seguridad", "administración", "pastillas"], path: "/capitulo-10" },
  { chapter: 10, title: "Medicación", section: "Vías de administración", keywords: ["oral", "tópica", "rectal", "inhalada", "subcutánea", "vías"], path: "/capitulo-10" },
  { chapter: 10, title: "Medicación", section: "Conservación de medicamentos", keywords: ["conservación", "almacenamiento", "caducidad", "nevera", "temperatura"], path: "/capitulo-10" },
  { chapter: 10, title: "Medicación", section: "Organización de la medicación", keywords: ["pastillero", "organización", "horarios", "receta", "pauta"], path: "/capitulo-10" },
];
