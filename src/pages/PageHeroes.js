export default {
  template: `
    <q-page padding>
      <q-table
        title="Star Wars Heroes"
        :columns="[
          {name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true},
          {name: 'gender', label: 'Gender', align: 'left', field: 'gender', sortable: true},
          {name: 'birth_year', label: 'Birth year', align: 'left', field: 'birth_year', sortable: true}
        ]"
        :data="heroes"
        row-key="name"
        :loading="loading"
      ></q-table>
    </q-page>
  `,

  data () {
    return {
      loading: false
    }
  },

  computed: Vuex.mapGetters([
    'heroes'
  ]),

  methods: {
    ...Vuex.mapActions('api', [
      'getHeroes'
    ])
  },

  async created () {
    this.loading = true
    await this.getHeroes()
    this.loading = false  
  }
}
