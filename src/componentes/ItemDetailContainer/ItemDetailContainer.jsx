import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../utils/gFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  orderBy,
  query,
} from "firebase/firestore";
import "../ItemDetailContainer/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (idProducto) {
  //     gFetch()
  //       .then((res) => {
  //         setProductos(res.find((producto) => producto.id == idProducto));
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   }
  // }, []);

  useEffect(() => {
    if (idProducto) {
      const db = getFirestore();
      const queryCollections = collection(db, "productos");
      const queryFilter = query(
        queryCollections,
        where("id", "==", idProducto)
      );
      // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));

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
    }
    // else {
    //   const db = getFirestore();

    //   const queryCollections = collection(db, "productos");
    //   getDocs(queryCollections)
    //     .then((resp) =>
    //       setProductos(
    //         resp.docs.map((producto) => ({
    //           id: producto.id,
    //           ...producto.data(),
    //         }))
    //       )
    //     )
    //     .catch((err) => console.error(err))
    //     .finally(() => setLoading(false));
    // }
  }, []);

  console.log(productos);

  return (
    <div className="ItemDetailContainer-contenedor">
      <ItemDetail productos={productos} />;
    </div>
  );
};

export default ItemDetailContainer;
