import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import authentication from './modules/authentication'
import communities from './modules/communities'
import people from './modules/people'

const ls = new SecureLS({ isCompression: false })

Vue.use(Vuex)

// const BetterTogetherApiEndpoint = `${process.env.VUE_APP_BETTER_TOGETHER_API_URI}/bt/api/`

export default new Vuex.Store({
  modules: {
    authentication,
    communities,
    people,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
})
