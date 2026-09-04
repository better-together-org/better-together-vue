<template>
  <div class="bt-membership-request-form">
    <!-- Success state -->
    <div
      v-if="submitted"
      class="bt-membership-request-form__success"
      role="status"
    >
      <h3>{{ t('bt.membership_requests.success_heading') }}</h3>
      <p>{{ t('bt.membership_requests.success_body') }}</p>
      <BButton
        variant="outline-primary"
        @click="reset"
      >
        {{ t('bt.actions.close') }}
      </BButton>
    </div>

    <!-- Form state -->
    <BForm
      v-else
      class="bt-membership-request-form__form"
      @submit.prevent="submit"
    >
      <BAlert
        v-if="error"
        variant="danger"
        :model-value="true"
      >
        <strong>{{ t('bt.membership_requests.error_prefix') }}</strong>
        {{ error }}
      </BAlert>

      <BFormGroup
        :label="t('bt.membership_requests.name_label')"
        label-for="mr-requestor-name"
      >
        <BFormInput
          id="mr-requestor-name"
          v-model="form.requestorName"
          type="text"
          required
          :placeholder="t('bt.membership_requests.name_placeholder')"
          :disabled="loading"
        />
      </BFormGroup>

      <BFormGroup
        :label="t('bt.membership_requests.email_label')"
        label-for="mr-requestor-email"
      >
        <BFormInput
          id="mr-requestor-email"
          v-model="form.requestorEmail"
          type="email"
          required
          :placeholder="t('bt.membership_requests.email_placeholder')"
          :disabled="loading"
        />
      </BFormGroup>

      <BFormGroup
        :label="t('bt.membership_requests.referral_label')"
        label-for="mr-referral-source"
      >
        <BFormInput
          id="mr-referral-source"
          v-model="form.referralSource"
          type="text"
          :placeholder="t('bt.membership_requests.referral_placeholder')"
          :disabled="loading"
        />
      </BFormGroup>

      <BFormGroup
        :label="t('bt.membership_requests.description_label')"
        label-for="mr-description"
      >
        <BFormTextarea
          id="mr-description"
          v-model="form.description"
          required
          rows="4"
          :placeholder="t('bt.membership_requests.description_placeholder')"
          :disabled="loading"
        />
      </BFormGroup>

      <BButton
        type="submit"
        variant="primary"
        class="w-100"
        :disabled="loading"
      >
        {{ loading ? t('bt.membership_requests.submitting') : t('bt.membership_requests.submit') }}
      </BButton>
    </BForm>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { BAlert, BButton, BForm, BFormGroup, BFormInput, BFormTextarea } from 'bootstrap-vue-next'
import { useMembershipRequest } from '../../composables/useMembershipRequest'

const props = defineProps({
  communityId: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()
const { form, loading, error, submitted, submit, reset } = useMembershipRequest(props.communityId)
</script>
