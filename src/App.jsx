import { useRoutes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./Componentes/NavBar";
import { Home } from "./pague/Home";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
