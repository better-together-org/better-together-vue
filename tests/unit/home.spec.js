import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/Home.vue'

describe('Home.vue', () => {
  it('renders the heading text', () => {
    const wrapper = shallowMount(Home, {
      global: {
        stubs: {
          ContactNewsletter: true,
          BtBannerImg: true,
        },
        mocks: {
          t: (key) => key,
        },
      },
    })
    expect(wrapper.find('h2').exists()).toBe(true)
  })
})
