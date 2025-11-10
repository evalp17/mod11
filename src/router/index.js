import { createRouter, createWebHashHistory } from 'vue-router'

import About from '../components/AboutPage.vue'
import Contact from '../components/ContactPage.vue'
import RandomQuotes from '../components/RandomQuotes.vue' // adjust if your name differs

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/random', component: RandomQuotes },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
