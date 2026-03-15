import { ref, onMounted } from 'vue'

// Fallback links used until CE Rails exposes /api/v1/social_media_accounts
const FALLBACK_LINKS = [
  {
    platform: 'github',
    handle: 'better-together-org',
    url: 'https://github.com/better-together-org',
    icon: 'bi-github',
  },
  {
    platform: 'linkedin',
    handle: 'better-together-community-ca',
    url: 'https://www.linkedin.com/company/better-together-community-ca',
    icon: 'bi-linkedin',
  },
]

export function useSocialLinks(apiUrl = null) {
  const links = ref([...FALLBACK_LINKS])
  const loading = ref(false)
  const error = ref(null)

  onMounted(async () => {
    if (!apiUrl) return
    // Skip API fetch for local dev URLs — avoids console errors when API isn't running
    if (apiUrl.includes('localhost') || apiUrl.includes('127.0.0.1')) return
    loading.value = true
    try {
      const res = await fetch(
        `${apiUrl}/api/v1/social_media_accounts?filter[privacy]=public`,
      )
      if (!res.ok) return
      const json = await res.json()
      const fetched = (json.data || []).map((item) => ({
        platform: item.attributes.platform,
        handle: item.attributes.handle,
        url: item.attributes.url || '#',
        icon: `bi-${item.attributes.platform}`,
      }))
      if (fetched.length > 0) links.value = fetched
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })

  return { links, loading, error }
}
