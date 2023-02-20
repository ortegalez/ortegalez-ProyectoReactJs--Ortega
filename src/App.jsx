// Libreria de donde importamos cosas, arriba
import NavBar from "./componentes/NavBar/NavBar";

// Librias creadas por nosotros, al medio
import CartContainer from "./componentes/CartContainer/CartContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Librerias de estilo, al ultimo
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componentes/Footer/Footer";
import { CartContextProvider } from "./context/CartContext";

function App(props) {
  const greeting = "Bienvenido a Desiree Sex Shop";
  const subGreeting = "Sitio en construcción";

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={greeting}
                subGreeting={subGreeting}
              />
            }
          />
          <Route
            path="/categoria/:idCategoria"
            element={
              <ItemListContainer
                greeting={greeting}
                subGreeting={subGreeting}
              />
            }
          />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="#" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        {/* <ItemCount /> */}
      </CartContextProvider>
    </BrowserRouter>

    // BrowserRouter me permite usar todos los componentes dentro de este contexto
  );
}

export default App;
