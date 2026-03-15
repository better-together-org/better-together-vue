import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useSocialLinks } from '@/composables/useSocialLinks'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

// Helper to trigger onMounted by mounting a component that uses the composable
function mountWithComposable(apiUrl) {
  let result
  const Wrapper = defineComponent({
    setup() {
      result = useSocialLinks(apiUrl)
      return () => null
    },
  })
  mount(Wrapper)
  return result
}

describe('useSocialLinks', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns fallback links when no apiUrl provided', () => {
    const { links, loading } = mountWithComposable(null)
    expect(links.value.length).toBeGreaterThan(0)
    expect(links.value[0].platform).toBe('github')
    expect(loading.value).toBe(false)
  })

  it('skips API fetch for localhost URLs', async () => {
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)
    mountWithComposable('http://localhost:3000')
    await new Promise((r) => setTimeout(r, 10))
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('falls back to defaults when API returns empty data', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: [] }),
    }))
    const { links } = mountWithComposable('http://localhost:3000')
    // flush microtasks
    await new Promise((r) => setTimeout(r, 0))
    expect(links.value.length).toBeGreaterThan(0)
    expect(links.value[0].platform).toBe('github')
  })

  it('replaces defaults with API data when API returns results', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: [
          { attributes: { platform: 'mastodon', handle: '@bts', url: 'https://mastodon.social/@bts' } },
        ],
      }),
    }))
    const { links } = mountWithComposable('https://app.bebettertogether.ca')
    await new Promise((r) => setTimeout(r, 10))
    expect(links.value[0].platform).toBe('mastodon')
  })

  it('keeps fallback links when API call fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network error')))
    const { links, error } = mountWithComposable('https://app.bebettertogether.ca')
    await new Promise((r) => setTimeout(r, 10))
    expect(links.value[0].platform).toBe('github')
    expect(error.value).toBeInstanceOf(Error)
  })
})
