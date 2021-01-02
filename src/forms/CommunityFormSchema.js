export default {
  fields: [
    {
      type: 'input',
      inputType: 'text',
      label: 'Name',
      model: 'name',
      placeholder: 'Your community name..',
      validator: ['string', 'required'],
    },
    {
      type: 'textArea',
      label: 'Description',
      model: 'description',
      placeholder: 'Your community description..',
      validator: ['string', 'required'],
    },
  ],
}
