import { reactive, ref } from 'vue'
import axios from 'axios'

/**
 * Composable for submitting a public community membership request.
 *
 * Membership requests are a one-shot form submission — not an offline-first
 * resource — so we POST directly to the JSONAPI endpoint rather than going
 * through the SQLite-backed useResource layer.
 *
 * Usage:
 *   const { form, loading, error, submitted, submit, reset } = useMembershipRequest(communityId)
 */
export function useMembershipRequest(communityId) {
  const form = reactive({
    requestorName: '',
    requestorEmail: '',
    referralSource: '',
    description: '',
  })

  const loading = ref(false)
  const error = ref(null)
  const submitted = ref(false)

  async function submit() {
    loading.value = true
    error.value = null

    const payload = {
      data: {
        type: 'membership_requests',
        attributes: {
          requestor_name: form.requestorName,
          requestor_email: form.requestorEmail,
          referral_source: form.referralSource,
          description: form.description,
          name: `Membership request from ${form.requestorName}`,
          status: 'open',
          urgency: 'normal',
          target_type: 'BetterTogether::Community',
          target_id: communityId,
        },
      },
    }

    try {
      const baseUrl = import.meta.env.VITE_BETTER_TOGETHER_API_URI || ''
      await axios.post(`${baseUrl}/api/v1/membership_requests`, payload, {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/vnd.api+json',
        },
      })
      submitted.value = true
    } catch (e) {
      const jsonApiErrors = e.response?.data?.errors
      if (jsonApiErrors?.length) {
        error.value = jsonApiErrors.map((err) => err.detail).join(', ')
      } else {
        error.value = e.message || 'An unexpected error occurred.'
      }
    } finally {
      loading.value = false
    }
  }

  function reset() {
    form.requestorName = ''
    form.requestorEmail = ''
    form.referralSource = ''
    form.description = ''
    error.value = null
    submitted.value = false
  }

  return { form, loading, error, submitted, submit, reset }
}
