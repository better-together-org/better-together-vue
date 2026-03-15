import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Footer from '@/components/Footer.vue'

function makeRouter() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component: { template: '<div />' } }],
  })
  router.push('/')
  return router
}

describe('Footer.vue', () => {
  it('renders a footer element with id="footer"', async () => {
    const router = makeRouter()
    await router.isReady()
    const wrapper = mount(Footer, {
      global: {
        plugins: [router],
        stubs: { BNavbar: { template: '<nav><slot /></nav>' } },
      },
    })
    expect(wrapper.find('footer#footer').exists()).toBe(true)
  })

  it('renders a BrandingLogo with a link to /', async () => {
    const router = makeRouter()
    await router.isReady()
    const wrapper = mount(Footer, {
      global: {
        plugins: [router],
        stubs: { BNavbar: { template: '<nav><slot /></nav>' } },
      },
    })
    const link = wrapper.find('a.navbar-brand')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/')
  })
})
