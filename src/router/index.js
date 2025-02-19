import { createRouter, createWebHistory } from 'vue-router';
import MedAssist from '../components/MedAssist.vue';
import Sintomatix from '../components/Sintomatix.vue';

const routes = [
    { path: '/medassist', component: MedAssist },
    { path: '/sintomatix', component: Sintomatix },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 