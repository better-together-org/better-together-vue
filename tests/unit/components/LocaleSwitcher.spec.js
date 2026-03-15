import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

// i18n is registered globally via tests/unit/setup.js — do not add it again here

describe('LocaleSwitcher.vue', () => {
  it('renders a locale-switcher dropdown', () => {
    const wrapper = mount(LocaleSwitcher, {
      global: { stubs: { BDropdown: false, BDropdownItem: false } },
    })
    expect(wrapper.find('.locale-switcher').exists()).toBe(true)
  })

  it('shows the current locale label as dropdown text', () => {
    const wrapper = mount(LocaleSwitcher, {
      global: { stubs: { BDropdown: false, BDropdownItem: false } },
    })
    expect(wrapper.text()).toContain('English')
  })

  it('lists all 4 supported locales', () => {
    const wrapper = mount(LocaleSwitcher, {
      global: { stubs: { BDropdown: false, BDropdownItem: false } },
    })
    const text = wrapper.text()
    expect(text).toContain('English')
    expect(text).toContain('Français')
    expect(text).toContain('Español')
    expect(text).toContain('Українська')
  })
})
