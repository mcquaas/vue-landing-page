const faqs = [
    {
        id: 1,
        title: "¿Qué es MedAssist?",
        description: "MedAssist es un asistente clínico impulsado por IA que ayuda a los profesionales de la salud a analizar entrevistas con pacientes, historial clínico, resultados de laboratorio e imágenes en tiempo real."
    },
    {
        id: 2,
        title: "¿Cómo funciona Sintomatix?",
        description: "Sintomatix utiliza entrevistas automatizadas impulsadas por IA para evaluar síntomas y apoya el pre-diagnóstico integrándose con quioscos para capturar datos de salud objetivos."
    },
    {
        id: 3,
        title: "¿Cómo se integran estos sistemas con mi expediente clínico electrónico?",
        description: "Nuestros productos utilizan el estándar deinteroperabilidad FHIR/HL7 para integrarse fácilmente con los sistemas informáticos existentes, asegurando un intercambio de datos eficiente y seguro."
    },
    {
        id: 4,
        title: "¿Qué modelos de IA utilizan?",
        description: "Utilizamos los modelos de IA más avanzados del mundo de compañías como OpenAi, Google, Anthropic, DeepSeek, Grok, entre otros y los combinamos e incorporamos a las diferentes tareeas de nuestros agentes para que sean más precisos y confiables."
    },
    {
            id: 5,
            title: "¿Por qué no simplemente usar ChatGPT?",
            description: "Nuestros agentes utilizan modelos de IA avanzados con funciones que no son accesibles al público en general y se conectan de manera segura y privada con los datos de los sistemas del proveedor de salud."
    },
    {
        id: 6,
        title: "¿Qué tipo de datos se utilizan sus agentes?",
        description: "Aunque usamos modelos preentrenados, los agentes también son alimentados con datos de fuentes confiables como artículos científicos de la literatura médica, bases de datos de salud pública, guías y protocolos de atención clínica y datos sintéticos."
    },
    {
        id: 7,
        title: "¿Sus agentes son capaces de generar diagnósticos?",
        description: "No, nuestros agentes no generan diagnósticos. Son capaces de sugerir posibles diagnósticos y tratamientos basándose en la información disponible, pero el diagnóstico final es responsabilidad del médico."
    },
    {
        id: 8,
        title: "¿Los datos de mis pacientes son privados?",
        description: "Sí, los datos de los pacientes son privados y nunca son compartidos con terceros. Además, los modelos de IA no tienen acceso a los datos privados de los pacientes y no se usan para entrenarlos."
    },
    {
        id: 9,
        title: "¿Qué tan costosa o tardada es la integración de estos sistemas?",
        description: "La integración de nuestros agentes con los sistemas informáticos existentes es relativamente sencilla. Si éstos cuentan con interfaces FHIR/HL7 no se requiere grandes esfuerzos de desarrollo. Un proyecto de integración típicamente varía entre 1 y 3 meses."
    },
    {
        id: 10,
        title: "¿Cómo se adapta Proxant a la rápida evolución de la IA?",
        description: "Los algoritmos detrás de nuestros agentes son continuamente mejorados por el equipo de Proxant y actualizados con las últimas versiones probadas de los modelos de IA por lo que siempre estarán utilizando las últimas capacidades disponibles."
    }
];

export default faqs;
