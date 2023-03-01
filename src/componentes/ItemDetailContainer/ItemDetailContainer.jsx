import { useState } from "react";
import { useEffect } from "react";
// import { gFetch } from "../../utils/gFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// import {
//   getFirestore,
//   getDoc,
//   doc,
//   // collection,
//   // where,
//   // orderBy,
//   // query,
// } from "firebase/firestore";
import "../ItemDetailContainer/ItemDetailContainer.css";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState({});

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // _____________________________ Trae productos de archivo gFechet__________________________
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

  // ___________________________ Usando el codigo del profesor __________________________
  // Para traer un producto en especifico segun el id del producto:
  useEffect(() => {
    const db = getFirestore();
    const query = doc(db, "productos", idProducto);
    getDoc(query)
      .then((resp) => setProductos({ id: resp.id, ...resp.data() }))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="ItemDetailContainer-contenedor">
      <ItemDetail productos={productos} />;
    </div>
  );
};

export default ItemDetailContainer;
