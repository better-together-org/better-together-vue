import Vue from 'vue'
import Vuex from 'vuex'

import { BtStoreModules, BtStorePlugins } from '@bettertogether/community-engine-vue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ...BtStoreModules,
  },
  plugins: [
    ...BtStorePlugins,
  ],
})
