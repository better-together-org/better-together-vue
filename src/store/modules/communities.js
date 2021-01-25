// import axios from 'axios'
import BtApiV1 from '../../endpoints/BtApiV1'

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
  postCommunity({ commit }, params) {
    return new Promise((resolve, reject) => {
      BtApiV1.create('community', params)
        .then(({ data }) => {
          commit('PREPEND_COMMUNITY', data)
          resolve(data)
        }).catch((response) => {
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
  PREPEND_COMMUNITY(currentState, community) {
    currentState.communities.unshift(community)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
