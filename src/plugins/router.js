import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '', name: 'home', component: () => import('@/pages/Home.vue')},
    {path: '/home', name: 'home', component: () => import('@/pages/Home.vue')},
    {path: '/services', name: 'services', component: () => import('@/pages/Services.vue')},
    {path: '/contact', name: 'contact', component: () => import('@/pages/Contact.vue')},
    {path: '/about', name: 'about', component: () => import('@/pages/About.vue')},
    {path: '/:pathMatch(.*)*', name: '404', component: () => import('@/pages/NotFound.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),  
})

export default router