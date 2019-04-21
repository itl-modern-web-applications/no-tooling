export default {
  template: `
    <h3 class="text-center" v-once>{{ msg }}</h3>
  `,

  props: {
    msg: {
      type: String
    }
  }
}
