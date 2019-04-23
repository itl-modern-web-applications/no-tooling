import BASE_URL, * as PATH from './mountpoints.js' 

const api = axios.create({
  baseURL: BASE_URL
})

export default {
  async getPeople ({ rootState }, { storageKey }) {
    let { data: { results } } = await api.get(PATH.PEOPLE)
    rootState[storageKey] = results
  },

  async getPlanets ({ rootState }, { storageKey }) {
    let { data: { results } } = await api.get(PATH.PLANETS)
    rootState[storageKey] = results
  }
}
