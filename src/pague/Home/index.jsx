import { Carrusel } from "../../Componentes/CarruselComun/Carrusel";
import bateria2 from "../../utiles/IMG/baterias/bateria_1.png";
import bateria1 from "../../utiles/IMG/baterias/bateria_2.png";
import bateria3 from "../../utiles/IMG/baterias/bateria_3.jpg";

export const Home = () => {
  const images = [bateria1, bateria2, bateria3];

  return (
    
    <div className="bg-indigo-600 w-full h-screen">
    <h1>HOME</h1>
      <Carrusel images={images} autoplay={true} showButtons={true} />
    </div>
    
  );
};
