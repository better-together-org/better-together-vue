// import axios from 'axios'
import { BtApiV1Axios } from '../../endpoints/BtApiV1'

// initial state
const state = {
  // people: [],
  currentPerson: {},
}

// getters
const getters = {
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
    console.log(BtApiV1Axios)
    return new Promise((resolve, reject) => {
      BtApiV1Axios.get('people/me')
        .then((response) => {
          console.log(response)
          commit('SET_CURRENT_PERSON', response)
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
