import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productos }) => {
  const { agregarCarrito, cartList } = useCartContext();

  const onAdd = (cant) => {
    console.log(cant);

    agregarCarrito({ ...productos, cantidad: cant });
  };

  return (
    <div className="mt-2 d-flex justify-content-center ">
      <div className="card w-75 d-flex flex-row ">
        <div className="w-100">
          <img src={productos.imagen} alt="foto" className="w-100" />
        </div>
        <div className="w-100 p-2">
          <h4 className="card-title">{productos.nombre}</h4>
          <h5 className="card-subtitle mb-2 text-muted">Descripción:</h5>
          <p className="card-text">{productos.detalle}.</p>
          <h5 className="card-subtitle mb-2 text-muted">Categoria:</h5>
          <p className="card-text">{productos.categoria}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-subtitle mb-2 text-body-tertiary">
              Precio: ${productos.precio}
            </h5>
            {/* <button className="btn btn-outline-primary ">
              Agregar al carritto
            </button> */}
          </div>
          <ItemCount initial={1} stock={30} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
