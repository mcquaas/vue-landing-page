<template>
    <div class="sintomatix">
        <h2>Sintomatix - Triage Digital Basado en IA</h2>
        <p>
            Sintomatix involucra a los pacientes a través de entrevistas automatizadas impulsadas por IA para evaluar síntomas. Soporta el pre-diagnóstico integrándose con quioscos para capturar datos de salud objetivos y proporciona informes de salud estructurados para los profesionales.
        </p>
        <button @click="startTriage">Iniciar Triage</button>
    </div>
</template>

<script setup>
const startTriage = () => {
    // Lógica para iniciar el triage
    console.log("Iniciando triage...");
};
</script>

<style scoped>
.sintomatix {
    /* Estilos para el componente */
}
</style> 