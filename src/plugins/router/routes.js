
const PageHome = () => ({
  component: import('/src/views/PageHome.js')
})

const PageHeroes = () => ({
  component: import('/src/views/PageHeroes.js')
})

const PagePlanets = () => ({
  component: import('/src/views/PagePlanets.js')
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
