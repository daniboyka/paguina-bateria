import { useRoutes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./Componentes/NavBar";
import { Home } from "./pague/Home";
import "./App.css";
import Error404 from "./pague/Error";
import { Productos } from "./pague/productos";
import { Sucursales } from "./pague/Sucursales";
import { Servicios } from "./pague/Servicios";
import Footer from "./Componentes/Footer";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/error404", element: <Error404/> },
    { path: "/servicios", element: <Servicios/> },
    { path: "/productos", element: <Productos/> },
    { path: "/sucursales", element: <Sucursales/> },
  
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
