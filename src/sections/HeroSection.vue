<script setup>
import { ref } from 'vue';

const selectedFeature = ref(null); // This should be passed from FeatureSection
</script>

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left mt-20">Asistentes IA potentes y confiables para la atención médica</h1>
                <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left">Creamos agentes de IA versátiles que permiten a los profesionales de la salud a centrarse en lo que es importante, ayudándoles a tomar decisiones informadas y basadas en evidencia y datos actuales. Para ello nos apoyamos en los modelos más recientes y poderosos de los líderes de la IA en el mundo.</p>
                <!-- Logos de empresas líderes -->
                <div class="flex flex-wrap justify-center lg:justify-start mt-10">
                    <img src="/images/openai.png" alt="OpenAI" class="w-30 h-10 p-2 mr-3 mb-3">
                    <img src="/images/google-deepmind.png" alt="Google" class="w-30 h-10 p-1 mr-3 mb-3">
                    <img src="/images/anthropic.png" alt="Anthropic" class="w-50 h-8 p-1 pt-3 mr-3 mb-3">
                    <img src="/images/deepseek.png" alt="Microsoft" class="w-30 h-10 p-2 mb-3">
                </div>
                <div class="flex justify-center lg:justify-start mt-10">
                    <LinkButton btn-type="primary" link="#features" v-smooth-scroll>Más info</LinkButton>
                    <LinkButton btn-type="muted" link="#subscribe" v-smooth-scroll>Agenda una demo</LinkButton>
                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                <img v-if="selectedFeature?.name === 'MedAssist'" class="z-10 w-full" src="/images/medassist-ipad-hor.png" />
                <img v-else class="z-10 w-full" src="/images/illustration-hero.svg" />
                <div class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>

<style scoped>
/* Adjust the iPad image position */
.relative {
    margin-right: 0; /* Adjust this value as needed */
}
</style>
