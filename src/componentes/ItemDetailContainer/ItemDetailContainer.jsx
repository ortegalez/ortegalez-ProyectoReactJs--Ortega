import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

import "../ItemDetailContainer/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

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
