import PageTitle from '/src/components/Shared/PageTitle.js'
import HomePageContent from '/src/components/PageHome/HomePageContent.js'

export default {
  template: `
    <q-page padding>
      <page-title msg="Home page"></page-title>
      <home-page-content></home-page-content>
    </q-page>
  `,

  components: {
    PageTitle,
    HomePageContent
  }
}
