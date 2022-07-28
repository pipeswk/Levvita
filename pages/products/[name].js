import { useEffect, useState } from 'react'
import { db } from '../../utils/Firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import ProductSlider from '../../src/Components/ProductSlider/ProductSlider'
import Layout from '../../src/Layouts/Layout'
import ProductHead from '../../src/Components/ProductHead/ProductHead'
import useLevvita from '../../src/Hooks/useLevvita'
import ProductOptions from '../../src/Components/ProductOptions/ProductOptions'
import ProductInfo from '../../src/Components/ProductInfo/ProductInfo'
import BuyButtons from '../../src/Components/BuyButtons/BuyButtons'
import ProductOff from '../../src/Components/ProductOff/ProductOff'
import ProductSection from '../../src/Components/ProductSection/ProductSection'
import StickyFooter from '../../src/Components/StickyFooter/StickyFooter'
import ProductModal from '../../src/Components/ProductModal/ProductModal'

const EntradaProducto = ( { resultado } ) => {

    const [modalOn, setModalOn] = useState(false);

    const {
        setSelectColor,
        colorSelected,
        setColor,
        selectSize,
        setSelectSize
    } = useLevvita();

    const { secciones } = resultado;

    useEffect(() => {
        setSelectColor(resultado.main_img);
        console.log(resultado);
    }, [])
    

  return (
    <Layout
        pagina={resultado.title}
    >
        <StickyFooter
            modalOn={modalOn}
            setModalOn={setModalOn}
        />
        <ProductModal
            options={resultado}
        />
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5'>
                    <ProductSlider colores={resultado.colores} sizes={resultado.tallas} />
                </div>
                <div className='col-md-6 my-2'>
                    <ProductHead title={resultado.title} />
                    <ProductInfo
                        precio={resultado.price}
                        comparativePrice={resultado.comparative_price}
                    />
                    <div className='d-none d-md-block'>
                        <ProductOptions
                            colores={resultado.colores}
                            sizes={resultado.tallas}
                            setSelectColor={setSelectColor}
                            colorSelected={colorSelected}
                            setColor={setColor}
                            selectSize={selectSize}
                            setSelectSize={setSelectSize}
                        />
                    </div>
                    <div className='d-md-none bg-secondary my-2 p-5 fw-bold text-center text-light'>
                        IMG
                    </div>
                    <BuyButtons />
                </div>
            </div>
            <div className='d-none d-md-block bg-secondary my-2 p-5 fw-bold text-center text-light'>
                IMG
            </div>
            <ProductOff />
            <div>
                {secciones.map((seccion, index) => (
                    <ProductSection
                        key={index}
                        seccion={seccion}
                    />
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default EntradaProducto

export async function getServerSideProps( { params: {name} } ) {
    const title = name.replace(/-/g, ' ');
    console.log(title);
    
    const q = query(collection(db, 'products'), where('title', '==', title));
    const documentos = await getDocs(q);
    let resultado;
    if(documentos.size > 0) {
        console.log('Si existe el documento');
        documentos.forEach(doc => {
            console.log(doc.data());
            resultado = doc.data()
        });
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
           resultado: JSON.parse(JSON.stringify(resultado))
        }
    }
}