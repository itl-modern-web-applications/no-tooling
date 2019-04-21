export default {
  template: `
    <q-layout id="q-app" view="lHh Lpr lFf">
      <q-layout-header>
        <q-toolbar color="primary">
          <q-btn
            @click="drawer = !drawer"
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

      <q-layout-drawer
        side="left"
        v-model="drawer"
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

      <q-page-container>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <router-view style="animation-duration: .3s;"></router-view>
        </transition>
      </q-page-container>
    </q-layout>
  `,

  data () {
    return {
      drawer: false
    }
  }
}
  