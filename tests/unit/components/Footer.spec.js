import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Footer from '@/components/Footer.vue'

vi.mock('@/composables/useSocialLinks', () => ({
  useSocialLinks: () => ({
    links: ref([
      { platform: 'github', handle: 'better-together-org', url: 'https://github.com/better-together-org', icon: 'bi-github' },
      { platform: 'linkedin', handle: 'better-together-community-ca', url: 'https://www.linkedin.com/company/better-together-community-ca', icon: 'bi-linkedin' },
    ]),
    loading: ref(false),
    error: ref(null),
  }),
}))

function makeRouter() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/about', component: { template: '<div />' } },
      { path: '/projects', component: { template: '<div />' } },
      { path: '/partners', component: { template: '<div />' } },
      { path: '/opportunities', component: { template: '<div />' } },
      { path: '/contact', component: { template: '<div />' } },
    ],
  })
  router.push('/')
  return router
}

function mountFooter() {
  return mount(Footer, {
    global: {
      plugins: [makeRouter()],
      stubs: {
        BrandingLogo: { template: '<div class="branding-logo-stub" />' },
      },
    },
  })
}

describe('Footer.vue', () => {
  it('renders the footer element', () => {
    const wrapper = mountFooter()
    expect(wrapper.find('footer#footer').exists()).toBe(true)
  })

  it('shows the tagline', () => {
    const wrapper = mountFooter()
    expect(wrapper.find('.footer-tagline').text()).toContain('Building public community infrastructure')
  })

  it('shows a copyright notice with current year', () => {
    const wrapper = mountFooter()
    const year = new Date().getFullYear().toString()
    expect(wrapper.find('.footer-copyright').text()).toContain(year)
  })

  it('renders nav links for main pages', () => {
    const wrapper = mountFooter()
    const links = wrapper.findAll('nav a')
    const hrefs = links.map((l) => l.attributes('href'))
    expect(hrefs).toContain('/about')
    expect(hrefs).toContain('/contact')
  })

  it('renders social links from useSocialLinks', () => {
    const wrapper = mountFooter()
    const socialLinks = wrapper.findAll('a[target="_blank"]')
    expect(socialLinks.length).toBe(2)
    expect(socialLinks[0].attributes('href')).toContain('github.com')
    expect(socialLinks[1].attributes('href')).toContain('linkedin.com')
  })

  it('renders email contact link', () => {
    const wrapper = mountFooter()
    const emailLink = wrapper.find('a[href^="mailto:"]')
    expect(emailLink.exists()).toBe(true)
    expect(emailLink.attributes('href')).toContain('bettertogethersolutions.com')
  })
})
