import RenderlessComponentAsDataProvider from '/src/components/Shared/RenderlessComponentAsDataProvider.js'

export default {
  template: `
    <q-page padding>
      <renderless-component-as-data-provider mountpoint="/people" stateKey="heroes">
        <template #default="{ data, loading }">
          <q-table
            title="Star Wars Heroes"
            :columns="[
              {name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true},
              {name: 'gender', label: 'Gender', align: 'left', field: 'gender', sortable: true},
              {name: 'birth_year', label: 'Birth year', align: 'left', field: 'birth_year', sortable: true}
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
