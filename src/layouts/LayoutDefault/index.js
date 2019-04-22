import LayoutHeader from './LayoutHeader.js'
import LayoutDrawer from './LayoutDrawer.js'
import LayoutContent from './LayoutContent.js'

export default {
  template: `
    <q-layout id="q-app" view="lHh Lpr lFf">
      <layout-header></layout-header>
      <layout-drawer></layout-drawer>
      <layout-content></layout-content>
    </q-layout>
  `,

  components: {
    LayoutHeader,
    LayoutDrawer,
    LayoutContent
  }
}
