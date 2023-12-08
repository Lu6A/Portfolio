import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import CombimacProject from './components/projects/CombimacProject.vue'
import KeycubeProject from './components/projects/KeycubeProject.vue'

const routes = [
    { path: '/about', component: AboutPage},
    { path: '/Combimac', component: CombimacProject},
    { path: '/Keycube', component: KeycubeProject},
    { path: '/' , component: HomePage },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App).use(router).mount('#app');
