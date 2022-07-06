import { db } from '../utils/Firebase.js'
import { doc, getDoc } from "firebase/firestore"
import Layout from '../src/Layouts/Layout.jsx'
import Slider from '../src/Components/Slider/Slider'
import CategoriasInicio from '../src/Components/CategoriasInicio/CategoriasInicio.jsx'
import Hero from '../src/Components/Hero/Hero.jsx'
import Reticula from '../src/Components/Reticula/Reticula.jsx'

export default function Home( { resultado } ) {
  // console.log(resultado)
  
  return (
    <Layout
      pagina='Home'
    >
      <Slider slider={resultado.slider_principal} />
      <CategoriasInicio type='category' title='¿Para quien compras?' categorias={resultado.categorias} />
      <Hero seccion={resultado.seccion_marca} />
      <Reticula title='Novedades' />
    </Layout>

  )
}

//TODO: Pendiente traer Reticula desde Firebase... Preguntar a Yaya

// CONSULTA SSR

export async function getServerSideProps() {
  const docRef = doc(db, 'personalizacion', 'pagina_principal');
  const documento = await getDoc(docRef);
  const resultado = documento.data();

  if(documento.exists()) {
    console.log('Si existe el documento');
  } else {
    console.log('No existe el documento');
    return {
      redirect: {
        destination: '/404',
      }
    }
  }

  return {
    props: {
        resultado
    }
}
}
