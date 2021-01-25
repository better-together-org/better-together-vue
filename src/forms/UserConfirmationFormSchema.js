export default {
  fields: [
    {
      type: 'input',
      inputType: 'text',
      label: 'Email',
      model: 'user.email',
      placeholder: 'Your email address..',
      required: true,
      validator: ['string', 'required', 'email'],
    },
    {
      type: 'submit',
      label: '',
      buttonText: 'Send your confirmation email',
      fieldClasses: 'btn btn-primary btn-block',
      validateBeforeSubmit: true,
    },
  ],
}
