import Layout from '../src/Layouts/Layout.jsx'
import Slider from '../src/Components/Slider/Slider'
import CategoriasInicio from '../src/Components/CategoriasInicio/CategoriasInicio.jsx'

export default function Home() {
  return (
    <Layout
      pagina='Home'
    >
      <Slider />
      <CategoriasInicio />
    </Layout>
  )
}
