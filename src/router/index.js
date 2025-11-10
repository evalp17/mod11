import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../components/About.vue'
import RandomQuotes from '../components/RandomQuotes.vue'
import Contact from '../components/Contact.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/random', component: RandomQuotes },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default createRouter({
  history: createWebHashHistory(),   // ✅ required for GitHub Pages
  routes,
})
