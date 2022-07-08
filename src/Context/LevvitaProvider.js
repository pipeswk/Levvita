import { createContext, useState, useEffect } from 'react'
import { db } from '../../utils/Firebase';
import { collection, query, where, onSnapshot, orderBy, limit } from 'firebase/firestore'

let unsubscribeGetProductsCategory = null;
let unsubscribeGetProductsSubcategory = null;

const LevvitaContext = createContext();

const LevvitaProvider = ( { children } ) => {

    const [productsCategory, setProductsCategory] = useState([]);
    const [category, setCategory] = useState('');


    const getProductsCategory = async () => {
        const q = query(collection(db, 'products'), where('category', '==', category));
        unsubscribeGetProductsCategory = onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({
                    id: doc.id,
                    ...doc.data()
                });
            })
            setProductsCategory(products);
        })

    }
    const setOffListenerCategory = () => {
        if(unsubscribeGetProductsCategory!==null){
            unsubscribeGetProductsCategory();
        }
    }

    const getProductsSubcategory = async ( subcategory ) => {
        let q;
        if(subcategory !== 'Lo mas nuevo'){
            q = query(collection(db, 'products'),
                where('category', '==', category),
                where('sub_category', '==', subcategory)
            )
        } else {
            q = query(collection(db, 'products'),
                where('category', '==', category),
                orderBy('createdDate', 'desc'),
                limit(10)
            )
        }
        unsubscribeGetProductsSubcategory = onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({
                    id: doc.id,
                    ...doc.data()
                });
            })
            setProductsCategory(products);
        })
    }
    const setOffListenerSubcategory = () => {
        if(unsubscribeGetProductsSubcategory!==null){
            unsubscribeGetProductsSubcategory();
        }
    }

    useEffect(() => {
      getProductsCategory();
    }, [category])
    

    return (
        <LevvitaContext.Provider
            value={{
                getProductsCategory,
                setCategory,
                productsCategory,
                setOffListenerCategory,
                setOffListenerSubcategory,
                getProductsSubcategory
            }}
        >
            {children}
        </LevvitaContext.Provider>
    )
}

export {
    LevvitaProvider
}
export default LevvitaContext;