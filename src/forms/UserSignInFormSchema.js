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
      type: 'input',
      inputType: 'password',
      label: 'Password',
      model: 'user.password',
      placeholder: 'Your password..',
      required: true,
      validator: ['string', 'required'],
    },
    {
      type: 'submit',
      label: '',
      buttonText: 'Log In',
      fieldClasses: 'btn btn-primary',
      validateBeforeSubmit: true,
    },
  ],
}
