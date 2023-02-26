import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../utils/gFetch";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  orderBy,
  query,
} from "firebase/firestore";

import "../ItemListContainer/ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  // const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();
  console.log(idCategoria);
  // ___________________________________Para traer un producto_____________________________________
  // Este lo voy a usar en el ItemDetail
  // useEffect(() => {
  //   const db = getFirestore();
  //   const query = doc(db, "productos", "2JASTh2vjRtDeYEMm2VT");
  //   getDocs(query)
  //     .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //___________________________ Para traer a un array completo desde Firebase____________________________
  // useEffect(() => {
  //   const db = getFirestore();
  //   // Al ser un array se usa el collectios
  //   const queryCollections = collection(db, "productos");
  //   getDocs(queryCollections)
  //     .then((resp) =>
  //       setProductos(
  //         resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
  //       )
  //     )
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //NOTA: Los llamados a APIs siempre se hacen en componentes container

  // ___________________________________ Para crear un array filtrado_______________________________
  useEffect(() => {
    if (idCategoria) {
      const db = getFirestore();
      const queryCollections = collection(db, "productos");
      const queryFilter = query(
        queryCollections,
        where("categoria", "==", idCategoria)
        // orderBy("precio", "asc")
      );

      getDocs(queryFilter)
        .then((resp) => {
          setProductos(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          );
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      const db = getFirestore();
      // Al ser un array se usa el collectios
      const queryCollections = collection(db, "productos");
      getDocs(queryCollections)
        .then((resp) =>
          setProductos(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  // -------------------------------------------------------
  // useEffect(() => {
  //   // Filtrar por categoria
  //   if (idCategoria) {
  //     gFetch()
  //       .then((res) => {
  //         setProductos(
  //           res.filter((producto) => producto.categoria == idCategoria)
  //         );
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   } else {
  //     gFetch()
  //       .then((res) => {
  //         setProductos(res);
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   }
  // }, [idCategoria]);

  console.log(productos);

  return loading ? (
    // Buscar un loading
    // <h2 className="cargando">Cargando productos...</h2>
    <>
      <div className="loader">
        <div className="spinner-9"></div>
      </div>
    </>
  ) : (
    <div className="listContainer">{<ItemList productos={productos} />}</div>
  );
};

export default ItemListContainer;
