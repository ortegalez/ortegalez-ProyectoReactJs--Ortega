import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../utils/gFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (idProducto) {
      gFetch()
        .then((res) => {
          setProductos(res.find((producto) => producto.id == idProducto));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, []);

  return <ItemDetail productos={productos} />;
};

export default ItemDetailContainer;
