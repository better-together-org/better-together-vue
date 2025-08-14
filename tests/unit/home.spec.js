const { shallowMount, createLocalVue } = require('@vue/test-utils')
const VueRouter = require('vue-router')
const Home = require('@/pages/Home.vue').default

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Home.vue', () => {
  it('renders the heading text', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      stubs: ['ContactNewsletter'],
    })
    expect(wrapper.find('h2').text()).toContain('We are Better Together')
  })
})
