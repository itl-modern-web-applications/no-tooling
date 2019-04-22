export default {
  template: `
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
  `
}