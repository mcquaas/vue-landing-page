<template>
    <div class="med-assist">
        <h2>MedAssist - Asistente Clínico Impulsado por IA</h2>
        <p>
            MedAssist actúa como un asistente clínico impulsado por IA para los profesionales de la salud. Analiza entrevistas con pacientes, historial clínico, resultados de laboratorio e imágenes en tiempo real, integrándose sin problemas con los sistemas EHR para proporcionar documentación automatizada, información estructurada y recomendaciones de tratamiento.
        </p>
        <button @click="startAssessment">Iniciar Evaluación</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const startAssessment = () => {
    // Lógica para iniciar la evaluación
    console.log("Iniciando evaluación...");
    // Aquí podrías hacer una llamada a la API para iniciar el proceso
};
</script>

<style scoped>
.med-assist {
    /* Estilos para el componente */
}
</style> 