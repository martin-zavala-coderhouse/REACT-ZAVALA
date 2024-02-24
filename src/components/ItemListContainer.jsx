import { useState } from "react";
import ItemCount from "./ItemCount";
//import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Loading from "./Loading";
//import { getFirestore, collection, addDoc } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} =useParams();


                        //antes cuando usaba json
/*     useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id? arrayProductos.filter(item => item.categoria ===id) :arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, [id]); */

                                                            //subida de archivos en firebase itemslistcontainer
/*                              useEffect(() => {
                                const db = getFirestore();
                                const itemsCollection = collection(db, "aca la coleccion");

                                arrayProductos.forEach(producto => {
                                    addDoc(itemsCollection, producto);
                                });

                                console.log("Los productos se subieron correctamente!");
                            },[])  
 */





    // Llamada de Productos desde el Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);




    return (
        <>

        
            {id ? "" : <Carousel />}
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}
export default ItemListContainer;