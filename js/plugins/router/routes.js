const PageHome = () => import('/js/views/PageHome.js')
const PageHeroes = () => import('/js/views/PageHeroes.js')
const PagePlanets = () => import('/js/views/PagePlanets.js')

export default [
  { path: '/', component: PageHome },
  { path: '/heroes', component: PageHeroes },
  { path: '/planets', component: PagePlanets }
]
