import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CartContainer from "./componentes/CartContainer/CartContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Footer from "./componentes/Footer/Footer";
import { CartContextProvider } from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="#" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
