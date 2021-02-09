import Vue from 'vue'
import VueRouter from 'vue-router'
import { BtRoutes } from '@bettertogether/community-engine-vue'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../pages/Projects.vue'),
  },
  {
    path: '/projects/community-commerce',
    name: 'Community Commerce | Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects/community-commerce" */ '../pages/ProjectsCommunityCommerce.vue'),
  },
  {
    path: '/projects/community-engine',
    name: 'Community Engine | Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects/community-engine" */ '../pages/ProjectsCommunityEngine.vue'),
  },
  {
    path: '/projects/tech-for-good',
    name: 'Tech For Good | Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects/tech-for-good" */ '../pages/TechForGood.vue'),
  },
  {
    path: '/partners',
    name: 'Partners',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "partners" */ '../pages/Partners.vue'),
  },
  {
    path: '/opportunities',
    name: 'Opportunities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "opportunities" */ '../pages/Opportunities.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../pages/Contact.vue'),
  },
  {
    path: '*',
    name: 'Error404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "error-404" */ '../pages/Error404.vue'),
  },
  ...BtRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
