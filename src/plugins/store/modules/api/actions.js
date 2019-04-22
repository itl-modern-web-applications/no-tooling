const api = axios.create({
  baseURL: 'https://swapi.co/api'
})

export default {
  async getData ({ rootState }, { mountpoint, stateKey }) {
    let { data: { results } } = await api.get(mountpoint)
    rootState[stateKey] = results
  }
}
