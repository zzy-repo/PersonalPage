import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    { path: '/', redirect:'/page-1' } ,
    { path: '/page-1' , name: 'page-1' , component: ()=>import( '@/views/page-1-Home.vue')},
    { path: '/page-2' , name: 'page-2' , component: ()=>import( '@/views/page-2-AboutMe.vue')},
    { path: '/page-3' , name: 'page-3' , component: ()=>import( '@/views/page-3-Skills.vue')},
    { path: '/page-4' , name: 'page-4' , component: ()=>import( '@/views/page-4-Projects.vue')},
    { path: '/page-5' , name: 'page-5' , component: ()=>import( '@/views/page-5-Experiences.vue')},
    { path: '/page-6' , name: 'page-6' , component: ()=>import( '@/views/page-6-Contact.vue')},
    { path: '/page-7' , name: 'page-7' , component: ()=>import( '@/views/page-7-End.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;