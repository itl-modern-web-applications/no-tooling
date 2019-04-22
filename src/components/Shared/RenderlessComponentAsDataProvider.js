export default {
  props: {
    mountpoint: {
      type: String,
      required: true
    },

    stateKey: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      loading: false
    }
  },

  methods: Vuex.mapActions({
    getData: 'api/getData'
  }),

  async created () {
    this.loading = true

    await this.getData({
      mountpoint: this.mountpoint,
      stateKey: this.stateKey
    })

    this.loading = false
  },

  render () {
    return this.$scopedSlots.default({
      data: this.$store.state[this.stateKey],
      loading: this.loading
    })
  }
}
