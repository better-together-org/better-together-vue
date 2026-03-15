import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import BrandingLogo from '@/components/BrandingLogo.vue'

function makeRouter(initialPath = '/') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div>Home</div>' } },
      { path: '/users/sign-in', component: { template: '<div>Sign in</div>' } },
    ],
  })
  router.push(initialPath)
  return router
}

describe('BrandingLogo.vue', () => {
  it('renders an anchor with class navbar-brand linking to /', async () => {
    const router = makeRouter()
    await router.isReady()
    const wrapper = mount(BrandingLogo, { global: { plugins: [router] } })
    const link = wrapper.find('a.navbar-brand')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/')
  })

  it('contains a logo img with alt text', async () => {
    const router = makeRouter()
    await router.isReady()
    const wrapper = mount(BrandingLogo, { global: { plugins: [router] } })
    const img = wrapper.find('img.logo')
    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBeTruthy()
  })

  it('navigates client-side to / when clicked from another route', async () => {
    const router = makeRouter('/users/sign-in')
    await router.isReady()
    const wrapper = mount(BrandingLogo, {
      global: { plugins: [router] },
      attachTo: document.body,
    })
    expect(router.currentRoute.value.path).toBe('/users/sign-in')
    await wrapper.find('a.navbar-brand').trigger('click')
    await flushPromises()
    expect(router.currentRoute.value.path).toBe('/')
    wrapper.unmount()
  })
})
