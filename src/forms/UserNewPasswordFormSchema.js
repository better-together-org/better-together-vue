export default {
  fields: [
    {
      type: 'input',
      inputType: 'password',
      label: 'New Password',
      model: 'user.password',
      placeholder: 'Your new password..',
      required: true,
      validator: ['string', 'required'],
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
