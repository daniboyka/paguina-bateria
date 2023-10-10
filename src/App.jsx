import { Carrusel } from "./Componentes/Carrusel"
import bateria1 from "./utiles/IMG/baterias/cc.jpg";
import bateria2 from "./utiles/IMG/baterias/bateria_1.png";
import bateria3 from "./utiles/IMG/baterias/bateria_3.jpg";


function App() {
  const images =[bateria1, bateria2, bateria3]

  return (
    <>
 <Carrusel images={images} autoplay={true} showButtons={false}/>
    </>
  )
}

export default App
