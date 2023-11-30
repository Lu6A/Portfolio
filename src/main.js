import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import CombimacProject from './components/CombimacProject.vue'

const routes = [
    { path: '/about', component: AboutPage},
    { path: '/Combimac', component: CombimacProject},
    { path: '/' , component: HomePage },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App).use(router).mount('#app');
