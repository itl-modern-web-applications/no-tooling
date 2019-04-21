
const PageHome = () => ({
  component: import('/src/pages/PageHome.js')
})

const PageHeroes = () => ({
  component: import('/src/pages/PageHeroes.js')
})

const PagePlanets = () => ({
  component: import('/src/pages/PagePlanets.js')
})

export default [{
  path: '/',
  component: PageHome
}, {
  path: '/heroes',
  component: PageHeroes
}, {
  path: '/planets',
  component: PagePlanets
}]
