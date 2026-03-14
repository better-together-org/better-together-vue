import { createRouter, createWebHistory } from 'vue-router'
import { BtRoutes } from '@bettertogether/community-engine-vue'
import Home from '../pages/Home.vue'

const setPageTitleAndMeta = (to) => {
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta?.title)
  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta?.metaTags)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  Array.from(document.querySelectorAll('[data-vue-router-controlled]'))
    .forEach((el) => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta')
      Object.keys(tagDef).forEach((key) => tag.setAttribute(key, tagDef[key]))
      tag.setAttribute('data-vue-router-controlled', '')
      return tag
    })
    .forEach((tag) => document.head.appendChild(tag))
}

const localRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Be Better Together' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
    meta: { title: 'About | Be Better Together' },
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import('../pages/Goals.vue'),
    meta: { title: 'Goals | Be Better Together' },
  },
  {
    path: '/camp-better-together',
    name: 'CampBetterTogether',
    component: () => import('../pages/CampBetterTogether.vue'),
    meta: { title: 'Camp Better Together | Be Better Together' },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../pages/Projects.vue'),
    meta: { title: 'Projects | Be Better Together' },
  },
  {
    path: '/projects/community-engine',
    name: 'ProjectsCommunityEngine',
    component: () => import('../pages/ProjectsCommunityEngine.vue'),
    meta: { title: 'Community Engine | Projects | Be Better Together' },
  },
  {
    path: '/projects/community-commerce',
    name: 'ProjectsCommunityCommerce',
    component: () => import('../pages/ProjectsCommunityCommerce.vue'),
    meta: { title: 'Community Commerce | Projects | Be Better Together' },
  },
  {
    path: '/tech-for-good',
    name: 'TechForGood',
    component: () => import('../pages/TechForGood.vue'),
    meta: { title: 'Tech for Good | Be Better Together' },
  },
  {
    path: '/membership',
    name: 'Membership',
    component: () => import('../pages/Membership.vue'),
    meta: { title: 'Membership | Be Better Together' },
  },
  {
    path: '/open-source-software',
    name: 'OpenSourceSoftware',
    component: () => import('../pages/OpenSourceSoftware.vue'),
    meta: { title: 'Open Source Software | Be Better Together' },
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import('../pages/Partners.vue'),
    meta: { title: 'Partners | Be Better Together' },
  },
  {
    path: '/opportunities',
    name: 'Opportunities',
    component: () => import('../pages/Opportunities.vue'),
    meta: { title: 'Opportunities | Be Better Together' },
  },
  {
    path: '/community-platforms',
    name: 'CommunityPlatforms',
    component: () => import('../pages/CommunityPlatforms.vue'),
    meta: { title: 'Community Platforms | Be Better Together' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue'),
    meta: { title: 'Contact Us | Be Better Together' },
  },
  // BtRoutes includes auth routes, community routes, and Error404 catch-all from CEV
  ...BtRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: localRoutes,
})

router.beforeEach((to) => {
  setPageTitleAndMeta(to)
})

export default router
