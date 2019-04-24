import BASE_URL, * as PATH from './mountpoints.js' 

const api = axios.create({
  baseURL: BASE_URL
})

export default {
  async getPeople ({ rootState }) {
    let { data: { results } } = await api.get(PATH.PEOPLE)
    rootState.people = results
  },

  async getPlanets ({ rootState }) {
    let { data: { results } } = await api.get(PATH.PLANETS)
    rootState.planets = results
  }
}
