import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import WhyPage from '@/views/why/WhyPage';
import PricingPage from '@/views/price/PricingPage.vue';
import AboutUsPage from '@/views/about-us/AboutUsPage';
import CareersPage from '@/views/careers/CareersPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Home Page' }
  },
  {
    path: '/why',
    name: 'why',
    component: WhyPage,
    meta: { title: 'Why Page' }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingPage,
    meta: { title: 'Pricing Page' }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsPage,
    meta: { title: 'About Page' }
  },
  {
    path: '/careers',
    name: 'careers',
    component: CareersPage,
    meta: { title: 'Careers Page' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
