import Layout from '../src/Layouts/Layout.jsx'
import Slider from '../src/Components/Slider/Slider'
import CategoriasInicio from '../src/Components/CategoriasInicio/CategoriasInicio.jsx'
import Hero from '../src/Components/Hero/Hero.jsx'
import Reticula from '../src/Components/Reticula/Reticula.jsx'

export default function Home() {
  return (
    <Layout
      pagina='Home'
    >
      <Slider />
      <CategoriasInicio />
      <Hero />
      <Reticula />
    </Layout>
  )
}
