import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";

import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

import "../ItemListContainer/ItemListContainer.css";

export const ItemListContainer = () => {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryCollections = collection(db, "productos");

    const queryFilter = idCategoria
      ? query(queryCollections, where("categoria", "==", idCategoria))
      : queryCollections;

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
  }, [idCategoria]);

  return loading ? (
    <Loader />
  ) : (
    <div className="listContainer">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
