import JsonApi from 'devour-client'

const BtApiV1 = new JsonApi({
  apiUrl: `${process.env.VUE_APP_BETTER_TOGETHER_API_URI}/bt/api/v1`,
})

// Define Model

// Define Community model
BtApiV1.define('community', {
  bt_id: '',
  description: '',
  name: '',
})

// Define Person model
BtApiV1.define('person', {
  bt_id: '',
  description: '',
  name: '',
})

export default BtApiV1
