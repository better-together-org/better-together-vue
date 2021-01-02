// import axios from 'axios'
import BtApiV1 from '../../models/BtApi'

// initial state
const state = {
  communities: [],
}

// getters
const getters = {
}

// actions
const actions = {
  getCommunities({ commit }, params) {
    return new Promise((resolve, reject) => {
      BtApiV1.findAll('communities', { params }).then(({ data }) => {
        commit('SET_COMMUNITIES', data)
        resolve(data)
      })
        .catch(({ response }) => {
          reject(response)
        })
    })
  },
}

// mutations
const mutations = {
  SET_COMMUNITIES(currentState, communities) {
    currentState.communities = communities
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
