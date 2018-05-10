import { fetchCity, fetchAirlines } from '@/api/cheaps'

const cheaps = {
  state: {
    cities: null,
    airlines: null,
  },
  mutations:{
    SET_CITIES (state, data){
      state.cities = data
    },
    SET_AIRLINES (state, data){
      state.airlines = data
    }
  },
  actions: {
    getCity({commit}) {
      return new Promise((resolve, reject) => {
        fetchCity().then(response => {
          commit('SET_CITIES', response.data)
          resolve()
        })
      })
    },
    // getAirlines({commit}) {
    //   return fetchAirlines()
    // }
  }
}

export default cheaps