export default {
  whatIsEA: {
    definition:
      "Según TOGAF, la Arquitectura Empresarial es una descripción formal de un sistema, o un plan detallado del sistema a nivel de componentes para guiar su implementación. Es la estructura de los componentes de una organización, sus interrelaciones y los principios y directrices que rigen su diseño y evolución a lo largo del tiempo.",
    domains: [
      "Arquitectura de Negocio: Describe la estrategia, la gobernanza, la estructura organizacional y los procesos de negocio clave.",
      "Arquitectura de Datos: Define la estructura de los activos de datos lógicos y físicos y los recursos de gestión de datos.",
      "Arquitectura de Aplicaciones: Proporciona un plan de las aplicaciones necesarias para soportar los objetivos de negocio, incluyendo las definiciones lógicas de los servicios de las aplicaciones y sus interfaces.",
      "Arquitectura Tecnológica: Define la infraestructura tecnológica necesaria para soportar las arquitecturas de negocio, datos y aplicaciones, incluyendo hardware, software, redes y plataformas de seguridad.",
    ],
  },
  purpose: {
    points: [
      "Alinear TI con los objetivos de negocio: Asegura que las inversiones y capacidades de TI soporten directamente las metas y estrategias de la organización.",
      "Mejorar la toma de decisiones: Proporciona una visión holística de la organización, permitiendo decisiones más informadas.",
      "Optimizar recursos y reducir costos: Estandariza procesos, reduce duplicaciones y minimiza gastos innecesarios.",
      "Gestionar el cambio de manera efectiva: Ofrece un enfoque estructurado para manejar cambios en tecnología y procesos.",
      "Facilitar la comunicación y colaboración: Establece un lenguaje común para los interesados en TI.",
      "Mitigar riesgos: Reduce la probabilidad de fallos en proyectos de TI y problemas de seguridad.",
      "Impulsar la innovación: Identifica áreas donde la tecnología puede mejorar procesos de negocio.",
    ],
  },
  components: [
    "Método de Desarrollo de Arquitectura (ADM): Metodología cíclica que guía a los arquitectos en el desarrollo y mantenimiento de la Arquitectura Empresarial.",
    "Continuo Empresarial: Método para clasificar artefactos y soluciones de arquitectura.",
    "Marco de Contenido de Arquitectura: Define entregables, artefactos y bloques de construcción arquitectónicos.",
    "Marco de Capacidad de Arquitectura: Define parámetros y procesos para la gobernanza del repositorio de arquitectura.",
    "Repositorio de Arquitectura: Repositorio lógico que contiene información y conocimiento de arquitectura.",
  ],
  admPhases: [
    {
      name: "Fase Preliminar: Marco y Principios",
      purpose:
        "Establecer la capacidad de arquitectura de la organización. Define 'dónde, qué, por qué, quién y cómo hacemos arquitectura'.",
      use: "Define principios arquitectónicos, alcance, establece el equipo de arquitectura y personaliza TOGAF.",
    },
    {
      name: "Fase A: Visión de Arquitectura",
      purpose:
        "Desarrollar una visión de alto nivel de las capacidades de negocio y el valor a entregar.",
      use: "Identifica interesados, sus preocupaciones y requisitos de negocio. Define el alcance y obtiene aprobación.",
    },
    {
      name: "Fase B: Arquitectura de Negocio",
      purpose:
        "Desarrollar la Arquitectura de Negocio detallada para la línea base y el estado objetivo.",
      use: "Modela procesos de negocio, estructura organizacional, funciones y roles.",
    },
    {
      name: "Fase C: Arquitecturas de Sistemas de Información",
      purpose:
        "Desarrollar Arquitecturas de Datos y Aplicaciones detalladas para la línea base y el estado objetivo.",
      use: "Define modelos de datos, gestión de datos, flujos de información y sistemas clave.",
    },
    {
      name: "Fase D: Arquitectura Tecnológica",
      purpose:
        "Desarrollar la Arquitectura Tecnológica detallada para la línea base y el estado objetivo.",
      use: "Define la infraestructura de hardware, software, redes y estándares tecnológicos.",
    },
    {
      name: "Fase E: Oportunidades y Soluciones",
      purpose:
        "Identificar oportunidades de transformación y soluciones candidatas para pasar al estado objetivo.",
      use: "Evalúa brechas, identifica dependencias y desarrolla soluciones de alto nivel.",
    },
    {
      name: "Fase F: Planificación de la Migración",
      purpose:
        "Crear un plan de migración detallado para implementar la arquitectura objetivo.",
      use: "Define una hoja de ruta, prioriza proyectos, estima costos y gestiona riesgos.",
    },
    {
      name: "Fase G: Gobernanza de la Implementación",
      purpose:
        "Asegurar la conformidad de la implementación con la arquitectura definida.",
      use: "Supervisa la implementación, gestiona contratos y asegura la adherencia a principios arquitectónicos.",
    },
    {
      name: "Fase H: Gestión del Cambio de la Arquitectura",
      purpose:
        "Establecer procesos para monitorear y gestionar cambios en la arquitectura.",
      use: "Asegura que la arquitectura permanezca relevante y alineada con los cambios en el negocio y la tecnología.",
    },
  ],
};
