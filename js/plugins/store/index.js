import state from './state.js'
import api from './modules/api/index.js'

export default new Vuex.Store({
  state,
  modules: { api }
})
