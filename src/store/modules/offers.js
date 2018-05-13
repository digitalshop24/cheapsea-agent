import { fetchGetOffer } from '@/api/cheaps'

const offers = {
  state: {
    items: []
  },
  mutations:{
    SET_OFFERS (state, data) {
      state.items = data
    }
  },
  actions: {
    getOffers({commit}) {
      return new Promise((resolve, reject) => {
        fetchGetOffer().then(response => {
          commit('SET_OFFERS', response.data.data)
          resolve()
        })
      })
    },
  }
}

export default offers