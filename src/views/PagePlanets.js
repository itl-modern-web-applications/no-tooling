import PageTitle from '/src/components/Shared/PageTitle.js'

export default {
  template: `
    <q-page padding>
      <page-title msg="Table with SW planets"></page-title>

      <q-table
        title="Star Wars Planets"
        :columns="[
          {name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true},
          {name: 'climate', label: 'Climate', align: 'left', field: 'climate', sortable: true},
          {name: 'terrain', label: 'Terrain', align: 'left', field: 'terrain', sortable: true}
        ]"
        :data="planets"
        row-key="name"
        :loading="loading"
      ></q-table>
    </q-page>
  `,

  components: {
    PageTitle
  },

  data: () => ({
    loading: false
  }),

  computed: {
    ...Vuex.mapGetters([
      'planets'
    ]),
    // other computed props
  },

  // methods only from vuex
  methods: Vuex.mapActions({
    getPlanets: 'api/getPlanets'
  }),

  // without async
  created () {
    this.loading = true
    this.getPlanets().then(() => ( this.loading = false ))
  }
}
