import BtApiAuth from '../../endpoints/BtApiAuth'

// initial state
const state = {
  currentUser: {},
}

// getters
const getters = {
}

// actions
const actions = {
  signIn({ commit }, params) {
    console.log(params)
    return new Promise((resolve, reject) => {
      BtApiAuth.post(
        'login',
        params,
      )
        .then(({ data }) => {
          commit('SET_CURRENT_USER', data)
          resolve(data)
        }).catch((response) => {
          reject(response)
        })
    })
  },
  signUp(_ctx, params) {
    console.log(params)
    return new Promise((resolve, reject) => {
      BtApiAuth.post(
        'signup',
        params,
      )
        .then(({ data }) => {
          resolve(data)
        }).catch((response) => {
          reject(response)
        })
    })
  },
}

// mutations
const mutations = {
  SET_CURRENT_USER(currentState, user) {
    currentState.current_user = user
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
