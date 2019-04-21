import * as URI from './mountpoints.js'

const api = axios.create({
  baseURL: 'https://swapi.co/api'
})

export default {
  async getHeroes ({ rootState }) {
    let { data: { results } } = await api.get(URI.PEOPLE)
    rootState.heroes = results
  },

  async getPlanets ({ rootState }) {
    rootState.planets = (await api.get(URI.PLANETS)).data.results
  }
}
