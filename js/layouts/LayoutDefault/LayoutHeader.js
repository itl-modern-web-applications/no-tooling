export default {
  template: `
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn
          @click="$globals.drawer = !$globals.drawer"
          flat
          round
          dense
          icon="menu"
        ></q-btn>

        <q-toolbar-title>
          SW API
          <span slot="subtitle">
            Demo application
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
  `
}
