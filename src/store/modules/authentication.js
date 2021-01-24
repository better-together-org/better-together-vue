/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios'
import BtApiAuth from '../../endpoints/BtApiAuth'

// initial state
const state = {
  currentUser: {},
  token: '',
  status: '',
}

if (state.token) {
  axios.defaults.headers.common.Authorization = state.token
}

// getters
const getters = {
  // isAuthenticated() { return state.token !== '' },
  isAuthenticated: (state) => !!state.token,
  authStatus: (state) => state.status,
}

// actions
const actions = {
  signIn({ commit }, params) {
    return new Promise((resolve, reject) => {
      BtApiAuth.post(
        'sign-in',
        params,
      )
        .then(({ data, headers }) => {
          const token = headers.authorization
          commit('AUTH_SUCCESS', token)
          commit('SET_USER', data)
          axios.defaults.headers.common.Authorization = token
          resolve(data)
        }).catch((response) => {
          commit('AUTH_ERROR', response)
          delete axios.defaults.headers.common.Authorization
          reject(response)
        })
    })
  },
  signOut({ commit }) {
    return new Promise((resolve) => {
      commit('AUTH_LOGOUT')
      delete axios.defaults.headers.common.Authorization
      resolve()
    })
  },
  signUp(_ctx, params) {
    console.log(params)
    return new Promise((resolve, reject) => {
      BtApiAuth.post(
        'sign-up',
        {
          ...params,
          confirm_success_url: `${window.location.origin}/users/sign-in`,
        },
      )
        .then(({ data }) => {
          resolve(data)
        }).catch((response) => {
          reject(response)
        })
    })
  },
  resetPassword(_ctx, params) {
    console.log(params)
    return new Promise((resolve, reject) => {
      BtApiAuth.post(
        'password',
        {
          ...params,
          new_password_url: `${window.location.origin}/users/password/new`,
        },
      )
        .then(({ data }) => {
          resolve(data)
        }).catch((response) => {
          reject(response)
        })
    })
  },
  newPassword(_ctx, params) {
    console.log(params)
    return new Promise((resolve, reject) => {
      BtApiAuth.patch(
        'password',
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
    currentState.status = 'success'
    currentState.token = token
  },
  AUTH_ERROR(currentState) {
    currentState.status = 'error'
    currentState.currentUser = {}
    currentState.token = ''
  },
  SET_USER(currentState, user) {
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
