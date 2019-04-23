export default {
  data () {
    return {
      loading: false
    }
  },

  props: {
    action: {
      type: String,
      required: true
    },

    storageKey: {
      type: String,
      required: true
    }
  },

  async created () {
    this.loading = true

    await this.$store.dispatch({
      type: `api/${this.action}`,
      storageKey: this.storageKey
    })

    this.loading = false
  },

  render () {
    return this.$scopedSlots.default({
      data: this.$store.state[this.storageKey],
      loading: this.loading
    })
  }
}
