import DataProvider from '/js/components/Shared/DataProvider.js'

export default {
  template: `
    <q-page padding>
      <data-provider action="getPeople" storageKey="people">
        <template #default="{ data, loading }">
          <q-table
            title="Star Wars Heroes"
            :columns="[
              { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
              { name: 'gender', label: 'Gender', align: 'left', field: 'gender', sortable: true },
              { name: 'birth_year', label: 'Birth year', align: 'left', field: 'birth_year', sortable: true }
            ]"
            :data="data"
            row-key="name"
            :loading="loading"
          ></q-table>
        </template>
      </data-provider>
    </q-page>
  `,

  components: {
    DataProvider
  }
}
