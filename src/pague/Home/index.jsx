import { Carrusel } from "../../Componentes/CarruselComun/Carrusel";
import { Sellos } from "../../Componentes/Sellos";
import bateria2 from "../../utiles/IMG/baterias/bateria_1.jpg";
import bateria1 from "../../utiles/IMG/baterias/bateria_2.jpg";
import bateria3 from "../../utiles/IMG/baterias/bateria_3.jpg";
import bateria4 from "../../utiles/IMG/baterias/bateria_4.jpg";

export const Home = () => {
  const images = [bateria1, bateria2, bateria3, bateria4];

  return (
    
    <div className="bg-indigo-600 w-full">       
      <Carrusel images={images} autoplay={true} showButtons={true} />
      <Sellos/>
    </div>
    
  );
};
