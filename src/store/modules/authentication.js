import BtApiAuth from '../../endpoints/BtApiAuth'

// initial state
const state = {
  currentUser: localStorage.getItem('user') || {},
  token: localStorage.getItem('user-token') || '',
  status: '',
}

// getters
const getters = {
  isAuthenticated() { return !!state.token },
  authStatus() { return state.status },
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
        .then(({ data, headers }) => {
          console.log(headers)
          const token = headers.authorization
          localStorage.setItem('user', data) // store the token in localstorage
          localStorage.setItem('user-token', token) // store the token in localstorage
          commit('AUTH_SUCCESS', token)
          commit('SET_USER', data)
          resolve(data)
        }).catch((response) => {
          commit('AUTH_ERROR', response)
          localStorage.removeItem('user') // if the request fails, remove any possible user
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token
          reject(response)
        })
    })
  },
  signOut({ commit }) {
    return new Promise((resolve) => {
      commit('AUTH_LOGOUT')
      localStorage.removeItem('user') // clear your user's token from localstorage
      localStorage.removeItem('user-token') // clear your user's token from localstorage
      resolve()
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
  AUTH_LOGOUT(currentState) {
    currentState.status = ''
    currentState.currentUser = {}
    currentState.token = ''
  },
  AUTH_REQUEST(currentState) {
    currentState.status = 'loading'
  },
  AUTH_SUCCESS(currentState, token) {
    console.log(token)
    currentState.status = 'success'
    currentState.token = token
  },
  AUTH_ERROR(currentState) {
    currentState.status = 'error'
    currentState.currentUser = {}
  },
  SET_USER(currentState, user) {
    console.log(user)
    currentState.currentUser = user
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
