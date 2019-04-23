export default {
  template: `
    <q-layout-drawer
      side="left"
      v-model="$globals.drawer"
      content-class="bg-grey-3"
      overlay
    >
      <q-list no-border link inset-delimiter>
        <q-item to="/" exact>
          <q-item-side icon="home"></q-item-side>
          <q-item-main label="Home"></q-item-main>
        </q-item>

        <q-item to="/heroes" exact>
          <q-item-side icon="group"></q-item-side>
          <q-item-main label="Heroes"></q-item-main>
        </q-item>

        <q-item to="/planets" exact>
          <q-item-side icon="language"></q-item-side>
          <q-item-main label="Planets"></q-item-main>
        </q-item>
      </q-list>
    </q-layout-drawer>
  `
}
