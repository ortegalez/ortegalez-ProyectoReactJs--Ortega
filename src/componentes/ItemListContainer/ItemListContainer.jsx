import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../utils/gFetch";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import "../ItemListContainer/ItemListContainer.css";

export const ItemListContainer = ({ greeting, subGreeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    // Filtrar por categoria
    if (idCategoria) {
      gFetch()
        .then((res) => {
          setProductos(
            res.filter((producto) => producto.categoria == idCategoria)
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((res) => {
          setProductos(res);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return loading ? (
    <h2 className="cargando">Cargando productos...</h2>
  ) : (
    <div className="listContainer">{<ItemList productos={productos} />}</div>
  );
};

// Para renombrar el localHost escribo la linea:
// npm run dev -- --port 3000

export default ItemListContainer;
