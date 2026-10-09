import { describe, it, expect, vi, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Membership from '@/pages/Membership.vue'

vi.mock('@/components/membership_request/BtMembershipRequestForm.vue', () => ({
  default: { name: 'BtMembershipRequestForm', template: '<div class="bt-membership-request-form-stub" />', props: ['communityId'] },
}))

describe('Membership.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Membership, {
      global: {
        mocks: { t: (key) => key },
      },
    })
  })

  it('renders the membership heading', () => {
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('renders the BtMembershipRequestForm', () => {
    expect(wrapper.findComponent({ name: 'BtMembershipRequestForm' }).exists()).toBe(true)
  })

  it('does not render the old RouterLink CTA', () => {
    expect(wrapper.findComponent({ name: 'RouterLink' }).exists()).toBe(false)
  })

  it('passes hostCommunityId to the form', () => {
    const form = wrapper.findComponent({ name: 'BtMembershipRequestForm' })
    // VITE_BT_HOST_COMMUNITY_ID is not set in test env — communityId should be null
    expect(form.props('communityId')).toBeNull()
  })

  it('renders membership types list', () => {
    const items = wrapper.findAll('ul li')
    expect(items.length).toBeGreaterThanOrEqual(2)
  })
})
