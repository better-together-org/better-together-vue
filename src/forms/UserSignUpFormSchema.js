export default {
  groups: [
    {
      legend: 'Login Info',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Email *',
          model: 'user.email',
          placeholder: 'Your email address..',
          required: true,
          validator: ['string', 'required', 'email'],
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
      ],
    },
    {
      legend: 'Personal Info',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Name *',
          model: 'user.person_attributes.name',
          placeholder: 'Your name..',
          required: true,
          validator: ['string', 'required'],
        },
        {
          type: 'textArea',
          label: 'Description *',
          model: 'user.person_attributes.description',
          placeholder: 'Your description..',
          validator: ['string', 'required'],
          required: true,
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
          fieldClasses: 'btn btn-primary btn-block',
          validateBeforeSubmit: true,
        },
      ],
    },
  ],
}
