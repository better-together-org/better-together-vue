export default {
  groups: [
    {
      legend: 'Login Info',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Email',
          model: 'user.email',
          placeholder: 'Your email address..',
          validator: ['string', 'required', 'email'],
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Password',
          model: 'user.password',
          min: 12,
          placeholder: 'Your password..',
          validator: ['string', 'required'],
          hint: 'Should be a short phase or sentence that is easy to remember. Minimum 12 characters. It helps if it\'s funny or melodic.',
        },
      ],
    },
    {
      legend: 'Personal Info',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'person_attributes.name',
          placeholder: 'Your name..',
          validator: ['string', 'required'],
        },
        {
          type: 'textArea',
          label: 'Description',
          model: 'person_attributes.description',
          placeholder: 'Your description..',
          validator: ['string', 'required'],
        },
      ],
    },
    {
      legend: '',
      fields: [
        {
          type: 'submit',
          label: '',
          buttonText: 'Sign Up',
          validateBeforeSubmit: true,
        },
      ],
    },
  ],
}
