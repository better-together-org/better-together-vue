import Vue from 'vue'
import VueRouter from 'vue-router'
import { BtRoutes } from '@bettertogether/community-engine-vue'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const setPageTitle = (to, from, next) => {
  // This goes through the matched routes from last to first,
  // finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep,
  // and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag))

  return next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Be Better Together',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
    meta: {
      title: 'About Us | Be Better Together',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../pages/Projects.vue'),
    meta: {
      title: 'Projects | Be Better Together',
    },
  },
  {
    path: '/projects/community-commerce',
    name: 'Community Commerce | Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects/community-commerce" */ '../pages/ProjectsCommunityCommerce.vue'),
    meta: {
      title: 'Community Commerce | Projects | Be Better Together',
    },
  },
  {
    path: '/projects/community-engine',
    name: 'Community Engine | Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects/community-engine" */ '../pages/ProjectsCommunityEngine.vue'),
    meta: {
      title: 'Community Engine | Projects | Be Better Together',
    },
  },
  {
    path: '/projects/tech-for-good',
    name: 'Tech For Good | Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects/tech-for-good" */ '../pages/TechForGood.vue'),
    meta: {
      title: 'Tech For Good | Projects | Be Better Together',
    },
  },
  {
    path: '/partners',
    name: 'Partners',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "partners" */ '../pages/Partners.vue'),
    meta: {
      title: 'Partners | Be Better Together',
    },
  },
  {
    path: '/opportunities',
    name: 'Opportunities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "opportunities" */ '../pages/Opportunities.vue'),
    meta: {
      title: 'Opportunities | Be Better Together',
    },
  },
  {
    path: '/community-platforms',
    name: 'CommunityPlatforms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "opportunities" */ '../pages/CommunityPlatforms.vue'),
    meta: {
      title: 'Community Platforms | Be Better Together',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../pages/Contact.vue'),
    meta: {
      title: 'Contact Us | Be Better Together',
    },
  },
  {
    path: '*',
    name: 'Error404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "error-404" */ '../pages/Error404.vue'),
    meta: {
      title: '404 Not Found | Be Better Together',
    },
  },
  ...BtRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// This callback runs before every route change, including on page load.
router.beforeEach(setPageTitle)

export default router
