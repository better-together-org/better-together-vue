export default {
  fields: [
    {
      type: 'input',
      inputType: 'hidden',
      model: 'user.reset_password_token',
      required: true,
      validator: ['string', 'required'],
    },
    {
      type: 'input',
      inputType: 'password',
      label: 'Password *',
      model: 'user.password',
      min: 12,
      placeholder: 'Your password..',
      required: true,
      validator: ['string', 'required'],
      hint: 'Should be a short phase or sentence that is easy to remember. Minimum 12 characters. It helps if it\'s funny or melodic.',
    },
    {
      type: 'submit',
      label: '',
      buttonText: 'Change Password',
      fieldClasses: 'btn btn-primary btn-block',
      validateBeforeSubmit: true,
    },
  ],
}
