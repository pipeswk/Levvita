import { useEffect } from 'react';
import ImgCategory from '../../src/Components/ImgCategory/ImgCategory';
import Layout from '../../src/Layouts/Layout';
import { doc, getDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/Firebase';
import CategoriasInicio from '../../src/Components/CategoriasInicio/CategoriasInicio';
import Reticula from '../../src/Components/Reticula/Reticula';

const Categoria = ( { id, resultado } ) => {
  const { img_category, subcategorias } = resultado;
  console.log(resultado);
  

  return (
    <Layout
        pagina={id}
    >
        <ImgCategory data={img_category} />
        <CategoriasInicio type='subcategory' title={`Zapatos para ${id}`} categorias={subcategorias} />
        <Reticula title={null} />
    </Layout>
  )
}

export default Categoria

export async function getServerSideProps( { params: {id} } ) {

  const docRef = doc(db, 'personalizacion', 'pagina_categorias');
  const docSnap = await getDoc(docRef);
  let resultado;
  if(docSnap.exists()) {
    console.log('Si existe el documento');
    resultado = docSnap.data()
  } else {
    console.log('No existe el documento');
    return {
      redirect: {
        destination: '/',
      }
    }
  }

  return {
    props: {
      id,
      resultado
    }
  }
}