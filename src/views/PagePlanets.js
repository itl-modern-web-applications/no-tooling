import RenderlessComponentAsDataProvider from '/src/components/Shared/RenderlessComponentAsDataProvider.js'

export default {
  template: `
    <q-page padding>
      <renderless-component-as-data-provider mountpoint="/planets" stateKey="planets">
        <template #default="{ data, loading }">
          <q-table
            title="Star Wars Planets"
            :columns="[
              {name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true},
              {name: 'climate', label: 'Climate', align: 'left', field: 'climate', sortable: true},
              {name: 'terrain', label: 'Terrain', align: 'left', field: 'terrain', sortable: true}
            ]"
            :data="data"
            row-key="name"
            :loading="loading"
          ></q-table>
        </template>
      </renderless-component-as-data-provider>
    </q-page>
  `,

  components: {
    RenderlessComponentAsDataProvider
  }
}
