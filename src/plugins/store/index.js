import state from './state.js'
import getters from './getters.js'
import api from './modules/api/index.js'

export default new Vuex.Store({
  state,
  getters,
  modules: { api }
})
