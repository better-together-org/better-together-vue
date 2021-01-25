/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios'

// initial state
const state = {
  // people: [],
  currentPerson: {},
}

// getters
const getters = {
  hasCurrentPerson: (state) => Object.keys(state.currentPerson).length > 0,
  currentPerson: (state) => state.currentPerson,
}

// actions
const actions = {
  // getPeople({ commit }, params) {
  //   return new Promise((resolve, reject) => {
  //     BtApiV1.findAll('people', { params }).then(({ data }) => {
  //       commit('SET_PEOPLE', data)
  //       resolve(data)
  //     })
  //       .catch(({ response }) => {
  //         reject(response)
  //       })
  //   })
  // },
  // postPerson({ commit }, params) {
  //   return new Promise((resolve, reject) => {
  //     BtApiV1.create('person', params)
  //       .then(({ data }) => {
  //         commit('PREPEND_PERSON', data)
  //         resolve(data)
  //       }).catch((response) => {
  //         reject(response)
  //       })
  //   })
  // },
  getMe({ commit }) {
    console.log(axios)
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BETTER_TOGETHER_API_URI}/bt/api/v1/people/me`)
        .then((response) => {
          console.log(response)
          commit('SET_CURRENT_PERSON', response.data)
          resolve(response)
        }).catch((response) => {
          reject(response)
        })
    })
  },
}

// mutations
const mutations = {
  SET_CURRENT_PERSON(currentState, person) {
    currentState.currentPerson = person
  },
  CLEAR_CURRENT_PERSON(currentState) {
    currentState.currentPerson = {}
  },
  // SET_PEOPLE(currentState, people) {
  //   currentState.people = people
  // },
  // PREPEND_PERSON(currentState, community) {
  //   currentState.people.unshift(community)
  // },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
