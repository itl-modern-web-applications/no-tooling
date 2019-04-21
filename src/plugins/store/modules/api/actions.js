import BASE_URL, * as MOUNTPOINT from './mountpoints.js'

const api = axios.create({
  baseURL: BASE_URL
})

export default {
  async getHeroes ({ rootState }) {
    // better, with results key as variable destructured from response object
    let { data: { results } } = await api.get(MOUNTPOINT.PEOPLE)
    rootState.heroes = results
  },

  async getPlanets ({ rootState }) {
    // shorter, but less readable construction, do not use
    rootState.planets = (await api.get(MOUNTPOINT.PLANETS)).data.results
  }
}
